
'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ProductCard from '../../components/ui/ProductCard';
import ProductFilters from './ProductFilters';
import { useState } from 'react';

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [sortBy, setSortBy] = useState('featured');
  const [searchQuery, setSearchQuery] = useState('');

  const allProducts = [
    {
      id: '1',
      name: 'Premium Wireless Headphones',
      price: 199.00,
      originalPrice: 249,
      image: 'https://readdy.ai/api/search-image?query=Premium%20wireless%20over-ear%20headphones%20with%20sleek%20black%20design%20on%20minimalist%20white%20background%2C%20studio%20lighting%2C%20product%20photography%20style%2C%20high-end%20electronics%2C%20modern%20technology%20aesthetic&width=400&height=300&seq=headphones-1&orientation=landscape',
      rating: 4.8,
      reviews: 1247,
      badge: '20% OFF',
      category: 'electronics'
    },
    {
      id: '2',
      name: 'Smart Fitness Watch',
      price: 299,
      image: 'https://readdy.ai/api/search-image?query=Modern%20smartwatch%20with%20black%20sport%20band%20on%20clean%20white%20background%2C%20fitness%20tracker%20with%20digital%20display%2C%20wearable%20technology%2C%20minimalist%20product%20shot%2C%20premium%20quality&width=400&height=300&seq=watch-1&orientation=landscape',
      rating: 4.6,
      reviews: 892,
      badge: 'BESTSELLER',
      category: 'electronics'
    },
    {
      id: '3',
      name: 'Professional Camera Lens',
      price: 899,
      image: 'https://readdy.ai/api/search-image?query=Professional%20camera%20lens%20with%20black%20finish%20on%20white%20background%2C%20photography%20equipment%2C%20telephoto%20lens%20with%20detailed%20texture%2C%20studio%20product%20photography%2C%20high-end%20optics&width=400&height=300&seq=lens-1&orientation=landscape',
      rating: 4.9,
      reviews: 456,
      category: 'electronics'
    },
    {
      id: '4',
      name: 'Ergonomic Office Chair',
      price: 449,
      originalPrice: 599,
      image: 'https://readdy.ai/api/search-image?query=Modern%20ergonomic%20office%20chair%20in%20charcoal%20gray%20fabric%20with%20mesh%20back%20on%20clean%20white%20background%2C%20professional%20furniture%2C%20contemporary%20design%2C%20comfortable%20seating%20solution&width=400&height=300&seq=chair-1&orientation=landscape',
      rating: 4.7,
      reviews: 623,
      badge: '25% OFF',
      category: 'home'
    },
    {
      id: '5',
      name: 'Designer Leather Handbag',
      price: 189,
      originalPrice: 259,
      image: 'https://readdy.ai/api/search-image?query=Elegant%20leather%20handbag%20in%20brown%20color%20on%20clean%20white%20background%2C%20luxury%20fashion%20accessory%2C%20premium%20quality%20leather%20goods%2C%20sophisticated%20design%2C%20minimalist%20product%20photography&width=400&height=300&seq=bag-1&orientation=landscape',
      rating: 4.5,
      reviews: 334,
      badge: '27% OFF',
      category: 'fashion'
    },
    {
      id: '6',
      name: 'Running Sneakers',
      price: 129,
      image: 'https://readdy.ai/api/search-image?query=Modern%20athletic%20running%20shoes%20in%20white%20and%20gray%20colors%20on%20clean%20background%2C%20sports%20footwear%2C%20comfortable%20sneakers%20for%20fitness%2C%20contemporary%20design%2C%20product%20photography%20style&width=400&height=300&seq=shoes-1&orientation=landscape',
      rating: 4.4,
      reviews: 789,
      category: 'fashion'
    },
    {
      id: '7',
      name: 'Yoga Mat Premium',
      price: 79,
      originalPrice: 99,
      image: 'https://readdy.ai/api/search-image?query=Premium%20yoga%20mat%20in%20purple%20color%20rolled%20up%20on%20white%20background%2C%20fitness%20equipment%2C%20non-slip%20exercise%20mat%2C%20healthy%20lifestyle%20product%2C%20clean%20minimalist%20style&width=400&height=300&seq=yoga-1&orientation=landscape',
      rating: 4.6,
      reviews: 542,
      badge: '20% OFF',
      category: 'sports'
    },
    {
      id: '8',
      name: 'Ceramic Coffee Mug Set',
      price: 45,
      image: 'https://readdy.ai/api/search-image?query=Set%20of%20elegant%20ceramic%20coffee%20mugs%20in%20white%20and%20beige%20colors%20on%20clean%20background%2C%20kitchen%20accessories%2C%20modern%20tableware%2C%20home%20essentials%2C%20minimalist%20design&width=400&height=300&seq=mugs-1&orientation=landscape',
      rating: 4.3,
      reviews: 267,
      category: 'home'
    },
    {
      id: '9',
      name: 'Bluetooth Speaker',
      price: 149,
      originalPrice: 199,
      image: 'https://readdy.ai/api/search-image?query=Portable%20Bluetooth%20speaker%20in%20black%20finish%20on%20white%20background%2C%20wireless%20audio%20device%2C%20modern%20technology%2C%20compact%20design%2C%20premium%20sound%20quality&width=400&height=300&seq=speaker-1&orientation=landscape',
      rating: 4.7,
      reviews: 1156,
      badge: '25% OFF',
      category: 'electronics'
    },
    {
      id: '10',
      name: 'Cotton T-Shirt',
      price: 29,
      image: 'https://readdy.ai/api/search-image?query=Plain%20cotton%20t-shirt%20in%20navy%20blue%20color%20on%20white%20background%2C%20casual%20wear%2C%20basic%20clothing%20item%2C%20comfortable%20fabric%2C%20simple%20design%2C%20fashion%20photography&width=400&height=300&seq=tshirt-1&orientation=landscape',
      rating: 4.2,
      reviews: 423,
      category: 'fashion'
    },
    {
      id: '11',
      name: 'Gaming Mechanical Keyboard',
      price: 159,
      image: 'https://readdy.ai/api/search-image?query=Gaming%20mechanical%20keyboard%20with%20RGB%20lighting%20on%20clean%20background%2C%20computer%20accessory%2C%20gaming%20equipment%2C%20modern%20technology%2C%20professional%20setup&width=400&height=300&seq=keyboard-1&orientation=landscape',
      rating: 4.8,
      reviews: 678,
      badge: 'NEW',
      category: 'electronics'
    },
    {
      id: '12',
      name: 'Indoor Plant Pot Set',
      price: 65,
      originalPrice: 85,
      image: 'https://readdy.ai/api/search-image?query=Set%20of%20modern%20ceramic%20plant%20pots%20in%20white%20and%20terracotta%20colors%20on%20clean%20background%2C%20home%20decor%2C%20indoor%20gardening%2C%20minimalist%20design%2C%20contemporary%20style&width=400&height=300&seq=pots-1&orientation=landscape',
      rating: 4.4,
      reviews: 189,
      badge: '23% OFF',
      category: 'home'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'electronics', name: 'Electronics' },
    { id: 'fashion', name: 'Fashion' },
    { id: 'home', name: 'Home & Living' },
    { id: 'sports', name: 'Sports & Fitness' }
  ];

  const filteredProducts = allProducts.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesPrice && matchesSearch;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      case 'name':
        return a.name.localeCompare(b.name);
      default:
        return 0;
    }
  });

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Page Header */}
      <section className="bg-gray-50 py-12">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">All Products</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our complete collection of premium products, carefully selected to meet your every need
            </p>
          </div>
        </div>
      </section>

      <div className="px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-1/4">
            <ProductFilters
              categories={categories}
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
              priceRange={priceRange}
              onPriceChange={setPriceRange}
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
            />
          </div>

          {/* Products Grid */}
          <div className="lg:w-3/4">
            {/* Sort and Results Header */}
            <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
              <p className="text-gray-600 mb-4 sm:mb-0">
                Showing {sortedProducts.length} of {allProducts.length} products
              </p>
              <div className="flex items-center space-x-2">
                <span className="text-gray-700 text-sm">Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 pr-8"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                  <option value="name">Name A-Z</option>
                </select>
              </div>
            </div>

            {/* Products Grid */}
            {sortedProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {sortedProducts.map((product) => (
                  <ProductCard key={product.id} {...product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="w-16 h-16 flex items-center justify-center bg-gray-100 rounded-full mx-auto mb-4">
                  <i className="ri-search-line text-2xl text-gray-400"></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No products found</h3>
                <p className="text-gray-600">Try adjusting your filters or search terms</p>
              </div>
            )}

            {/* Load More Button */}
            {sortedProducts.length > 0 && (
              <div className="text-center mt-12">
                <button className="bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 whitespace-nowrap cursor-pointer">
                  Load More Products
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
