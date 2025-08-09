'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

function OrderConfirmationContent() {
  const searchParams = useSearchParams();
  const success = searchParams.get('success');

  if (success === 'true') {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        
        <div className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
              <i className="ri-check-line text-3xl text-green-600"></i>
            </div>
            
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Order Confirmed!</h1>
            <p className="text-xl text-gray-600 mb-8">
              Thank you for your purchase. Your order has been successfully placed and is being processed.
            </p>
            
            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">What's Next?</h2>
              <div className="space-y-4 text-left">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 flex items-center justify-center bg-orange-100 rounded-full mt-1">
                    <i className="ri-mail-line text-orange-600 text-sm"></i>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Order Confirmation Email</h3>
                    <p className="text-gray-600">You'll receive an email confirmation shortly with your order details.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 flex items-center justify-center bg-orange-100 rounded-full mt-1">
                    <i className="ri-truck-line text-orange-600 text-sm"></i>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Processing & Shipping</h3>
                    <p className="text-gray-600">Your order will be processed within 1-2 business days and shipped to your address.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 flex items-center justify-center bg-orange-100 rounded-full mt-1">
                    <i className="ri-notification-line text-orange-600 text-sm"></i>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Tracking Information</h3>
                    <p className="text-gray-600">You'll receive tracking details once your order ships.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/products"
                className="bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 font-medium cursor-pointer whitespace-nowrap"
              >
                Continue Shopping
              </Link>
              <Link
                href="/"
                className="bg-gray-200 text-gray-700 px-8 py-3 rounded-lg hover:bg-gray-300 font-medium cursor-pointer whitespace-nowrap"
              >
                Back to Home
              </Link>
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
      
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md mx-auto text-center">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <i className="ri-error-warning-line text-2xl text-red-600"></i>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Order Not Found</h1>
          <p className="text-gray-600 mb-8">We couldn't find the order you're looking for.</p>
          <Link
            href="/"
            className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 cursor-pointer whitespace-nowrap"
          >
            Back to Home
          </Link>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}

function OrderConfirmationFallback() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <div className="w-8 h-8 border-4 border-orange-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-gray-600">Loading...</p>
      </div>
    </div>
  );
}

export default function OrderConfirmationPage() {
  return (
    <Suspense fallback={<OrderConfirmationFallback />}>
      <OrderConfirmationContent />
    </Suspense>
  );
}