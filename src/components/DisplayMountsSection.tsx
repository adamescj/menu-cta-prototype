import React, { useState, useEffect, useRef } from 'react';

const DisplayMountsSection = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    
    cardRefs.current.forEach((cardRef, index) => {
      if (cardRef) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                // Staircase effect with more pronounced delays
                setTimeout(() => {
                  setVisibleCards(prev => {
                    if (!prev.includes(index)) {
                      return [...prev, index];
                    }
                    return prev;
                  });
                }, index * 150); // Staircase timing
              } else {
                // Remove card when scrolling out of view (both directions)
                setVisibleCards(prev => prev.filter(cardIndex => cardIndex !== index));
              }
            });
          },
          { 
            threshold: 0.3, 
            rootMargin: '-50px 0px -50px 0px' // More precise triggering
          }
        );
        
        observer.observe(cardRef);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, []);

  const displayMounts = [
    {
      id: 1,
      name: 'Floor Stands',
      image: '/display mounts/PAD PARAFP Front Angle (1).avif',
      category: 'Mobile display stands'
    },
    {
      id: 2,
      name: 'Clamp Mounts',
      image: '/display mounts/CTA Digital Front Angle (1).avif',
      category: 'Secure clamping systems'
    },
    {
      id: 3,
      name: 'Wall Mounts',
      image: '/display mounts/AVWMB Detail Front Angle Monitor (1).avif',
      category: 'Secure wall mounting'
    },
    {
      id: 4,
      name: 'Kiosks & Desk Stands',
      image: '/display mounts/CTA Digital Front Angle.avif',
      category: 'Interactive solutions'
    },
    {
      id: 5,
      name: 'Ceiling Mounts',
      image: '/display mounts/Ceiling Mount.webp',
      category: 'Overhead mounting solutions'
    },
    {
      id: 6,
      name: 'Accessories',
      image: '/display mounts/PC Mac Mini Monitor Detail (1).avif',
      category: 'Display mount accessories'
    }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-50 to-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={sectionRef}>
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Display Mounts
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Professional display mounting solutions engineered for reliability, flexibility, and seamless integration 
            across all environments.
          </p>
        </div>

        {/* Animated Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayMounts.map((mount, index) => (
            <div
              key={mount.id}
              ref={el => cardRefs.current[index] = el}
              className={`group relative bg-white rounded-3xl shadow-lg overflow-hidden transform transition-all duration-800 hover:scale-105 hover:shadow-2xl ${
                visibleCards.includes(index)
                  ? 'opacity-100 translate-y-0 scale-100' 
                  : 'opacity-0 translate-y-16 scale-95'
              }`}
              style={{
                transitionDelay: visibleCards.includes(index) ? `${index * 100}ms` : '0ms'
              }}
            >
              {/* Image Container */}
              <div className={`aspect-square bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden ${
                mount.name === 'Accessories' || mount.name === 'Ceiling Mounts' ? 'p-0' : 'p-8'
              }`}>
                <div className="relative w-full h-full flex items-center justify-center">
                  <img
                    src={mount.image}
                    alt={mount.name}
                    className={`${
                      mount.name === 'Accessories' || mount.name === 'Ceiling Mounts'
                        ? 'w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 filter group-hover:brightness-110'
                        : 'max-w-full max-h-full object-contain transform group-hover:scale-110 transition-transform duration-500 filter group-hover:brightness-110'
                    }`}
                  />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#ff6363] transition-colors duration-300">
                  {mount.name}
                </h3>
                
                {/* Animated Underline */}
                <div className="w-0 h-0.5 bg-[#ff6363] group-hover:w-full transition-all duration-500"></div>
                
                {/* View Details Button */}
                <button className="mt-4 w-full bg-gray-50 group-hover:bg-[#ff6363] text-gray-700 group-hover:text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300 transform group-hover:scale-105">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="bg-white rounded-3xl shadow-xl p-12 border border-gray-100">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Need Custom Display Mounting?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Our engineering team can create bespoke display mounting solutions tailored to your specific requirements and environment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-[#ff6363] text-white px-8 py-4 rounded-2xl font-semibold hover:bg-[#ff5252] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                Request Custom Quote
              </button>
              <button className="border-2 border-[#ff6363] text-[#ff6363] px-8 py-4 rounded-2xl font-semibold hover:bg-[#ff6363] hover:text-white transition-all duration-300 transform hover:scale-105">
                Browse All Mounts
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayMountsSection; 