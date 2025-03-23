import React from "react";
import { Instagram, Youtube, Phone } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary/50 pt-16 pb-8 px-4 md:px-6 lg:px-8">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-16">
          <div className="text-center md:text-left">
            <a href="/" className="inline-block mb-6">
              <h2 className="text-2xl font-bold">KOSTPOS</h2>
            </a>
            <p className="text-muted-foreground mb-6 max-w-md">
              Solusi kasir modern dengan tampilan elegan dan fitur lengkap untuk
              membantu UMKM.
            </p>
          </div>
          <div className="flex space-x-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-background flex items-center justify-center border border-border hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-background flex items-center justify-center border border-border hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <Youtube className="w-5 h-5" />
            </a>
            <a
              href="https://wa.me/6283879023153"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-background flex items-center justify-center border border-border hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <Phone className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} KOSTPOS. Hak Cipta Dilindungi.
          </p>
          <div className="flex flex-wrap gap-6">
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Syarat & Ketentuan
            </a>
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Kebijakan Privasi
            </a>
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
