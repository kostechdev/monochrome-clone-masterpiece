
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

const AboutUsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  
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
          <h2 className="headline mb-4">Mengenal Lebih Jauh <span className="text-black">Tentang Kami</span></h2>
          <p className="subheadline">
            Pelajari bagaimana KasirMonochrome dapat membantu bisnis Anda berkembang
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
          
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
              <h3 className="font-bold text-lg mb-2">Visi Kami</h3>
              <p className="text-gray-600">Menyederhanakan operasional bisnis UMKM di seluruh Indonesia</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
              <h3 className="font-bold text-lg mb-2">Misi Kami</h3>
              <p className="text-gray-600">Menyediakan teknologi kasir yang mudah, terjangkau dan dapat diandalkan</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
              <h3 className="font-bold text-lg mb-2">Nilai Kami</h3>
              <p className="text-gray-600">Kesederhanaan, keandalan, dan fokus pada kepuasan pelanggan</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
