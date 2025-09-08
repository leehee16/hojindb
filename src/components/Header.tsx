import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-neutral-50 sticky top-0 z-50">
      <div className="flex justify-between items-center px-16 py-4">
        {/* Logo and Title */}
        <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
          {/* SVG Logo */}
          <img 
            src="/logo.svg" 
            alt="Logo" 
            className="w-8 h-8"
          />
          <span className="text-xl font-semibold text-gray-900">Hojin</span>
        </Link>

        {/* Navigation */}
        <nav className="flex items-center space-x-8">
          <Link 
            href="/about" 
            className="text-gray-600 hover:text-gray-900 transition-colors font-medium"
          >
            About
          </Link>
          <Link 
            href="/blog" 
            className="text-gray-600 hover:text-gray-900 transition-colors font-medium"
          >
            Blog
          </Link>
          <Link 
            href="/portfolio" 
            className="text-gray-600 hover:text-gray-900 transition-colors font-medium"
          >
            Portfolio
          </Link>
        </nav>
      </div>
    </header>
  )
}