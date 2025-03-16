
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import Button from '../common/Button';
import { Check } from 'lucide-react';

interface PlanFeature {
  text: string;
  available: boolean;
}

interface PricingPlanProps {
  name: string;
  price: string;
  description: string;
  features: PlanFeature[];
  popular?: boolean;
  className?: string;
}

const PricingPlan: React.FC<PricingPlanProps> = ({
  name,
  price,
  description,
  features,
  popular = false,
  className
}) => {
  return (
    <div 
      className={cn(
        "rounded-xl border bg-card p-6 relative card-hover",
        popular ? "border-primary shadow-lg" : "border-border",
        className
      )}
    >
      {popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
          Paling Populer
        </div>
      )}
      <div className={popular ? "pt-4" : ""}>
        <h3 className="text-xl font-bold">{name}</h3>
        <p className="text-muted-foreground mt-2 mb-4">{description}</p>
        <div className="mb-6">
          <span className="text-3xl font-bold">Rp {price}</span>
          <span className="text-muted-foreground">/bulan</span>
        </div>

        <Button 
          variant={popular ? "default" : "outline"} 
          fullWidth
          className="mb-6"
        >
          {popular ? "Pilih Paket Ini" : "Mulai Sekarang"}
        </Button>

        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <div className={cn(
                "w-5 h-5 rounded-full flex items-center justify-center mt-0.5",
                feature.available ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
              )}>
                {feature.available ? <Check className="w-3 h-3" /> : "×"}
              </div>
              <span className={feature.available ? "" : "text-muted-foreground"}>{feature.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const PricingSection: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const basicFeatures = [
    { text: "1 Outlet", available: true },
    { text: "1 Kasir", available: true },
    { text: "Unlimited Produk", available: true },
    { text: "Manajemen Stok Dasar", available: true },
    { text: "Laporan Penjualan", available: true },
    { text: "Dukungan Email", available: true },
    { text: "Integrasi Pembayaran Digital", available: false },
    { text: "Analitik Lanjutan", available: false },
    { text: "API Akses", available: false },
  ];

  const proFeatures = [
    { text: "5 Outlet", available: true },
    { text: "5 Kasir", available: true },
    { text: "Unlimited Produk", available: true },
    { text: "Manajemen Stok Lengkap", available: true },
    { text: "Laporan Bisnis Komprehensif", available: true },
    { text: "Dukungan Prioritas 24/7", available: true },
    { text: "Integrasi Pembayaran Digital", available: true },
    { text: "Analitik Lanjutan", available: true },
    { text: "API Akses", available: false },
  ];

  const enterpriseFeatures = [
    { text: "Outlet Tak Terbatas", available: true },
    { text: "Kasir Tak Terbatas", available: true },
    { text: "Unlimited Produk", available: true },
    { text: "Manajemen Stok Enterprise", available: true },
    { text: "Dashboard Bisnis Custom", available: true },
    { text: "Dukungan Dedicated Manager", available: true },
    { text: "Integrasi Pembayaran Digital", available: true },
    { text: "Analitik Lanjutan + AI", available: true },
    { text: "API Akses Penuh", available: true },
  ];

  return (
    <section id="pricing" className="section-padding bg-secondary/50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in">
          <h2 className="headline">Pilih Paket Sesuai Kebutuhan Bisnis Anda</h2>
          <p className="subheadline">
            Solusi yang fleksibel untuk semua skala bisnis dengan fitur yang dapat disesuaikan
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="inline-flex items-center bg-secondary rounded-full p-1">
            <button
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all",
                billingCycle === 'monthly'
                  ? "bg-white text-black shadow-sm"
                  : "text-muted-foreground hover:text-black"
              )}
              onClick={() => setBillingCycle('monthly')}
            >
              Bulanan
            </button>
            <button
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all",
                billingCycle === 'yearly'
                  ? "bg-white text-black shadow-sm"
                  : "text-muted-foreground hover:text-black"
              )}
              onClick={() => setBillingCycle('yearly')}
            >
              Tahunan
              <span className="ml-1 text-xs font-bold text-primary">-20%</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <PricingPlan
            name="Basic"
            price={billingCycle === 'monthly' ? "199.000" : "159.200"}
            description="Untuk bisnis kecil yang baru memulai"
            features={basicFeatures}
            className="animate-slide-up"
            style={{ animationDelay: "0s" }}
          />
          <PricingPlan
            name="Pro"
            price={billingCycle === 'monthly' ? "499.000" : "399.200"}
            description="Untuk bisnis yang sedang berkembang"
            features={proFeatures}
            popular={true}
            className="animate-slide-up"
            style={{ animationDelay: "0.1s" }}
          />
          <PricingPlan
            name="Enterprise"
            price={billingCycle === 'monthly' ? "999.000" : "799.200"}
            description="Untuk bisnis besar dengan kebutuhan khusus"
            features={enterpriseFeatures}
            className="animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          />
        </div>

        <div className="mt-16 p-8 rounded-xl bg-card border border-border text-center max-w-3xl mx-auto animate-fade-in">
          <h3 className="text-2xl font-bold mb-4">Butuh Solusi Kustom?</h3>
          <p className="text-muted-foreground mb-6">
            Kami menyediakan konsultasi gratis untuk membantu menemukan solusi yang tepat untuk bisnis Anda
          </p>
          <Button>Hubungi Tim Sales</Button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
