
import React, { useEffect, lazy, Suspense } from 'react';
import MainLayout from '@/layouts/MainLayout';
import Hero from '@/components/Hero';
import LoadingFallback from '@/components/LoadingFallback';

// Lazy load non-critical components with higher priority for Hero
const ClientLogos = lazy(() => import('@/components/ClientLogos'));
const ProductShowcase = lazy(() => import('@/components/ProductShowcase'));
const SecondaryContent = lazy(() => import('@/components/SecondaryContent'));

const Index = () => {
  // Add smooth scrolling for anchor links - but defer this work
  useEffect(() => {
    // Use requestIdleCallback to handle non-critical initialization
    const runNonCriticalTasks = () => {
      // Setup scroll event handlers with better performance characteristics
      const handleAnchorClick = (e: Event) => {
        e.preventDefault();
        const target = document.querySelector((e.currentTarget as HTMLAnchorElement).getAttribute('href') || '');
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth'
          });
        }
      };
      
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', handleAnchorClick);
      });
    };
    
    // Use requestIdleCallback if available, otherwise setTimeout with a small delay
    if (window.requestIdleCallback) {
      window.requestIdleCallback(runNonCriticalTasks);
    } else {
      setTimeout(runNonCriticalTasks, 200);
    }
    
    // Cleanup function
    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', (e) => {
          const handleAnchorClick = (e: Event) => {
            e.preventDefault();
            const target = document.querySelector((e.currentTarget as HTMLAnchorElement).getAttribute('href') || '');
            if (target) {
              target.scrollIntoView({
                behavior: 'smooth'
              });
            }
          };
          handleAnchorClick(e);
        });
      });
    };
  }, []);

  return (
    <MainLayout>
      {/* Hero is critical for LCP, not lazy loaded */}
      <Hero />
      
      {/* Lazy load below-the-fold content with increasing delays */}
      <Suspense fallback={<div className="h-40 flex items-center justify-center"><div className="animate-pulse">Loading...</div></div>}>
        <ClientLogos />
      </Suspense>
      
      <Suspense fallback={<div className="h-40 flex items-center justify-center"><div className="animate-pulse">Loading...</div></div>}>
        <ProductShowcase />
      </Suspense>
      
      <Suspense fallback={<div className="h-40 flex items-center justify-center"><div className="animate-pulse">Loading...</div></div>}>
        <SecondaryContent />
      </Suspense>
    </MainLayout>
  );
};

export default Index;
