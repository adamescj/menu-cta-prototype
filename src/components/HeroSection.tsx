
import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-slate-700 to-slate-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-6xl font-bold mb-6">
              INTRODUCING
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
                VERSATILE
              </span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
                SOLUTIONS
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Professional tablet and device mounting solutions for every industry and application.
            </p>
            <button className="bg-[#ff6363] text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-[#ff5252] transition-colors duration-200 shadow-lg hover:shadow-xl">
              Explore Products
            </button>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-[#ff6363] to-[#ff5252] rounded-3xl p-8 text-center shadow-2xl">
              <h3 className="text-2xl font-bold mb-4">INTEGRATED PAYMENT</h3>
              <h4 className="text-xl mb-6">TERMINAL HOLDER CASE</h4>
              <div className="bg-white/10 rounded-2xl p-6 mb-6">
                <div className="w-32 h-32 bg-white/20 rounded-xl mx-auto mb-4"></div>
                <h5 className="text-lg font-semibold">PROTECTIVE POGO</h5>
                <h6 className="text-sm">CHARGING CASE</h6>
                <p className="text-xs mt-2">FOR IPAD MINI 6 & 7</p>
              </div>
              <div className="flex justify-center space-x-4">
                <div className="w-16 h-16 bg-white/20 rounded-lg"></div>
                <div className="w-16 h-16 bg-white/20 rounded-lg"></div>
                <div className="w-16 h-16 bg-white/20 rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
