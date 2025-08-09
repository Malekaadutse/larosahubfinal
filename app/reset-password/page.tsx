'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { createClient } from '@supabase/supabase-js';
import { Suspense } from 'react';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

function ResetPasswordContent() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [resetStatus, setResetStatus] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const supabase = createClient(supabaseUrl, supabaseAnonKey);

  useEffect(() => {
    const access_token = searchParams.get('access_token');
    const refresh_token = searchParams.get('refresh_token');

    if (access_token && refresh_token) {
      supabase.auth.setSession({
        access_token,
        refresh_token,
      });
    }
  }, [searchParams, supabase.auth]);

  const validatePassword = (password) => {
    if (!password) return 'Password is required';
    if (password.length < 6) return 'Password must be at least 6 characters';
    return '';
  };

  const validateConfirmPassword = (confirmPassword, password) => {
    if (!confirmPassword) return 'Please confirm your password';
    if (confirmPassword !== password) return 'Passwords do not match';
    return '';
  };

  const handleInputChange = (field, value) => {
    if (field === 'password') {
      setPassword(value);
      setErrors(prev => ({ ...prev, password: '' }));
    } else {
      setConfirmPassword(value);
      setErrors(prev => ({ ...prev, confirmPassword: '' }));
    }
    if (resetStatus) setResetStatus('');
  };

  const handlePasswordReset = async (e) => {
    e.preventDefault();

    const passwordError = validatePassword(password);
    const confirmPasswordError = validateConfirmPassword(confirmPassword, password);

    setErrors({
      password: passwordError,
      confirmPassword: confirmPasswordError,
    });

    if (passwordError || confirmPasswordError) {
      return;
    }

    setIsLoading(true);
    setResetStatus('Updating your password...');

    try {
      const { error } = await supabase.auth.updateUser({
        password: password
      });

      if (error) {
        throw error;
      }

      setResetStatus('Password updated successfully!');
      setIsSuccess(true);

      setTimeout(() => {
        router.push('/login');
      }, 2000);

    } catch (error) {
      console.error('Password update error:', error);
      setResetStatus('Failed to update password. Please try again or request a new reset link.');
    } finally {
      setIsLoading(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />

        <div className="py-16 px-4">
          <div className="max-w-md mx-auto">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-check-line text-2xl text-green-600"></i>
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Password Updated!</h1>
              <p className="text-gray-600">Your password has been successfully updated.</p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="text-center space-y-6">
                <div className="bg-green-50 rounded-lg p-4">
                  <p className="text-green-800 font-medium">
                    Redirecting you to sign in page...
                  </p>
                </div>

                <Link href="/login" className="block w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 font-semibold whitespace-nowrap cursor-pointer transition-colors">
                  Go to Sign In
                </Link>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="py-16 px-4">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-key-line text-2xl text-orange-600"></i>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Reset Your Password</h1>
            <p className="text-gray-600">Enter your new password below</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <form onSubmit={handlePasswordReset} className="space-y-6">
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                  New Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => handleInputChange('password', e.target.value)}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm ${
                    errors.password ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Enter your new password"
                />
                {errors.password && (
                  <p className="text-red-500 text-sm mt-1">{errors.password}</p>
                )}
              </div>

              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
                  Confirm New Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm ${
                    errors.confirmPassword ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Confirm your new password"
                />
                {errors.confirmPassword && (
                  <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>
                )}
              </div>

              {resetStatus && (
                <div
                  className={`p-4 rounded-lg text-sm ${
                    resetStatus.includes('successfully')
                      ? 'bg-green-100 text-green-700 border border-green-200'
                      : resetStatus.includes('Updating')
                      ? 'bg-blue-100 text-blue-700 border border-blue-200'
                      : 'bg-red-100 text-red-700 border border-red-200'
                  }`}
                >
                  {resetStatus}
                </div>
              )}

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 font-semibold whitespace-nowrap cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {isLoading ? 'Updating...' : 'Update Password'}
              </button>
            </form>

            <div className="mt-6">
              <div className="bg-blue-50 rounded-lg p-4">
                <div className="flex items-start">
                  <div className="w-5 h-5 flex items-center justify-center mr-3 mt-0.5">
                    <i className="ri-information-line text-blue-600"></i>
                  </div>
                  <div className="text-sm text-blue-800">
                    <p className="font-medium mb-1">Password Requirements:</p>
                    <ul className="space-y-1">
                      <li>• At least 6 characters long</li>
                      <li>• Must match confirmation</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default function ResetPassword() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-4 border-orange-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    }>
      <ResetPasswordContent />
    </Suspense>
  );
}