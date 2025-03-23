
import React, { useEffect } from 'react';
import { Button } from "@/components/ui/button";

const SecondaryContent = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 order-2 lg:order-1">
            <div className="relative">
              <div className="aspect-video bg-slack-purple/10 rounded-lg overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="bg-white rounded-full p-4 shadow-xl hover:shadow-2xl transition-all transform hover:scale-105">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-slack-purple" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </button>
                </div>
                <div className="absolute bottom-0 right-0">
                  <div className="bg-slack-purple text-white px-4 py-2 rounded-tl-lg text-xs font-medium">
                    FUTURE
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-[#ecb22e] opacity-20 rounded-full blur-2xl"></div>
              <div className="absolute -top-6 -right-6 w-40 h-40 bg-[#2eb67d] opacity-20 rounded-full blur-2xl"></div>
            </div>
          </div>
          
          <div className="lg:w-1/2 order-1 lg:order-2 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold animate-on-scroll opacity-0 translate-y-10 transition-all duration-700">
              Now is your moment to build a better tomorrow
            </h2>
            
            <p className="text-lg text-gray-600 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-100">
              We've seen what the future can be. Now it's time to decide what it will be.
            </p>
            
            <Button className="button-primary animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-200">
              WATCH NOW
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecondaryContent;
