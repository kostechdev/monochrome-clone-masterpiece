
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

    // Set up intersection observers for all sections
    const sections = document.querySelectorAll('section');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, { threshold: 0.1 });
    
    sections.forEach(section => {
      observer.observe(section);
    });
    
    return () => {
      document.removeEventListener('click', handleLinkClick);
      sections.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden relative">
      {/* Aurora background effect */}
      <div className="fixed inset-0 z-[-1] overflow-hidden">
        <div className="absolute -inset-[10px] opacity-50">
          <div className="absolute top-[40%] left-[10%] w-[500px] h-[500px] bg-purple-500/10 rounded-full filter blur-[80px] animate-aurora-1"></div>
          <div className="absolute top-[60%] right-[20%] w-[400px] h-[400px] bg-blue-500/10 rounded-full filter blur-[80px] animate-aurora-2"></div>
          <div className="absolute bottom-[10%] left-[30%] w-[600px] h-[600px] bg-indigo-500/10 rounded-full filter blur-[80px] animate-aurora-3"></div>
        </div>
      </div>
      
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
