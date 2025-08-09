
'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useCart } from './CartProvider';
import CartSidebar from './CartSidebar';

export default function Header() {
  const { cart } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check login status on component mount and when localStorage changes
  useEffect(() => {
    const checkLoginStatus = () => {
      if (typeof window !== 'undefined') {
        const userToken = localStorage.getItem('userToken');
        const isAuthenticated = localStorage.getItem('isAuthenticated');
        setIsLoggedIn(!!(userToken || isAuthenticated));
      }
    };

    checkLoginStatus();

    // Listen for storage changes (when user logs in/out in another tab)
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'userToken' || e.key === 'isAuthenticated') {
        checkLoginStatus();
      }
    };

    // Custom event listener for login state changes
    const handleAuthChange = () => {
      checkLoginStatus();
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('storage', handleStorageChange);
      window.addEventListener('authStateChanged', handleAuthChange);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('storage', handleStorageChange);
        window.removeEventListener('authStateChanged', handleAuthChange);
      }
    };
  }, []);

  return (
    <>
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center shadow-lg">
                    <div className="w-7 h-7 flex items-center justify-center">
                      <i className="ri-plant-fill text-white text-xl"></i>
                    </div>
                  </div>
                  <div className="absolute -top-1 -right-1 w-5 h-5 bg-yellow-400 rounded-full flex items-center justify-center">
                    <div className="w-2.5 h-2.5 bg-orange-600 rounded-full"></div>
                  </div>
                </div>
                <span className="text-3xl font-['Pacifico'] text-orange-500 italic font-bold">LaRosa Hub</span>
              </Link>
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-orange-500 whitespace-nowrap cursor-pointer">
                Home
              </Link>
              <Link href="/products" className="text-gray-700 hover:text-orange-500 whitespace-nowrap cursor-pointer">
                Products
              </Link>
              <Link href="/categories" className="text-gray-700 hover:text-orange-500 whitespace-nowrap cursor-pointer">
                Categories
              </Link>
              <Link href="/deals" className="text-gray-700 hover:text-orange-500 whitespace-nowrap cursor-pointer">
                Deals
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-orange-500 cursor-pointer">
                About
              </Link>

              {!isLoggedIn && (
                <>
                  <Link href="/register" className="text-gray-700 hover:text-orange-500 whitespace-nowrap cursor-pointer">
                    Register
                  </Link>
                  <Link href="/login" className="text-gray-700 hover:text-orange-500 whitespace-nowrap cursor-pointer">
                    Login
                  </Link>
                </>
              )}

              {isLoggedIn && (
                <Link href="/logout" className="text-gray-700 hover:text-orange-500 whitespace-nowrap cursor-pointer">
                  Logout
                </Link>
              )}
            </nav>

            <div className="flex items-center space-x-4">
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="w-6 h-6 flex items-center justify-center text-gray-700 hover:text-orange-500 cursor-pointer"
              >
                <i className="ri-search-line"></i>
              </button>

              <Link href="/wishlist" className="w-6 h-6 flex items-center justify-center text-gray-700 hover:text-orange-500 cursor-pointer">
                <i className="ri-heart-line"></i>
              </Link>

              <div className="w-6 h-6 flex items-center justify-center text-gray-700 hover:text-orange-500 cursor-pointer">
                <i className="ri-user-line"></i>
              </div>

              <button
                onClick={() => setIsCartOpen(true)}
                className="w-6 h-6 flex items-center justify-center relative cursor-pointer"
              >
                <i className="ri-shopping-cart-line text-xl text-gray-600"></i>
                {cart.itemCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cart.itemCount}
                  </span>
                )}
              </button>

              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden w-6 h-6 flex items-center justify-center text-gray-700 hover:text-orange-500 cursor-pointer"
              >
                <i className="ri-menu-line"></i>
              </button>
            </div>
          </div>
        </div>
      </header>

      {isSearchOpen && (
        <div className="py-4 border-t border-gray-200">
          <div className="relative">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm"
            />
            <i className="ri-search-line absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
          </div>
        </div>
      )}

      {isMenuOpen && (
        <div className="md:hidden py-4 border-t border-gray-200">
          <nav className="flex flex-col space-y-4">
            <Link href="/" className="text-gray-700 hover:text-orange-500 cursor-pointer">
              Home
            </Link>
            <Link href="/products" className="text-gray-700 hover:text-orange-500 cursor-pointer">
              Products
            </Link>
            <Link href="/categories" className="text-gray-700 hover:text-orange-500 cursor-pointer">
              Categories
            </Link>
            <Link href="/deals" className="text-gray-700 hover:text-orange-500 cursor-pointer">
              Deals
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-orange-500 cursor-pointer">
              About
            </Link>

            {!isLoggedIn && (
              <>
                <Link href="/register" className="text-gray-700 hover:text-orange-500 cursor-pointer">
                  Register
                </Link>
                <Link href="/login" className="text-gray-700 hover:text-orange-500 cursor-pointer">
                  Login
                </Link>
              </>
            )}

            {isLoggedIn && (
              <Link href="/logout" className="text-gray-700 hover:text-orange-500 cursor-pointer">
                Logout
              </Link>
            )}
          </nav>
        </div>
      )}

      <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
}
