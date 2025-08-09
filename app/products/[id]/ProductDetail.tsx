
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import ProductCard from '../../../components/ui/ProductCard';
import { useCart } from '../../../components/CartProvider';
import CartNotification from '../../../components/CartNotification';

// Mock product data
const productData: { [key: string]: any } = {
  '1': {
    id: '1',
    name: 'Premium Wireless Headphones',
    price: 199.00,
    originalPrice: 249,
    images: [
      'https://readdy.ai/api/search-image?query=Premium%20wireless%20over-ear%20headphones%20with%20sleek%20black%20design%20on%20minimalist%20white%20background%2C%20studio%20lighting%2C%20product%20photography%20style%2C%20high-end%20electronics%2C%20modern%20technology%20aesthetic&width=500&height=500&seq=headphones-main&orientation=squarish',
      'https://readdy.ai/api/search-image?query=Premium%20wireless%20headphones%20side%20view%20showing%20padding%20and%20adjustable%20headband%20on%20white%20background%2C%20detailed%20product%20photography%2C%20professional%20lighting&width=500&height=500&seq=headphones-side&orientation=squarish',
      'https://readdy.ai/api/search-image?query=Premium%20wireless%20headphones%20folded%20compact%20view%20with%20carrying%20case%20on%20white%20background%2C%20travel-friendly%20design%2C%20product%20photography&width=500&height=500&seq=headphones-folded&orientation=squarish',
      'https://readdy.ai/api/search-image?query=Premium%20wireless%20headphones%20with%20smartphone%20and%20charging%20cable%20on%20white%20background%2C%20tech%20accessories%20setup%2C%20modern%20lifestyle&width=500&height=500&seq=headphones-setup&orientation=squarish'
    ],
    rating: 4.8,
    reviews: 1247,
    badge: '20% OFF',
    category: 'Electronics',
    brand: 'AudioTech',
    sku: 'AT-WH-001',
    inStock: true,
    stockCount: 15,
    description: 'Experience premium audio quality with these professional-grade wireless headphones. Featuring active noise cancellation, 30-hour battery life, and crystal-clear sound reproduction.',
    features: [
      'Active Noise Cancellation (ANC)',
      '30-hour battery life',
      'Premium leather padding',
      'Bluetooth 5.0 connectivity',
      'Quick charge: 15 min = 3 hours playback',
      'Foldable design for travel',
      'Built-in microphone for calls',
      'Compatible with all devices'
    ],
    specifications: {
      'Driver Size': '40mm Dynamic',
      'Frequency Response': '20Hz - 20kHz',
      'Impedance': '32Ω',
      'Battery Life': '30 hours (ANC on)',
      'Charging Time': '2 hours',
      'Weight': '250g',
      'Connectivity': 'Bluetooth 5.0, 3.5mm jack',
      'Warranty': '2 years'
    }
  },
  '2': {
    id: '2',
    name: 'Smart Fitness Watch',
    price: 299,
    images: [
      'https://readdy.ai/api/search-image?query=Modern%20smartwatch%20with%20black%20sport%20band%20displaying%20fitness%20metrics%20on%20clean%20white%20background%2C%20wearable%20technology%2C%20digital%20display%20showing%20heart%20rate%20and%20steps%2C%20premium%20quality%20product%20photography&width=500&height=500&seq=watch-main&orientation=squarish',
      'https://readdy.ai/api/search-image?query=Smart%20fitness%20watch%20side%20profile%20view%20showing%20sleek%20design%20and%20comfortable%20sport%20band%20on%20white%20background%2C%20detailed%20product%20photography%2C%20modern%20wearable%20device&width=500&height=500&seq=watch-side&orientation=squarish',
      'https://readdy.ai/api/search-image?query=Smart%20fitness%20watch%20with%20different%20colored%20sport%20bands%20displayed%20on%20white%20background%2C%20customization%20options%2C%20vibrant%20band%20colors%20including%20blue%20red%20and%20white&width=500&height=500&seq=watch-bands&orientation=squarish',
      'https://readdy.ai/api/search-image?query=Smart%20fitness%20watch%20being%20worn%20during%20workout%20showing%20fitness%20tracking%20interface%20on%20white%20background%2C%20active%20lifestyle%2C%20health%20monitoring%20technology&width=500&height=500&seq=watch-workout&orientation=squarish'
    ],
    rating: 4.6,
    reviews: 892,
    badge: 'BESTSELLER',
    category: 'Electronics',
    brand: 'FitTech',
    sku: 'FT-SW-002',
    inStock: true,
    stockCount: 8,
    description: 'Advanced fitness tracking meets smart connectivity. Monitor your health, track workouts, receive notifications, and stay connected with this premium smartwatch designed for active lifestyles.',
    features: [
      'Advanced health monitoring (heart rate, blood oxygen)',
      'GPS tracking for outdoor activities',
      '7-day battery life',
      'Water resistant up to 50m',
      '100+ workout modes',
      'Sleep quality tracking',
      'Smart notifications',
      'Voice assistant compatible',
      'Customizable watch faces',
      'Music control'
    ],
    specifications: {
      'Display': '1.4" AMOLED touchscreen',
      'Resolution': '454 x 454 pixels',
      'Battery Life': 'Up to 7 days',
      'Water Resistance': '5ATM (50m)',
      'Connectivity': 'Bluetooth 5.0, Wi-Fi',
      'Sensors': 'Heart rate, GPS, accelerometer, gyroscope',
      'Compatibility': 'iOS 12+, Android 6+',
      'Weight': '45g (without strap)'
    }
  },
  '3': {
    id: '3',
    name: 'Professional Camera Lens',
    price: 899,
    images: [
      'https://readdy.ai/api/search-image?query=Professional%20camera%20lens%20with%20black%20finish%20on%20white%20background%2C%20photography%20equipment%2C%20telephoto%20lens%20with%20detailed%20texture%2C%20studio%20product%20photography%2C%20high-end%20optics&width=500&height=500&seq=lens-main&orientation=squarish'
    ],
    rating: 4.9,
    reviews: 456,
    category: 'Electronics',
    brand: 'OpticsPro',
    sku: 'OP-CL-003',
    inStock: true,
    stockCount: 5,
    description: 'Professional-grade camera lens delivering exceptional image quality and precision. Perfect for portrait, landscape, and professional photography.',
    features: [
      'Ultra-sharp optics',
      'Fast autofocus system',
      'Weather-sealed construction',
      'Image stabilization',
      'Professional build quality'
    ],
    specifications: {
      'Focal Length': '85mm',
      'Aperture': 'f/1.4',
      'Mount': 'Canon EF',
      'Weight': '950g',
      'Filter Size': '77mm'
    }
  },
  '4': {
    id: '4',
    name: 'Ergonomic Office Chair',
    price: 449,
    originalPrice: 599,
    images: [
      'https://readdy.ai/api/search-image?query=Modern%20ergonomic%20office%20chair%20in%20charcoal%20gray%20fabric%20with%20mesh%20back%20on%20clean%20white%20background%2C%20professional%20furniture%2C%20contemporary%20design%2C%20comfortable%20seating%20solution&width=500&height=500&seq=chair-main&orientation=squarish'
    ],
    rating: 4.7,
    reviews: 623,
    badge: '25% OFF',
    category: 'Home',
    brand: 'ComfortSeating',
    sku: 'CS-EC-004',
    inStock: true,
    stockCount: 12,
    description: 'Premium ergonomic office chair designed for all-day comfort and productivity. Features adjustable lumbar support and breathable mesh design.',
    features: [
      'Adjustable lumbar support',
      'Breathable mesh back',
      'Height adjustable',
      'Armrest adjustment',
      '360-degree swivel'
    ],
    specifications: {
      'Material': 'Mesh and fabric',
      'Weight Capacity': '150kg',
      'Dimensions': '65x65x110cm',
      'Warranty': '5 years'
    }
  },
  '5': {
    id: '5',
    name: 'Designer Leather Handbag',
    price: 189,
    originalPrice: 259,
    images: [
      'https://readdy.ai/api/search-image?query=Elegant%20leather%20handbag%20in%20brown%20color%20on%20clean%20white%20background%2C%20luxury%20fashion%20accessory%2C%20premium%20quality%20leather%20goods%2C%20sophisticated%20design%2C%20minimalist%20product%20photography&width=500&height=500&seq=bag-main&orientation=squarish'
    ],
    rating: 4.5,
    reviews: 334,
    badge: '27% OFF',
    category: 'Fashion',
    brand: 'LuxeLeather',
    sku: 'LL-HB-005',
    inStock: true,
    stockCount: 20,
    description: 'Handcrafted leather handbag combining elegance with functionality. Made from premium genuine leather with sophisticated design details.',
    features: [
      'Genuine leather construction',
      'Multiple compartments',
      'Adjustable strap',
      'Premium hardware',
      'Handcrafted details'
    ],
    specifications: {
      'Material': '100% Genuine Leather',
      'Dimensions': '30x25x12cm',
      'Color': 'Brown',
      'Care': 'Leather conditioner recommended'
    }
  }
};

