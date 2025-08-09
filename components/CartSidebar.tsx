'use client';

import Link from 'next/link';
import { useCart } from './CartProvider';

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CartSidebar({ isOpen, onClose }: CartSidebarProps) {
  const { items, updateQuantity, removeItem, getCartTotal, getCartCount } = useCart();

  const handleQuantityChange = (id: string, newQuantity: number) => {
    if (newQuantity < 1) {
      removeItem(id);
    } else {
      updateQuantity(id, newQuantity);
    }
  };

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={onClose}
        ></div>
      )}

      {/* Sidebar */}
      <div className={`fixed right-0 top-0 h-full w-96 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b">
            <h2 className="text-lg font-semibold text-gray-900">
              Shopping Cart ({getCartCount()})
            </h2>
            <button 
              onClick={onClose}
              className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600 cursor-pointer"
            >
              <i className="ri-close-line text-xl"></i>
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full p-6">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                  <i className="ri-shopping-cart-line text-gray-400 text-2xl"></i>
                </div>
                <p className="text-gray-500 text-center mb-4">Your cart is empty</p>
                <button 
                  onClick={onClose}
                  className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 cursor-pointer whitespace-nowrap"
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              <div className="p-4 space-y-4">
                {items.map((item) => (
                  <div key={item.id} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                    <img 
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover object-top rounded-lg"
                    />
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm font-medium text-gray-900 mb-1 line-clamp-2">
                        {item.name}
                      </h3>
                      <div className="flex items-center justify-between">
                        <span className="text-orange-500 font-semibold">
                          R{item.price.toFixed(2)}
                        </span>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-gray-400 hover:text-red-500 cursor-pointer"
                        >
                          <i className="ri-delete-bin-line text-sm"></i>
                        </button>
                      </div>
                      <div className="flex items-center space-x-2 mt-2">
                        <button
                          onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                          className="w-6 h-6 flex items-center justify-center border rounded cursor-pointer hover:bg-gray-100"
                        >
                          <i className="ri-subtract-line text-xs"></i>
                        </button>
                        <span className="w-8 text-center text-sm">{item.quantity}</span>
                        <button
                          onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                          className="w-6 h-6 flex items-center justify-center border rounded cursor-pointer hover:bg-gray-100"
                        >
                          <i className="ri-add-line text-xs"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="p-6 border-t bg-gray-50">
              <div className="flex justify-between items-center mb-4">
                <span className="text-lg font-semibold text-gray-900">Total:</span>
                <span className="text-xl font-bold text-orange-500">
                  R{getCartTotal().toFixed(2)}
                </span>
              </div>
              
              <div className="space-y-3">
                <Link href="/cart">
                  <button 
                    onClick={onClose}
                    className="w-full bg-gray-200 text-gray-800 py-3 rounded-lg hover:bg-gray-300 cursor-pointer whitespace-nowrap"
                  >
                    View Cart
                  </button>
                </Link>
                <Link href="/checkout">
                  <button 
                    onClick={onClose}
                    className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 cursor-pointer whitespace-nowrap"
                  >
                    Checkout
                  </button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}