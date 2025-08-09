
'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [resetStatus, setResetStatus] = useState('');
  const [isEmailSent, setIsEmailSent] = useState(false);
  const supabase = createClient(supabaseUrl, supabaseAnonKey);

  const validateEmail = (email: string) => {
    if (!email.trim()) {
      return 'Email is required';
    }
    if (!/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email)) {
      return 'Please enter a valid email address';
    }
    return '';
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    setEmailError('');
    if (resetStatus) setResetStatus('');
  };

  const handlePasswordReset = async (e) => {
    e.preventDefault();

    const emailValidation = validateEmail(email);
    setEmailError(emailValidation);

    if (emailValidation) {
      return;
    }

    setIsLoading(true);
    setResetStatus('Sending reset instructions...');

    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/reset-password`,
      });

      if (error) {
        throw error;
      }

      setResetStatus('Password reset instructions sent to your email!');
      setIsEmailSent(true);

    } catch (error) {
      console.error('Password reset error:', error);
      if (error.message.includes('Invalid email')) {
        setResetStatus('Please enter a valid email address.');
      } else {
        setResetStatus('Password reset instructions have been sent if an account with this email exists.');
        setIsEmailSent(true);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleResendEmail = () => {
    setIsEmailSent(false);
    setResetStatus('');
    handlePasswordReset({ preventDefault: () => {} });
  };

  if (isEmailSent) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />

        <div className="py-16 px-4">
          <div className="max-w-md mx-auto">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-mail-check-line text-2xl text-green-600"></i>
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Check Your Email</h1>
              <p className="text-gray-600">We've sent password reset instructions to</p>
              <p className="text-orange-600 font-medium">{email}</p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="space-y-6">
                <div className="bg-blue-50 rounded-lg p-4">
                  <div className="flex items-start">
                    <div className="w-5 h-5 flex items-center justify-center mr-3 mt-0.5">
                      <i className="ri-information-line text-blue-600"></i>
                    </div>
                    <div className="text-sm text-blue-800">
                      <p className="font-medium mb-1">Next Steps:</p>
                      <ul className="space-y-1">
                        <li>• Check your email inbox</li>
                        <li>• Click the reset link in the email</li>
                        <li>• Create a new password</li>
                        <li>• Sign in with your new password</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="text-center space-y-4">
                  <p className="text-sm text-gray-600">
                    Didn't receive the email? Check your spam folder or
                  </p>

                  <button
                    onClick={handleResendEmail}
                    disabled={isLoading}
                    className="text-orange-500 hover:text-orange-600 font-medium text-sm whitespace-nowrap cursor-pointer disabled:opacity-50"
                  >
                    Resend instructions
                  </button>
                </div>

                <div className="border-t pt-6">
                  <div className="text-center space-y-3">
                    <Link href="/login" className="block w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 font-semibold whitespace-nowrap cursor-pointer transition-colors">
                      Back to Sign In
                    </Link>

                    <Link href="/" className="block text-gray-600 hover:text-gray-700 text-sm cursor-pointer">
                      Return to Home
                    </Link>
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

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="py-16 px-4">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-lock-unlock-line text-2xl text-orange-600"></i>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Forgot Password?</h1>
            <p className="text-gray-600">No worries! Enter your email and we'll send you reset instructions.</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <form id="forgot-password-form" onSubmit={handlePasswordReset} className="space-y-6">
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
                  placeholder="Enter your registered email"
                />
                {emailError && (
                  <p className="text-red-500 text-sm mt-1">{emailError}</p>
                )}
              </div>

              {resetStatus && (
                <div
                  className={`p-4 rounded-lg text-sm ${
                    resetStatus.includes('sent') || resetStatus.includes('receive')
                      ? 'bg-green-100 text-green-700 border border-green-200'
                      : resetStatus.includes('Sending')
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
                {isLoading ? 'Sending...' : 'Send Reset Instructions'}
              </button>
            </form>

            <div className="mt-6">
              <div className="bg-yellow-50 rounded-lg p-4 text-sm">
                <div className="flex items-start">
                  <div className="w-5 h-5 flex items-center justify-center mr-3 mt-0.5">
                    <i className="ri-lightbulb-line text-yellow-600"></i>
                  </div>
                  <div className="text-yellow-800">
                    <p className="font-medium mb-1">Demo Account Emails:</p>
                    <div className="space-y-1">
                      <p>• admin@pacifico.com</p>
                      <p>• test@example.com</p>
                      <p>• user@pacifico.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center space-y-4">
              <div className="flex items-center justify-center space-x-2">
                <div className="w-5 h-5 flex items-center justify-center">
                  <i className="ri-arrow-left-line text-gray-400"></i>
                </div>
                <Link href="/login" className="text-orange-500 hover:text-orange-600 font-medium cursor-pointer">
                  Back to Sign In
                </Link>
              </div>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-3 bg-white text-gray-500">or</span>
                </div>
              </div>

              <p className="text-gray-600">
                Don't have an account?{' '}
                <Link href="/register" className="text-orange-500 hover:text-orange-600 font-medium cursor-pointer">
                  Create one here
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
