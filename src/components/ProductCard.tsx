import React from 'react';

interface ProductCardProps {
  name: string;
  image: string;
  category: string;
}

const ProductCard = ({ name, image, category }: ProductCardProps) => {
  return (
    <div className="group cursor-pointer">
      <div className="transition-all duration-300 hover:scale-105">
        <div className="aspect-square mb-4 flex items-center justify-center p-6 bg-gray-50 rounded-2xl min-h-[140px]">
          <img 
            src={image} 
            alt={name}
            className="w-full h-full object-contain"
          />
        </div>
        <h3 className="font-semibold text-gray-900 text-base text-center group-hover:text-[#ff6363] transition-colors duration-200 leading-tight">
          {name}
        </h3>
      </div>
    </div>
  );
};

export default ProductCard;
