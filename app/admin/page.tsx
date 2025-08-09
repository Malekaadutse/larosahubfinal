
'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function AdminPortal() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [stats, setStats] = useState({
    totalCustomers: 2847,
    newCustomersThisMonth: 234,
    newCustomersToday: 12,
    customerGrowthRate: 8.5,
    totalRevenue: 127450.75,
    monthlyRevenue: 23847.50,
    dailyRevenue: 1247.30,
    revenueGrowthRate: 12.3,
    totalOrders: 1456,
    pendingOrders: 67,
    completedOrders: 1389,
    totalProducts: 324,
    lowStockProducts: 12,
    activeResellers: 28,
    totalCommissionPaid: 15420.30,
    averageOrderValue: 87.55,
    conversionRate: 3.2
  });

  useEffect(() => {
    const adminToken = localStorage.getItem('adminToken');
    if (adminToken === 'admin_authenticated') {
      setIsAuthenticated(true);
    } else {
      router.push('/admin/login');
    }
    setLoading(false);
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    router.push('/admin/login');
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

  const recentCustomers = [
    { id: 1, name: 'John Smith', email: 'john.smith@email.com', joinDate: '2024-01-15', totalOrders: 5, totalSpent: '$347.50', status: 'Active' },
    { id: 2, name: 'Emma Wilson', email: 'emma.wilson@email.com', joinDate: '2024-01-14', totalOrders: 3, totalSpent: '$189.25', status: 'Active' },
    { id: 3, name: 'Mike Johnson', email: 'mike.johnson@email.com', joinDate: '2024-01-13', totalOrders: 8, totalSpent: '$624.75', status: 'Active' },
    { id: 4, name: 'Sarah Davis', email: 'sarah.davis@email.com', joinDate: '2024-01-12', totalOrders: 2, totalSpent: '$127.90', status: 'Active' },
    { id: 5, name: 'David Brown', email: 'david.brown@email.com', joinDate: '2024-01-11', totalOrders: 6, totalSpent: '$456.80', status: 'Active' },
    { id: 6, name: 'Lisa Anderson', email: 'lisa.anderson@email.com', joinDate: '2024-01-10', totalOrders: 4, totalSpent: '$298.45', status: 'Active' },
    { id: 7, name: 'Robert Taylor', email: 'robert.taylor@email.com', joinDate: '2024-01-09', totalOrders: 7, totalSpent: '$543.20', status: 'Active' },
    { id: 8, name: 'Jennifer Lee', email: 'jennifer.lee@email.com', joinDate: '2024-01-08', totalOrders: 3, totalSpent: '$215.75', status: 'Active' }
  ];

  const customerRegistrationData = [
    { month: 'Jul', registrations: 185 },
    { month: 'Aug', registrations: 223 },
    { month: 'Sep', registrations: 198 },
    { month: 'Oct', registrations: 256 },
    { month: 'Nov', registrations: 289 },
    { month: 'Dec', registrations: 312 },
    { month: 'Jan', registrations: 234 }
  ];

  const monthlyRevenueData = [
    { month: 'Jul', revenue: 18500 },
    { month: 'Aug', revenue: 22300 },
    { month: 'Sep', revenue: 19800 },
    { month: 'Oct', revenue: 25600 },
    { month: 'Nov', revenue: 28900 },
    { month: 'Dec', revenue: 31200 },
    { month: 'Jan', revenue: 23847 }
  ];

  const financialBreakdown = [
    { category: 'Product Sales', amount: 95847.50, percentage: 75.2 },
    { category: 'Shipping Fees', amount: 18420.75, percentage: 14.5 },
    { category: 'Gift Cards', amount: 8934.25, percentage: 7.0 },
    { category: 'Other Revenue', amount: 4248.25, percentage: 3.3 }
  ];

  const recentOrders = [
    { id: '#ORD-2024-0156', customer: 'John Smith', amount: '$89.50', status: 'Completed', date: '2024-01-15' },
    { id: '#ORD-2024-0155', customer: 'Emma Wilson', amount: '$156.75', status: 'Processing', date: '2024-01-15' },
    { id: '#ORD-2024-0154', customer: 'Mike Johnson', amount: '$245.30', status: 'Shipped', date: '2024-01-14' },
    { id: '#ORD-2024-0153', customer: 'Sarah Davis', amount: '$67.25', status: 'Pending', date: '2024-01-14' },
    { id: '#ORD-2024-0152', customer: 'David Brown', amount: '$134.90', status: 'Completed', date: '2024-01-13' }
  ];

  const systemAlerts = [
    { type: 'warning', message: '12 products are running low on stock', time: '2 hours ago' },
    { type: 'info', message: 'Monthly financial report is ready for review', time: '4 hours ago' },
    { type: 'success', message: 'Server backup completed successfully', time: '6 hours ago' },
    { type: 'error', message: '3 failed payment attempts require attention', time: '8 hours ago' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Admin Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/" className="text-2xl font-['Pacifico'] text-orange-500">LaRosa Hub</Link>
              <span className="text-gray-300">|</span>
              <h1 className="text-xl font-semibold text-gray-800">Admin Dashboard</h1>
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
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white shadow-sm min-h-screen">
          <nav className="p-6">
            <div className="space-y-2">
              <button 
                onClick={() => setActiveTab('dashboard')}
                className={`w-full flex items-center space-x-3 p-3 rounded-lg cursor-pointer ${activeTab === 'dashboard' ? 'bg-orange-50 text-orange-600' : 'text-gray-600 hover:bg-gray-50'}`}
              >
                <i className="ri-dashboard-line w-5 h-5 flex items-center justify-center"></i>
                <span>Dashboard</span>
              </button>
              <button 
                onClick={() => setActiveTab('customers')}
                className={`w-full flex items-center space-x-3 p-3 rounded-lg cursor-pointer ${activeTab === 'customers' ? 'bg-orange-50 text-orange-600' : 'text-gray-600 hover:bg-gray-50'}`}
              >
                <i className="ri-user-line w-5 h-5 flex items-center justify-center"></i>
                <span>Customer Analytics</span>
              </button>
              <button 
                onClick={() => setActiveTab('financials')}
                className={`w-full flex items-center space-x-3 p-3 rounded-lg cursor-pointer ${activeTab === 'financials' ? 'bg-orange-50 text-orange-600' : 'text-gray-600 hover:bg-gray-50'}`}
              >
                <i className="ri-money-dollar-circle-line w-5 h-5 flex items-center justify-center"></i>
                <span>Financial Dashboard</span>
              </button>
              <button 
                onClick={() => setActiveTab('orders')}
                className={`w-full flex items-center space-x-3 p-3 rounded-lg cursor-pointer ${activeTab === 'orders' ? 'bg-orange-50 text-orange-600' : 'text-gray-600 hover:bg-gray-50'}`}
              >
                <i className="ri-file-list-line w-5 h-5 flex items-center justify-center"></i>
                <span>Order Management</span>
              </button>
              <button 
                onClick={() => setActiveTab('resellers')}
                className={`w-full flex items-center space-x-3 p-3 rounded-lg cursor-pointer ${activeTab === 'resellers' ? 'bg-orange-50 text-orange-600' : 'text-gray-600 hover:bg-gray-50'}`}
              >
                <i className="ri-team-line w-5 h-5 flex items-center justify-center"></i>
                <span>Reseller Management</span>
              </button>
              <button 
                onClick={() => setActiveTab('reports')}
                className={`w-full flex items-center space-x-3 p-3 rounded-lg cursor-pointer ${activeTab === 'reports' ? 'bg-orange-50 text-orange-600' : 'text-gray-600 hover:bg-gray-50'}`}
              >
                <i className="ri-file-chart-line w-5 h-5 flex items-center justify-center"></i>
                <span>Reports & Analytics</span>
              </button>
            </div>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">
          {activeTab === 'dashboard' && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-800">Admin Dashboard</h2>
                <div className="text-sm text-gray-500">
                  Last updated: {new Date().toLocaleString()}
                </div>
              </div>
              
              {/* Key Metrics Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-blue-500">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-600 text-sm font-medium">Total Customers</p>
                      <p className="text-3xl font-bold text-gray-800 mb-1">{stats.totalCustomers.toLocaleString()}</p>
                      <p className="text-green-600 text-xs">+{stats.newCustomersThisMonth} this month</p>
                    </div>
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <i className="ri-user-line text-blue-600 text-xl w-6 h-6 flex items-center justify-center"></i>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-green-500">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-600 text-sm font-medium">Total Revenue</p>
                      <p className="text-3xl font-bold text-gray-800 mb-1">${stats.totalRevenue.toLocaleString()}</p>
                      <p className="text-green-600 text-xs">+{stats.revenueGrowthRate}% growth</p>
                    </div>
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <i className="ri-money-dollar-circle-line text-green-600 text-xl w-6 h-6 flex items-center justify-center"></i>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-orange-500">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-600 text-sm font-medium">Total Orders</p>
                      <p className="text-3xl font-bold text-gray-800 mb-1">{stats.totalOrders.toLocaleString()}</p>
                      <p className="text-orange-600 text-xs">{stats.pendingOrders} pending</p>
                    </div>
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                      <i className="ri-shopping-cart-line text-orange-600 text-xl w-6 h-6 flex items-center justify-center"></i>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-purple-500">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-600 text-sm font-medium">Active Resellers</p>
                      <p className="text-3xl font-bold text-gray-800 mb-1">{stats.activeResellers}</p>
                      <p className="text-purple-600 text-xs">Commission: ${stats.totalCommissionPaid.toLocaleString()}</p>
                    </div>
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                      <i className="ri-team-line text-purple-600 text-xl w-6 h-6 flex items-center justify-center"></i>
                    </div>
                  </div>
                </div>
              </div>

              {/* Charts Section */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                {/* Customer Growth Chart */}
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Customer Registration Trend</h3>
                  <div className="h-64 flex items-end space-x-2">
                    {customerRegistrationData.map((data, index) => (
                      <div key={index} className="flex-1 flex flex-col items-center">
                        <div className="relative group">
                          <div 
                            className="w-full bg-blue-500 rounded-t hover:bg-blue-600 transition-colors cursor-pointer"
                            style={{ height: `${(data.registrations / 350) * 200}px` }}
                          ></div>
                          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                            {data.registrations} customers
                          </div>
                        </div>
                        <span className="text-xs text-gray-600 mt-2">{data.month}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Revenue Chart */}
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Monthly Revenue</h3>
                  <div className="h-64 flex items-end space-x-2">
                    {monthlyRevenueData.map((data, index) => (
                      <div key={index} className="flex-1 flex flex-col items-center">
                        <div className="relative group">
                          <div 
                            className="w-full bg-green-500 rounded-t hover:bg-green-600 transition-colors cursor-pointer"
                            style={{ height: `${(data.revenue / 35000) * 200}px` }}
                          ></div>
                          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                            ${data.revenue.toLocaleString()}
                          </div>
                        </div>
                        <span className="text-xs text-gray-600 mt-2">{data.month}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Dashboard Sections */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Recent Orders */}
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-800">Recent Orders</h3>
                    <button 
                      onClick={() => setActiveTab('orders')}
                      className="text-orange-600 hover:text-orange-700 text-sm cursor-pointer"
                    >
                      View All
                    </button>
                  </div>
                  <div className="space-y-3">
                    {recentOrders.map((order, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div>
                          <p className="font-medium text-gray-800 text-sm">{order.id}</p>
                          <p className="text-xs text-gray-600">{order.customer}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium text-gray-800 text-sm">{order.amount}</p>
                          <span className={`text-xs px-2 py-1 rounded-full ${ 
                            order.status === 'Completed' ? 'bg-green-100 text-green-800' :
                            order.status === 'Processing' ? 'bg-blue-100 text-blue-800' :
                            order.status === 'Shipped' ? 'bg-purple-100 text-purple-800' :
                            'bg-yellow-100 text-yellow-800'
                          }`}>
                            {order.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* System Alerts */}
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">System Alerts</h3>
                  <div className="space-y-3">
                    {systemAlerts.map((alert, index) => (
                      <div key={index} className={`p-3 rounded-lg border-l-4 ${ 
                        alert.type === 'error' ? 'bg-red-50 border-red-500' :
                        alert.type === 'warning' ? 'bg-yellow-50 border-yellow-500' :
                        alert.type === 'success' ? 'bg-green-50 border-green-500' :
                        'bg-blue-50 border-blue-500'
                      }`}>
                        <p className={`text-sm font-medium ${ 
                          alert.type === 'error' ? 'text-red-800' :
                          alert.type === 'warning' ? 'text-yellow-800' :
                          alert.type === 'success' ? 'text-green-800' :
                          'text-blue-800'
                        }`}>
                          {alert.message}
                        </p>
                        <p className="text-xs text-gray-500 mt-1">{alert.time}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Actions</h3>
                  <div className="space-y-3">
                    <button 
                      onClick={() => setActiveTab('customers')}
                      className="w-full flex items-center space-x-3 p-3 bg-blue-50 hover:bg-blue-100 rounded-lg cursor-pointer"
                    >
                      <i className="ri-user-add-line w-5 h-5 text-blue-600 flex items-center justify-center"></i>
                      <span className="text-blue-800 font-medium">View Customer Analytics</span>
                    </button>
                    <button 
                      onClick={() => setActiveTab('financials')}
                      className="w-full flex items-center space-x-3 p-3 bg-green-50 hover:bg-green-100 rounded-lg cursor-pointer"
                    >
                      <i className="ri-file-chart-line w-5 h-5 text-green-600 flex items-center justify-center"></i>
                      <span className="text-green-800 font-medium">Generate Financial Report</span>
                    </button>
                    <button 
                      onClick={() => setActiveTab('orders')}
                      className="w-full flex items-center space-x-3 p-3 bg-orange-50 hover:bg-orange-100 rounded-lg cursor-pointer"
                    >
                      <i className="ri-shopping-cart-line w-5 h-5 text-orange-600 flex items-center justify-center"></i>
                      <span className="text-orange-800 font-medium">Manage Orders</span>
                    </button>
                    <button 
                      onClick={() => setActiveTab('resellers')}
                      className="w-full flex items-center space-x-3 p-3 bg-purple-50 hover:bg-purple-100 rounded-lg cursor-pointer"
                    >
                      <i className="ri-team-line w-5 h-5 text-purple-600 flex items-center justify-center"></i>
                      <span className="text-purple-800 font-medium">Manage Resellers</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'customers' && (
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Customer Analytics & Registration Data</h2>
              
              {/* Customer Stats Overview */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <i className="ri-user-line text-blue-600 text-2xl w-8 h-8 flex items-center justify-center"></i>
                    </div>
                    <p className="text-2xl font-bold text-gray-800">{stats.totalCustomers.toLocaleString()}</p>
                    <p className="text-gray-600 text-sm">Total Registered</p>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <i className="ri-user-add-line text-green-600 text-2xl w-8 h-8 flex items-center justify-center"></i>
                    </div>
                    <p className="text-2xl font-bold text-gray-800">{stats.newCustomersThisMonth}</p>
                    <p className="text-gray-600 text-sm">This Month</p>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <i className="ri-calendar-line text-orange-600 text-2xl w-8 h-8 flex items-center justify-center"></i>
                    </div>
                    <p className="text-2xl font-bold text-gray-800">{stats.newCustomersToday}</p>
                    <p className="text-gray-600 text-sm">Today</p>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <i className="ri-arrow-up-line text-purple-600 text-2xl w-8 h-8 flex items-center justify-center"></i>
                    </div>
                    <p className="text-2xl font-bold text-gray-800">{stats.customerGrowthRate}%</p>
                    <p className="text-gray-600 text-sm">Growth Rate</p>
                  </div>
                </div>
              </div>

              {/* Customer Registration Table */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-gray-800">Recent Customer Registrations</h3>
                  <div className="flex space-x-3">
                    <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 cursor-pointer whitespace-nowrap">
                      Export Customer Data
                    </button>
                    <button className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 cursor-pointer whitespace-nowrap">
                      Generate Report
                    </button>
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-4 font-medium text-gray-600">Customer</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-600">Email</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-600">Registration Date</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-600">Total Orders</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-600">Total Spent</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-600">Status</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-600">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {recentCustomers.map((customer) => (
                        <tr key={customer.id} className="border-b hover:bg-gray-50">
                          <td className="py-4 px-4">
                            <div className="flex items-center space-x-3">
                              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                                <span className="text-blue-600 font-medium">{customer.name.charAt(0)}</span>
                              </div>
                              <span className="font-medium text-gray-800">{customer.name}</span>
                            </div>
                          </td>
                          <td className="py-4 px-4 text-gray-600">{customer.email}</td>
                          <td className="py-4 px-4 text-gray-600">{customer.joinDate}</td>
                          <td className="py-4 px-4">
                            <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">{customer.totalOrders}</span>
                          </td>
                          <td className="py-4 px-4 font-medium text-gray-800">{customer.totalSpent}</td>
                          <td className="py-4 px-4">
                            <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-sm">{customer.status}</span>
                          </td>
                          <td className="py-4 px-4">
                            <button className="text-orange-600 hover:text-orange-700 cursor-pointer text-sm">View Profile</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'financials' && (
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Financial Dashboard & Reports</h2>
              
              {/* Financial Overview */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Revenue Summary</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Total Revenue:</span>
                      <span className="font-bold text-2xl text-gray-800">${stats.totalRevenue.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">This Month:</span>
                      <span className="font-bold text-green-600">${stats.monthlyRevenue.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Today:</span>
                      <span className="font-bold text-blue-600">${stats.dailyRevenue.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center border-t pt-4">
                      <span className="text-gray-600">Growth Rate:</span>
                      <span className="font-bold text-green-600">+{stats.revenueGrowthRate}%</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Revenue Breakdown</h3>
                  <div className="space-y-3">
                    {financialBreakdown.map((item, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span className="text-gray-600 text-sm">{item.category}:</span>
                        <div className="text-right">
                          <div className="font-medium text-gray-800">${item.amount.toLocaleString()}</div>
                          <div className="text-xs text-gray-500">{item.percentage}%</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Financial Actions</h3>
                  <div className="space-y-3">
                    <button className="w-full py-3 px-4 bg-green-500 text-white rounded-lg hover:bg-green-600 cursor-pointer whitespace-nowrap">
                      Generate Monthly Report
                    </button>
                    <button className="w-full py-3 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 cursor-pointer whitespace-nowrap">
                      Export Financial Data
                    </button>
                    <button className="w-full py-3 px-4 bg-purple-500 text-white rounded-lg hover:bg-purple-600 cursor-pointer whitespace-nowrap">
                      Tax Documentation
                    </button>
                    <button className="w-full py-3 px-4 bg-orange-500 text-white rounded-lg hover:bg-orange-600 cursor-pointer whitespace-nowrap">
                      Profit & Loss Analysis
                    </button>
                  </div>
                </div>
              </div>

              {/* Detailed Financial Metrics */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                {/* Commission & Costs */}
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Cost Analysis</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-4 bg-red-50 rounded-lg">
                      <span className="text-gray-700">Commissions Paid:</span>
                      <span className="font-bold text-red-600">-${stats.totalCommissionPaid.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                      <span className="text-gray-700">Operating Costs:</span>
                      <span className="font-bold text-gray-600">-$8,450.00</span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-green-50 rounded-lg">
                      <span className="text-gray-700 font-medium">Net Profit:</span>
                      <span className="font-bold text-green-600">${(stats.totalRevenue - stats.totalCommissionPaid - 8450).toLocaleString()}</span>
                    </div>
                  </div>
                </div>

                {/* Payment Methods */}
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Payment Method Analytics</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Credit/Debit Cards:</span>
                      <div className="flex items-center space-x-3">
                        <div className="w-32 bg-gray-200 rounded-full h-3">
                          <div className="bg-orange-500 h-3 rounded-full" style={{ width: '75%' }}></div>
                        </div>
                        <span className="text-sm font-medium text-gray-600">75%</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">PayPal:</span>
                      <div className="flex items-center space-x-3">
                        <div className="w-32 bg-gray-200 rounded-full h-3">
                          <div className="bg-blue-500 h-3 rounded-full" style={{ width: '20%' }}></div>
                        </div>
                        <span className="text-sm font-medium text-gray-600">20%</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Bank Transfer:</span>
                      <div className="flex items-center space-x-3">
                        <div className="w-32 bg-gray-200 rounded-full h-3">
                          <div className="bg-green-500 h-3 rounded-full" style={{ width: '5%' }}></div>
                        </div>
                        <span className="text-sm font-medium text-gray-600">5%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'orders' && (
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Order Management</h2>
              <p className="text-gray-600 text-center py-8">Order management functionality coming soon...</p>
            </div>
          )}

          {activeTab === 'resellers' && (
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Reseller Management</h2>
              <p className="text-gray-600 text-center py-8">Reseller management functionality coming soon...</p>
            </div>
          )}

          {activeTab === 'reports' && (
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Reports & Analytics</h2>
              <p className="text-gray-600 text-center py-8">Advanced reporting functionality coming soon...</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
