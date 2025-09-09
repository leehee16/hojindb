import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import type { PostData } from './posts';

export interface Series {
  slug: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  status: 'ongoing' | 'completed' | 'planned';
  order: number;
  thumbnail?: string;
  createdAt: string;
  updatedAt: string;
  posts: string[]; // post slugs
  plannedPosts?: string[];
  content: string; // Series introduction content
}

const seriesDirectory = path.join(process.cwd(), 'content/series');

export function getAllSeries(): Series[] {
  // Create series directory if it doesn't exist
  if (!fs.existsSync(seriesDirectory)) {
    fs.mkdirSync(seriesDirectory, { recursive: true });
    return [];
  }

  // Get series files
  const seriesFiles = fs.readdirSync(seriesDirectory);
  
  const allSeries = seriesFiles
    .filter(file => file.endsWith('.md'))
    .map((fileName) => {
      // Read markdown file
      const fullPath = path.join(seriesDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      
      // Use gray-matter to parse the series metadata and content
      const { data, content } = matter(fileContents);
      
      // Extract slug from filename
      const slug = fileName.replace(/\.md$/, '');
      
      return {
        slug,
        title: data.title || '',
        description: data.description || '',
        category: data.category || '',
        tags: data.tags || [],
        status: data.status || 'planned',
        order: data.order || 0,
        thumbnail: data.thumbnail,
        createdAt: data.createdAt || '',
        updatedAt: data.updatedAt || '',
        posts: data.posts || [],
        plannedPosts: data.plannedPosts || [],
        content,
      } as Series;
    })
    // Sort series by order
    .sort((a, b) => a.order - b.order);

  return allSeries;
}

export function getSeriesBySlug(slug: string): Series | null {
  const allSeries = getAllSeries();
  return allSeries.find(series => series.slug === slug) || null;
}

export function getSeriesByPost(postSlug: string): Series | null {
  const allSeries = getAllSeries();
  return allSeries.find(series => 
    series.posts.includes(postSlug)
  ) || null;
}

// Get posts that belong to a series
export function getPostsInSeries(seriesSlug: string, allPosts: PostData[]): PostData[] {
  const series = getSeriesBySlug(seriesSlug);
  if (!series) return [];
  
  // Filter and sort posts according to series order
  const postsInSeries = series.posts
    .map(postSlug => allPosts.find(post => post.slug === postSlug) as PostData)
    .filter(Boolean);
  
  return postsInSeries;
}

// Get next and previous posts in a series
export function getSeriesNavigation(seriesSlug: string, currentPostSlug: string) {
  const series = getSeriesBySlug(seriesSlug);
  if (!series) return { prev: null, next: null };
  
  const currentIndex = series.posts.indexOf(currentPostSlug);
  if (currentIndex === -1) return { prev: null, next: null };
  
  const prevPostSlug = currentIndex > 0 ? series.posts[currentIndex - 1] : null;
  const nextPostSlug = currentIndex < series.posts.length - 1 ? series.posts[currentIndex + 1] : null;
  
  return {
    prev: prevPostSlug,
    next: nextPostSlug,
    currentIndex: currentIndex + 1,
    totalPosts: series.posts.length,
    progress: Math.round(((currentIndex + 1) / series.posts.length) * 100)
  };
}

// Get series with post count
export function getSeriesWithPostCount(allPosts: PostData[]): (Series & { postCount: number })[] {
  const allSeries = getAllSeries();
  
  return allSeries.map(series => {
    const postsInSeries = getPostsInSeries(series.slug, allPosts);
    return {
      ...series,
      postCount: postsInSeries.length
    };
  });
}