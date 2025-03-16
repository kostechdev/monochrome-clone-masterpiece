
import React from 'react';
import { cn } from '@/lib/utils';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  company: string;
  rating: number;
  className?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  author,
  role,
  company,
  rating,
  className
}) => {
  return (
    <div 
      className={cn(
        "bg-card border border-border p-6 rounded-xl flex flex-col h-full card-hover",
        className
      )}
    >
      <div className="flex mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={cn(
              "w-5 h-5",
              i < rating ? "fill-black text-black" : "text-muted"
            )}
          />
        ))}
      </div>
      <blockquote className="text-lg flex-grow mb-6">"{quote}"</blockquote>
      <div className="flex items-center mt-auto">
        <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center font-semibold text-lg">
          {author.charAt(0)}
        </div>
        <div className="ml-4">
          <div className="font-semibold">{author}</div>
          <div className="text-sm text-muted-foreground">{role}, {company}</div>
        </div>
      </div>
    </div>
  );
};

const testimonials = [
  {
    quote: "Aplikasi kasir ini mengubah cara saya mengelola bisnis. Sekarang semua data tersinkronisasi dan saya bisa melihat laporan penjualan secara real-time.",
    author: "Diana Sentosa",
    role: "Pemilik",
    company: "Cafe Nusantara",
    rating: 5
  },
  {
    quote: "Proses transaksi jadi jauh lebih cepat. Pelanggan tidak perlu menunggu lama dan saya bisa melayani lebih banyak customer dalam sehari.",
    author: "Budi Prakoso",
    role: "Manager",
    company: "Toko Elektronik Jaya",
    rating: 5
  },
  {
    quote: "Fitur manajemen stok sangat membantu. Saya tidak perlu lagi khawatir kehabisan barang karena sistem langsung memberi notifikasi.",
    author: "Rini Wijaya",
    role: "Pemilik",
    company: "Butik Fashion",
    rating: 4
  },
  {
    quote: "Laporan analitik membantu saya melihat produk mana yang laris dan mana yang tidak, sehingga bisa membuat strategi bisnis yang lebih baik.",
    author: "Andi Kurniawan",
    role: "Direktur",
    company: "Restoran Seafood",
    rating: 5
  },
  {
    quote: "Integrasi dengan e-wallet sangat memudahkan. Pelanggan lebih suka pembayaran digital dan saya tidak perlu repot dengan uang tunai.",
    author: "Siti Nurhayati",
    role: "Supervisor",
    company: "Minimarket Berkah",
    rating: 5
  },
  {
    quote: "Customer service sangat responsif. Setiap masalah selalu diselesaikan dengan cepat sehingga operasional bisnis tetap lancar.",
    author: "Hendra Gunawan",
    role: "Owner",
    company: "Toko Bangunan Makmur",
    rating: 4
  }
];

const TestimonialSection: React.FC = () => {
  return (
    <section id="testimonials" className="section-padding">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="headline">Apa Kata Pelanggan Kami</h2>
          <p className="subheadline">
            Ribuan bisnis telah menggunakan aplikasi kami dan merasakan peningkatan efisiensi
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              {...testimonial}
              className="animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            />
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center animate-fade-in">
          <div className="flex items-center flex-wrap justify-center gap-6 mb-8">
            {['Restoran', 'Retail', 'Fashion', 'Elektronik', 'F&B', 'Salon', 'Toko Buku', 'Apotek'].map((industry, i) => (
              <div key={i} className="py-2 px-4 bg-secondary text-secondary-foreground rounded-full text-sm font-medium">
                {industry}
              </div>
            ))}
          </div>
          <p className="text-center text-muted-foreground">
            Berbagai industri telah merasakan manfaat dari aplikasi kami
          </p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
