import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, MessageCircle, Mail, Phone, MapPin } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProgramsOpen, setIsProgramsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    {
      name: 'Programs',
      href: '/programs',
      submenu: [
        { name: 'Youth Development (YDP)', href: '/programs/ydp' },
        { name: 'Senior Secondary (SSP)', href: '/programs/ssp' },
        { name: 'Professional Core (EPC)', href: '/programs/epc' },
        { name: 'Real-World Application (ERWA)', href: '/programs/erwa' },
        { name: 'Capstone Project (ECP)', href: '/programs/ecp' },
      ]
    },
    { name: 'Schools', href: '/schools' },
    { name: 'Mentors', href: '/mentors' },
    { name: 'Events', href: '/events' },
    { name: 'Success Stories', href: '/success' },
    { name: 'Blog', href: '/blog' },
    { name: 'Join Us', href: '/join' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-teal-600 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">EB</span>
              </div>
              <span className="text-2xl font-bold text-gray-900">EthicBizz</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                <div key={item.name} className="relative">
                  {item.submenu ? (
                    <div
                      className="relative"
                      onMouseEnter={() => setIsProgramsOpen(true)}
                      onMouseLeave={() => setIsProgramsOpen(false)}
                    >
                      <Link
                        to={item.href}
                        className={`flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                          isActive(item.href) || location.pathname.startsWith('/programs')
                            ? 'text-blue-600 bg-blue-50 shadow-sm'
                            : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                        }`}
                      >
                        {item.name}
                        <ChevronDown className="ml-1 h-4 w-4" />
                      </Link>
                      {isProgramsOpen && (
                        <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-xl shadow-xl border border-gray-100 py-3 z-50">
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.href}
                              className="block px-6 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                        isActive(item.href)
                          ? 'text-blue-600 bg-blue-50 shadow-sm'
                          : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-6 py-2 rounded-lg text-sm font-medium hover:from-blue-700 hover:to-teal-700 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Contact Us
              </Link>
            </nav>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
            <div className="px-4 py-4 space-y-2">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    to={item.href}
                    className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                      isActive(item.href)
                        ? 'text-blue-600 bg-blue-50'
                        : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.submenu && (
                    <div className="ml-4 mt-2 space-y-1">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.href}
                          className="block px-4 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link
                to="/contact"
                className="block w-full text-center bg-gradient-to-r from-blue-600 to-teal-600 text-white px-6 py-3 rounded-lg text-base font-medium hover:from-blue-700 hover:to-teal-700 transition-all duration-200 mt-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="pt-16">
        {children}
      </main>

      {/* Floating Contact Button */}
      <Link
        to="/contact"
        className="fixed bottom-6 right-6 bg-gradient-to-r from-blue-600 to-teal-600 text-white p-4 rounded-full shadow-xl hover:shadow-2xl transition-all hover:scale-110 z-40 group"
      >
        <MessageCircle className="h-6 w-6 group-hover:animate-pulse" />
      </Link>

      {/* Enhanced Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-teal-500 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-xl">EB</span>
                </div>
                <span className="text-2xl font-bold">EthicBizz</span>
              </div>
              <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
                Empowering the next generation through ethical business education, 
                real-world application, and transformative learning experiences that create lasting impact.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center text-gray-300">
                  <Mail className="h-5 w-5 mr-3 text-blue-400" />
                  <span>hello@ethicbizz.org</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Phone className="h-5 w-5 mr-3 text-blue-400" />
                  <span>+91 99193 07139</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <MapPin className="h-5 w-5 mr-3 text-blue-400" />
                  <span>New Delhi, India</span>
                </div>
              </div>
            </div>
            
            {/* Programs */}
            <div>
              <h3 className="font-bold text-lg mb-6 text-white">Programs</h3>
              <ul className="space-y-3 text-sm">
                <li><Link to="/programs/ydp" className="text-gray-300 hover:text-white transition-colors">Youth Development</Link></li>
                <li><Link to="/programs/ssp" className="text-gray-300 hover:text-white transition-colors">Senior Secondary</Link></li>
                <li><Link to="/programs/epc" className="text-gray-300 hover:text-white transition-colors">Professional Core</Link></li>
                <li><Link to="/programs/erwa" className="text-gray-300 hover:text-white transition-colors">Real-World Application</Link></li>
                <li><Link to="/programs/ecp" className="text-gray-300 hover:text-white transition-colors">Capstone Project</Link></li>
              </ul>
            </div>
            
            {/* Get Involved */}
            <div>
              <h3 className="font-bold text-lg mb-6 text-white">Get Involved</h3>
              <ul className="space-y-3 text-sm">
                <li><Link to="/join" className="text-gray-300 hover:text-white transition-colors">Join Us</Link></li>
                <li><Link to="/mentors" className="text-gray-300 hover:text-white transition-colors">Become a Mentor</Link></li>
                <li><Link to="/schools" className="text-gray-300 hover:text-white transition-colors">Partner Schools</Link></li>
                <li><Link to="/events" className="text-gray-300 hover:text-white transition-colors">Events</Link></li>
                <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
          </div>
          
          {/* Bottom Section */}
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-400 mb-4 md:mb-0">
              © 2025 EthicBizz. All rights reserved. Building the future of ethical education.
            </div>
            <div className="flex space-x-6">
              <Link to="/about" className="text-sm text-gray-400 hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="/about" className="text-sm text-gray-400 hover:text-white transition-colors">Terms of Service</Link>
              <Link to="/blog" className="text-sm text-gray-400 hover:text-white transition-colors">Blog</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;