import Link from 'next/link'

export default function PortfolioHeader() {
  return (
    <header className="bg-neutral-50 sticky top-0 z-50">
      <div className="flex justify-center items-center gap-4 py-6">
        <Link href="/portfolio" className="hover:opacity-80 transition-opacity">
          <img 
            src="/logo.svg" 
            alt="Logo" 
            className="w-12 h-12"
          />
        </Link>
        <div className="w-px h-8 bg-gray-300"></div>
        <Link href="/portfolio" className="hover:opacity-80 transition-opacity">
          <img 
            src="/tosslogo.png" 
            alt="Toss Logo" 
            className="w-12 h-12 object-contain"
          />
        </Link>
      </div>
    </header>
  )
}