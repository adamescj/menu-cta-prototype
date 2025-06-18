
import React, { useState } from 'react';
import { Search, User, ShoppingCart, Menu, X } from 'lucide-react';
import MegaMenu from './MegaMenu';

const Header = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Categories', hasDropdown: true },
    { name: 'Devices', hasDropdown: true },
    { name: 'Browse', hasDropdown: true },
    { name: 'About', hasDropdown: false },
    { name: 'Contact', hasDropdown: false },
    { name: 'Case Studies', hasDropdown: false },
    { name: 'Blogs', hasDropdown: false },
  ];

  return (
    <header className="bg-white shadow-lg relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="text-2xl font-bold text-[#ff6363]">CTA</div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.hasDropdown && setActiveMenu(item.name)}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <button
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    activeMenu === item.name
                      ? 'text-[#ff6363] bg-gray-50'
                      : 'text-gray-700 hover:text-[#ff6363] hover:bg-gray-50'
                  }`}
                >
                  {item.name}
                </button>
                {item.hasDropdown && activeMenu === item.name && (
                  <MegaMenu menuType={item.name} />
                )}
              </div>
            ))}
          </nav>

          {/* Right side items */}
          <div className="flex items-center space-x-4">
            {/* Customization Button */}
            <button className="hidden md:block bg-[#ff6363] text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-[#ff5252] transition-colors duration-200">
              CUSTOMIZATION
            </button>

            {/* Search */}
            <div className="hidden md:flex items-center bg-gray-100 rounded-full px-4 py-2">
              <input
                type="text"
                placeholder="Search"
                className="bg-transparent outline-none text-sm w-40"
              />
              <Search className="h-4 w-4 text-gray-500 ml-2" />
            </div>

            {/* Icons */}
            <button className="p-2 text-gray-600 hover:text-[#ff6363] transition-colors">
              <User className="h-5 w-5" />
            </button>
            <button className="p-2 text-gray-600 hover:text-[#ff6363] transition-colors">
              <ShoppingCart className="h-5 w-5" />
            </button>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 text-gray-600 hover:text-[#ff6363]"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 py-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href="#"
                className="block px-4 py-2 text-gray-700 hover:text-[#ff6363] hover:bg-gray-50 rounded-md mx-2"
              >
                {item.name}
              </a>
            ))}
            <div className="mt-4 px-4">
              <button className="w-full bg-[#ff6363] text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-[#ff5252] transition-colors duration-200">
                CUSTOMIZATION
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
