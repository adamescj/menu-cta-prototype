
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
              title: 'Tablet Mounts',
              items: ['Floor Stands', 'Kiosks & Desk Stands', 'Clamp Mounts', 'Wall Mounts', 'Tablet Cases', 'Built for OtterBox Cases']
            },
            {
              title: 'Display Solutions',
              items: ['Charging Stations', 'Display Mounts', 'Laptop Mounts', 'Commercial Kitchen Mounts']
            }
          ],
          products: [
            { name: 'Floor Stands', image: '/api/placeholder/150/150', category: 'Tablet Mounts' },
            { name: 'Kiosks & Desk Stands', image: '/api/placeholder/150/150', category: 'Tablet Mounts' },
            { name: 'Clamp Mounts', image: '/api/placeholder/150/150', category: 'Tablet Mounts' },
            { name: 'Wall Mounts', image: '/api/placeholder/150/150', category: 'Tablet Mounts' },
            { name: 'Tablet Cases', image: '/api/placeholder/150/150', category: 'Tablet Mounts' },
            { name: 'Built for OtterBox Cases', image: '/api/placeholder/150/150', category: 'Tablet Mounts' }
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
    <div className="absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-200 rounded-b-2xl overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Navigation Sections */}
          <div className="lg:col-span-1">
            {content.sections.map((section, index) => (
              <div key={index} className="mb-6">
                <h3 className="text-[#ff6363] font-semibold text-sm uppercase tracking-wide mb-3">
                  {section.title}
                </h3>
                <ul className="space-y-2">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      <a
                        href="#"
                        className="text-gray-600 hover:text-[#ff6363] text-sm transition-colors duration-200 block py-1"
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
            <div className="lg:col-span-2">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {content.products.map((product, index) => (
                  <ProductCard
                    key={index}
                    name={product.name}
                    image={product.image}
                    category={product.category}
                  />
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
