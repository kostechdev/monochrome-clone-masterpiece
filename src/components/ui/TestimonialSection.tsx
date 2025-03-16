
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  company: string;
  rating: number;
  className?: string;
  animationDelay?: string;
}

const TestimonialCard = ({ quote, author, role, company, rating, className, animationDelay }: TestimonialCardProps) => {
  return (
    <div 
      className={cn(
        "bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all card-hover flex flex-col",
        className
      )}
      style={{ animationDelay }}
    >
      <div className="mb-4 flex">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star 
            key={i} 
            className={cn(
              "w-5 h-5", 
              i < rating ? "fill-black text-black" : "fill-none text-gray-300"
            )} 
          />
        ))}
      </div>
      
      <blockquote className="flex-grow mb-6 italic text-gray-600">
        "{quote}"
      </blockquote>
      
      <div className="flex items-center mt-auto">
        <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center font-bold text-gray-600">
          {author.charAt(0)}
        </div>
        <div className="ml-3">
          <p className="font-semibold">{author}</p>
          <p className="text-sm text-gray-500">{role}, {company}</p>
        </div>
      </div>
    </div>
  );
};

const TestimonialSection = () => {
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
    
    const section = document.getElementById('testimonials');
    if (section) {
      observer.observe(section);
    }
    
    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const testimonials = [
    {
      quote: "KasirMonochrome sangat membantu bisnis cafe kami. Antrian berkurang dan laporan penjualan memudahkan kami mengambil keputusan.",
      author: "Budi Santoso",
      role: "Pemilik",
      company: "Kopi Kenangan",
      rating: 5
    },
    {
      quote: "Fitur manajemen inventori sangat akurat. Kami tidak pernah kehabisan stok lagi dan bisa mengontrol semua dari satu tempat.",
      author: "Siti Rahma",
      role: "Manager",
      company: "Toko Elektronik Cahaya",
      rating: 4
    },
    {
      quote: "Tampilan yang sederhana namun powerful. Staff baru bisa langsung paham menggunakan sistem ini tanpa training lama.",
      author: "Dian Permata",
      role: "Supervisor",
      company: "Butik Eleganza",
      rating: 5
    },
    {
      quote: "Layanan pelanggan luar biasa baik. Setiap pertanyaan selalu dijawab dengan cepat dan solusi yang tepat.",
      author: "Ahmad Fadli",
      role: "CEO",
      company: "Restoran Bahari",
      rating: 5
    },
  ];

  return (
    <section id="testimonials" className="section-padding">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="headline mb-4">Apa Kata <span className="text-black">Pelanggan Kami</span></h2>
          <p className="subheadline">
            Ribuan bisnis di Indonesia telah menggunakan KasirMonochrome untuk memudahkan operasional mereka
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              role={testimonial.role}
              company={testimonial.company}
              rating={testimonial.rating}
              className={cn(
                "opacity-0",
                isVisible && "animate-fade-in opacity-100"
              )}
              animationDelay={`${index * 0.1}s`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
