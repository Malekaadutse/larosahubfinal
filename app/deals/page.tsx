'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ProductCard from '../../components/ui/ProductCard';
import { useState, useEffect } from 'react';

export default function DealsPage() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 45,
    seconds: 32
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let newSeconds = prev.seconds - 1;
        let newMinutes = prev.minutes;
        let newHours = prev.hours;

        if (newSeconds < 0) {
          newSeconds = 59;
          newMinutes -= 1;
          if (newMinutes < 0) {
            newMinutes = 59;
            newHours -= 1;
            if (newHours < 0) {
              newHours = 23;
              newMinutes = 59;
              newSeconds = 59;
            }
          }
        }

        return {
          hours: newHours,
          minutes: newMinutes,
          seconds: newSeconds
        };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const flashDeals = [
    {
      id: '13',
      name: 'Wireless Bluetooth Earbuds',
      price: 45.99,
      originalPrice: 89.99,
      image: 'https://readdy.ai/api/search-image?query=Premium%20wireless%20bluetooth%20earbuds%20in%20black%20charging%20case%20on%20clean%20white%20background%2C%20modern%20audio%20technology%2C%20sleek%20wireless%20headphones%2C%20compact%20design%2C%20professional%20product%20photography&width=400&height=300&seq=earbuds-flash&orientation=landscape',
      rating: 4.7,
      reviews: 892,
      badge: '49% OFF',
      discount: 49
    },
    {
      id: '14',
      name: 'Smart Home Security Camera',
      price: 79.99,
      originalPrice: 129.99,
      image: 'https://readdy.ai/api/search-image?query=Modern%20smart%20home%20security%20camera%20in%20white%20color%20on%20clean%20background%2C%20wireless%20surveillance%20camera%2C%20home%20security%20device%2C%20contemporary%20technology%2C%20minimalist%20design&width=400&height=300&seq=camera-flash&orientation=landscape',
      rating: 4.5,
      reviews: 634,
      badge: '38% OFF',
      discount: 38
    },
    {
      id: '15',
      name: 'Portable Phone Charger',
      price: 24.99,
      originalPrice: 39.99,
      image: 'https://readdy.ai/api/search-image?query=Compact%20portable%20phone%20charger%20power%20bank%20in%20sleek%20black%20design%20on%20white%20background%2C%20mobile%20charging%20device%2C%20portable%20battery%20pack%2C%20modern%20tech%20accessory&width=400&height=300&seq=charger-flash&orientation=landscape',
      rating: 4.6,
      reviews: 1156,
      badge: '38% OFF',
      discount: 38
    },
    {
      id: '16',
      name: 'LED Desk Lamp',
      price: 34.99,
      originalPrice: 59.99,
      image: 'https://readdy.ai/api/search-image?query=Modern%20LED%20desk%20lamp%20with%20adjustable%20arm%20in%20white%20color%20on%20clean%20background%2C%20contemporary%20office%20lighting%2C%20minimalist%20desk%20accessory%2C%20sleek%20design%20workspace%20lighting&width=400&height=300&seq=lamp-flash&orientation=landscape',
      rating: 4.4,
      reviews: 423,
      badge: '42% OFF',
      discount: 42
    }
  ];

  const weeklyDeals = [
    {
      id: '17',
      name: 'Coffee Maker Machine',
      price: 89.99,
      originalPrice: 149.99,
      image: 'https://readdy.ai/api/search-image?query=Modern%20coffee%20maker%20machine%20in%20stainless%20steel%20finish%20on%20white%20background%2C%20automatic%20coffee%20brewing%20device%2C%20kitchen%20appliance%2C%20contemporary%20design%2C%20professional%20coffee%20equipment&width=400&height=300&seq=coffee-weekly&orientation=landscape',
      rating: 4.8,
      reviews: 756,
      badge: '40% OFF'
    },
    {
      id: '18',
      name: 'Wireless Gaming Mouse',
      price: 59.99,
      originalPrice: 89.99,
      image: 'https://readdy.ai/api/search-image?query=Wireless%20gaming%20mouse%20with%20RGB%20lighting%20in%20black%20color%20on%20clean%20background%2C%20gaming%20peripheral%2C%20computer%20accessory%2C%20modern%20gaming%20equipment%2C%20ergonomic%20design&width=400&height=300&seq=mouse-weekly&orientation=landscape',
      rating: 4.6,
      reviews: 1245,
      badge: '33% OFF'
    },
    {
      id: '19',
      name: 'Bamboo Cutting Board Set',
      price: 39.99,
      originalPrice: 69.99,
      image: 'https://readdy.ai/api/search-image?query=Set%20of%20bamboo%20cutting%20boards%20in%20different%20sizes%20on%20white%20background%2C%20kitchen%20accessories%2C%20wooden%20cutting%20board%20collection%2C%20natural%20wood%20kitchen%20tools%2C%20eco-friendly%20kitchenware&width=400&height=300&seq=cutting-weekly&orientation=landscape',
      rating: 4.7,
      reviews: 532,
      badge: '43% OFF'
    },
    {
      id: '20',
      name: 'Bluetooth Speaker',
      price: 49.99,
      originalPrice: 79.99,
      image: 'https://readdy.ai/api/search-image?query=Portable%20Bluetooth%20speaker%20in%20modern%20design%20on%20clean%20white%20background%2C%20wireless%20audio%20device%2C%20compact%20sound%20system%2C%20contemporary%20technology%2C%20premium%20audio%20equipment&width=400&height=300&seq=speaker-weekly&orientation=landscape',
      rating: 4.5,
      reviews: 887,
      badge: '38% OFF'
    },
    {
      id: '21',
      name: 'Memory Foam Pillow',
      price: 29.99,
      originalPrice: 49.99,
      image: 'https://readdy.ai/api/search-image?query=Memory%20foam%20pillow%20in%20white%20color%20with%20soft%20texture%20on%20clean%20background%2C%20comfortable%20bedding%20accessory%2C%20sleep%20comfort%20product%2C%20ergonomic%20pillow%20design%2C%20bedroom%20essential&width=400&height=300&seq=pillow-weekly&orientation=landscape',
      rating: 4.3,
      reviews: 698,
      badge: '40% OFF'
    },
    {
      id: '22',
      name: 'Stainless Steel Water Bottle',
      price: 19.99,
      originalPrice: 34.99,
      image: 'https://readdy.ai/api/search-image?query=Stainless%20steel%20water%20bottle%20with%20sleek%20design%20in%20silver%20color%20on%20white%20background%2C%20insulated%20water%20bottle%2C%20hydration%20accessory%2C%20eco-friendly%20drinkware%2C%20modern%20lifestyle%20product&width=400&height=300&seq=bottle-weekly&orientation=landscape',
      rating: 4.4,
      reviews: 456,
      badge: '43% OFF'
    }
  ];

  const dealCategories = [
    {
      name: 'Electronics',
      discount: 'Up to 60% OFF',
      image: 'https://readdy.ai/api/search-image?query=Electronics%20sale%20banner%20with%20smartphones%2C%20laptops%2C%20headphones%20on%20colorful%20background%2C%20technology%20discount%20promotion%2C%20electronic%20devices%20sale%2C%20modern%20tech%20deals%20display&width=300&height=200&seq=electronics-deal&orientation=landscape',
      itemsCount: '500+ items'
    },
    {
      name: 'Fashion',
      discount: 'Up to 50% OFF',
      image: 'https://readdy.ai/api/search-image?query=Fashion%20sale%20banner%20with%20clothing%2C%20shoes%2C%20accessories%20on%20stylish%20background%2C%20fashion%20discount%20promotion%2C%20trendy%20apparel%20deals%2C%20clothing%20sale%20display&width=300&height=200&seq=fashion-deal&orientation=landscape',
      itemsCount: '800+ items'
    },
    {
      name: 'Home & Living',
      discount: 'Up to 45% OFF',
      image: 'https://readdy.ai/api/search-image?query=Home%20decor%20sale%20banner%20with%20furniture%2C%20plants%2C%20home%20accessories%20on%20warm%20background%2C%20home%20improvement%20deals%2C%20interior%20design%20discount%2C%20home%20living%20sale%20display&width=300&height=200&seq=home-deal&orientation=landscape',
      itemsCount: '300+ items'
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section 
        className="relative py-20 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://readdy.ai/api/search-image?query=Shopping%20deals%20and%20discounts%20background%20with%20sale%20tags%2C%20promotional%20banners%2C%20shopping%20bags%2C%20discount%20symbols%20on%20vibrant%20colorful%20background%2C%20retail%20sale%20atmosphere&width=1920&height=600&seq=deals-hero&orientation=landscape')`
        }}
      >
        <div className="px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Amazing Deals & Discounts
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Discover incredible savings on your favorite products. Limited time offers you don't want to miss!
          </p>
          
          {/* Countdown Timer */}
          <div className="flex items-center justify-center space-x-6 mb-8">
            <div className="text-center">
              <div className="bg-white text-black text-3xl font-bold px-4 py-2 rounded-lg min-w-16" suppressHydrationWarning={true}>
                {timeLeft.hours.toString().padStart(2, '0')}
              </div>
              <p className="text-sm mt-2">Hours</p>
            </div>
            <div className="text-2xl">:</div>
            <div className="text-center">
              <div className="bg-white text-black text-3xl font-bold px-4 py-2 rounded-lg min-w-16" suppressHydrationWarning={true}>
                {timeLeft.minutes.toString().padStart(2, '0')}
              </div>
              <p className="text-sm mt-2">Minutes</p>
            </div>
            <div className="text-2xl">:</div>
            <div className="text-center">
              <div className="bg-white text-black text-3xl font-bold px-4 py-2 rounded-lg min-w-16" suppressHydrationWarning={true}>
                {timeLeft.seconds.toString().padStart(2, '0')}
              </div>
              <p className="text-sm mt-2">Seconds</p>
            </div>
          </div>
          
          <div className="bg-orange-500 inline-block px-6 py-3 rounded-lg">
            <span className="text-2xl font-bold">Flash Sale Ends Soon!</span>
          </div>
        </div>
      </section>

      {/* Flash Deals */}
      <section className="py-16 bg-red-50">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-12">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">
                <i className="ri-flashlight-fill text-white text-xl"></i>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900">Flash Deals</h2>
                <p className="text-red-600 font-medium">Limited time • While supplies last</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {flashDeals.map((product) => (
              <div key={product.id} className="relative">
                <ProductCard {...product} />
                <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                  -{product.discount}%
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deal Categories */}
      <section className="py-16">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Shop by Category Deals</h2>
            <p className="text-gray-600">Explore amazing discounts across all categories</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {dealCategories.map((category, index) => (
              <div key={index} className="relative overflow-hidden rounded-2xl shadow-lg group cursor-pointer">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
                  <p className="text-orange-300 font-semibold text-lg mb-1">{category.discount}</p>
                  <p className="text-gray-200 text-sm">{category.itemsCount}</p>
                  <button className="mt-4 bg-white text-black px-6 py-2 rounded-lg hover:bg-gray-100 cursor-pointer whitespace-nowrap">
                    Shop Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Weekly Deals */}
      <section className="py-16 bg-gray-50">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Weekly Deals</h2>
            <p className="text-gray-600">Great savings that last all week long</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {weeklyDeals.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 cursor-pointer whitespace-nowrap">
              View All Weekly Deals
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-red-500">
        <div className="px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Never Miss a Deal</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and be the first to know about exclusive deals and flash sales
          </p>
          <div className="max-w-md mx-auto flex">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-white text-gray-900"
            />
            <button className="bg-gray-900 text-white px-6 py-3 rounded-r-lg hover:bg-gray-800 cursor-pointer whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
