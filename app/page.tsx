
'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ui/ProductCard';
import Link from 'next/link';

export default function Home() {
  const featuredProducts = [
    {
      id: '1',
      name: 'Premium Wireless Headphones',
      price: 50.00,
      originalPrice: 249,
      image: 'https://readdy.ai/api/search-image?query=Premium%20wireless%20over-ear%20headphones%20with%20sleek%20black%20design%20on%20minimalist%20white%20background%2C%20studio%20lighting%2C%20product%20photography%20style%2C%20high-end%20electronics%2C%20modern%20technology%20aesthetic&width=400&height=300&seq=headphones-1&orientation=landscape',
      rating: 4.8,
      reviews: 1247,
      badge: '20% OFF'
    },
    {
      id: '2',
      name: 'Smart Fitness Watch',
      price: 299,
      image: 'https://readdy.ai/api/search-image?query=Modern%20smartwatch%20with%20black%20sport%20band%20on%20clean%20white%20background%2C%20fitness%20tracker%20with%20digital%20display%2C%20wearable%20technology%2C%20minimalist%20product%20shot%2C%20premium%20quality&width=400&height=300&seq=watch-1&orientation=landscape',
      rating: 4.6,
      reviews: 892,
      badge: 'BESTSELLER'
    },
    {
      id: '3',
      name: 'Professional Camera Lens',
      price: 899,
      image: 'https://readdy.ai/api/search-image?query=Professional%20camera%20lens%20with%20black%20finish%20on%20white%20background%2C%20photography%20equipment%2C%20telephoto%20lens%20with%20detailed%20texture%2C%20studio%20product%20photography%2C%20high-end%20optics&width=400&height=300&seq=lens-1&orientation=landscape',
      rating: 4.9,
      reviews: 456
    },
    {
      id: '4',
      name: 'Ergonomic Office Chair',
      price: 449,
      originalPrice: 599,
      image: 'https://readdy.ai/api/search-image?query=Modern%20ergonomic%20office%20chair%20in%20charcoal%20gray%20fabric%20with%20mesh%20back%20on%20clean%20white%20background%2C%20professional%20furniture%2C%20contemporary%20design%2C%20comfortable%20seating%20solution&width=400&height=300&seq=chair-1&orientation=landscape',
      rating: 4.7,
      reviews: 623,
      badge: '25% OFF'
    }
  ];

  const categories = [
    {
      name: 'Electronics',
      image: 'https://readdy.ai/api/search-image?query=Modern%20electronics%20collection%20including%20smartphones%2C%20laptops%2C%20headphones%20arranged%20on%20clean%20white%20background%2C%20technology%20products%20showcase%2C%20minimalist%20style%2C%20premium%20devices&width=300&height=200&seq=electronics-cat&orientation=landscape',
      count: '2,341 products'
    },
    {
      name: 'Fashion',
      image: 'https://readdy.ai/api/search-image?query=Stylish%20fashion%20items%20including%20clothing%2C%20accessories%2C%20shoes%20arranged%20elegantly%20on%20white%20background%2C%20trendy%20apparel%20collection%2C%20modern%20fashion%20photography%2C%20clean%20aesthetic&width=300&height=200&seq=fashion-cat&orientation=landscape',
      count: '5,678 products'
    },
    {
      name: 'Home & Living',
      image: 'https://readdy.ai/api/search-image?query=Beautiful%20home%20decor%20items%20including%20plants%2C%20cushions%2C%20candles%20on%20white%20background%2C%20modern%20interior%20accessories%2C%20cozy%20living%20essentials%2C%20minimalist%20home%20styling&width=300&height=200&seq=home-cat&orientation=landscape',
      count: '3,456 products'
    },
    {
      name: 'Sports & Fitness',
      image: 'https://readdy.ai/api/search-image?query=Fitness%20equipment%20including%20dumbbells%2C%20yoga%20mat%2C%20water%20bottle%20on%20clean%20white%20background%2C%20sports%20gear%20collection%2C%20active%20lifestyle%20products%2C%20healthy%20living%20essentials&width=300&height=200&seq=sports-cat&orientation=landscape',
      count: '1,892 products'
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section
        className="relative h-screen bg-cover bg-center flex items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://readdy.ai/api/search-image?query=Modern%20e-commerce%20shopping%20background%20with%20elegant%20product%20displays%2C%20soft%20lighting%2C%20minimalist%20retail%20environment%2C%20contemporary%20shopping%20experience%2C%20clean%20white%20and%20orange%20tones%2C%20professional%20commercial%20space&width=1920&height=1080&seq=hero-bg&orientation=landscape')`
        }}
      >
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Discover Amazing LaRosa Hub Products at Unbeatable Prices
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl">
              Shop from thousands of premium products with fast shipping, easy returns, and exceptional customer service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/products"
                className="bg-orange-500 text-white px-8 py-4 rounded-lg hover:bg-orange-600 text-lg font-semibold whitespace-nowrap cursor-pointer text-center"
              >
                Shop Now ttttt
              </Link>
              <Link
                href="/deals"
                className="bg-white text-gray-900 px-8 py-4 rounded-lg hover:bg-gray-100 text-lg font-semibold whitespace-nowrap cursor-pointer text-center"
              >
                View Deals
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-gray-50">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Shop by Category</h2>
            <p className="text-gray-600">Explore our wide range of product categories</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <Link
                key={index}
                href={`/categories/${category.name.toLowerCase().replace(/\\s+/g, '-')}`}
                className="group cursor-pointer"
              >
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-40 object-cover object-top group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="font-semibold text-gray-900 mb-1">{category.name}</h3>
                    <p className="text-gray-500 text-sm">{category.count}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Products</h2>
              <p className="text-gray-600">Hand-picked products just for you</p>
            </div>
            <Link
              href="/products"
              className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 whitespace-nowrap cursor-pointer"
            >
              View All
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-orange-500">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white text-center">
            <div className="flex flex-col items-center">
              <div className="relative mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full flex items-center justify-center shadow-lg">
                  <div className="w-9 h-9 flex items-center justify-center">
                    <i className="ri-plant-fill text-white text-2xl"></i>
                  </div>
                </div>
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Free Shipping</h3>
              <p className="text-orange-100">Free shipping on orders over $50</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 flex items-center justify-center bg-white/20 rounded-full mb-4">
                <i className="ri-shield-check-line text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">Secure Payment</h3>
              <p className="text-orange-100">100% secure payment processing</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 flex items-center justify-center bg-white/20 rounded-full mb-4">
                <i className="ri-customer-service-2-line text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
              <p className="text-orange-100">Round-the-clock customer support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gray-900">
        <div className="px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Stay Updated</h2>
          <p className="text-gray-400 mb-8">Get the latest deals and product updates delivered to your inbox</p>
          <div className="max-w-md mx-auto flex">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 bg-white border-0 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <button className="px-6 py-3 bg-orange-500 text-white rounded-r-lg hover:bg-orange-600 whitespace-nowrap cursor-pointer">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
