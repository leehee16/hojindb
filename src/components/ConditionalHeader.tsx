'use client'

import { usePathname } from 'next/navigation'
import Header from './Header'

export default function ConditionalHeader() {
  const pathname = usePathname()
  
  // /portfolio 경로에서는 헤더 숨김
  if (pathname?.startsWith('/portfolio')) {
    return null
  }
  
  return <Header />
}