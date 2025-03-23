import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import Button from "@/components/common/Button";
import { Check, X } from "lucide-react";

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
  animationDelay,
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
          {price === "Rp 1.000" && (
            <span className="text-gray-500">/Hari</span>
          )}
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
        <a 
          href={`https://wa.me/6283879023153?text=${encodeURIComponent(
            name === "Basic" 
              ? "Saya tertarik dengan paket Basic KOSTPOS. Mohon informasi lebih lanjut."
              : name === "Professional"
              ? "Saya tertarik dengan paket Professional KOSTPOS yang include perangkat. Mohon informasi lebih lanjut."
              : "Saya tertarik dengan paket Enterprise KOSTPOS untuk solusi custom. Mohon informasi lebih lanjut."
          )}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant={popular ? "default" : "outline"} fullWidth>
            {price === "Hubungi Kami" ? "Hubungi Kami" : "Pilih Paket"}
          </Button>
        </a>
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

    const section = document.getElementById("pricing");
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
      price: "Rp 1.000",
      description: "Untuk usaha kecil yang baru memulai",
      features: [
        { text: "5 Outlet / Cabang", available: true },
        { text: "5 Pengguna / Karyawan", available: true },
        { text: "Manajemen Inventori", available: true },
        { text: "Management Petty Cash", available: true },
        { text: "Laporan Penjualan", available: true },
      ],
    },
    {
      name: "Professional",
      price: "Rp 2.500.000",
      description: "Untuk bisnis yang berkembang",
      features: [
        { text: "Device Tablet Advan V8 X", available: true },
        { text: "1 Set Printer Thermal Bluetooth", available: true },
        { text: "3 Struk", available: true },
        { text: "Stand Tablet", available: true },
        { text: "Free Langganan Paket Basic 3 Bulan", available: true },
      ],
      popular: true,
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
        { text: "Custom Aplikasi", available: true },
      ],
    },
  ];

  return (
    <section id="pricing" className="section-padding bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="headline mb-4">
            Pilih Paket yang{" "}
            <span className="text-black">Tepat untuk Bisnis Anda</span>
          </h2>
          <p className="subheadline">
            Solusi yang fleksibel untuk semua ukuran bisnis. Bayar hanya untuk
            apa yang Anda butuhkan
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
