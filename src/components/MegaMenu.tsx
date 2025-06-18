
import React from 'react';
import ProductCard from './ProductCard';

interface MegaMenuProps {
  menuType: string;
}

const MegaMenu = ({ menuType }: MegaMenuProps) => {
  const getMenuContent = () => {
    switch (menuType) {
      case 'Categories':
        return {
          sections: [
            {
              title: 'Mounting Solutions',
              items: ['Floor Stands', 'Wall Mounts', 'Desk Stands', 'Clamp Mounts', 'Ceiling Mounts']
            },
            {
              title: 'Protective Cases',
              items: ['Tablet Cases', 'Rugged Cases', 'Built for OtterBox', 'Custom Cases']
            },
            {
              title: 'Display & Kiosks',
              items: ['Digital Signage', 'Interactive Kiosks', 'POS Stands', 'Rolling Kiosks']
            },
            {
              title: 'Charging Solutions',
              items: ['Charging Stations', 'Power Banks', 'Wireless Chargers', 'Multi-Device Hubs']
            }
          ],
          products: [
            { name: 'Premium Floor Stand', image: '/api/placeholder/150/150', category: 'Best Seller' },
            { name: 'Secure Wall Mount', image: '/api/placeholder/150/150', category: 'Most Popular' },
            { name: 'Flexible Desk Stand', image: '/api/placeholder/150/150', category: 'New Arrival' },
            { name: 'Heavy Duty Case', image: '/api/placeholder/150/150', category: 'Featured' },
            { name: 'Smart Kiosk Pro', image: '/api/placeholder/150/150', category: 'Premium' },
            { name: 'Fast Charging Hub', image: '/api/placeholder/150/150', category: 'Trending' }
          ]
        };
      case 'Devices':
        return {
          sections: [
            {
              title: 'By Brand',
              items: ['For Apple', 'For Samsung', 'For Microsoft', 'For Lenovo']
            }
          ],
          products: [
            { name: 'For Apple', image: '/api/placeholder/150/150', category: 'Device Brands' },
            { name: 'For Samsung', image: '/api/placeholder/150/150', category: 'Device Brands' },
            { name: 'For Microsoft', image: '/api/placeholder/150/150', category: 'Device Brands' },
            { name: 'For Lenovo', image: '/api/placeholder/150/150', category: 'Device Brands' }
          ]
        };
      case 'Browse':
        return {
          sections: [
            {
              title: 'By Products',
              items: ['Charging Mounts', 'Floor Stands', 'Ergonomic Solutions', 'Tablet Cases', 'Rolling Kiosks', 'Digital Signage', 'Wall Mounts', 'POS Stands', 'Kiosks', 'See All →']
            },
            {
              title: 'By Industries',
              items: ['Enterprise', 'Retail', 'Hospitality', 'Education', 'Industrial', 'Medical']
            },
            {
              title: 'By Devices',
              items: ['Apple', 'Samsung', 'Microsoft', 'Lenovo']
            }
          ],
          products: []
        };
      default:
        return { sections: [], products: [] };
    }
  };

  const content = getMenuContent();

  return (
    <div className="absolute top-full left-0 w-screen max-w-4xl bg-white shadow-2xl border border-gray-100 rounded-2xl overflow-visible z-50 mt-2 -ml-8 animate-in fade-in slide-in-from-top-2 duration-200">
      <div className="px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Navigation Sections */}
          <div className="lg:col-span-1 space-y-8">
            {content.sections.map((section, index) => (
              <div 
                key={index} 
                className="animate-in fade-in slide-in-from-left-3 duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="text-[#ff6363] font-semibold text-sm uppercase tracking-wide mb-4">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.items.map((item, itemIndex) => (
                    <li 
                      key={itemIndex}
                      className="animate-in fade-in slide-in-from-left-2 duration-200"
                      style={{ animationDelay: `${(index * 100) + (itemIndex * 50)}ms` }}
                    >
                      <a
                        href="#"
                        className="text-gray-600 hover:text-[#ff6363] text-sm transition-all duration-200 block py-1 hover:pl-2 hover:scale-105"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Product Grid */}
          {content.products.length > 0 && (
            <div className="lg:col-span-2 animate-in fade-in slide-in-from-right-3 duration-300 delay-150">
              <div className="mb-4">
                <h3 className="text-gray-900 font-semibold text-lg mb-2">Featured Products</h3>
                <p className="text-gray-500 text-sm">Our most popular and recommended solutions</p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {content.products.map((product, index) => (
                  <div
                    key={index}
                    className="animate-in fade-in scale-in-90 duration-200"
                    style={{ animationDelay: `${200 + (index * 75)}ms` }}
                  >
                    <ProductCard
                      name={product.name}
                      image={product.image}
                      category={product.category}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MegaMenu;
