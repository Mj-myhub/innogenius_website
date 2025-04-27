import React from 'react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-50 transition-opacity" 
        onClick={onClose}
      ></div>
      
      {/* Menu panel */}
      <div className="absolute inset-y-0 right-0 max-w-xs w-full bg-white shadow-xl transform transition-transform duration-300 ease-in-out">
        <div className="flex flex-col h-full">
          <div className="flex justify-between items-center p-4 border-b">
            <h2 className="text-lg font-semibold text-gray-900">Menu</h2>
            <button 
              onClick={onClose}
              className="p-2 rounded-md text-gray-500 hover:text-gray-700 hover:bg-gray-100"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          
          <nav className="flex-1 px-4 py-6 overflow-y-auto">
            <ul className="space-y-6">
              <li>
                <a 
                  href="/"
                  className="block text-base font-medium text-gray-900 hover:text-indigo-600"
                  onClick={onClose}
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="/features"
                  className="block text-base font-medium text-gray-900 hover:text-indigo-600"
                  onClick={onClose}
                >
                  Features
                </a>
              </li>
              <li>
                <a 
                  href="/pricing"
                  className="block text-base font-medium text-gray-900 hover:text-indigo-600"
                  onClick={onClose}
                >
                  Pricing
                </a>
              </li>
              <li>
                <a 
                  href="/dashboard"
                  className="block text-base font-medium text-gray-900 hover:text-indigo-600"
                  onClick={onClose}
                >
                  Dashboard
                </a>
              </li>
              <li>
                <a 
                  href="/contact"
                  className="block text-base font-medium text-gray-900 hover:text-indigo-600"
                  onClick={onClose}
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
          
          <div className="p-4 border-t">
            <a
              href="/signup"
              className="block w-full py-2 px-4 rounded-md shadow-sm text-center font-medium text-white bg-indigo-600 hover:bg-indigo-700"
              onClick={onClose}
            >
              Sign Up
            </a>
            <a
              href="/login"
              className="block w-full mt-3 py-2 px-4 rounded-md shadow-sm text-center font-medium text-indigo-600 bg-white border border-indigo-600 hover:bg-indigo-50"
              onClick={onClose}
            >
              Log In
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
