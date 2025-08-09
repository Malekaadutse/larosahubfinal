
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function AdminLogin() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Add a small delay to simulate authentication
    await new Promise(resolve => setTimeout(resolve, 500));

    // Check credentials (case-sensitive and exact match)
    const validEmail = 'admin@larosahub.com';
    const validPassword = 'admin123';
    
    // Trim whitespace from inputs to handle common user errors
    const enteredEmail = formData.email.trim();
    const enteredPassword = formData.password.trim();
    
    if (enteredEmail === validEmail && enteredPassword === validPassword) {
      localStorage.setItem('adminToken', 'admin_authenticated');
      router.push('/admin');
    } else {
      setError('Invalid email or password. Please check your credentials. Password should be "admin123" (no spaces).');
    }

    setIsLoading(false);
  };

  // Auto-fill demo credentials
  const fillDemoCredentials = () => {
    setFormData({
      email: 'admin@larosahub.com',
      password: 'admin123'
    });
    setError('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <Link href="/" className="inline-block mb-8">
            <div className="flex items-center justify-center space-x-3">
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full flex items-center justify-center shadow-lg">
                  <div className="w-9 h-9 flex items-center justify-center">
                    <i className="ri-plant-fill text-white text-2xl"></i>
                  </div>
                </div>
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                </div>
              </div>
              <span className="text-4xl font-[\'Pacifico\'] text-orange-500 italic font-bold">LaRosa Hub</span>
            </div>
          </Link>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Admin Portal</h2>
          <p className="text-gray-600">Sign in to access the admin dashboard</p>
        </div>

        <div className="bg-white shadow-xl rounded-2xl p-8">
          {error && (
            <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-600 text-sm">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm"
                placeholder="admin@larosahub.com"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                required
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm"
                placeholder="Enter your password"
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 px-4 rounded-lg hover:from-orange-600 hover:to-red-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition-all duration-200 font-medium cursor-pointer whitespace-nowrap disabled:opacity-50"
            >
              {isLoading ? (
                <div className="flex items-center justify-center space-x-2">
                  <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                  <span>Signing in...</span>
                </div>
              ) : (
                'Sign In'
              )}
            </button>
          </form>

          <div className="mt-6 text-center">
            <button
              onClick={fillDemoCredentials}
              className="text-xs text-orange-600 hover:text-orange-700 cursor-pointer bg-orange-50 px-3 py-1 rounded-full border border-orange-200"
            >
              Use Demo Credentials: admin@larosahub.com / admin123
            </button>
          </div>
        </div>

        <div className="text-center">
          <Link href="/" className="text-orange-500 hover:text-orange-600 text-sm cursor-pointer">
            ← Back to Main Site
          </Link>
        </div>
      </div>
    </div>
  );
}
