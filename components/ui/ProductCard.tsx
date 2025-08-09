
'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useCart } from '../CartProvider';
import CartNotification from '../CartNotification';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviews: number;
  badge?: string;
}

export default function ProductCard({ 
  id, 
  name, 
  price, 
  originalPrice, 
  image, 
  rating, 
  reviews, 
  badge 
}: ProductCardProps) {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const { addToCart } = useCart();

  const handleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsWishlisted(!isWishlisted);
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart({
      id,
      name,
      price,
      image
    });
    setShowNotification(true);
  };

  return (
    <>
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow group">
        <Link href={`/products/${id}`}>
          <div className="relative">
            <img
              src={image}
              alt={name}
              className="w-full h-48 object-cover object-top group-hover:scale-105 transition-transform duration-300"
            />
            {badge && (
              <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                {badge}
              </span>
            )}
            <button
              onClick={handleWishlist}
              className="absolute top-2 right-2 w-8 h-8 flex items-center justify-center bg-white/80 rounded-full hover:bg-white cursor-pointer"
              suppressHydrationWarning={true}
            >
              <i className={`${isWishlisted ? 'ri-heart-fill text-red-500' : 'ri-heart-line text-gray-600'}`}></i>
            </button>
          </div>

          <div className="p-4">
            <h3 className="font-medium text-gray-900 mb-2 line-clamp-2">{name}</h3>
            
            <div className="flex items-center mb-2">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <i
                    key={i}
                    className={`ri-star-${i < Math.floor(rating) ? 'fill' : 'line'} text-yellow-400 text-sm`}
                  ></i>
                ))}
              </div>
              <span className="text-gray-500 text-sm ml-2">({reviews})</span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="text-lg font-bold text-gray-900">R{price.toFixed(2)}</span>
                {originalPrice && (
                  <span className="text-sm text-gray-500 line-through">R{originalPrice.toFixed(2)}</span>
                )}
              </div>
              <button 
                onClick={handleAddToCart}
                className="w-8 h-8 flex items-center justify-center bg-orange-500 text-white rounded-full hover:bg-orange-600 cursor-pointer"
                suppressHydrationWarning={true}
              >
                <i className="ri-shopping-cart-line text-sm"></i>
              </button>
            </div>
          </div>
        </Link>
      </div>

      <CartNotification 
        show={showNotification}
        productName={name}
        onClose={() => setShowNotification(false)}
      />
    </>
  );
}
