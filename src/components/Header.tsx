import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-neutral-50 sticky top-0 z-50">
      <div className="flex justify-between items-center px-4 sm:px-8 lg:px-16 py-4">
        {/* Logo and Title */}
        <Link href="/" className="flex items-center space-x-2 sm:space-x-3 hover:opacity-80 transition-opacity">
          {/* SVG Logo */}
          <img 
            src="/logo.svg" 
            alt="Logo" 
            className="w-7 h-7 sm:w-8 sm:h-8"
          />
          <span className="text-lg sm:text-xl font-semibold text-gray-900">Hojin</span>
        </Link>

        {/* Navigation */}
        <nav className="flex items-center space-x-4 sm:space-x-6 lg:space-x-8">
          <Link 
            href="/about" 
            className="text-sm sm:text-base text-gray-600 hover:text-gray-900 transition-colors font-medium"
          >
            Resume
          </Link>
          <Link 
            href="/blog" 
            className="text-sm sm:text-base text-gray-600 hover:text-gray-900 transition-colors font-medium"
          >
            Stats
          </Link>
          <Link 
            href="/portfolio" 
            className="text-sm sm:text-base text-gray-600 hover:text-gray-900 transition-colors font-medium"
          >
            Portfolio
          </Link>
        </nav>
      </div>
    </header>
  )
}