
import React from 'react';
import { cn } from '@/lib/utils';
import AnimatedImage from '../common/AnimatedImage';
import { 
  BarChart3, 
  ShoppingBag, 
  Users, 
  CreditCard, 
  Smartphone, 
  Clock, 
  BarChart2, 
  Percent 
} from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, className }) => {
  return (
    <div className={cn(
      "p-6 rounded-xl border border-border bg-card card-hover",
      className
    )}>
      <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-secondary text-primary mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

const features = [
  {
    icon: <ShoppingBag className="w-6 h-6" />,
    title: "Manajemen Inventaris",
    description: "Kelola stok secara real-time dengan notifikasi otomatis saat persediaan hampir habis."
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: "Laporan Bisnis",
    description: "Dapatkan insight bisnis dengan laporan penjualan, laba rugi, dan tren pelanggan."
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Manajemen Pelanggan",
    description: "Kumpulkan data pelanggan dan buat program loyalitas untuk meningkatkan retensi."
  },
  {
    icon: <CreditCard className="w-6 h-6" />,
    title: "Multi-Pembayaran",
    description: "Terima pembayaran dari berbagai metode, dari tunai hingga e-wallet dengan mudah."
  },
  {
    icon: <Smartphone className="w-6 h-6" />,
    title: "Akses Mobile",
    description: "Kelola bisnis dari mana saja dengan aplikasi mobile yang responsif."
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Operasi 24/7",
    description: "Sistem cloud yang selalu online dengan backup otomatis untuk data bisnis Anda."
  },
  {
    icon: <BarChart2 className="w-6 h-6" />,
    title: "Analisis Data",
    description: "Visualisasi data penjualan dan performa bisnis dengan dashboard interaktif."
  },
  {
    icon: <Percent className="w-6 h-6" />,
    title: "Promo & Diskon",
    description: "Buat berbagai program promosi dan diskon untuk meningkatkan penjualan."
  }
];

const FeatureSection: React.FC = () => {
  return (
    <section id="features" className="section-padding bg-secondary/50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="headline">Fitur Lengkap untuk Bisnis Anda</h2>
          <p className="subheadline">
            Semua yang Anda butuhkan untuk mengelola bisnis dalam satu platform yang mudah digunakan
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              className="animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            />
          ))}
        </div>

        <div className="mt-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <AnimatedImage
              src="/placeholder.svg"
              alt="Dashboard Analitik"
              className="rounded-xl shadow-xl border border-border"
              animation="slide-in-left"
            />
          </div>
          <div className="order-1 lg:order-2 animate-slide-in-right">
            <h3 className="text-3xl font-bold mb-6">Analitik Bisnis yang Mendalam</h3>
            <p className="text-muted-foreground mb-6">
              Dapatkan insight bisnis yang detail dengan dashboard analitik yang mudah dipahami. 
              Monitor performa bisnis secara real-time dan buat keputusan berdasarkan data.
            </p>
            <ul className="space-y-4">
              {[
                "Dashboard visual interaktif",
                "Laporan penjualan harian, mingguan, dan bulanan",
                "Analisis performa produk dan karyawan",
                "Prediksi tren bisnis dengan AI",
                "Export laporan dalam berbagai format"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs mt-1">✓</div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in-left">
            <h3 className="text-3xl font-bold mb-6">Integrasi dengan Berbagai Platform</h3>
            <p className="text-muted-foreground mb-6">
              Hubungkan dengan platform e-commerce, pembayaran digital, dan sistem lainnya untuk 
              mengotomatisasi alur kerja bisnis Anda.
            </p>
            <ul className="space-y-4">
              {[
                "Integrasi dengan marketplace populer",
                "Sinkronisasi stok otomatis",
                "Dukungan pembayaran digital dan e-wallet",
                "Ekspor data ke software akuntansi",
                "API terbuka untuk pengembangan kustom"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs mt-1">✓</div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <AnimatedImage
              src="/placeholder.svg"
              alt="Integrasi Platform"
              className="rounded-xl shadow-xl border border-border"
              animation="slide-in-right"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
