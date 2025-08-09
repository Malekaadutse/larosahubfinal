 {/* Hero Section */}
  <section 
    className="relative py-20 bg-cover bg-center"
    style={{
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://readdy.ai/api/search-image?query=Modern%20office%20workspace%20with%20diverse%20team%20working%20together%2C%20collaborative%20business%20environment%2C%20contemporary%20office%20interior%2C%20teamwork%20and%20innovation%2C%20professional%20workplace%20setting&width=1920&height=600&seq=about-hero&orientation=landscape')`
    }}
  >
    <div className="px-4 sm:px-6 lg:px-8 text-center text-white">
      <h1 className="text-5xl md:text-6xl font-bold mb-6">About LaRosa Hub</h1>
      <p className="text-xl max-w-3xl mx-auto">
        We're more than just an e-commerce platform. We're a community dedicated to bringing you the best products, 
        exceptional service, and an unmatched shopping experience.
      </p>
    </div>
  </section>

  {/* Our Story */}
  <section className="py-16">
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            LaRosa Hub began in 2020 with a simple yet ambitious goal: to create the most trusted and 
            user-friendly online shopping destination in South Africa. What started as a small team with 
            big dreams has grown into a thriving e-commerce platform serving thousands of customers daily.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-600 mb-6">
              To revolutionize online shopping by providing access to high-quality products, 
              exceptional customer service, and innovative technology that makes shopping enjoyable and effortless.
            </p>
            
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Vision</h3>
            <p className="text-gray-600">
              To become the most trusted e-commerce platform in Africa, known for our commitment to 
              quality, customer satisfaction, and sustainable business practices.
            </p>
          </div>
          <div>
            <img
              src="https://readdy.ai/api/search-image?query=Modern%20e-commerce%20fulfillment%20center%20with%20organized%20packages%20and%20shipping%2C%20warehouse%20operations%2C%20logistics%20and%20distribution%2C%20online%20retail%20infrastructure%2C%20efficient%20delivery%20system&width=600&height=400&seq=mission-image&orientation=landscape"
              alt="Our Mission"
              className="w-full h-80 object-cover object-top rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* Our Values */}
  <section className="py-16 bg-gray-50">
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Values</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          These core values guide everything we do and shape the way we interact with our customers, 
          partners, and each other.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {values.map((value, index) => (
          <div key={index} className="bg-white rounded-2xl p-8 shadow-sm text-center">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <i className={`${value.icon} text-2xl text-orange-500 w-8 h-8 flex items-center justify-center`}></i>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
            <p className="text-gray-600">{value.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>

  {/* Our Team */}
  <section className="py-16">
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">Meet Our Team</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Our diverse team of passionate professionals is committed to making your shopping experience exceptional.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-64 object-cover object-top"
            />
            <div className="p-6 text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
              <p className="text-orange-500 font-medium mb-4">{member.position}</p>
              <p className="text-gray-600">{member.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>

  {/* Company Timeline */}
  <section className="py-16 bg-gray-50">
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Journey</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          From a startup to a leading e-commerce platform, here are the key milestones in our journey.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-orange-200"></div>
          
          {milestones.map((milestone, index) => (
            <div key={index} className={`flex items-center mb-12 ${index % 2 === 0 ? '' : 'flex-row-reverse'}`}>
              <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                <div className="bg-white rounded-2xl p-6 shadow-sm">
                  <div className="text-2xl font-bold text-orange-500 mb-2">{milestone.year}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{milestone.title}</h3>
                  <p className="text-gray-600">{milestone.description}</p>
                </div>
              </div>
              
              {/* Timeline Dot */}
              <div className="w-4 h-4 bg-orange-500 rounded-full border-4 border-white shadow-lg z-10"></div>
              
              <div className="w-1/2"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>

  {/* Contact CTA */}
  <section className="py-16 bg-orange-500">
    <div className="px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-4xl font-bold text-white mb-6">Ready to Shop with Us?</h2>
      <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
        Join thousands of satisfied customers and discover why LaRosa Hub is the trusted choice for online shopping.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="/products"
          className="bg-white text-orange-500 px-8 py-4 rounded-lg hover:bg-gray-100 font-semibold cursor-pointer whitespace-nowrap"
        >
          Start Shopping
        </a>
        <a
          href="/contact"
          className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-orange-500 font-semibold cursor-pointer whitespace-nowrap"
        >
          Contact Us
        </a>
      </div>
    </div>
  </section>

  <Footer />
</div>