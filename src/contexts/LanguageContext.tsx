import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'id' | 'en';

type Translations = {
  [key: string]: {
    id: string;
    en: string;
  };
};

// Define all translatable content
export const translations: Translations = {
  // Navbar
  navFeatures: {
    id: 'Fitur',
    en: 'Features',
  },
  navAbout: {
    id: 'Tentang Kami',
    en: 'About Us',
  },
  navPricing: {
    id: 'Harga',
    en: 'Pricing',
  },
  navContact: {
    id: 'Kontak',
    en: 'Contact',
  },
  // Hero Section
  heroTagline: {
    id: 'Solusi Kasir Terbaik untuk Bisnis Anda',
    en: 'The Best POS Solution for Your Business',
  },
  heroTitle1: {
    id: 'Aplikasi Kasir',
    en: 'POS Application',
  },
  heroTitle2: {
    id: 'Modern &',
    en: 'Modern &',
  },
  heroTitle3: {
    id: 'Sederhanakan Transaksi Bisnis Kamu',
    en: 'Simplify Your Business Transactions',
  },
  heroDescription: {
    id: 'Solusi Point Of Sales untuk UMKM membantu bisnis Anda tumbuh dengan fitur lengkap, laporan real-time, dan integrasi pembayaran digital.',
    en: 'Point Of Sales Solution for SMEs helps your business grow with complete features, real-time reports, and digital payment integration.',
  },
  heroTryFree: {
    id: 'Coba Gratis 14 Hari',
    en: 'Try Free for 14 Days',
  },
  heroDemo: {
    id: 'Demo Aplikasi',
    en: 'App Demo',
  },
  heroUsers: {
    id: 'bisnis telah menggunakan layanan kami',
    en: 'businesses are using our service',
  },
  // Features Section
  featuresTitle: {
    id: 'Fitur Kasir yang',
    en: 'POS Features that are',
  },
  featuresHighlight: {
    id: 'Powerful',
    en: 'Powerful',
  },
  featuresDescription: {
    id: 'Solusi bisnis lengkap yang memudahkan pengelolaan toko dan meningkatkan efisiensi operasional',
    en: 'Complete business solutions that simplify store management and improve operational efficiency',
  },
  featurePos: {
    id: 'Point of Sale Cepat',
    en: 'Fast Point of Sale',
  },
  featurePosDesc: {
    id: 'Proses transaksi dengan cepat dan efisien untuk mengurangi antrian pelanggan.',
    en: 'Process transactions quickly and efficiently to reduce customer queues.',
  },
  featureReports: {
    id: 'Laporan Bisnis',
    en: 'Business Reports',
  },
  featureReportsDesc: {
    id: 'Dapatkan wawasan bisnis dengan laporan penjualan dan inventori yang komprehensif.',
    en: 'Gain business insights with comprehensive sales and inventory reports.',
  },
  featureSecurity: {
    id: 'Keamanan Data',
    en: 'Data Security',
  },
  featureSecurityDesc: {
    id: 'Data Anda aman dengan sistem enkripsi dan backup otomatis di cloud.',
    en: 'Your data is secure with encryption systems and automatic cloud backups.',
  },
  featureCustomer: {
    id: 'Manajemen Pelanggan',
    en: 'Customer Management',
  },
  featureCustomerDesc: {
    id: 'Kelola pelanggan, buat program loyalitas, dan tingkatkan retensi pelanggan.',
    en: 'Manage customers, create loyalty programs, and improve customer retention.',
  },
  featureOperation: {
    id: 'Operasi 24/7',
    en: '24/7 Operation',
  },
  featureOperationDesc: {
    id: 'Sistem yang dapat diandalkan dengan waktu aktif 99.9% untuk bisnis tanpa gangguan.',
    en: 'Reliable system with 99.9% uptime for uninterrupted business.',
  },
  featureInventory: {
    id: 'Manajemen Inventori',
    en: 'Inventory Management',
  },
  featureInventoryDesc: {
    id: 'Lacak stok secara real-time, atur peringatan stok rendah, dan kelola pesanan.',
    en: 'Track stock in real-time, set low stock alerts, and manage orders.',
  },
  // About Us Section
  aboutTitle: {
    id: 'Mengenal Lebih Jauh',
    en: 'Learn More',
  },
  aboutHighlight: {
    id: 'Tentang Kami',
    en: 'About Us',
  },
  aboutDescription: {
    id: 'Pelajari bagaimana KOSTPOS dapat membantu bisnis Anda berkembang',
    en: 'Learn how KOSTPOS can help your business grow',
  },
  aboutVision: {
    id: 'Visi Kami',
    en: 'Our Vision',
  },
  aboutVisionDesc: {
    id: 'Menyederhanakan operasional bisnis UMKM di seluruh Indonesia',
    en: 'Simplifying business operations for SMEs throughout Indonesia',
  },
  aboutMission: {
    id: 'Misi Kami',
    en: 'Our Mission',
  },
  aboutMissionDesc: {
    id: 'Menyediakan teknologi kasir yang mudah, terjangkau dan dapat diandalkan',
    en: 'Providing easy, affordable and reliable POS technology',
  },
  aboutValues: {
    id: 'Nilai Kami',
    en: 'Our Values',
  },
  aboutValuesDesc: {
    id: 'Kesederhanaan, keandalan, dan fokus pada kepuasan pelanggan',
    en: 'Simplicity, reliability, and focus on customer satisfaction',
  },
  // Other sections (add as needed)
  login: {
    id: 'Masuk',
    en: 'Login',
  },
  register: {
    id: 'Daftar',
    en: 'Register',
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('id');

  const t = (key: string): string => {
    if (translations[key] && translations[key][language]) {
      return translations[key][language];
    }
    console.warn(`Translation missing for key: ${key} in language: ${language}`);
    return key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
