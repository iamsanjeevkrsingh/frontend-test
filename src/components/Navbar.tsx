
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <svg viewBox="0 0 54 54" className="h-8 w-8 text-slack-purple" fill="currentColor">
                <path d="M19.712.133a5.381 5.381 0 0 0-5.376 5.387 5.381 5.381 0 0 0 5.376 5.386h5.376V5.52A5.381 5.381 0 0 0 19.712.133m0 14.365H5.376A5.381 5.381 0 0 0 0 19.884a5.381 5.381 0 0 0 5.376 5.387h14.336a5.381 5.381 0 0 0 5.376-5.387 5.381 5.381 0 0 0-5.376-5.386" />
                <path d="M53.76 19.884a5.381 5.381 0 0 0-5.376-5.386 5.381 5.381 0 0 0-5.376 5.386v5.387h5.376a5.381 5.381 0 0 0 5.376-5.387m-14.336 0V5.52A5.381 5.381 0 0 0 34.048.133a5.381 5.381 0 0 0-5.376 5.387v14.364a5.381 5.381 0 0 0 5.376 5.387 5.381 5.381 0 0 0 5.376-5.387" />
                <path d="M34.048 54a5.381 5.381 0 0 0 5.376-5.387 5.381 5.381 0 0 0-5.376-5.386h-5.376v5.386A5.381 5.381 0 0 0 34.048 54m0-14.365h14.336a5.381 5.381 0 0 0 5.376-5.386 5.381 5.381 0 0 0-5.376-5.387H34.048a5.381 5.381 0 0 0-5.376 5.387 5.381 5.381 0 0 0 5.376 5.386" />
                <path d="M0 34.249a5.381 5.381 0 0 0 5.376 5.386 5.381 5.381 0 0 0 5.376-5.386v-5.387H5.376A5.381 5.381 0 0 0 0 34.25m14.336-.001v14.364A5.381 5.381 0 0 0 19.712 54a5.381 5.381 0 0 0 5.376-5.387V34.25a5.381 5.381 0 0 0-5.376-5.387 5.381 5.381 0 0 0-5.376 5.387" />
              </svg>
              <span className="ml-2 text-xl font-bold text-slate-900">slack</span>
            </Link>

            <div className="hidden md:flex ml-10">
              <div className="relative group">
                <button className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-slack-purple">
                  Product <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                <div className="absolute left-0 mt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-1">
                  <div className="glass-panel rounded-lg shadow-lg py-2 px-4">
                    <Link to="#" className="block py-2 text-sm text-gray-700 hover:text-slack-purple">Features</Link>
                    <Link to="#" className="block py-2 text-sm text-gray-700 hover:text-slack-purple">Integrations</Link>
                    <Link to="#" className="block py-2 text-sm text-gray-700 hover:text-slack-purple">Solutions</Link>
                  </div>
                </div>
              </div>

              <div className="relative group">
                <button className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-slack-purple">
                  Enterprise <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                <div className="absolute left-0 mt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-1">
                  <div className="glass-panel rounded-lg shadow-lg py-2 px-4">
                    <Link to="#" className="block py-2 text-sm text-gray-700 hover:text-slack-purple">Slack for Enterprise</Link>
                    <Link to="#" className="block py-2 text-sm text-gray-700 hover:text-slack-purple">Security</Link>
                  </div>
                </div>
              </div>

              <div className="relative group">
                <button className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-slack-purple">
                  Resources <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                <div className="absolute left-0 mt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-1">
                  <div className="glass-panel rounded-lg shadow-lg py-2 px-4">
                    <Link to="#" className="block py-2 text-sm text-gray-700 hover:text-slack-purple">Blog</Link>
                    <Link to="#" className="block py-2 text-sm text-gray-700 hover:text-slack-purple">Webinars</Link>
                    <Link to="#" className="block py-2 text-sm text-gray-700 hover:text-slack-purple">Guides</Link>
                  </div>
                </div>
              </div>

              <Link to="#" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-slack-purple">
                Pricing
              </Link>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search..." 
                className="py-1 pl-8 pr-4 w-36 bg-gray-100 border border-transparent rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-slack-purple focus:border-transparent" 
              />
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400 absolute left-2.5 top-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <Button variant="ghost" className="text-gray-700 hover:text-slack-purple">
              Sign in
            </Button>
            <Button className="bg-slack-purple hover:bg-opacity-90 text-white">
              TALK TO SALES
            </Button>
            <Button className="bg-white border border-slack-purple text-slack-purple hover:bg-slack-purple hover:text-white transition-colors">
              TRY FOR FREE
            </Button>
          </div>

          <button 
            className="md:hidden focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-gray-900" />
            ) : (
              <Menu className="h-6 w-6 text-gray-900" />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        <div 
          className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} mt-4 pb-4 animate-fade-in fixed left-0 right-0 top-[72px] z-50 bg-white/95 backdrop-blur-md shadow-md`}
          style={{ maxHeight: 'calc(100vh - 72px)', overflowY: 'auto' }}
        >
          <div className="flex flex-col space-y-2 px-6">
            <button className="flex items-center justify-between py-2 text-gray-700 hover:text-slack-purple border-b border-gray-200">
              Product <ChevronDown className="h-4 w-4" />
            </button>
            <button className="flex items-center justify-between py-2 text-gray-700 hover:text-slack-purple border-b border-gray-200">
              Enterprise <ChevronDown className="h-4 w-4" />
            </button>
            <button className="flex items-center justify-between py-2 text-gray-700 hover:text-slack-purple border-b border-gray-200">
              Resources <ChevronDown className="h-4 w-4" />
            </button>
            <Link to="#" className="py-2 text-gray-700 hover:text-slack-purple border-b border-gray-200">
              Pricing
            </Link>
            <div className="pt-4 pb-2">
              <Button variant="ghost" className="w-full justify-center mb-2">
                Sign in
              </Button>
              <Button className="w-full justify-center mb-2 bg-slack-purple text-white">
                TALK TO SALES
              </Button>
              <Button className="w-full justify-center bg-white border border-slack-purple text-slack-purple hover:bg-slack-purple hover:text-white transition-colors">
                TRY FOR FREE
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
