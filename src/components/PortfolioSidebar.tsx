'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function PortfolioSidebar() {
  const [headerHeight, setHeaderHeight] = useState(0)

  useEffect(() => {
    const updateHeaderHeight = () => {
      const header = document.querySelector('header')
      if (header) {
        setHeaderHeight(header.offsetHeight)
      }
    }

    updateHeaderHeight()
    window.addEventListener('resize', updateHeaderHeight)
    
    return () => window.removeEventListener('resize', updateHeaderHeight)
  }, [])

  return (
    <aside className="w-80 hidden lg:block">
      <div 
        className="bg-neutral-50 p-6 sticky"
        style={{ top: `${headerHeight}px` }}
      >
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-900 mb-3">
            안녕하세요. 이호진입니다.
          </h2>
          <p className="text-gray-700 text-sm leading-relaxed mb-4">
            데이터를 통해 문제를 해결하고 효율성을 높이는 것에 관심이 많습니다.
          </p>
          <div className="text-center">
            <img 
              src="/profile.JPG" 
              alt="이호진" 
              className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-gray-100"
            />
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-6">
          <Link 
            href="/portfolio/about"
            className="block bg-[#3182F6] text-white px-4 py-3 rounded-lg font-medium hover:bg-[#1B64DA] transition-colors text-center mb-4"
          >
            <span className="tossface">🧾</span> 이력서 보기
          </Link>
          
          <div className="space-y-2 text-sm text-gray-600">
            <div className="flex items-center gap-3">
              <span className="tossface text-base">📧</span>
              <span>hojlgg4@gmail.com</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="tossface text-base">📱</span>
              <span>010-6273-9408</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="tossface text-base">🔗</span>
              <a href="https://github.com/leehee16" className="text-blue-600 hover:text-blue-700">
                github.com/leehee16
              </a>
            </div>
          </div>
        </div>
      </div>
    </aside>
  )
}