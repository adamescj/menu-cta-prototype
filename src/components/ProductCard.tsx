
import React from 'react';

interface ProductCardProps {
  name: string;
  image: string;
  category: string;
}

const ProductCard = ({ name, image, category }: ProductCardProps) => {
  return (
    <div className="group cursor-pointer">
      <div className="bg-gray-50 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:scale-105 border border-transparent hover:border-[#ff6363]/20">
        <div className="aspect-square bg-white rounded-xl mb-4 flex items-center justify-center shadow-sm">
          <div className="w-20 h-20 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center">
            <div className="w-12 h-12 bg-[#ff6363]/10 rounded-md"></div>
          </div>
        </div>
        <h3 className="font-medium text-gray-900 text-sm text-center group-hover:text-[#ff6363] transition-colors duration-200">
          {name}
        </h3>
        <p className="text-xs text-gray-500 text-center mt-1">{category}</p>
      </div>
    </div>
  );
};

export default ProductCard;
