
import React, { useEffect } from 'react';

const ProductShowcase = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100');
            entry.target.classList.remove('opacity-0');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.fade-in-element');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-6 fade-in-element opacity-0 transition-opacity duration-700">
            A new way to work together
          </h2>
          <p className="text-lg text-gray-600 fade-in-element opacity-0 transition-opacity duration-700 delay-100">
            Slack brings all your team communication into one place, making collaboration seamless and more efficient than ever before.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-8 fade-in-element opacity-0 transition-opacity duration-700 delay-200">
            <div className="w-12 h-12 bg-[#611f69]/10 rounded-lg flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-slack-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-4">Channels for every project</h3>
            <p className="text-gray-600">
              Organize conversations by topic, project, team, or anything else that matters to your work.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-8 fade-in-element opacity-0 transition-opacity duration-700 delay-300">
            <div className="w-12 h-12 bg-[#2eb67d]/10 rounded-lg flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#2eb67d]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-4">Move faster with workflows</h3>
            <p className="text-gray-600">
              Automate routine actions and communication so your team can get work done faster.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-8 fade-in-element opacity-0 transition-opacity duration-700 delay-400">
            <div className="w-12 h-12 bg-[#ecb22e]/10 rounded-lg flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#ecb22e]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-4">Connect all your tools</h3>
            <p className="text-gray-600">
              Bring the apps your team already uses into Slack, or discover new ones that'll make life easier.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
