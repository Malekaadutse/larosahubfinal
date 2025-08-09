
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [loginStatus, setLoginStatus] = useState('');
  const router = useRouter();

  const validateEmail = (email: string) => {
    if (!email.trim()) {
      return 'Email is required';
    }
    if (!/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email)) {
      return 'Please enter a valid email address';
    }
    return '';
  };

  const validatePassword = (password: string) => {
    if (!password) {
      return 'Password is required';
    }
    if (password.length < 6) {
      return 'Password must be at least 6 characters';
    }
    return '';
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    setEmailError('');
    if (loginStatus) setLoginStatus('');
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPassword(value);
    setPasswordError('');
    if (loginStatus) setLoginStatus('');
  };

  const authenticateUser = async (email: string, password: string) => {
    await new Promise(resolve => setTimeout(resolve, 1500));

    let registeredAccounts: Array<{email: string, password: string}> = [];
    
    if (typeof window !== 'undefined') {
      registeredAccounts = JSON.parse(localStorage.getItem('registeredAccounts') || '[]');
    }

    const validCredentials = [
      { email: 'admin@larosahub.com', password: 'admin123' },
      { email: 'test@example.com', password: 'test123' },
      { email: 'user@larosahub.com', password: 'password123' }
    ];

    const isDemoValid = validCredentials.some(cred => 
      cred.email === email && cred.password === password
    );

    const isRegisteredValid = registeredAccounts.some(account => 
      account.email === email && account.password === password
    );

    if (isDemoValid || isRegisteredValid) {
      return { success: true, message: 'Welcome back! Login successful.' };
    } else {
      return { success: false, message: 'Invalid credentials. Please check your email and password.' };
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    const emailValidation = validateEmail(email);
    const passwordValidation = validatePassword(password);

    setEmailError(emailValidation);
    setPasswordError(passwordValidation);

    if (emailValidation || passwordValidation) {
      return;
    }

    setIsLoading(true);
    setLoginStatus('Signing you in...');

    try {
      const result = await authenticateUser(email, password);

      if (result.success) {
        setLoginStatus(result.message);

        if (typeof window !== 'undefined') {
          localStorage.setItem('isAuthenticated', 'true');
          localStorage.setItem('userToken', 'logged-in-' + Date.now());
          localStorage.setItem('userEmail', email);

          if (rememberMe) {
            localStorage.setItem('savedEmail', email);
          } else {
            localStorage.removeItem('savedEmail');
          }

          window.dispatchEvent(new Event('authStateChanged'));
        }

        setTimeout(() => {
          router.push('/');
        }, 2000);
      } else {
        setLoginStatus(result.message);
        setPassword('');
      }

    } catch (error) {
      setLoginStatus('Login failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedEmail = localStorage.getItem('savedEmail');
      if (savedEmail) {
        setEmail(savedEmail);
        setRememberMe(true);
      }
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="py-16 px-4">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Sign In</h1>
            <p className="text-gray-600">Welcome back to LaRosa Hub</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <form id="signin-form" onSubmit={handleLogin} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={handleEmailChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm ${
                    emailError ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Enter your email"
                />
                {emailError && (
                  <p className="text-red-500 text-sm mt-1">{emailError}</p>
                )}
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={password}
                  onChange={handlePasswordChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm ${
                    passwordError ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Enter your password"
                />
                {passwordError && (
                  <p className="text-red-500 text-sm mt-1">{passwordError}</p>
                )}
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="h-4 w-4 text-orange-500 border-gray-300 rounded focus:ring-orange-500 cursor-pointer"
                  />
                  <span className="ml-2 text-sm text-gray-700">Remember me</span>
                </label>

                <Link href="/forgot-password" className="text-sm text-orange-500 hover:text-orange-600 cursor-pointer">
                  Forgot password?
                </Link>
              </div>

              {loginStatus && (
                <div
                  className={`p-4 rounded-lg text-sm ${
                    loginStatus.includes('successful') || loginStatus.includes('Welcome')
                      ? 'bg-green-100 text-green-700 border border-green-200'
                      : loginStatus.includes('Signing you in')
                      ? 'bg-blue-100 text-blue-700 border border-blue-200'
                      : 'bg-red-100 text-red-700 border border-red-200'
                  }`}
                >
                  {loginStatus}
                </div>
              )}

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 font-semibold whitespace-nowrap cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {isLoading ? 'Signing In...' : 'Sign In'}
              </button>
            </form>

            <div className="mt-6">
              <div className="bg-blue-50 rounded-lg p-4 text-sm">
                <p className="font-medium text-blue-800 mb-2">Demo Accounts:</p>
                <div className="text-blue-700 space-y-1">
                  <p>• test@example.com / test123</p>
                  <p>• user@larosahub.com / password123</p>
                </div>
              </div>
            </div>

            <div className="mt-6 text-center">
              <p className="text-gray-600">
                Don't have an account?{' '}
                <Link href="/register" className="text-orange-500 hover:text-orange-600 font-medium cursor-pointer">
                  Create one here
                </Link>
              </p>
            </div>

            <div className="mt-8">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-3 bg-white text-gray-500">Or sign in with</span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <button
                  type="button"
                  className="w-full inline-flex justify-center items-center py-3 px-4 border border-gray-300 rounded-lg bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 cursor-pointer transition-colors"
                >
                  <div className="w-5 h-5 flex items-center justify-center mr-2">
                    <i className="ri-google-fill text-red-500"></i>
                  </div>
                  Google
                </button>

                <button
                  type="button"
                  className="w-full inline-flex justify-center items-center py-3 px-4 border border-gray-300 rounded-lg bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 cursor-pointer transition-colors"
                >
                  <div className="w-5 h-5 flex items-center justify-center mr-2">
                    <i className="ri-facebook-fill text-blue-600"></i>
                  </div>
                  Facebook
                </button>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-sm text-gray-500">
                Need help?{' '}
                <Link href="/contact" className="text-orange-500 hover:text-orange-600 cursor-pointer">
                  Contact Support
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
