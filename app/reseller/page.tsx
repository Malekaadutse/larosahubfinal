'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function ResellerPortal() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [stats, setStats] = useState({
    totalSales: 15847.50,
    monthlyEarnings: 2347.80,
    commission: 0.15,
    totalOrders: 127,
    pendingPayouts: 1250.45,
    customerCount: 89
  });

  useEffect(() => {
    // Check reseller authentication
    const resellerToken = localStorage.getItem('resellerToken');
    if (resellerToken === 'reseller_authenticated') {
      setIsAuthenticated(true);
    } else {
      router.push('/reseller/login');
    }
    setLoading(false);
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('resellerToken');
    router.push('/reseller/login');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-orange-500"></div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Reseller Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/" className="text-2xl font-['Pacifico'] text-orange-500">LaRosa Hub</Link>
              <span className="text-gray-300">|</span>
              <h1 className="text-xl font-semibold text-gray-800">Reseller Portal</h1>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <p className="text-sm text-gray-600">Welcome back,</p>
                <p className="font-medium text-gray-800">Sarah Johnson</p>
              </div>
              <button
                onClick={handleLogout}
                className="flex items-center space-x-2 px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg cursor-pointer whitespace-nowrap"
              >
                <i className="ri-logout-box-line w-4 h-4 flex items-center justify-center"></i>
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white shadow-sm min-h-screen">
          <nav className="p-6">
            <div className="space-y-2">
              <button
                onClick={() => setActiveTab('dashboard')}
                className={`w-full flex items-center space-x-3 p-3 rounded-lg cursor-pointer ${
                  activeTab === 'dashboard' ? 'bg-orange-50 text-orange-600' : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <i className="ri-dashboard-line w-5 h-5 flex items-center justify-center"></i>
                <span>Dashboard</span>
              </button>
              <button
                onClick={() => setActiveTab('products')}
                className={`w-full flex items-center space-x-3 p-3 rounded-lg cursor-pointer ${
                  activeTab === 'products' ? 'bg-orange-50 text-orange-600' : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <i className="ri-shopping-bag-line w-5 h-5 flex items-center justify-center"></i>
                <span>Products</span>
              </button>
              <button
                onClick={() => setActiveTab('orders')}
                className={`w-full flex items-center space-x-3 p-3 rounded-lg cursor-pointer ${
                  activeTab === 'orders' ? 'bg-orange-50 text-orange-600' : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <i className="ri-file-list-line w-5 h-5 flex items-center justify-center"></i>
                <span>My Orders</span>
              </button>
              <button
                onClick={() => setActiveTab('customers')}
                className={`w-full flex items-center space-x-3 p-3 rounded-lg cursor-pointer ${
                  activeTab === 'customers' ? 'bg-orange-50 text-orange-600' : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <i className="ri-user-line w-5 h-5 flex items-center justify-center"></i>
                <span>Customers</span>
              </button>
              <button
                onClick={() => setActiveTab('earnings')}
                className={`w-full flex items-center space-x-3 p-3 rounded-lg cursor-pointer ${
                  activeTab === 'earnings' ? 'bg-orange-50 text-orange-600' : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <i className="ri-money-dollar-circle-line w-5 h-5 flex items-center justify-center"></i>
                <span>Earnings</span>
              </button>
              <button
                onClick={() => setActiveTab('marketing')}
                className={`w-full flex items-center space-x-3 p-3 rounded-lg cursor-pointer ${
                  activeTab === 'marketing' ? 'bg-orange-50 text-orange-600' : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <i className="ri-megaphone-line w-5 h-5 flex items-center justify-center"></i>
                <span>Marketing</span>
              </button>
            </div>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">
          {activeTab === 'dashboard' && (
            <>
              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-600 text-sm">Total Sales</p>
                      <p className="text-3xl font-bold text-gray-800">${stats.totalSales.toLocaleString()}</p>
                    </div>
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <i className="ri-line-chart-line text-green-600 text-xl w-6 h-6 flex items-center justify-center"></i>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-600 text-sm">Monthly Earnings</p>
                      <p className="text-3xl font-bold text-gray-800">${stats.monthlyEarnings.toLocaleString()}</p>
                    </div>
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <i className="ri-money-dollar-circle-line text-blue-600 text-xl w-6 h-6 flex items-center justify-center"></i>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-600 text-sm">Commission Rate</p>
                      <p className="text-3xl font-bold text-gray-800">{(stats.commission * 100)}%</p>
                    </div>
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                      <i className="ri-percent-line text-purple-600 text-xl w-6 h-6 flex items-center justify-center"></i>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-600 text-sm">Total Orders</p>
                      <p className="text-3xl font-bold text-gray-800">{stats.totalOrders}</p>
                    </div>
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                      <i className="ri-shopping-cart-line text-orange-600 text-xl w-6 h-6 flex items-center justify-center"></i>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-600 text-sm">Pending Payouts</p>
                      <p className="text-3xl font-bold text-green-600">${stats.pendingPayouts.toLocaleString()}</p>
                    </div>
                    <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                      <i className="ri-time-line text-yellow-600 text-xl w-6 h-6 flex items-center justify-center"></i>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-600 text-sm">Total Customers</p>
                      <p className="text-3xl font-bold text-gray-800">{stats.customerCount}</p>
                    </div>
                    <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                      <i className="ri-user-line text-indigo-600 text-xl w-6 h-6 flex items-center justify-center"></i>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Actions</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <button className="p-4 bg-orange-50 hover:bg-orange-100 rounded-lg text-center cursor-pointer">
                      <i className="ri-add-line text-orange-500 text-2xl mb-2 w-8 h-8 flex items-center justify-center mx-auto"></i>
                      <p className="text-sm font-medium text-gray-800">Add Product</p>
                    </button>
                    <button className="p-4 bg-blue-50 hover:bg-blue-100 rounded-lg text-center cursor-pointer">
                      <i className="ri-share-line text-blue-500 text-2xl mb-2 w-8 h-8 flex items-center justify-center mx-auto"></i>
                      <p className="text-sm font-medium text-gray-800">Share Link</p>
                    </button>
                    <button className="p-4 bg-green-50 hover:bg-green-100 rounded-lg text-center cursor-pointer">
                      <i className="ri-bar-chart-line text-green-500 text-2xl mb-2 w-8 h-8 flex items-center justify-center mx-auto"></i>
                      <p className="text-sm font-medium text-gray-800">View Analytics</p>
                    </button>
                    <button className="p-4 bg-purple-50 hover:bg-purple-100 rounded-lg text-center cursor-pointer">
                      <i className="ri-customer-service-line text-purple-500 text-2xl mb-2 w-8 h-8 flex items-center justify-center mx-auto"></i>
                      <p className="text-sm font-medium text-gray-800">Support</p>
                    </button>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-sm p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Recent Sales</h3>
                  <div className="space-y-3">
                    {[
                      { product: 'Fresh Organic Tomatoes', customer: 'John Smith', amount: '$24.50', time: '2 hours ago' },
                      { product: 'Premium Olive Oil', customer: 'Emma Wilson', amount: '$45.00', time: '4 hours ago' },
                      { product: 'Garden Fresh Lettuce', customer: 'Mike Johnson', amount: '$12.75', time: '6 hours ago' }
                    ].map((sale, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div>
                          <p className="font-medium text-gray-800 text-sm">{sale.product}</p>
                          <p className="text-xs text-gray-600">{sale.customer}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium text-gray-800">{sale.amount}</p>
                          <p className="text-xs text-gray-500">{sale.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}

          {activeTab === 'products' && (
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-800">My Products</h3>
                <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 cursor-pointer whitespace-nowrap">
                  Add New Product
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4 text-gray-600 font-medium">Product</th>
                      <th className="text-left py-3 px-4 text-gray-600 font-medium">Price</th>
                      <th className="text-left py-3 px-4 text-gray-600 font-medium">Stock</th>
                      <th className="text-left py-3 px-4 text-gray-600 font-medium">Sales</th>
                      <th className="text-left py-3 px-4 text-gray-600 font-medium">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { name: 'Fresh Organic Tomatoes', price: '$4.99/kg', stock: 45, sales: 127 },
                      { name: 'Premium Olive Oil', price: '$15.99', stock: 23, sales: 89 },
                      { name: 'Garden Fresh Lettuce', price: '$2.49', stock: 67, sales: 156 }
                    ].map((product, index) => (
                      <tr key={index} className="border-b">
                        <td className="py-4 px-4">{product.name}</td>
                        <td className="py-4 px-4">{product.price}</td>
                        <td className="py-4 px-4">{product.stock}</td>
                        <td className="py-4 px-4">{product.sales}</td>
                        <td className="py-4 px-4">
                          <div className="flex space-x-2">
                            <button className="text-blue-600 hover:text-blue-800 cursor-pointer">
                              <i className="ri-edit-line w-4 h-4 flex items-center justify-center"></i>
                            </button>
                            <button className="text-red-600 hover:text-red-800 cursor-pointer">
                              <i className="ri-delete-bin-line w-4 h-4 flex items-center justify-center"></i>
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'orders' && (
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-6">My Orders</h3>
              <div className="space-y-4">
                {[
                  { id: '#RS-12847', customer: 'John Smith', products: 3, total: '$127.50', status: 'Delivered', date: '2024-01-15' },
                  { id: '#RS-12846', customer: 'Emma Wilson', products: 2, total: '$89.00', status: 'Shipped', date: '2024-01-14' },
                  { id: '#RS-12845', customer: 'Mike Johnson', products: 5, total: '$245.75', status: 'Processing', date: '2024-01-13' }
                ].map((order) => (
                  <div key={order.id} className="p-4 border rounded-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-gray-800">{order.id}</p>
                        <p className="text-sm text-gray-600">{order.customer} • {order.products} products</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-gray-800">{order.total}</p>
                        <div className="flex items-center space-x-2">
                          <span className={`inline-block w-2 h-2 rounded-full ${
                            order.status === 'Delivered' ? 'bg-green-500' :
                            order.status === 'Shipped' ? 'bg-blue-500' : 'bg-orange-500'
                          }`}></span>
                          <span className="text-xs text-gray-500">{order.status}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'earnings' && (
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-6">Earnings Overview</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl">
                  <h4 className="text-lg font-medium text-green-800 mb-2">Available for Withdrawal</h4>
                  <p className="text-3xl font-bold text-green-600">${stats.pendingPayouts.toLocaleString()}</p>
                  <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 cursor-pointer whitespace-nowrap">
                    Request Withdrawal
                  </button>
                </div>
                <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
                  <h4 className="text-lg font-medium text-blue-800 mb-2">Next Payout Date</h4>
                  <p className="text-xl font-semibold text-blue-600">January 25, 2024</p>
                  <p className="text-sm text-blue-600 mt-2">Estimated amount: $1,247.80</p>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}