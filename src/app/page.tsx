import Link from 'next/link'
import { getAllPosts } from '@/lib/posts'
import { blogCategories, getCategoriesWithCount } from '@/config/categories'
import { getSeriesWithPostCount } from '@/lib/series'
import Banner from '@/components/banner/ui'

export default function Home() {
  const posts = getAllPosts()
  const recentPosts = posts.slice(0, 2)
  const categoriesWithCount = getCategoriesWithCount(posts)
  const seriesWithCount = getSeriesWithPostCount(posts)

  return (
    <>
      <Banner />
      <div className="container mx-auto px-4 py-16 max-w-7xl">
      {/* Categories Navigation */}
      <section className="mb-12">
        <div className="flex flex-wrap gap-3 justify-center">
          {categoriesWithCount.map((category, index) => (
            <Link
              key={category.name}
              href={category.href}
              className={
                index === 0
                  ? "bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-700 transition-colors"
                  : "bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors"
              }
            >
              {category.label}
              {category.count !== undefined && category.count > 0 && (
                <span className="ml-1 text-xs opacity-75">({category.count})</span>
              )}
            </Link>
          ))}
        </div>
      </section>

      <div className="flex gap-8">
        {/* Posts Section */}
        <section className="flex-1 max-w-2xl mx-auto">
        <div className="space-y-6 pb-8">
          {recentPosts.length > 0 ? (
            recentPosts.map((post) => (
              <div key={post.slug} className="post-item border-b border-gray-200 pb-6 last:border-b-0">
                <p className="post-author mb-3">
                  <time className="post-author-date text-gray-500 text-sm">
                    {new Date(post.date).toLocaleDateString('ko-KR', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </time>
                  <span className="post-author-name text-gray-700 text-sm ml-3">
                    Hojin
                  </span>
                </p>
                
                <Link href={`/blog/${post.slug}`} className="block group">
                  <h3 className="post-title text-xl md:text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors leading-tight">
                    {post.title}
                  </h3>
                  <p className="post-excerpt text-gray-600 text-base leading-relaxed">
                    {post.excerpt}
                  </p>
                </Link>
              </div>
            ))
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600 mb-4">아직 작성된 글이 없습니다.</p>
              <p className="text-sm text-gray-500">
                content/posts/ 폴더에 마크다운 파일을 추가해보세요.
              </p>
            </div>
          )}
        </div>
        </section>

        {/* Divider */}
        <div className="w-px bg-gray-300 hidden lg:block"></div>

        {/* Series Sidebar */}
        <aside className="w-80 hidden lg:block">
          <div className="bg-neutral-50 p-6 sticky top-24">
            <h3 className="text-lg font-bold text-gray-900 mb-4">시리즈</h3>
            
            <div className="space-y-4">
              {seriesWithCount.length > 0 ? (
                seriesWithCount.slice(0, 4).map((series, index) => (
                  <div 
                    key={series.slug} 
                    className={`pb-3 ${index < 3 ? 'border-b border-gray-100' : ''}`}
                  >
                    <Link href={`/series/${series.slug}`} className="block group">
                      <h4 className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                        {series.title}
                      </h4>
                      <p className="text-sm text-gray-500 mt-1">
                        {series.description}
                      </p>
                      <div className="text-xs text-gray-400 mt-2">
                        {series.status === 'ongoing' && <span className="tossface">🔄 진행중</span>} 
                        {series.status === 'completed' && <span className="tossface">✅ 완료</span>}
                        {series.status === 'planned' && <span className="tossface">📅 계획중</span>}
                        {series.postCount > 0 && ` · ${series.postCount}편의 글`}
                      </div>
                    </Link>
                  </div>
                ))
              ) : (
                <p className="text-sm text-gray-500">시리즈 준비중...</p>
              )}
            </div>
            
            <div className="mt-6 pt-4 border-t border-gray-100">
              <Link 
                href="/series" 
                className="text-sm text-blue-600 hover:text-blue-800 font-medium"
              >
                모든 시리즈 보기 →
              </Link>
            </div>
          </div>
        </aside>
      </div>
      </div>
    </>
  );
}
