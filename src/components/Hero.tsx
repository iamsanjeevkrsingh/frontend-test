
import React, { useEffect, useRef, useState } from 'react';
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

const Hero = () => {
  const [showBanner, setShowBanner] = useState(true);
  const [isLoaded, setIsLoaded] = useState(true); // Start as true to avoid delay
  const messageRef = useRef<HTMLSpanElement>(null);
  
  // Optimize animations by running them after the main content is displayed
  useEffect(() => {
    // Add opacity to emoji faces after initial render
    if (messageRef.current) {
      messageRef.current.classList.add('opacity-100');
    }
    
    // Use requestIdleCallback for non-critical animations
    if (window.requestIdleCallback) {
      window.requestIdleCallback(() => {
        const elements = document.querySelectorAll('.animate-on-scroll');
        elements.forEach((el) => {
          if (!el.classList.contains('critical-content')) {
            el.classList.add('opacity-0', 'translate-y-10');
          }
        });
      });
    }
  }, []);

  // Use IntersectionObserver only for below-the-fold content
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
            // Unobserve after animation to improve performance
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    // Only observe non-critical elements
    const fadeInElements = document.querySelectorAll('.animate-on-scroll:not(.critical-content)');
    fadeInElements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      fadeInElements.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, [isLoaded]);

  return (
    <section className="relative min-h-screen pt-32 pb-24 overflow-hidden">
      {showBanner && (
        <div className="fixed inset-x-0 top-20 z-40 flex items-center justify-center">
          <div className="bg-[#1264a3] text-white py-4 px-6 mx-4 rounded-lg shadow-md flex items-center justify-between max-w-6xl w-full">
            <div className="flex-1 text-sm sm:text-base">
              <p>Slack is your digital HQ. Meet the new features keeping teams connected in a work-from-anywhere world. Let's go →</p>
            </div>
            <button 
              onClick={() => setShowBanner(false)}
              className="ml-4 p-1 rounded-full hover:bg-white/10 transition-colors"
              aria-label="Close banner"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>
      )}

      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">
        <div className="lg:w-1/2 space-y-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-on-scroll critical-content opacity-100">
            Slack is where the <span className="text-slack-purple">future works</span>
          </h1>
          
          {/* This is the LCP element - remove animations and delays */}
          <p className="text-lg md:text-xl text-gray-600 max-w-lg critical-content opacity-100">
            Transform the way you work with one place for everyone and everything you need to get stuff done.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-on-scroll critical-content opacity-100">
            <Button className="button-primary">
              TRY FOR FREE
            </Button>
            <Button className="bg-white hover:bg-gray-50 text-black border border-gray-300 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              SIGN UP WITH GOOGLE
            </Button>
          </div>
        </div>
        
        {/* Chat UI illustration - load after critical content */}
        <div className="lg:w-1/2 relative animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-400">
          <div className="relative w-full max-w-lg mx-auto animate-float">
            {/* Simplified blur effects for better performance */}
            <div className="absolute -top-4 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-60"></div>
            <div className="absolute -bottom-8 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-60"></div>
            <div className="relative">
              <div className="bg-purple-900 text-white rounded-2xl p-4 pb-8 shadow-xl max-w-md mx-auto">
                <div className="flex items-center border-b border-white/20 pb-2 mb-4">
                  <div className="flex space-x-2 mr-4">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="flex items-center">
                    <span className="text-sm font-medium mr-1">Channels</span>
                    <span className="text-sm text-white/60">+</span>
                  </div>
                </div>
                
                <div className="flex items-center px-2 py-1 mb-3 bg-purple-800/50 rounded-md">
                  <span className="text-purple-400 text-sm mr-2">#</span>
                  <span className="text-sm font-medium">project-unicorn</span>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-500 flex-shrink-0 overflow-hidden">
                      <span ref={messageRef} className="opacity-0 transition-opacity duration-500">🧑</span>
                    </div>
                    <div className="bg-purple-800/70 rounded-lg p-3 shadow-sm">
                      <p className="text-sm font-medium mb-1">Zoe Maxwell</p>
                      <p className="text-xs">Are we ready for launch?</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 ml-6">
                    <div className="w-8 h-8 rounded-full bg-green-500 flex-shrink-0 overflow-hidden">
                      <span className="opacity-0 transition-opacity duration-500">👨</span>
                    </div>
                    <div className="bg-purple-800/70 rounded-lg p-3 shadow-sm relative">
                      <p className="text-sm font-medium mb-1">Matt Brewer</p>
                      <p className="text-xs">Here's the run of show:</p>
                      <div className="bg-purple-700/50 mt-2 p-2 rounded border border-white/10 text-xs flex items-center">
                        <svg className="w-4 h-4 mr-2 text-white/60" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd"></path>
                        </svg>
                        Launch-details.pdf
                      </div>
                      <div className="absolute top-0 right-0 -mt-2 -mr-2 bg-green-500 text-xs text-white px-2 py-0.5 rounded-full">
                        5
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Use memo to prevent unnecessary re-renders
export default React.memo(Hero);
