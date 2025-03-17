
import React, { useEffect } from 'react';
import Navbar from '@/components/Layout/Navbar';
import Footer from '@/components/Layout/Footer';
import HeroSection from '@/components/ui/HeroSection';
import FeatureSection from '@/components/ui/FeatureSection';
import AboutUsSection from '@/components/ui/AboutUsSection';
import PricingSection from '@/components/ui/PricingSection';
import ContactSection from '@/components/ui/ContactSection';

const Index = () => {
  useEffect(() => {
    // Smooth scroll effect for page transitions
    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a');
      
      if (!link) return;
      
      const href = link.getAttribute('href');
      if (!href || !href.startsWith('#')) return;
      
      e.preventDefault();
      const element = document.querySelector(href);
      
      if (element) {
        window.scrollTo({
          top: element.getBoundingClientRect().top + window.scrollY - 80,
          behavior: 'smooth'
        });
      }
    };
    
    document.addEventListener('click', handleLinkClick);
    
    return () => {
      document.removeEventListener('click', handleLinkClick);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <Navbar />
      
      <main className="flex-grow">
        <HeroSection />
        <FeatureSection />
        <AboutUsSection />
        <PricingSection />
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
