
'use client';

import FormHandler from '../../components/FormHandler';

export default function ContactForm() {
  const handleSuccess = (data: any) => {
    console.log('Contact form submitted successfully:', data);
  };

  const handleError = (error: string) => {
    console.error('Contact form error:', error);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
      
      <FormHandler 
        formId="contact-form" 
        onSuccess={handleSuccess}
        onError={handleError}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
              First Name *
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Your first name"
            />
          </div>

          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
              Last Name *
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Your last name"
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            placeholder="your.email@example.com"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            placeholder="(555) 123-4567"
          />
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
            Subject *
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            placeholder="What can we help you with?"
          />
        </div>

        <div>
          <label htmlFor="priority" className="block text-sm font-medium text-gray-700 mb-2">
            Priority Level
          </label>
          <div className="relative">
            <select
              id="priority"
              name="priority"
              className="w-full px-4 py-3 pr-8 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 appearance-none cursor-pointer"
            >
              <option value="low">Low - General inquiry</option>
              <option value="medium">Medium - Business question</option>
              <option value="high">High - Urgent support needed</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
              <i className="ri-arrow-down-s-line text-gray-400"></i>
            </div>
          </div>
        </div>

        <div>
          <label htmlFor="interests" className="block text-sm font-medium text-gray-700 mb-3">
            Areas of Interest
          </label>
          <div className="space-y-2">
            <label className="flex items-center">
              <input
                type="checkbox"
                name="interests"
                value="wholesale"
                className="h-4 w-4 text-orange-500 border-gray-300 rounded focus:ring-orange-500 cursor-pointer"
              />
              <span className="ml-2 text-gray-700">Wholesale Opportunities</span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                name="interests"
                value="partnership"
                className="h-4 w-4 text-orange-500 border-gray-300 rounded focus:ring-orange-500 cursor-pointer"
              />
              <span className="ml-2 text-gray-700">Partnership Programs</span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                name="interests"
                value="custom-orders"
                className="h-4 w-4 text-orange-500 border-gray-300 rounded focus:ring-orange-500 cursor-pointer"
              />
              <span className="ml-2 text-gray-700">Custom Orders</span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                name="interests"
                value="support"
                className="h-4 w-4 text-orange-500 border-gray-300 rounded focus:ring-orange-500 cursor-pointer"
              />
              <span className="ml-2 text-gray-700">Technical Support</span>
            </label>
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            rows={6}
            required
            maxLength={500}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 resize-vertical"
            placeholder="Please share your message, questions, or how we can help you..."
          ></textarea>
          <p className="text-sm text-gray-500 mt-1">Maximum 500 characters</p>
        </div>

        <div className="flex items-start">
          <input
            type="checkbox"
            id="newsletter"
            name="newsletter"
            value="yes"
            className="mt-1 h-4 w-4 text-orange-500 border-gray-300 rounded focus:ring-orange-500 cursor-pointer"
          />
          <label htmlFor="newsletter" className="ml-3 text-sm text-gray-700">
            Subscribe to our newsletter for updates on new products and special offers
          </label>
        </div>
      </FormHandler>
    </div>
  );
}
