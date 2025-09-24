import Link from 'next/link'
import Image from 'next/image'

export default function PortfolioHeader() {
  return (
    <header className="bg-neutral-50 sticky top-0 z-50">
      <div className="flex justify-center items-center gap-4 py-6">
        <Link href="/portfolio" className="hover:opacity-80 transition-opacity">
          <Image 
            src="/logo.svg" 
            alt="Logo" 
            width={48}
            height={48}
            className="w-12 h-12"
            priority
          />
        </Link>
        <div className="w-px h-8 bg-gray-300"></div>
        <Link href="/portfolio" className="hover:opacity-80 transition-opacity">
          <Image 
            src="/tosslogo.png" 
            alt="Toss Logo" 
            width={48}
            height={48}
            className="w-12 h-12 object-contain"
            priority
          />
        </Link>
      </div>
    </header>
  )
}
