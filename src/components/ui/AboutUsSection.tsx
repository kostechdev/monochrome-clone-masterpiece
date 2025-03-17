
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/contexts/LanguageContext';

const AboutUsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useLanguage();
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    
    const section = document.getElementById('about');
    if (section) {
      observer.observe(section);
    }
    
    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <section id="about" className="section-padding">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="headline mb-4">
            {t('aboutTitle')} <span className="text-black">{t('aboutHighlight')}</span>
          </h2>
          <p className="subheadline">
            {t('aboutDescription')}
          </p>
        </div>
        
        <div className={cn(
          "w-full max-w-4xl mx-auto opacity-0",
          isVisible && "animate-fade-in opacity-100"
        )}>
          <div className="aspect-w-16 aspect-h-9">
            <iframe 
              className="w-full rounded-lg shadow-lg" 
              style={{ aspectRatio: '16/9' }}
              src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
              title="KasirMonochrome Introduction" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
