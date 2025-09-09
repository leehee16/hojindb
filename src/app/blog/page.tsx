import Link from 'next/link'
import { getAllPosts } from '@/lib/posts'
import { blogCategories, getCategoriesWithCount } from '@/config/categories'
import { getTagsWithCount } from '@/config/tags'

export default function BlogPage() {
  const posts = getAllPosts()
  const categoriesWithCount = getCategoriesWithCount(posts)
  const tagCounts = getTagsWithCount(posts)

  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Blog</h1>
      
      {/* Categories Navigation */}
      <section className="mb-8">
        <div className="flex flex-wrap gap-2">
          {categoriesWithCount.map((category, index) => (
            <Link
              key={category.name}
              href={category.href}
              className={
                index === 0
                  ? "bg-blue-600 text-white px-3 py-1.5 rounded-full text-sm font-medium hover:bg-blue-700 transition-colors"
                  : "bg-gray-100 text-gray-700 px-3 py-1.5 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors"
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
      
      {posts.length === 0 ? (
        <p className="text-gray-600">아직 작성된 글이 없습니다.</p>
      ) : (
        <div className="space-y-6 pb-8">
          {posts.map((post) => (
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
                {post.category && (
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs ml-3">
                    {post.category}
                  </span>
                )}
              </p>
              
              <Link href={`/blog/${post.slug}`} className="block group">
                <h2 className="post-title text-xl md:text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors leading-tight">
                  {post.title}
                </h2>
                <p className="post-excerpt text-gray-600 text-base leading-relaxed mb-4">
                  {post.excerpt}
                </p>
              </Link>
              
              {post.tags && post.tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-sm hover:bg-gray-200 transition-colors"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}