
import React from 'react';
import ProductCard from './ProductCard';

const CategorySection = () => {
  const categories = [
    { name: 'Bestsellers', active: true },
    { name: 'Healthcare', active: false },
    { name: 'Floor Stands', active: false },
    { name: 'Tablet Mounts', active: false },
    { name: 'Tablet Cases', active: false },
    { name: 'Kiosk & Desk Stands', active: false },
    { name: 'All', active: false },
  ];

  const products = [
    { name: 'Floor Stands', image: '/api/placeholder/200/200', category: 'Mounting Solutions' },
    { name: 'Kiosks & Desk Stands', image: '/api/placeholder/200/200', category: 'Desk Solutions' },
    { name: 'Wall Mounts', image: '/api/placeholder/200/200', category: 'Wall Solutions' },
    { name: 'Clamp Mounts', image: '/api/placeholder/200/200', category: 'Flexible Mounting' },
    { name: 'Accessories', image: '/api/placeholder/200/200', category: 'Additional Parts' },
    { name: 'Outdoor Stands', image: '/api/placeholder/200/200', category: 'Weather Resistant' },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category Filters */}
        <div className="flex flex-wrap gap-4 mb-12 justify-center">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 ${
                category.active
                  ? 'bg-[#ff6363] text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-[#ff6363] hover:text-white border border-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Sort and View Options */}
        <div className="flex justify-between items-center mb-8">
          <div className="text-gray-600">
            <span className="font-medium">Sort by</span>
            <select className="ml-2 border border-gray-300 rounded-lg px-3 py-1 text-sm">
              <option>Featured</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Newest</option>
            </select>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-gray-600 text-sm">View as</span>
            <button className="p-2 bg-[#ff6363] text-white rounded-lg">
              <div className="w-4 h-4 grid grid-cols-2 gap-0.5">
                <div className="bg-current rounded-sm"></div>
                <div className="bg-current rounded-sm"></div>
                <div className="bg-current rounded-sm"></div>
                <div className="bg-current rounded-sm"></div>
              </div>
            </button>
            <button className="p-2 text-gray-600 hover:bg-gray-200 rounded-lg">
              <div className="w-4 h-4 flex flex-col gap-0.5">
                <div className="bg-current h-0.5 rounded"></div>
                <div className="bg-current h-0.5 rounded"></div>
                <div className="bg-current h-0.5 rounded"></div>
              </div>
            </button>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              name={product.name}
              image={product.image}
              category={product.category}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
