import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import { 
  Building2, 
  GraduationCap, 
  Stethoscope, 
  Coffee, 
  Briefcase, 
  Factory,
  Monitor,
  Smartphone,
  Laptop,
  Grip,
  Shield,
  Battery,
  Navigation,
  Tv,
  Star,
  Tablet,
  type LucideIcon
} from 'lucide-react';

interface MegaMenuProps {
  menuType: string;
}

interface ContentItem {
  name: string;
  image: string;
  description: string;
  icon?: LucideIcon;
}

interface HoveredContent {
  title: string;
  description: string;
  items: ContentItem[];
}

const MegaMenu = ({ menuType }: MegaMenuProps) => {
  const [hoveredSection, setHoveredSection] = useState<string | null>('Tablet Mounts');
  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null);

  // Set default section based on menu type
  useEffect(() => {
    const defaultSections: { [key: string]: string } = {
      'Categories': 'Tablet Mounts',
      'Devices': 'Apple',
      'Browse': 'By Products'
    };
    setHoveredSection(defaultSections[menuType] || 'Tablet Mounts');
  }, [menuType]);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (hoverTimeout) {
        clearTimeout(hoverTimeout);
      }
    };
  }, [hoverTimeout]);

  const handleSectionHover = (sectionTitle: string) => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
    setHoveredSection(sectionTitle);
  };

  const handleContainerMouseEnter = () => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
  };

  const handleContainerMouseLeave = () => {
    // Return to default section for this menu type
    const defaultSections: { [key: string]: string } = {
      'Categories': 'Tablet Mounts',
      'Devices': 'Apple', 
      'Browse': 'By Products'
    };
    const timeout = setTimeout(() => {
      setHoveredSection(defaultSections[menuType] || 'Tablet Mounts');
    }, 100); // Shorter timeout to just reset the default section, not close the menu
    setHoverTimeout(timeout);
  };

  const getMenuContent = () => {
    switch (menuType) {
      case 'Categories':
        return {
          sections: [
            {
              title: 'Tablet Mounts',
              items: []
            },
            {
              title: 'Display Mounts',
              items: []
            },
            {
              title: 'Charging Stations',
              items: []
            },
            {
              title: 'Laptop Mounts',
              items: []
            },
            {
              title: 'Commercial Kitchen Mounts',
              items: []
            }
          ]
        };
      case 'Devices':
        return {
          sections: [
            {
              title: 'Apple',
              items: []
            },
            {
              title: 'Samsung',
              items: []
            },
            {
              title: 'Microsoft',
              items: []
            },
            {
              title: 'Lenovo',
              items: []
            }
          ]
        };
      case 'Browse':
        return {
          sections: [
            {
              title: 'By Products',
              items: []
            },
            {
              title: 'By Industries',
              items: []
            },
            {
              title: 'By Devices',
              items: []
            },
            {
              title: 'By Popular',
              items: []
            }
          ]
        };
      default:
        return { sections: [] };
    }
  };

  const getHoveredContent = (): HoveredContent | null => {
    if (!hoveredSection) return null;

    const contentMap: { [key: string]: HoveredContent } = {
      'Tablet Mounts': {
        title: 'Tablet Mounts',
        description: 'Complete tablet mounting solutions',
        items: [
          { name: 'Floor Stands', image: '/tablet mounts/floor stand.avif', description: 'Premium adjustable stands' },
          { name: 'Kiosks & Desk Stands', image: '/tablet mounts/kiosk.avif', description: 'Interactive solutions' },
          { name: 'Clamp Mounts', image: '/tablet mounts/clamp mount.avif', description: 'Secure clamping systems' },
          { name: 'Wall Mounts', image: '/tablet mounts/wall mount.avif', description: 'Space-saving wall solutions' },
          { name: 'Tablet Cases', image: '/tablet mounts/Height Adjustable Ceiling Mount.avif', description: 'Protective tablet cases' },
          { name: 'Built for OtterBox Cases', image: '/tablet mounts/otterbox .avif', description: 'OtterBox compatible mounts' }
        ]
      },
      'Charging Stations': {
        title: 'Charging Stations',
        description: 'Power management solutions',
        items: [
          { name: 'Charging Station', image: '/api/placeholder/300/300', description: 'Multi-device charging hubs' },
          { name: 'Lockers', image: '/api/placeholder/300/300', description: 'Secure charging lockers' },
          { name: 'Wireless Chargers', image: '/api/placeholder/300/300', description: 'Qi-compatible charging' },
          { name: 'USB-C Hubs', image: '/api/placeholder/300/300', description: 'Fast charging stations' },
          { name: 'Power Banks', image: '/api/placeholder/300/300', description: 'Portable power solutions' },
          { name: 'Charging Cables', image: '/api/placeholder/300/300', description: 'Premium charging cables' }
        ]
      },
      'Display Mounts': {
        title: 'Display Mounts',
        description: 'Professional display mounting',
        items: [
          { name: 'Wall Mounts', image: '/display mounts/CP OUTWPDK Front Angle.avif', description: 'Secure wall mounting' },
          { name: 'Floor Stands', image: '/display mounts/PAD PARAFP Front Angle (1).avif', description: 'Mobile display stands' },
          { name: 'Ceiling Mounts', image: '/display mounts/Ceiling Mount Background Removed.png', description: 'Overhead mounting solutions' },
          { name: 'Desk Mounts', image: '/display mounts/PC Mac Mini Monitor Detail (1).avif', description: 'Desktop display mounts' },
          { name: 'Articulating Arms', image: '/display mounts/AVWMB Detail Front Angle Monitor (1).avif', description: 'Flexible positioning' },
          { name: 'Multi-Monitor Mounts', image: '/display mounts/CTA Digital Front Angle.avif', description: 'Multiple display setups' }
        ]
      },
      'Laptop Mounts': {
        title: 'Laptop Mounts',
        description: 'Laptop mounting and ergonomic solutions',
        items: [
          { name: 'Floor Stands', image: '/api/placeholder/300/300', description: 'Mobile laptop stations' },
          { name: 'Kiosk & Desk Stands', image: '/api/placeholder/300/300', description: 'Desktop laptop stands' },
          { name: 'Clamp Mounts', image: '/api/placeholder/300/300', description: 'Adjustable clamp systems' },
          { name: 'Accessories', image: '/api/placeholder/300/300', description: 'Laptop mount accessories' },
          { name: 'Ergonomic Stands', image: '/api/placeholder/300/300', description: 'Health-focused designs' },
          { name: 'Adjustable Arms', image: '/api/placeholder/300/300', description: 'Flexible laptop positioning' }
        ]
      },
      'Commercial Kitchen Mounts': {
        title: 'Commercial Kitchen Mounts',
        description: 'Food service industry solutions',
        items: [
          { name: 'Pole Mounts', image: '/api/placeholder/300/300', description: 'Kitchen pole mounting' },
          { name: 'Enclosures', image: '/api/placeholder/300/300', description: 'Protective kitchen enclosures' },
          { name: 'Splash Guards', image: '/api/placeholder/300/300', description: 'Water-resistant protection' },
          { name: 'Temperature Resistant', image: '/api/placeholder/300/300', description: 'Heat-resistant mounts' },
          { name: 'Easy Clean Mounts', image: '/api/placeholder/300/300', description: 'Sanitization-friendly' },
          { name: 'Stainless Steel', image: '/api/placeholder/300/300', description: 'Food-grade materials' }
        ]
      },
      'Apple': {
        title: 'Apple Device Solutions',
        description: 'Tablet and laptop mounts for Apple devices',
        items: [
          { name: 'iPad Pro Mounts', image: '/api/placeholder/300/300', description: '12.9" and 11" tablet mounts' },
          { name: 'iPad Air Stands', image: '/api/placeholder/300/300', description: 'Lightweight tablet solutions' },
          { name: 'iPad Mini Mounts', image: '/api/placeholder/300/300', description: 'Compact tablet stands' },
          { name: 'MacBook Stands', image: '/api/placeholder/300/300', description: 'Ergonomic laptop stands' },
          { name: 'MacBook Pro Mounts', image: '/api/placeholder/300/300', description: 'Professional laptop solutions' },
          { name: 'Apple Accessories', image: '/api/placeholder/300/300', description: 'Charging & cable management' }
        ]
      },
      'Samsung': {
        title: 'Samsung Device Solutions',
        description: 'Tablet mounts for Samsung devices',
        items: [
          { name: 'Galaxy Tab S Mounts', image: '/api/placeholder/300/300', description: 'Premium tablet series' },
          { name: 'Galaxy Tab A Stands', image: '/api/placeholder/300/300', description: 'Essential tablet mounts' },
          { name: 'Galaxy Tab Active', image: '/api/placeholder/300/300', description: 'Rugged tablet solutions' },
          { name: 'Galaxy Book Laptop', image: '/api/placeholder/300/300', description: 'Samsung laptop stands' },
          { name: 'Galaxy Tab FE', image: '/api/placeholder/300/300', description: 'Fan edition mounts' },
          { name: 'Samsung Accessories', image: '/api/placeholder/300/300', description: 'S Pen & charging solutions' }
        ]
      },
      'Microsoft': {
        title: 'Microsoft Device Solutions',
        description: 'Surface tablet and laptop mounting solutions',
        items: [
          { name: 'Surface Pro Stands', image: '/api/placeholder/300/300', description: 'Pro tablet/laptop hybrid' },
          { name: 'Surface Go Mounts', image: '/api/placeholder/300/300', description: 'Compact tablet solutions' },
          { name: 'Surface Laptop Stands', image: '/api/placeholder/300/300', description: 'Traditional laptop mounts' },
          { name: 'Surface Book Mounts', image: '/api/placeholder/300/300', description: 'Detachable laptop stands' },
          { name: 'Surface Studio Mounts', image: '/api/placeholder/300/300', description: 'Creative workstation arms' },
          { name: 'Surface Accessories', image: '/api/placeholder/300/300', description: 'Docking & power solutions' }
        ]
      },
      'Lenovo': {
        title: 'Lenovo Device Solutions',
        description: 'Tablet and laptop mounting solutions',
        items: [
          { name: 'ThinkPad Stands', image: '/api/placeholder/300/300', description: 'Business laptop solutions' },
          { name: 'Yoga Tablet Mounts', image: '/api/placeholder/300/300', description: 'Flexible tablet positioning' },
          { name: 'IdeaPad Accessories', image: '/api/placeholder/300/300', description: 'Consumer laptop stands' },
          { name: 'Tab Series Mounts', image: '/api/placeholder/300/300', description: 'Lenovo tablet solutions' },
          { name: 'Legion Gaming Stands', image: '/api/placeholder/300/300', description: 'Gaming laptop mounts' },
          { name: 'Lenovo Accessories', image: '/api/placeholder/300/300', description: 'Docking & connectivity' }
        ]
      },
      'By Brand': {
        title: 'Device Compatibility',
        description: 'Browse by device manufacturer',
        items: [
          { name: 'Apple Devices', image: '/api/placeholder/300/300', description: 'iPad, iPhone, Mac compatibility' },
          { name: 'Samsung Devices', image: '/api/placeholder/300/300', description: 'Galaxy Tab, Galaxy Phone' },
          { name: 'Microsoft Surface', image: '/api/placeholder/300/300', description: 'Surface Pro, Surface Go' },
          { name: 'Lenovo Devices', image: '/api/placeholder/300/300', description: 'ThinkPad, Yoga series' }
        ]
      },
      'By Products': {
        title: 'Shop by Product Type',
        description: 'Browse our complete product range',
        items: [
          { name: 'Floor Stands', image: '', description: 'Premium adjustable floor mounting solutions', icon: Monitor },
          { name: 'Display Mounts', image: '', description: 'Professional display mounting systems', icon: Tv },
          { name: 'Desk Stands', image: '', description: 'Ergonomic desktop positioning', icon: Laptop },
          { name: 'Clamp Mounts', image: '', description: 'Secure clamping mechanisms', icon: Grip },
          { name: 'Tablet Cases', image: '', description: 'Protective device cases', icon: Shield },
          { name: 'Charging Stations', image: '', description: 'Power management solutions', icon: Battery },
          { name: 'Rolling Kiosks', image: '', description: 'Mobile interactive stations', icon: Navigation },
          { name: 'Digital Signage', image: '', description: 'Display mounting systems', icon: Smartphone }
        ]
      },
      'By Industries': {
        title: 'Shop by Industry',
        description: 'Solutions tailored to your business sector',
        items: [
          { name: 'Retail & POS', image: '', description: 'Point of sale and customer-facing solutions', icon: Building2 },
          { name: 'Education', image: '', description: 'Classroom and campus technology integration', icon: GraduationCap },
          { name: 'Healthcare', image: '', description: 'Medical device and patient care solutions', icon: Stethoscope },
          { name: 'Hospitality', image: '', description: 'Guest services and hotel technology', icon: Coffee },
          { name: 'Enterprise', image: '', description: 'Corporate and office environments', icon: Briefcase },
          { name: 'Industrial', image: '', description: 'Manufacturing and warehouse applications', icon: Factory }
        ]
      },
      'By Devices': {
        title: 'Shop by Device Type',
        description: 'Browse mounting solutions by device compatibility',
        items: [
          { name: 'iPad & Tablets', image: '', description: 'Compatible mounts for all tablet sizes', icon: Tablet },
          { name: 'Smartphones', image: '', description: 'Secure phone mounting solutions', icon: Smartphone },
          { name: 'Laptops', image: '', description: 'Ergonomic laptop stands and mounts', icon: Laptop },
          { name: 'Monitors & Displays', image: '', description: 'Professional display mounting systems', icon: Monitor },
          { name: 'All-in-One PCs', image: '', description: 'Integrated computer mounting solutions', icon: Tv },
          { name: 'POS Terminals', image: '', description: 'Point-of-sale system mounting solutions', icon: Building2 }
        ]
      },
      'By Popular': {
        title: 'Popular Products',
        description: 'Our most requested mounting solutions',
        items: [
          { name: 'iPad Pro Floor Stand', image: '', description: 'Best-selling adjustable floor stand', icon: Star },
          { name: 'Universal Clamp Mount', image: '', description: 'Most versatile clamping system', icon: Grip },
          { name: 'Display Mount Pro', image: '', description: 'Top-rated display mounting solution', icon: Tv },
          { name: 'Charging Kiosk', image: '', description: 'Popular charging station for businesses', icon: Battery },
          { name: 'Ergonomic Desk Stand', image: '', description: 'Customer favorite for office use', icon: Laptop },
          { name: 'Security Enclosure', image: '', description: 'Most trusted protection solution', icon: Shield }
        ]
      }
    };

    return contentMap[hoveredSection];
  };

  const content = getMenuContent();
  const hoveredContent = getHoveredContent();

  return (
    <>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-4px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
      <div 
        className={`absolute top-full left-0 w-screen bg-white shadow-2xl border border-gray-100 rounded-2xl overflow-visible z-50 mt-2 ${
          menuType === 'Categories' ? 'max-w-7xl -ml-8' :
          menuType === 'Devices' ? 'max-w-6xl -ml-16' :
          'max-w-5xl -ml-24'
        }`}
        style={{ animation: 'fadeIn 200ms ease-out forwards' }}
        onMouseEnter={handleContainerMouseEnter}
        onMouseLeave={handleContainerMouseLeave}
      >
        <div className="px-10 py-10">
          {menuType === 'Categories' || menuType === 'Devices' ? (
            // Top navigation layout for Categories and Devices
            <div className="space-y-8">
              {/* Navigation Sections at Top */}
              <div className="flex justify-center space-x-8">
                {content.sections.map((section) => (
                  <div 
                    key={section.title} 
                    className="transition-colors duration-200"
                    onMouseEnter={() => handleSectionHover(section.title)}
                  >
                    <h3 className={`font-semibold text-sm uppercase tracking-wide transition-colors duration-200 cursor-pointer px-4 py-2 rounded-lg ${
                      hoveredSection === section.title ? 'text-white bg-[#ff6363]' : 'text-gray-700 hover:text-[#ff6363] hover:bg-gray-50'
                    }`}>
                      {section.title}
                    </h3>
                  </div>
                ))}
              </div>

              {/* Dynamic Content Below */}
              <div className="w-full">
                {hoveredContent && (
                  <div 
                    key={hoveredContent.title} 
                    style={{ animation: 'fadeIn 250ms ease-out forwards' }}
                  >
                    <div className="mb-6 text-center">
                      <h3 className="text-gray-900 font-semibold text-lg mb-2">{hoveredContent.title}</h3>
                      <p className="text-gray-500 text-sm">{hoveredContent.description}</p>
                    </div>
                    
                    {/* Product cards */}
                    <div className="grid gap-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
                      {hoveredContent.items.map((item: ContentItem) => (
                        <div
                          key={item.name}
                          className="transition-transform duration-200 hover:scale-105"
                        >
                          <ProductCard
                            name={item.name}
                            image={item.image}
                            category={item.description}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ) : (
            // Original side navigation layout for Browse
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
              {/* Navigation Sections */}
              <div className="lg:col-span-1 space-y-6">
                {content.sections.map((section) => (
                  <div 
                    key={section.title} 
                    className="transition-colors duration-200"
                    onMouseEnter={() => handleSectionHover(section.title)}
                  >
                    <h3 className={`font-semibold text-sm uppercase tracking-wide transition-colors duration-200 cursor-pointer ${
                      hoveredSection === section.title ? 'text-[#ff6363]' : 'text-gray-700 hover:text-[#ff6363]'
                    } ${section.items.length > 0 ? 'mb-3' : 'mb-0'}`}>
                      {section.title}
                    </h3>
                    {section.items.length > 0 && (
                      <ul className="space-y-2">
                        {section.items.map((item) => (
                          <li key={item}>
                            <a
                              href="#"
                              className="text-gray-600 hover:text-[#ff6363] text-sm transition-colors duration-200 block py-1 hover:pl-2"
                            >
                              {item}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>

              {/* Dynamic Content Grid */}
              <div className="lg:col-span-4">
                {hoveredContent && (
                  <div 
                    key={hoveredContent.title} 
                    style={{ animation: 'fadeIn 250ms ease-out forwards' }}
                  >
                    <div className="mb-6">
                      <h3 className="text-gray-900 font-semibold text-lg mb-2">{hoveredContent.title}</h3>
                      <p className="text-gray-500 text-sm">{hoveredContent.description}</p>
                    </div>
                    
                    {/* Text-based list for Browse */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 max-w-2xl mx-auto">
                      {hoveredContent.items.map((item: ContentItem) => {
                        const IconComponent = item.icon;
                        return (
                          <div key={item.name} className="group">
                            <a 
                              href="#" 
                              className="flex items-start space-x-3 hover:text-[#ff6363] transition-colors duration-200 p-3 rounded-xl hover:bg-gray-50"
                            >
                              {IconComponent && (
                                <div className="flex-shrink-0 mt-0.5">
                                  <IconComponent 
                                    size={20} 
                                    className="text-[#ff6363] group-hover:scale-110 transition-transform duration-200" 
                                  />
                                </div>
                              )}
                              <div className="flex-1">
                                <div className="font-semibold text-gray-900 group-hover:text-[#ff6363] mb-1">
                                  {item.name}
                                </div>
                                <div className="text-sm text-gray-500 group-hover:text-gray-600 leading-relaxed">
                                  {item.description}
                                </div>
                              </div>
                            </a>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default MegaMenu;
