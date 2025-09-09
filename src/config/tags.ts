import type { PostData } from '@/lib/posts';

export interface Tag {
  name: string;
  label: string;
}

// 블로그 태그 (세부 키워드)
export const blogTags: Tag[] = [
  { name: 'react', label: 'React' },
  { name: 'nextjs', label: 'Next.js' },
  { name: 'typescript', label: 'TypeScript' },
  { name: 'javascript', label: 'JavaScript' },
  { name: 'python', label: 'Python' },
  { name: 'machinelearning', label: 'Machine Learning' },
  { name: 'dataanalysis', label: 'Data Analysis' },
  { name: 'database', label: 'Database' },
  { name: 'api', label: 'API' },
  { name: 'frontend', label: 'Frontend' },
  { name: 'backend', label: 'Backend' },
  { name: 'devops', label: 'DevOps' },
  { name: 'git', label: 'Git' },
  { name: 'testing', label: 'Testing' },
  { name: 'performance', label: 'Performance' },
  { name: 'security', label: 'Security' },
  { name: 'design', label: 'Design' },
  { name: 'career', label: 'Career' },
  { name: 'productivity', label: 'Productivity' },
  { name: 'book', label: 'Book' },
];

// 태그별 포스트 수를 계산하는 함수
export function getTagsWithCount(posts: PostData[]): Record<string, number> {
  const tagCounts: Record<string, number> = {};
  
  posts.forEach(post => {
    if (post.tags && Array.isArray(post.tags)) {
      post.tags.forEach((tag: string) => {
        tagCounts[tag] = (tagCounts[tag] || 0) + 1;
      });
    }
  });

  return tagCounts;
}