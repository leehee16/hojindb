import type { PostData } from '@/lib/posts';

export interface Category {
  name: string;
  label: string;
  href: string;
  count?: number;
}

// 블로그 카테고리 (큰 분류)
export const blogCategories: Category[] = [
  {
    name: 'all',
    label: '전체',
    href: '/blog',
  },
  {
    name: 'data',
    label: '데이터',
    href: '/categories/data',
  },
  {
    name: 'development',
    label: '개발',
    href: '/categories/development',
  },
  {
    name: 'tech',
    label: '기술',
    href: '/categories/tech',
  },
  {
    name: 'life',
    label: '일상',
    href: '/categories/life',
  },
];

// 카테고리별 포스트 수를 계산하는 함수
export function getCategoriesWithCount(posts: PostData[]): Category[] {
  const categoryCounts: Record<string, number> = {};
  
  // 모든 포스트의 카테고리를 집계
  posts.forEach(post => {
    if (post.category) {
      categoryCounts[post.category] = (categoryCounts[post.category] || 0) + 1;
    }
  });

  // 카테고리 정보에 카운트 추가
  return blogCategories.map(category => ({
    ...category,
    count: category.name === 'all' ? posts.length : (categoryCounts[category.name] || 0)
  }));
}