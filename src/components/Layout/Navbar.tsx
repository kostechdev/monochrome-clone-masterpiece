
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import Button from '../common/Button';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
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
          ? 'bg-white/90 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      )}
    >
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
          <a href="#testimonials" className="font-medium hover:text-black link-hover">
            Testimonial
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
          <Button variant="outline" size="md">
            Masuk
          </Button>
          <Button size="md">
            Daftar Gratis
          </Button>
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
            href="#testimonials"
            className="text-lg font-medium py-2 border-b border-gray-100"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Testimonial
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
            <Button variant="outline" fullWidth>
              Masuk
            </Button>
            <Button fullWidth>
              Daftar Gratis
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
