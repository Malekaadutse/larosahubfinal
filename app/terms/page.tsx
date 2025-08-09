
'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Terms() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Terms of Service</h1>
            
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-600 mb-6">
                <strong>Last updated:</strong> {new Date().toLocaleDateString()}
              </p>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Agreement to Terms</h2>
                <p className="text-gray-700 mb-4">
                  By accessing and using LaRosa Hub ("we," "our," or "us"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Use License</h2>
                <p className="text-gray-700 mb-4">
                  Permission is granted to temporarily download one copy of the materials on LaRosa Hub for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                  <li>modify or copy the materials</li>
                  <li>use the materials for any commercial purpose or for any public display</li>
                  <li>attempt to reverse engineer any software contained on the website</li>
                  <li>remove any copyright or other proprietary notations from the materials</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Account Registration</h2>
                <p className="text-gray-700 mb-4">
                  When you create an account with us, you must provide information that is accurate, complete, and current at all times. You are responsible for safeguarding the password and for maintaining the confidentiality of your account.
                </p>
                <p className="text-gray-700 mb-4">
                  You agree to accept responsibility for all activities that occur under your account or password. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Products and Services</h2>
                <p className="text-gray-700 mb-4">
                  All products and services are subject to availability. We reserve the right to discontinue any product or service at any time. Prices for our products are subject to change without notice.
                </p>
                <p className="text-gray-700 mb-4">
                  We have made every effort to display as accurately as possible the colors and images of our products. However, we cannot guarantee that your computer monitor's display will be accurate.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Payment Terms</h2>
                <p className="text-gray-700 mb-4">
                  Payment is due at the time of purchase. We accept major credit cards, debit cards, and other payment methods as indicated on our website. All prices are in USD unless otherwise specified.
                </p>
                <p className="text-gray-700 mb-4">
                  By providing payment information, you represent and warrant that you are authorized to use the designated payment method and authorize us to charge your payment method.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Shipping and Delivery</h2>
                <p className="text-gray-700 mb-4">
                  We will arrange for shipment of products to you. Title and risk of loss for products pass to you upon delivery to the carrier. Shipping costs are calculated at checkout and are your responsibility.
                </p>
                <p className="text-gray-700 mb-4">
                  Delivery times are estimates and are not guaranteed. We are not responsible for delays caused by shipping carriers or circumstances beyond our control.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Returns and Refunds</h2>
                <p className="text-gray-700 mb-4">
                  You may return most items within 30 days of delivery for a full refund, provided they are in original condition with all packaging and tags intact. Some restrictions apply to certain products.
                </p>
                <p className="text-gray-700 mb-4">
                  Return shipping costs are your responsibility unless the return is due to our error. Refunds will be processed within 5-10 business days after we receive your returned item.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Privacy Policy</h2>
                <p className="text-gray-700 mb-4">
                  Your privacy is important to us. Our Privacy Policy explains how we collect, use, and protect your information when you use our service. By using our service, you agree to the collection and use of information in accordance with our Privacy Policy.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Prohibited Uses</h2>
                <p className="text-gray-700 mb-4">
                  You may not use our service:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                  <li>for any unlawful purpose or to solicit others to perform unlawful acts</li>
                  <li>to violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances</li>
                  <li>to infringe upon or violate our intellectual property rights or the intellectual property rights of others</li>
                  <li>to harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
                  <li>to submit false or misleading information</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Disclaimer</h2>
                <p className="text-gray-700 mb-4">
                  The information on this website is provided on an "as is" basis. To the fullest extent permitted by law, this company excludes all representations, warranties, and conditions relating to our website and the use of this website.
                </p>
                <p className="text-gray-700 mb-4">
                  Nothing in this disclaimer will exclude or limit our liability for death or personal injury arising from negligence, fraud, or fraudulent misrepresentation.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Limitation of Liability</h2>
                <p className="text-gray-700 mb-4">
                  In no event shall LaRosa Hub or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on LaRosa Hub's website.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Governing Law</h2>
                <p className="text-gray-700 mb-4">
                  These terms and conditions are governed by and construed in accordance with the laws of the United States and you irrevocably submit to the exclusive jurisdiction of the courts in that state or location.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">13. Changes to Terms</h2>
                <p className="text-gray-700 mb-4">
                  We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting on our website. Your continued use of the service after any changes constitutes acceptance of the new terms.
                </p>
              </section>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">14. Contact Information</h2>
                <p className="text-gray-700 mb-4">
                  If you have any questions about these Terms of Service, please contact us at:
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700 mb-2"><strong>Email:</strong> support@larosahub.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
