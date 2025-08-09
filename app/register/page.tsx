
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { createClient } from '@supabase/supabase-js';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Register() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [acceptTerms, setAcceptTerms] = useState(false);

  const [firstNameError, setFirstNameError] = useState('');
  const [lastNameError, setLastNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [termsError, setTermsError] = useState('');

  const [isCreating, setIsCreating] = useState(false);
  const [registrationStatus, setRegistrationStatus] = useState('');
  const router = useRouter();

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  const validateFirstName = (name: string) => {
    if (!name.trim()) return 'First name is required';
    if (name.trim().length < 2) return 'First name must be at least 2 characters';
    return '';
  };

  const validateLastName = (name: string) => {
    if (!name.trim()) return 'Last name is required';
    if (name.trim().length < 2) return 'Last name must be at least 2 characters';
    return '';
  };

  const validateEmail = (email: string) => {
    if (!email.trim()) return 'Email address is required';
    if (!/\S+@\S+\.(\S+)/.test(email)) return 'Please enter a valid email address';
    return '';
  };

  const validatePassword = (password: string) => {
    if (!password) return 'Password is required';
    if (password.length < 8) return 'Password must be at least 8 characters';
    if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(password)) {
      return 'Password must contain uppercase, lowercase, and number';
    }
    return '';
  };

  const validateConfirmPassword = (confirmPassword: string, password: string) => {
    if (!confirmPassword) return 'Please confirm your password';
    if (confirmPassword !== password) return 'Passwords do not match';
    return '';
  };

  const handleFieldChange = (field: string, value: string | boolean) => {
    switch (field) {
      case 'firstName':
        setFirstName(value as string);
        setFirstNameError('');
        break;
      case 'lastName':
        setLastName(value as string);
        setLastNameError('');
        break;
      case 'email':
        setEmail(value as string);
        setEmailError('');
        break;
      case 'password':
        setPassword(value as string);
        setPasswordError('');
        if (confirmPassword) {
          setConfirmPasswordError(validateConfirmPassword(confirmPassword, value as string));
        }
        break;
      case 'confirmPassword':
        setConfirmPassword(value as string);
        setConfirmPasswordError('');
        break;
      case 'acceptTerms':
        setAcceptTerms(value as boolean);
        setTermsError('');
        break;
    }
    if (registrationStatus) setRegistrationStatus('');
  };

  const createAccount = async (userData: {firstName: string, lastName: string, email: string, password: string}) => {
    try {
      const { data, error } = await supabase.auth.signUp({
        email: userData.email,
        password: userData.password,
        options: {
          data: {
            first_name: userData.firstName,
            last_name: userData.lastName,
            full_name: `${userData.firstName} ${userData.lastName}`
          }
        }
      });

      if (error) {
        if (error.message.includes('already registered') || error.message.includes('already exists')) {
          return { success: false, message: 'An account with this email already exists. Please use a different email or try logging in.' };
        }
        return { success: false, message: error.message };
      }

      return { 
        success: true, 
        message: 'Account created successfully! Please check your email to verify your account before signing in.',
        needsVerification: !data.user?.email_confirmed_at
      };

    } catch (error) {
      return { success: false, message: 'Registration failed. Please try again.' };
    }
  };

  const handleRegistration = async (e) => {
    e.preventDefault();

    const firstNameValidation = validateFirstName(firstName);
    const lastNameValidation = validateLastName(lastName);
    const emailValidation = validateEmail(email);
    const passwordValidation = validatePassword(password);
    const confirmPasswordValidation = validateConfirmPassword(confirmPassword, password);
    const termsValidation = acceptTerms ? '' : 'You must accept the terms and conditions';

    setFirstNameError(firstNameValidation);
    setLastNameError(lastNameValidation);
    setEmailError(emailValidation);
    setPasswordError(passwordValidation);
    setConfirmPasswordError(confirmPasswordValidation);
    setTermsError(termsValidation);

    if (firstNameValidation || lastNameValidation || emailValidation || passwordValidation || confirmPasswordValidation || termsValidation) {
      return;
    }

    setIsCreating(true);
    setRegistrationStatus('Creating your account...');

    try {
      const userData = {
        firstName: firstName.trim(),
        lastName: lastName.trim(),
        email: email.trim(),
        password: password
      };

      const result = await createAccount(userData);

      if (result.success) {
        setRegistrationStatus(result.message);

        setTimeout(() => {
          router.push('/login');
        }, 5000);
      } else {
        setRegistrationStatus(result.message);
      }

    } catch (error) {
      setRegistrationStatus('Registration failed. Please try again.');
    } finally {
      setIsCreating(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="py-16 px-4">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Create Account</h1>
            <p className="text-gray-600">Join LaRosa Hub today</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <form id="registration-form" onSubmit={handleRegistration} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={firstName}
                    onChange={(e) => handleFieldChange('firstName', e.target.value)}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm ${
                      firstNameError ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="John"
                  />
                  {firstNameError && (
                    <p className="text-red-500 text-sm mt-1">{firstNameError}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={lastName}
                    onChange={(e) => handleFieldChange('lastName', e.target.value)}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm ${
                      lastNameError ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Doe"
                  />
                  {lastNameError && (
                    <p className="text-red-500 text-sm mt-1">{lastNameError}</p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => handleFieldChange('email', e.target.value)}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm ${
                    emailError ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="john@example.com"
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
                  onChange={(e) => handleFieldChange('password', e.target.value)}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm ${
                    passwordError ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Minimum 8 characters"
                />
                {passwordError && (
                  <p className="text-red-500 text-sm mt-1">{passwordError}</p>
                )}
                <p className="text-xs text-gray-500 mt-1">
                  Must contain uppercase, lowercase, and number
                </p>
              </div>

              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => handleFieldChange('confirmPassword', e.target.value)}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm ${
                    confirmPasswordError ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Repeat your password"
                />
                {confirmPasswordError && (
                  <p className="text-red-500 text-sm mt-1">{confirmPasswordError}</p>
                )}
              </div>

              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="acceptTerms"
                  name="acceptTerms"
                  checked={acceptTerms}
                  onChange={(e) => handleFieldChange('acceptTerms', e.target.checked)}
                  className={`mt-1 h-4 w-4 text-orange-500 border-gray-300 rounded focus:ring-orange-500 cursor-pointer ${
                    termsError ? 'border-red-500' : ''
                  }`}
                />
                <label htmlFor="acceptTerms" className="ml-3 text-sm text-gray-700">
                  I agree to the{' '}
                  <Link href="/terms" className="text-orange-500 hover:text-orange-600 cursor-pointer">
                    Terms of Service
                  </Link>{' '}
                  and{' '}
                  <Link href="/privacy" className="text-orange-500 hover:text-orange-600 cursor-pointer">
                    Privacy Policy
                  </Link>
                </label>
              </div>
              {termsError && <p className="text-red-500 text-sm">{termsError}</p>}

              {registrationStatus && (
                <div
                  className={`p-4 rounded-lg text-sm ${
                    registrationStatus.includes('successfully')
                      ? 'bg-green-100 text-green-700 border border-green-200'
                      : registrationStatus.includes('Creating')
                      ? 'bg-blue-100 text-blue-700 border border-blue-200'
                      : 'bg-red-100 text-red-700 border border-red-200'
                  }`}
                >
                  {registrationStatus}
                </div>
              )}

              <button
                type="submit"
                disabled={isCreating}
                className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 font-semibold whitespace-nowrap cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {isCreating ? 'Creating Account...' : 'Create Account'}
              </button>
            </form>

            <div className="mt-8 text-center">
              <p className="text-gray-600">
                Already have an account?{' '}
                <Link href="/login" className="text-orange-500 hover:text-orange-600 font-medium cursor-pointer">
                  Sign in here
                </Link>
              </p>
            </div>

            <div className="mt-8">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-3 bg-white text-gray-500">Or register with</span>
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
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500">
              By creating an account, you agree to our terms and conditions
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
