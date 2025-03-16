
import React from 'react';
import Button from '../common/Button';
import AnimatedImage from '../common/AnimatedImage';

const HeroSection: React.FC = () => {
  return (
    <section className="pt-32 pb-20 px-4 md:px-6 lg:px-8 overflow-hidden">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col items-start space-y-6 animate-slide-up">
            <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-secondary text-secondary-foreground">
              Solusi Kasir Terbaik untuk Bisnis Anda
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight">
              <span className="block">Aplikasi Kasir</span>
              <span className="block">Modern &</span>
              <span className="block">Mudah Digunakan</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-md">
              Solusi point of sale yang membantu bisnis Anda tumbuh dengan fitur lengkap, 
              laporan real-time, dan integrasi pembayaran digital.
            </p>
            <div className="flex flex-wrap gap-4 mt-6">
              <Button size="lg">
                Coba Gratis 14 Hari
              </Button>
              <Button variant="outline" size="lg">
                Demo Aplikasi
              </Button>
            </div>
            <div className="flex items-center gap-4 mt-4 text-sm">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-gray-300 ring-2 ring-white" />
                ))}
              </div>
              <p className="text-muted-foreground">
                <span className="font-semibold text-foreground">1,000+</span> bisnis telah menggunakan layanan kami
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-secondary rounded-full animate-pulse opacity-70 blur-xl -z-10"></div>
            <AnimatedImage 
              src="/placeholder.svg" 
              alt="Aplikasi Kasir Dashboard"
              className="rounded-xl shadow-2xl border border-gray-200 w-full"
              animation="float"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
