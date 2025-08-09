
'use client';

import { useState } from 'react';

interface Category {
  id: string;
  name: string;
}

interface ProductFiltersProps {
  categories: Category[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  priceRange: number[];
  onPriceChange: (range: number[]) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export default function ProductFilters({
  categories,
  selectedCategory,
  onCategoryChange,
  priceRange,
  onPriceChange,
  searchQuery,
  onSearchChange
}: ProductFiltersProps) {
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);

  const brands = [
    'Apple', 'Samsung', 'Nike', 'Adidas', 'Sony', 'Canon', 'Herman Miller', 'IKEA'
  ];

  const ratings = [5, 4, 3, 2, 1];

  const handlePriceChange = (type: 'min' | 'max', value: string) => {
    const numValue = parseInt(value) || 0;
    if (type === 'min') {
      onPriceChange([numValue, priceRange[1]]);
    } else {
      onPriceChange([priceRange[0], numValue]);
    }
  };

  return (
    <div className="bg-white">
      {/* Mobile Filter Toggle */}
      <div className="lg:hidden mb-4">
        <button
          onClick={() => setIsFiltersOpen(!isFiltersOpen)}
          className="w-full flex items-center justify-between bg-gray-100 px-4 py-3 rounded-lg cursor-pointer"
        >
          <span className="font-medium">Filters</span>
          <i className={`ri-arrow-${isFiltersOpen ? 'up' : 'down'}-s-line`}></i>
        </button>
      </div>

      <div className={`${isFiltersOpen ? 'block' : 'hidden'} lg:block space-y-6`}>
        {/* Search */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-3">Search</h3>
          <div className="relative">
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm"
            />
            <i className="ri-search-line absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
          </div>
        </div>

        {/* Categories */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-3">Categories</h3>
          <div className="space-y-2">
            {categories.map((category) => (
              <label key={category.id} className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="category"
                  value={category.id}
                  checked={selectedCategory === category.id}
                  onChange={(e) => onCategoryChange(e.target.value)}
                  className="mr-3 text-orange-500 focus:ring-orange-500"
                />
                <span className="text-gray-700">{category.name}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Price Range */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-3">Price Range</h3>
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <input
                type="number"
                placeholder="Min"
                value={priceRange[0]}
                onChange={(e) => handlePriceChange('min', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm"
              />
              <span className="text-gray-500">to</span>
              <input
                type="number"
                placeholder="Max"
                value={priceRange[1]}
                onChange={(e) => handlePriceChange('max', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {[
                { label: 'Under R50.00', min: 0, max: 50 },
                { label: 'R50 - R100', min: 50, max: 100 },
                { label: 'R100 - R200', min: 100, max: 200 },
                { label: 'R200 - R500', min: 200, max: 500 },
                { label: 'Over R500', min: 500, max: 1000 }
              ].map((range, index) => (
                <button
                  key={index}
                  onClick={() => onPriceChange([range.min, range.max])}
                  className="px-3 py-1 text-xs border border-gray-300 rounded-full hover:border-orange-500 hover:text-orange-500 cursor-pointer"
                >
                  {range.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Brands */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-3">Brands</h3>
          <div className="space-y-2 max-h-40 overflow-y-auto">
            {brands.map((brand) => (
              <label key={brand} className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="mr-3 text-orange-500 focus:ring-orange-500"
                />
                <span className="text-gray-700">{brand}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Rating */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-3">Customer Rating</h3>
          <div className="space-y-2">
            {ratings.map((rating) => (
              <label key={rating} className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="mr-3 text-orange-500 focus:ring-orange-500"
                />
                <div className="flex items-center">
                  <div className="flex items-center mr-2">
                    {[...Array(5)].map((_, i) => (
                      <i
                        key={i}
                        className={`ri-star-${i < rating ? 'fill' : 'line'} text-yellow-400 text-sm`}
                      ></i>
                    ))}
                  </div>
                  <span className="text-gray-700">& Up</span>
                </div>
              </label>
            ))}
          </div>
        </div>

        {/* Clear Filters */}
        <div className="pt-4 border-t border-gray-200">
          <button
            onClick={() => {
              onCategoryChange('all');
              onPriceChange([0, 1000]);
              onSearchChange('');
            }}
            className="w-full bg-gray-100 text-gray-700 py-2 rounded-lg hover:bg-gray-200 cursor-pointer"
          >
            Clear All Filters
          </button>
        </div>
      </div>
    </div>
  );
}
