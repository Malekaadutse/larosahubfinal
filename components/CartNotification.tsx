'use client';

import { useEffect, useState } from 'react';

interface CartNotificationProps {
  show: boolean;
  productName: string;
  onClose: () => void;
}

export default function CartNotification({ show, productName, onClose }: CartNotificationProps) {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  if (!show) return null;

  return (
    <div className="fixed top-20 right-4 z-50 animate-fade-in">
      <div className="bg-white border border-green-200 rounded-lg shadow-lg p-4 max-w-sm">
        <div className="flex items-start space-x-3">
          <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
            <i className="ri-check-line text-green-600"></i>
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium text-gray-900">Added to cart!</p>
            <p className="text-xs text-gray-600 mt-1 line-clamp-2">{productName}</p>
          </div>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 cursor-pointer"
          >
            <i className="ri-close-line text-sm"></i>
          </button>
        </div>
      </div>
    </div>
  );
}