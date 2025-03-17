
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { LoginDialog, RegisterDialog } from '@/components/ui/AuthForms';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Update scroll state
      setIsScrolled(window.scrollY > 20);
      
      // Calculate scroll progress
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-4 md:px-6 lg:px-8',
        isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-sm translate-y-0'
          : 'bg-transparent'
      )}
    >
      {/* Scroll Progress Indicator */}
      <div className="absolute bottom-0 left-0 w-full h-1">
        <Progress value={scrollProgress} className="h-1 rounded-none bg-gray-100" />
      </div>

      <div className="container flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="text-2xl font-bold">
          KasirMonochrome
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#features" className="font-medium hover:text-black link-hover">
            Fitur
          </a>
          <a href="#about" className="font-medium hover:text-black link-hover">
            Tentang Kami
          </a>
          <a href="#pricing" className="font-medium hover:text-black link-hover">
            Harga
          </a>
          <a href="#contact" className="font-medium hover:text-black link-hover">
            Kontak
          </a>
        </nav>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <LoginDialog />
          <RegisterDialog />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center justify-center text-black"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          'fixed inset-0 top-[72px] bg-white z-40 transition-all duration-300 ease-in-out transform md:hidden',
          isMobileMenuOpen
            ? 'translate-x-0 opacity-100'
            : 'translate-x-full opacity-0'
        )}
      >
        <nav className="flex flex-col p-6 gap-6">
          <a
            href="#features"
            className="text-lg font-medium py-2 border-b border-gray-100"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Fitur
          </a>
          <a
            href="#about"
            className="text-lg font-medium py-2 border-b border-gray-100"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Tentang Kami
          </a>
          <a
            href="#pricing"
            className="text-lg font-medium py-2 border-b border-gray-100"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Harga
          </a>
          <a
            href="#contact"
            className="text-lg font-medium py-2 border-b border-gray-100"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Kontak
          </a>
          <div className="flex flex-col gap-4 mt-4">
            <LoginDialog />
            <RegisterDialog />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
