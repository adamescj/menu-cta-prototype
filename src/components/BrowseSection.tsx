import React, { useState } from 'react';

const BrowseSection = () => {
  const [activeTab, setActiveTab] = useState<'products' | 'industries'>('industries');

  const categories = [
    {
      title: 'Tablet Mounts',
      image: '/browse/Sleek Desk Mount for Tablets.webp',
      items: ['Floor Stands', 'Wall Mounts', 'Desk Stands', 'Tablet Cases'],
      description: 'Complete tablet mounting solutions'
    },
    {
      title: 'Laptop Mounts', 
      image: '/browse/Sleek Desk Mount for Tablets.webp', 
      items: ['Ergonomic Stands', 'Adjustable Arms', 'Desk Mounts', 'Accessories'],
      description: 'Ergonomic laptop positioning'
    },
    {
      title: 'Display Mounts',
      image: '/browse/medical.jpg',
      items: ['Wall Mounts', 'Floor Stands', 'Ceiling Mounts', 'Desk Mounts'],
      description: 'Professional display mounting'
    },
    {
      title: 'Charging Stations',
      image: '/browse/Retail Mount CTA Kiosk.webp',
      items: ['Multi-Device Hubs', 'Secure Lockers', 'Wireless Chargers'],
      description: 'Power management solutions'
    }
  ];

  const industries = [
    {
      title: 'Retail & POS',
      image: '/browse/Retail Mount CTA Kiosk.webp',
      description: 'Point of sale and customer-facing solutions',
      features: ['Payment Terminals', 'Customer Displays', 'Inventory Systems']
    },
    {
      title: 'Education',
      image: '/browse/Education CTA Digital.jpg',
      description: 'Classroom and campus technology',
      features: ['Interactive Displays', 'Student Devices', 'Presentation Systems']
    },
    {
      title: 'Healthcare',
      image: '/browse/medical.jpg',
      description: 'Medical device and patient care',
      features: ['Patient Information', 'Medical Records', 'Diagnostic Tools']
    },
    {
      title: 'Enterprise',
      image: '/browse/Sleek Desk Mount for Tablets.webp',
      description: 'Corporate and office environments', 
      features: ['Meeting Rooms', 'Workstations', 'Digital Displays']
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          Find Your Perfect Mounting Solution
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
          Browse our comprehensive catalog by product type or discover industry-specific solutions tailored to your business needs.
        </p>
        
        {/* Tab Navigation */}
        <div className="inline-flex bg-gray-100 rounded-full p-1.5">
          <button
            onClick={() => setActiveTab('products')}
            className={`px-10 py-4 rounded-full font-semibold transition-all duration-300 ${
              activeTab === 'products'
                ? 'bg-[#ff6363] text-white shadow-lg'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Shop by Product
          </button>
          <button
            onClick={() => setActiveTab('industries')}
            className={`px-10 py-4 rounded-full font-semibold transition-all duration-300 ${
              activeTab === 'industries'
                ? 'bg-[#ff6363] text-white shadow-lg'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Shop by Industry
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="transition-all duration-500">
        {activeTab === 'products' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category, index) => (
              <div 
                key={category.title}
                className="group bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                {/* Image */}
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                
                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{category.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{category.description}</p>
                  
                  <div className="space-y-3 mb-8">
                    {category.items.slice(0, 3).map((item) => (
                      <div key={item} className="text-gray-500 flex items-center">
                        <div className="w-2 h-2 bg-[#ff6363] rounded-full mr-3"></div>
                        {item}
                      </div>
                    ))}
                    {category.items.length > 3 && (
                      <div className="text-gray-400 font-medium">
                        +{category.items.length - 3} more solutions
                      </div>
                    )}
                  </div>
                  
                  <button className="w-full bg-gray-50 hover:bg-[#ff6363] text-gray-700 hover:text-white py-4 rounded-2xl font-semibold transition-all duration-300 group-hover:bg-[#ff6363] group-hover:text-white transform hover:scale-105">
                    Explore {category.title}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'industries' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((industry, index) => (
              <div 
                key={industry.title}
                className="group bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                {/* Image */}
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={industry.image} 
                    alt={industry.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                
                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{industry.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{industry.description}</p>
                  
                  <div className="space-y-3 mb-8">
                    {industry.features.map((feature) => (
                      <div key={feature} className="text-gray-500 flex items-center">
                        <div className="w-2 h-2 bg-[#ff6363] rounded-full mr-3"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <button className="w-full bg-gray-50 hover:bg-[#ff6363] text-gray-700 hover:text-white py-4 rounded-2xl font-semibold transition-all duration-300 group-hover:bg-[#ff6363] group-hover:text-white transform hover:scale-105">
                    Discover {industry.title}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Bottom CTA */}
      <div className="text-center mt-24 p-12 bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl">
        <h3 className="text-3xl font-bold text-gray-900 mb-6">
          Need Expert Guidance?
        </h3>
        <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
          Our mounting specialists are here to help you find the perfect solution for your specific requirements. 
          Get personalized recommendations and technical expertise.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <button className="bg-[#ff6363] text-white px-10 py-4 rounded-2xl font-semibold hover:bg-[#ff5252] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            Speak with an Expert
          </button>
          <button className="border-2 border-gray-300 text-gray-700 px-10 py-4 rounded-2xl font-semibold hover:border-[#ff6363] hover:text-[#ff6363] transition-all duration-300 transform hover:scale-105">
            Request Custom Quote
          </button>
        </div>
      </div>
    </div>
  );
};

export default BrowseSection; 