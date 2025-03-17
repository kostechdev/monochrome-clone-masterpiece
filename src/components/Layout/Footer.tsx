import React from 'react';
import { Instagram, Youtube, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary/50 pt-16 pb-8 px-4 md:px-6 lg:px-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          <div className="lg:col-span-2">
            <a href="/" className="inline-block mb-6">
              <h2 className="text-2xl font-bold">KOSTPOS</h2>
            </a>
            <p className="text-muted-foreground mb-6 max-w-md">
              Solusi kasir modern dengan tampilan elegan dan fitur lengkap untuk membantu bisnis Anda tumbuh.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-background flex items-center justify-center border border-border hover:bg-primary hover:text-primary-foreground transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-background flex items-center justify-center border border-border hover:bg-primary hover:text-primary-foreground transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="https://wa.me/6283879023153" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-background flex items-center justify-center border border-border hover:bg-primary hover:text-primary-foreground transition-colors">
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Produk</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Fitur</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Harga</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Integrasi</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Updates</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Perusahaan</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Tentang Kami</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Blog</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Karir</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Press</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Partner</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Bantuan</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Kontak</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Support</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Dokumentasi</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Panduan</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Tutorial</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} KOSTPOS. Hak Cipta Dilindungi.
          </p>
          <div className="flex flex-wrap gap-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Syarat & Ketentuan
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Kebijakan Privasi
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
