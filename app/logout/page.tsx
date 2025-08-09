
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function LogoutPage() {
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const [loggedOut, setLoggedOut] = useState(false);
  const router = useRouter();

  const handleLogout = () => {
    setIsLoggingOut(true);

    // Simulate logout process
    setTimeout(() => {
      // Clear any stored user data
      localStorage.removeItem('rememberEmail');
      localStorage.removeItem('userToken');
      localStorage.removeItem('isAuthenticated');
      localStorage.removeItem('userEmail');
      sessionStorage.clear();

      // Dispatch custom event to notify other components
      window.dispatchEvent(new Event('authStateChanged'));

      setIsLoggingOut(false);
      setLoggedOut(true);

      // Redirect to home page after 2 seconds
      setTimeout(() => {
        router.push('/');
      }, 2000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        <div className="bg-white border border-gray-200 rounded-2xl shadow-lg p-8 text-center">
          {!loggedOut ? (
            <>
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-logout-box-line text-3xl text-orange-600"></i>
              </div>

              <h1 className="text-2xl font-bold text-gray-900 mb-2">Sign Out</h1>
              <p className="text-gray-600 mb-8">
                Are you sure you want to sign out of your account?
              </p>

              {!isLoggingOut ? (
                <div className="space-y-4">
                  <button
                    onClick={handleLogout}
                    className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-4 rounded-xl transition-colors whitespace-nowrap cursor-pointer"
                  >
                    Yes, Sign Out
                  </button>

                  <Link
                    href="/"
                    className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-3 px-4 rounded-xl transition-colors whitespace-nowrap cursor-pointer block text-center"
                  >
                    Cancel
                  </Link>
                </div>
              ) : (
                <div className="flex items-center justify-center space-x-2 text-orange-600">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-orange-600"></div>
                  <span className="font-medium">Signing you out...</span>
                </div>
              )}
            </>
          ) : (
            <>
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-check-line text-3xl text-green-600"></i>
              </div>

              <h1 className="text-2xl font-bold text-gray-900 mb-2">Signed Out Successfully</h1>
              <p className="text-gray-600 mb-6">
                You have been successfully signed out. Thank you for using LaRosa Hub!
              </p>

              <div className="bg-gray-50 rounded-xl p-4 mb-6">
                <p className="text-sm text-gray-600">
                  Redirecting to home page in a moment...
                </p>
              </div>

              <div className="space-y-3">
                <Link
                  href="/login"
                  className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-4 rounded-xl transition-colors whitespace-nowrap cursor-pointer block text-center"
                >
                  Sign In Again
                </Link>

                <Link
                  href="/"
                  className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-3 px-4 rounded-xl transition-colors whitespace-nowrap cursor-pointer block text-center"
                >
                  Go to Home
                </Link>
              </div>
            </>
          )}
        </div>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500">
            Need help? <Link href="/about" className="text-orange-600 hover:text-orange-700 font-medium cursor-pointer">Contact Support</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
