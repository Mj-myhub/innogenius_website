import React from 'react';
import Link from 'next/link';
import svgLogo from './Logo';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <div dangerouslySetInnerHTML={{ __html: svgLogo }} />
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/features" className="text-gray-700 hover:text-indigo-600 font-medium">
              Features
            </Link>
            <Link href="/pricing" className="text-gray-700 hover:text-indigo-600 font-medium">
              Pricing
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-indigo-600 font-medium">
              About
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-indigo-600 font-medium">
              Contact
            </Link>
          </nav>
          
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/login" className="text-gray-700 hover:text-indigo-600 font-medium">
              Log in
            </Link>
            <Link href="/signup" className="bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors">
              Sign up
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4 pb-4">
              <Link href="/features" className="text-gray-700 hover:text-indigo-600 font-medium">
                Features
              </Link>
              <Link href="/pricing" className="text-gray-700 hover:text-indigo-600 font-medium">
                Pricing
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-indigo-600 font-medium">
                About
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-indigo-600 font-medium">
                Contact
              </Link>
              <div className="pt-2 border-t border-gray-100 flex flex-col space-y-2">
                <Link href="/login" className="text-gray-700 hover:text-indigo-600 font-medium">
                  Log in
                </Link>
                <Link href="/signup" className="bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors text-center">
                  Sign up
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
