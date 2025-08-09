
'use client';

import { useCart } from '../../components/CartProvider';
import Link from 'next/link';
import { useState } from 'react';

export default function CartPage() {
  const { items, updateQuantity, removeItem, getCartTotal, getCartCount } = useCart();
  const [promoCode, setPromoCode] = useState('');
  const [isPromoApplied, setIsPromoApplied] = useState(false);
  const [showPromoSuccess, setShowPromoSuccess] = useState(false);

  const shipping = items.length > 0 ? (getCartTotal() > 200 ? 0 : 19.99) : 0;
  const discount = isPromoApplied ? getCartTotal() * 0.1 : 0;
  const total = getCartTotal() + shipping - discount;

  const handlePromoCode = () => {
    if (promoCode.toLowerCase() === 'save10') {
      setIsPromoApplied(true);
      setShowPromoSuccess(true);
      setTimeout(() => setShowPromoSuccess(false), 3000);
    }
  };

  const handleQuantityChange = (id: string, newQuantity: number) => {
    if (newQuantity < 1) {
      removeItem(id);
    } else {
      updateQuantity(id, newQuantity);
    }
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <div className="w-32 h-32 flex items-center justify-center bg-gray-100 rounded-full mx-auto mb-8">
              <i className="ri-shopping-cart-line text-6xl text-gray-400"></i>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Your Cart is Empty</h1>
            <p className="text-xl text-gray-600 mb-8 max-w-md mx-auto">
              Looks like you haven't added any items to your cart yet. Start shopping to fill it up!
            </p>
            <div className="space-y-4">
              <Link
                href="/products"
                className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors whitespace-nowrap cursor-pointer"
              >
                Start Shopping
              </Link>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
                <Link
                  href="/deals"
                  className="text-orange-500 hover:text-orange-600 font-medium cursor-pointer"
                >
                  View Current Deals
                </Link>
                <Link
                  href="/categories"
                  className="text-orange-500 hover:text-orange-600 font-medium cursor-pointer"
                >
                  Browse Categories
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Shopping Cart</h1>
          <p className="text-gray-600">{getCartCount()} {getCartCount() === 1 ? 'item' : 'items'} in your cart</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900">Cart Items</h2>
              </div>

              <div className="divide-y divide-gray-200">
                {items.map((item) => (
                  <div key={item.id} className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-20 h-20 object-cover object-top rounded-lg"
                        />
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="text-lg font-medium text-gray-900 mb-1">
                              <Link href={`/products/${item.id}`} className="hover:text-orange-500 cursor-pointer">
                                {item.name}
                              </Link>
                            </h3>
                            <p className="text-sm text-gray-500 mb-2">
                              Color: Space Gray | Size: Standard
                            </p>
                            <div className="flex items-center space-x-2">
                              <span className="text-2xl font-bold text-orange-500">
                                R{item.price.toFixed(2)}
                              </span>
                              <span className="text-sm text-gray-500 line-through">
                                R{(item.price * 1.2).toFixed(2)}
                              </span>
                            </div>
                          </div>

                          <button
                            onClick={() => removeItem(item.id)}
                            className="text-gray-400 hover:text-red-500 transition-colors cursor-pointer"
                          >
                            <div className="w-5 h-5 flex items-center justify-center">
                              <i className="ri-close-line text-lg"></i>
                            </div>
                          </button>
                        </div>

                        <div className="flex items-center justify-between mt-4">
                          <div className="flex items-center space-x-3">
                            <button
                              onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                              className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-full hover:bg-gray-50 cursor-pointer"
                            >
                              <i className="ri-subtract-line text-sm"></i>
                            </button>

                            <span className="text-lg font-medium w-8 text-center">
                              {item.quantity}
                            </span>

                            <button
                              onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                              className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-full hover:bg-gray-50 cursor-pointer"
                            >
                              <i className="ri-add-line text-sm"></i>
                            </button>
                          </div>

                          <div className="text-right">
                            <div className="text-lg font-semibold text-gray-900">
                              R{(item.price * item.quantity).toFixed(2)}
                            </div>
                            {item.quantity > 1 && (
                              <div className="text-sm text-gray-500">
                                R{item.price.toFixed(2)} each
                              </div>
                            )}
                          </div>
                        </div>

                        <div className="flex items-center space-x-4 mt-4 text-sm">
                          <button className="text-orange-500 hover:text-orange-600 cursor-pointer">
                            <div className="flex items-center space-x-1">
                              <div className="w-4 h-4 flex items-center justify-center">
                                <i className="ri-heart-line"></i>
                              </div>
                              <span>Save for later</span>
                            </div>
                          </button>
                          <button className="text-gray-500 hover:text-gray-700 cursor-pointer">
                            <div className="flex items-center space-x-1">
                              <div className="w-4 h-4 flex items-center justify-center">
                                <i className="ri-share-line"></i>
                              </div>
                              <span>Share</span>
                            </div>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recommended Products */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">You might also like</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[{
                  id: '3',
                  name: 'Premium Bluetooth Headphones',
                  price: 129.99,
                  image: 'https://readdy.ai/api/search-image?query=Premium%20wireless%20bluetooth%20headphones%2C%20over-ear%20design%2C%20modern%20sleek%20black%20finish%2C%20professional%20studio%20quality%2C%20clean%20white%20background%2C%20product%20photography%20style&width=300&height=300&seq=headphones1&orientation=squarish'
                }, {
                  id: '4',
                  name: 'Smart Home Speaker',
                  price: 89.99,
                  image: 'https://readdy.ai/api/search-image?query=Smart%20home%20speaker%20device%2C%20cylindrical%20design%2C%20premium%20fabric%20finish%2C%20voice%20assistant%20technology%2C%20modern%20minimalist%20style%2C%20clean%20product%20background&width=300&height=300&seq=speaker1&orientation=squarish'
                }, {
                  id: '5',
                  name: 'Wireless Power Bank',
                  price: 49.99,
                  image: 'https://readdy.ai/api/search-image?query=Wireless%20charging%20power%20bank%2C%20sleek%20portable%20design%2C%20fast%20charging%20technology%2C%20premium%20black%20finish%2C%20modern%20electronic%20device%2C%20clean%20product%20photography&width=300&height=300&seq=powerbank1&orientation=squarish'
                }].map((product) => (
                  <Link key={product.id} href={`/products/${product.id}`} className="cursor-pointer">
                    <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-48 object-cover object-top"
                      />
                      <div className="p-4">
                        <h4 className="font-medium text-gray-900 mb-2">{product.name}</h4>
                        <div className="text-lg font-semibold text-orange-500">
                          R{product.price}
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-sm p-6 sticky top-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Order Summary</h2>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal ({getCartCount()} items)</span>
                  <span>R{getCartTotal().toFixed(2)}</span>
                </div>

                {isPromoApplied && (
                  <div className="flex justify-between text-green-600">
                    <span>Discount (10% off)</span>
                    <span>-R{discount.toFixed(2)}</span>
                  </div>
                )}

                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span>
                    {shipping === 0 ? (
                      <span className="text-green-600 font-medium">Free</span>
                    ) : (
                      `R${shipping.toFixed(2)}`
                    )}
                  </span>
                </div>

                <div className="border-t pt-4">
                  <div className="flex justify-between text-lg font-semibold text-gray-900">
                    <span>Total</span>
                    <span>R{total.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              {/* Promo Code */}
              <div className="mb-6">
                <div className="flex space-x-2">
                  <input
                    type="text"
                    placeholder="Enter promo code"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-sm"
                  />
                  <button
                    onClick={handlePromoCode}
                    disabled={isPromoApplied}
                    className="px-4 py-2 bg-gray-100 hover:bg-gray-200 disabled:bg-gray-50 disabled:text-gray-400 text-gray-700 rounded-lg font-medium text-sm cursor-pointer whitespace-nowrap"
                  >
                    Apply
                  </button>
                </div>
                {showPromoSuccess && (
                  <div className="mt-2 text-sm text-green-600 flex items-center space-x-1">
                    <div className="w-4 h-4 flex items-center justify-center">
                      <i className="ri-check-line"></i>
                    </div>
                    <span>Promo code applied successfully!</span>
                  </div>
                )}
                <div className="mt-2 text-xs text-gray-500">
                  Try code: <span className="font-medium">SAVE10</span>
                </div>
              </div>

              <div className="space-y-3">
                <Link href="/checkout">
                  <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-xl font-semibold text-lg transition-colors cursor-pointer whitespace-nowrap">
                    Proceed to Checkout
                  </button>
                </Link>

                <Link href="/products">
                  <button className="w-full border border-gray-300 hover:bg-gray-50 text-gray-700 py-3 rounded-xl font-medium transition-colors cursor-pointer whitespace-nowrap">
                    Continue Shopping
                  </button>
                </Link>
              </div>

              {/* Security & Shipping Info */}
              <div className="mt-6 pt-6 border-t space-y-3 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 flex items-center justify-center">
                    <i className="ri-shield-check-line text-green-500"></i>
                  </div>
                  <span>Secure 256-bit SSL encryption</span>
                </div>

                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 flex items-center justify-center">
                    <i className="ri-truck-line text-blue-500"></i>
                  </div>
                  <span>Free shipping on orders over R200</span>
                </div>

                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 flex items-center justify-center">
                    <i className="ri-refresh-line text-purple-500"></i>
                  </div>
                  <span>30-day return policy</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
