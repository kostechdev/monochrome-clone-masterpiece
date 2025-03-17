
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import Button from '@/components/common/Button';
import { Check, X } from 'lucide-react';

interface PricingPlanProps {
  name: string;
  price: string;
  description: string;
  features: { text: string; available: boolean }[];
  popular?: boolean;
  className?: string;
  animationDelay?: string;
}

const PricingPlan = ({ 
  name, 
  price, 
  description, 
  features, 
  popular, 
  className,
  animationDelay
}: PricingPlanProps) => {
  return (
    <div 
      className={cn(
        "bg-white rounded-lg border overflow-hidden transition-all flex flex-col transform duration-300",
        popular 
          ? "border-black shadow-md scale-[1.02] z-10" 
          : "border-gray-200 hover:border-black hover:shadow-lg hover:scale-105",
        className
      )}
      style={{ animationDelay }}
    >
      {popular && (
        <div className="bg-black text-white text-center text-sm font-medium py-1.5">
          Paling Populer
        </div>
      )}
      
      <div className="p-6 flex-grow">
        <h3 className="text-xl font-bold mb-2">{name}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        
        <div className="mb-6">
          <span className="text-3xl font-bold">{price}</span>
          {price !== 'Hubungi Kami' && <span className="text-gray-500">/bulan</span>}
        </div>
        
        <ul className="space-y-3 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              {feature.available ? (
                <Check className="h-5 w-5 text-black flex-shrink-0 mr-2 mt-0.5" />
              ) : (
                <X className="h-5 w-5 text-gray-400 flex-shrink-0 mr-2 mt-0.5" />
              )}
              <span className={!feature.available ? "text-gray-400" : ""}>
                {feature.text}
              </span>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="p-6 pt-0 mt-auto">
        <Button 
          variant={popular ? "default" : "outline"} 
          fullWidth
        >
          {price === 'Hubungi Kami' ? 'Hubungi Kami' : 'Pilih Paket'}
        </Button>
      </div>
    </div>
  );
};

const PricingSection = () => {
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
    
    const section = document.getElementById('pricing');
    if (section) {
      observer.observe(section);
    }
    
    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const pricingPlans = [
    {
      name: "Basic",
      price: "Rp 299.000",
      description: "Untuk usaha kecil yang baru memulai",
      features: [
        { text: "1 Outlet / Cabang", available: true },
        { text: "2 Pengguna / Karyawan", available: true },
        { text: "Manajemen Inventori Dasar", available: true },
        { text: "Laporan Penjualan", available: true },
        { text: "Dukungan Email", available: true },
        { text: "Integrasi dengan E-commerce", available: false },
        { text: "Manajemen Pelanggan", available: false },
        { text: "Analitik Lanjutan", available: false },
      ]
    },
    {
      name: "Professional",
      price: "Rp 599.000",
      description: "Untuk bisnis yang berkembang",
      features: [
        { text: "5 Outlet / Cabang", available: true },
        { text: "10 Pengguna / Karyawan", available: true },
        { text: "Manajemen Inventori Lengkap", available: true },
        { text: "Laporan Bisnis Komprehensif", available: true },
        { text: "Dukungan Prioritas 24/7", available: true },
        { text: "Integrasi dengan E-commerce", available: true },
        { text: "Manajemen Pelanggan", available: true },
        { text: "Analitik Lanjutan", available: false },
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Hubungi Kami",
      description: "Solusi custom untuk bisnis besar",
      features: [
        { text: "Outlet / Cabang Tak Terbatas", available: true },
        { text: "Pengguna / Karyawan Tak Terbatas", available: true },
        { text: "Manajemen Inventori Multi-gudang", available: true },
        { text: "Laporan & Dashboard Custom", available: true },
        { text: "Akun Manager Dedicated", available: true },
        { text: "Integrasi API Lengkap", available: true },
        { text: "CRM & Loyalitas Pelanggan", available: true },
        { text: "Analitik Prediktif & AI", available: true },
      ]
    }
  ];

  return (
    <section id="pricing" className="section-padding bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="headline mb-4">Pilih Paket yang <span className="text-black">Tepat untuk Bisnis Anda</span></h2>
          <p className="subheadline">
            Solusi yang fleksibel untuk semua ukuran bisnis. Bayar hanya untuk apa yang Anda butuhkan
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <PricingPlan
              key={index}
              name={plan.name}
              price={plan.price}
              description={plan.description}
              features={plan.features}
              popular={plan.popular}
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

export default PricingSection;