const relatedProducts = [
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
    id: '11',
    name: 'Gaming Mechanical Keyboard',
    price: 159,
    image: 'https://readdy.ai/api/search-image?query=Gaming%20mechanical%20keyboard%20with%20RGB%20lighting%20on%20clean%20background%2C%20computer%20accessory%2C%20gaming%20equipment%2C%20modern%20technology%2C%20professional%20setup&width=400&height=300&seq=keyboard-1&orientation=landscape',
    rating: 4.8,
    reviews: 678,
    badge: 'NEW',
    category: 'electronics'
  }
];

interface ProductDetailProps {
  productId: string;
}

export default function ProductDetail({ productId }: ProductDetailProps) {
  const product = productData[productId];
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedTab, setSelectedTab] = useState('description');
  const [quantity, setQuantity] = useState(1);
  const [showNotification, setShowNotification] = useState(false);
  const { addToCart } = useCart();
  const router = useRouter();

  if (!product) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="flex items-center justify-center py-20">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h1>
            <Link href="/products" className="text-orange-500 hover:text-orange-600 cursor-pointer">
              ← Back to Products
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.images[0]
      });
    }
    setShowNotification(true);
    setTimeout(() => {
      router.push('/cart');
    }, 1500);
  };

  return (
    <div className="min-h-screen">
      <Header />

      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-gray-500 hover:text-orange-500 cursor-pointer">Home</Link>
            <i className="ri-arrow-right-s-line text-gray-400"></i>
            <Link href="/products" className="text-gray-500 hover:text-orange-500 cursor-pointer">Products</Link>
            <i className="ri-arrow-right-s-line text-gray-400"></i>
            <span className="text-gray-900">{product.name}</span>
          </nav>
        </div>
      </div>

      <div className="px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover object-top"
              />
            </div>
            {product.images.length > 1 && (
              <div className="grid grid-cols-4 gap-2">
                {product.images.map((image: string, index: number) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`aspect-square bg-gray-100 rounded-lg overflow-hidden border-2 cursor-pointer ${
                      selectedImage === index ? 'border-orange-500' : 'border-transparent'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} view ${index + 1}`}
                      className="w-full h-full object-cover object-top"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            {product.badge && (
              <span className="inline-block bg-red-500 text-white text-sm px-3 py-1 rounded-full">
                {product.badge}
              </span>
            )}

            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
              <p className="text-gray-600 mb-4">by {product.brand} • SKU: {product.sku}</p>

              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <i
                      key={i}
                      className={`ri-star-${i < Math.floor(product.rating) ? 'fill' : 'line'} text-yellow-400`}
                    ></i>
                  ))}
                  <span className="ml-2 text-gray-600">({product.reviews} reviews)</span>
                </div>
              </div>

              <div className="flex items-center space-x-4 mb-6">
                <span className="text-3xl font-bold text-gray-900">R{product.price.toFixed(2)}</span>
                {product.originalPrice && (
                  <span className="text-xl text-gray-500 line-through">R{product.originalPrice.toFixed(2)}</span>
                )}
              </div>

              <p className="text-gray-700 mb-6">{product.description}</p>

              {/* Stock Status */}
              <div className="flex items-center space-x-2 mb-6">
                <i className={`ri-checkbox-circle-line text-lg ${product.inStock ? 'text-green-500' : 'text-red-500'}`}></i>
                <span className={product.inStock ? 'text-green-600' : 'text-red-600'}>
                  {product.inStock ? `In Stock (${product.stockCount} available)` : 'Out of Stock'}
                </span>
              </div>

              {/* Quantity & Add to Cart */}
              <div className="flex items-center space-x-4 mb-8">
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    <i className="ri-subtract-line"></i>
                  </button>
                  <span className="px-4 py-2 border-x border-gray-300 min-w-[50px] text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity(Math.min(product.stockCount, quantity + 1))}
                    className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    <i className="ri-add-line"></i>
                  </button>
                </div>
                <button
                  onClick={handleAddToCart}
                  disabled={!product.inStock}
                  className="flex-1 bg-orange-500 text-white py-3 px-6 rounded-lg hover:bg-orange-600 disabled:bg-gray-400 whitespace-nowrap cursor-pointer"
                >
                  Add to Cart
                </button>
                <button className="w-12 h-12 flex items-center justify-center border border-gray-300 rounded-lg hover:bg-gray-50 cursor-pointer">
                  <i className="ri-heart-line text-xl"></i>
                </button>
              </div>

              {/* Quick Actions */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <button className="flex items-center justify-center space-x-2 bg-gray-100 py-3 px-4 rounded-lg hover:bg-gray-200 cursor-pointer">
                  <i className="ri-truck-line w-5 h-5 flex items-center justify-center"></i>
                  <span>Free Shipping</span>
                </button>
                <button className="flex items-center justify-center space-x-2 bg-gray-100 py-3 px-4 rounded-lg hover:bg-gray-200 cursor-pointer">
                  <i className="ri-shield-check-line w-5 h-5 flex items-center justify-center"></i>
                  <span>2 Year Warranty</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="border-t border-gray-200 pt-8 mb-12">
          <div className="flex space-x-8 mb-8">
            {['description', 'features', 'specifications', 'reviews'].map((tab) => (
              <button
                key={tab}
                onClick={() => setSelectedTab(tab)}
                className={`pb-2 border-b-2 font-medium capitalize cursor-pointer ${
                  selectedTab === tab
                    ? 'border-orange-500 text-orange-500'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            {selectedTab === 'description' && (
              <div>
                <h3 className="text-xl font-semibold mb-4">Product Description</h3>
                <p className="text-gray-700 leading-relaxed">{product.description}</p>
              </div>
            )}

            {selectedTab === 'features' && (
              <div>
                <h3 className="text-xl font-semibold mb-4">Key Features</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {product.features.map((feature: string, index: number) => (
                    <li key={index} className="flex items-center space-x-3">
                      <i className="ri-check-line text-green-500"></i>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {selectedTab === 'specifications' && (
              <div>
                <h3 className="text-xl font-semibold mb-4">Technical Specifications</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="flex justify-between p-3 bg-white rounded border">
                      <span className="font-medium text-gray-900">{key}:</span>
                      <span className="text-gray-700">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {selectedTab === 'reviews' && (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold">Customer Reviews</h3>
                  <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 whitespace-nowrap cursor-pointer">
                    Write a Review
                  </button>
                </div>

                <div className="flex items-center space-x-6 mb-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-gray-900">{product.rating}</div>
                    <div className="flex items-center justify-center mb-1">
                      {[...Array(5)].map((_, i) => (
                        <i
                          key={i}
                          className={`ri-star-${i < Math.floor(product.rating) ? 'fill' : 'line'} text-yellow-400`}
                        ></i>
                      ))}
                    </div>
                    <div className="text-sm text-gray-600">{product.reviews} reviews</div>
                  </div>

                  <div className="flex-1 space-y-2">
                    {[5, 4, 3, 2, 1].map((stars) => (
                      <div key={stars} className="flex items-center space-x-3">
                        <span className="text-sm w-8">{stars}★</span>
                        <div className="flex-1 bg-gray-200 h-2 rounded-full">
                          <div
                            className="bg-yellow-400 h-2 rounded-full"
                            style={{ width: `${Math.random() * 100}%` }}
                          ></div>
                        </div>
                        <span className="text-sm text-gray-600 w-12">{Math.floor(Math.random() * 200)}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Related Products */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-8">You Might Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedProducts.map((relatedProduct) => (
              <ProductCard key={relatedProduct.id} {...relatedProduct} />
            ))}
          </div>
        </div>
      </div>

      <Footer />

      <CartNotification
        show={showNotification}
        productName={product.name}
        onClose={() => setShowNotification(false)}
      />
    </div>
  );
}
