import Link from 'next/link'
import { getAllPosts } from '@/lib/posts'

export default function Home() {
  const posts = getAllPosts()
  const recentPosts = posts.slice(0, 2)

  return (
    <div className="container mx-auto px-4 py-16 max-w-7xl">
      {/* Tags Navigation */}
      <section className="mb-12">
        <div className="flex flex-wrap gap-3 justify-center">
          <Link
            href="/blog"
            className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-700 transition-colors"
          >
            전체
          </Link>
          <Link
            href="/tags/development"
            className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors"
          >
            #개발
          </Link>
          <Link
            href="/tags/react"
            className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors"
          >
            #React
          </Link>
          <Link
            href="/tags/nextjs"
            className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors"
          >
            #Next.js
          </Link>
          <Link
            href="/tags/typescript"
            className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors"
          >
            #TypeScript
          </Link>
          <Link
            href="/tags/tech"
            className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors"
          >
            #기술
          </Link>
          <Link
            href="/tags/life"
            className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors"
          >
            #일상
          </Link>
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
            <h3 className="text-lg font-bold text-gray-900 mb-4">📚 시리즈</h3>
            
            <div className="space-y-4">
              <div className="pb-3 border-b border-gray-100">
                <Link href="/series/react-mastery" className="block group">
                  <h4 className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                    React 마스터하기
                  </h4>
                  <p className="text-sm text-gray-500 mt-1">
                    React의 기초부터 고급 패턴까지
                  </p>
                  <div className="text-xs text-gray-400 mt-2">
                    5편의 글
                  </div>
                </Link>
              </div>
              
              <div className="pb-3 border-b border-gray-100">
                <Link href="/series/nextjs-guide" className="block group">
                  <h4 className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                    Next.js 완전정복
                  </h4>
                  <p className="text-sm text-gray-500 mt-1">
                    Next.js 프로젝트 실전 가이드
                  </p>
                  <div className="text-xs text-gray-400 mt-2">
                    3편의 글
                  </div>
                </Link>
              </div>
              
              <div className="pb-3 border-b border-gray-100">
                <Link href="/series/typescript-deep" className="block group">
                  <h4 className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                    TypeScript 깊게 파기
                  </h4>
                  <p className="text-sm text-gray-500 mt-1">
                    타입스크립트 고급 활용법
                  </p>
                  <div className="text-xs text-gray-400 mt-2">
                    4편의 글
                  </div>
                </Link>
              </div>
              
              <div className="pb-3">
                <Link href="/series/dev-career" className="block group">
                  <h4 className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                    개발자 커리어
                  </h4>
                  <p className="text-sm text-gray-500 mt-1">
                    개발자로 성장하는 이야기
                  </p>
                  <div className="text-xs text-gray-400 mt-2">
                    진행중
                  </div>
                </Link>
              </div>
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
  );
}
