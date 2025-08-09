'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';

export default function CategoriesPage() {
  const categories = [
    {
      id: 'electronics',
      name: 'Electronics',
      image: 'https://readdy.ai/api/search-image?query=Modern%20electronics%20collection%20including%20smartphones%2C%20tablets%2C%20laptops%2C%20headphones%20arranged%20on%20clean%20white%20background%2C%20technology%20products%20showcase%2C%20minimalist%20style%2C%20premium%20electronic%20devices%2C%20consumer%20electronics%20display&width=400&height=300&seq=electronics-cat-main&orientation=landscape',
      productCount: 2341,
      description: 'Latest smartphones, laptops, tablets, and electronic gadgets',
      subcategories: ['Smartphones', 'Laptops', 'Tablets', 'Headphones', 'Smart Watches', 'Gaming']
    },
    {
      id: 'fashion',
      name: 'Fashion',
      image: 'https://readdy.ai/api/search-image?query=Stylish%20fashion%20collection%20including%20trendy%20clothing%2C%20shoes%2C%20accessories%2C%20handbags%20arranged%20elegantly%20on%20white%20background%2C%20modern%20fashion%20items%2C%20contemporary%20apparel%20showcase%2C%20clothing%20and%20accessories%20display&width=400&height=300&seq=fashion-cat-main&orientation=landscape',
      productCount: 5678,
      description: 'Trendy clothing, shoes, and accessories for all occasions',
      subcategories: ['Mens Clothing', 'Womens Clothing', 'Shoes', 'Accessories', 'Bags', 'Jewelry']
    },
    {
      id: 'home-living',
      name: 'Home & Living',
      image: 'https://readdy.ai/api/search-image?query=Beautiful%20home%20decor%20collection%20including%20furniture%2C%20cushions%2C%20plants%2C%20candles%2C%20home%20accessories%20on%20white%20background%2C%20modern%20interior%20design%20items%2C%20cozy%20living%20essentials%2C%20contemporary%20home%20styling%20products&width=400&height=300&seq=home-cat-main&orientation=landscape',
      productCount: 3456,
      description: 'Furniture, decor, and essentials for your perfect home',
      subcategories: ['Furniture', 'Decor', 'Kitchen', 'Bedding', 'Storage', 'Lighting']
    },
    {
      id: 'sports-fitness',
      name: 'Sports & Fitness',
      image: 'https://readdy.ai/api/search-image?query=Fitness%20equipment%20collection%20including%20dumbbells%2C%20yoga%20mats%2C%20sports%20shoes%2C%20water%20bottles%2C%20exercise%20gear%20on%20clean%20white%20background%2C%20athletic%20equipment%20showcase%2C%20healthy%20lifestyle%20products%2C%20gym%20accessories&width=400&height=300&seq=sports-cat-main&orientation=landscape',
      productCount: 1892,
      description: 'Equipment and gear for active lifestyle and fitness',
      subcategories: ['Gym Equipment', 'Sports Gear', 'Activewear', 'Outdoor Sports', 'Yoga', 'Running']
    },
    {
      id: 'beauty-health',
      name: 'Beauty & Health',
      image: 'https://readdy.ai/api/search-image?query=Beauty%20and%20health%20products%20including%20skincare%20bottles%2C%20cosmetics%2C%20wellness%20items%2C%20health%20supplements%20arranged%20on%20clean%20white%20background%2C%20beauty%20care%20collection%2C%20personal%20care%20products%2C%20health%20and%20wellness%20display&width=400&height=300&seq=beauty-cat-main&orientation=landscape',
      productCount: 2156,
      description: 'Skincare, cosmetics, and wellness products',
      subcategories: ['Skincare', 'Makeup', 'Hair Care', 'Supplements', 'Personal Care', 'Wellness']
    },
    {
      id: 'books-media',
      name: 'Books & Media',
      image: 'https://readdy.ai/api/search-image?query=Books%20and%20media%20collection%20including%20hardcover%20books%2C%20e-readers%2C%20headphones%2C%20educational%20materials%20on%20clean%20white%20background%2C%20literature%20and%20learning%20products%2C%20knowledge%20and%20entertainment%20items%20display&width=400&height=300&seq=books-cat-main&orientation=landscape',
      productCount: 1234,
      description: 'Books, e-books, and educational materials',
      subcategories: ['Fiction', 'Non-Fiction', 'Educational', 'Children Books', 'E-Books', 'Audio Books']
    },
    {
      id: 'automotive',
      name: 'Automotive',
      image: 'https://readdy.ai/api/search-image?query=Automotive%20accessories%20and%20car%20parts%20including%20car%20care%20products%2C%20tools%2C%20accessories%2C%20automotive%20equipment%20on%20clean%20white%20background%2C%20vehicle%20maintenance%20items%2C%20car%20accessories%20showcase&width=400&height=300&seq=auto-cat-main&orientation=landscape',
      productCount: 987,
      description: 'Car accessories, parts, and maintenance products',
      subcategories: ['Car Care', 'Tools', 'Electronics', 'Accessories', 'Parts', 'Maintenance']
    },
    {
      id: 'toys-games',
      name: 'Toys & Games',
      image: 'https://readdy.ai/api/search-image?query=Colorful%20toys%20and%20games%20collection%20including%20board%20games%2C%20educational%20toys%2C%20puzzles%2C%20children%20toys%20arranged%20on%20clean%20white%20background%2C%20fun%20and%20entertainment%20products%2C%20playful%20items%20display&width=400&height=300&seq=toys-cat-main&orientation=landscape',
      productCount: 1567,
      description: 'Fun toys and games for all ages',
      subcategories: ['Board Games', 'Educational Toys', 'Puzzles', 'Action Figures', 'Outdoor Toys', 'Electronic Games']
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-gray-50 py-16">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Product Categories</h1>
            <p className="text-xl text-gray-600">
              Explore our wide range of product categories and find exactly what you're looking for
            </p>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {categories.map((category) => (
              <Link
                key={category.id}
                href={`/products?category=${category.id}`}
                className="group cursor-pointer"
              >
                <div className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-lg transition-all duration-300 border border-gray-100">
                  <div className="relative overflow-hidden">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-48 object-cover object-top group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-semibold text-gray-900 group-hover:text-orange-500 transition-colors">
                        {category.name}
                      </h3>
                      <span className="text-sm text-orange-500 font-medium bg-orange-50 px-2 py-1 rounded-full">
                        {category.productCount.toLocaleString()}
                      </span>
                    </div>
                    
                    <p className="text-gray-600 text-sm mb-4">
                      {category.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-1 mb-4">
                      {category.subcategories.slice(0, 3).map((sub, index) => (
                        <span
                          key={index}
                          className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
                        >
                          {sub}
                        </span>
                      ))}
                      {category.subcategories.length > 3 && (
                        <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                          +{category.subcategories.length - 3} more
                        </span>
                      )}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-orange-500 font-medium text-sm group-hover:text-orange-600">
                        Shop Now ttttt
                      </span>
                      <i className="ri-arrow-right-line text-orange-500 group-hover:translate-x-1 transition-transform"></i>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Categories */}
      <section className="bg-orange-500 py-16">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Most Popular Categories</h2>
            <p className="text-orange-100 max-w-2xl mx-auto">
              Discover our best-selling categories with thousands of satisfied customers
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.slice(0, 3).map((category, index) => (
              <div key={category.id} className="text-center">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl font-bold text-white">{index + 1}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{category.name}</h3>
                <p className="text-orange-100 mb-4">{category.productCount.toLocaleString()} products</p>
                <Link
                  href={`/products?category=${category.id}`}
                  className="inline-flex items-center space-x-2 bg-white text-orange-500 px-6 py-2 rounded-lg hover:bg-gray-100 cursor-pointer whitespace-nowrap"
                >
                  <span>Explore</span>
                  <i className="ri-arrow-right-line"></i>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}