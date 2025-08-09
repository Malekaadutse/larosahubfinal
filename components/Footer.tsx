
'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center mb-4">
              <span className="text-2xl font-['Pacifico'] text-orange-400 italic font-bold">LaRosa Hub</span>
            </Link>
            <p className="text-gray-400 mb-4">
              Your one-stop destination for quality products at amazing prices. Shop with confidence and enjoy fast, reliable delivery.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-8 h-8 flex items-center justify-center bg-gray-800 rounded-full hover:bg-orange-500 cursor-pointer">
                <i className="ri-facebook-fill"></i>
              </a>
              <a href="#" className="w-8 h-8 flex items-center justify-center bg-gray-800 rounded-full hover:bg-orange-500 cursor-pointer">
                <i className="ri-twitter-fill"></i>
              </a>
              <a href="#" className="w-8 h-8 flex items-center justify-center bg-gray-800 rounded-full hover:bg-orange-500 cursor-pointer">
                <i className="ri-instagram-fill"></i>
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/products" className="text-gray-400 hover:text-white cursor-pointer">All Products</Link></li>
              <li><Link href="/categories" className="text-gray-400 hover:text-white cursor-pointer">Categories</Link></li>
              <li><Link href="/deals" className="text-gray-400 hover:text-white cursor-pointer">Special Deals</Link></li>
              <li><Link href="/new-arrivals" className="text-gray-400 hover:text-white cursor-pointer">New Arrivals</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li><Link href="/contact" className="text-gray-400 hover:text-white cursor-pointer">Contact Us</Link></li>
              <li><Link href="/shipping" className="text-gray-400 hover:text-white cursor-pointer">Shipping Info</Link></li>
              <li><Link href="/returns" className="text-gray-400 hover:text-white cursor-pointer">Returns</Link></li>
              <li><Link href="/faq" className="text-gray-400 hover:text-white cursor-pointer">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">Subscribe to get updates on new products and exclusive deals.</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm"
              />
              <button className="px-4 py-2 bg-orange-500 text-white rounded-r-lg hover:bg-orange-600 whitespace-nowrap cursor-pointer">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">© 2024 LaRosa Hub. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-400 hover:text-white cursor-pointer">Privacy Policy</Link>
              <Link href="/terms" className="text-gray-400 hover:text-white cursor-pointer">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
