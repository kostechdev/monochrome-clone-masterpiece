
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X, Globe } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { LoginDialog, RegisterDialog } from '@/components/ui/AuthForms';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const { language, setLanguage, t } = useLanguage();

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

  // Effect to prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

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
          KOSTPOS
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#features" className="font-medium hover:text-black link-hover">
            {t('navFeatures')}
          </a>
          <a href="#about" className="font-medium hover:text-black link-hover">
            {t('navAbout')}
          </a>
          <a href="#pricing" className="font-medium hover:text-black link-hover">
            {t('navPricing')}
          </a>
          <a href="#contact" className="font-medium hover:text-black link-hover">
            {t('navContact')}
          </a>
        </nav>

        {/* CTA Buttons and Language Switcher */}
        <div className="hidden md:flex items-center gap-4">
          {/* Language Switcher */}
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 p-2 rounded-md hover:bg-gray-100 transition-colors">
              <Globe className="h-4 w-4" />
              <span className="uppercase">{language}</span>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={() => setLanguage('id')} className={language === 'id' ? 'font-bold' : ''}>
                Indonesia (ID)
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setLanguage('en')} className={language === 'en' ? 'font-bold' : ''}>
                English (EN)
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          
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

      {/* Mobile Menu Overlay */}
      <div 
        className={cn(
          'fixed inset-0 top-[72px] backdrop-blur-lg bg-black/50 z-40 transition-opacity duration-300 md:hidden',
          isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        )}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Menu */}
      <div
        className={cn(
          'fixed inset-0 top-[72px] bg-white z-50 transition-all duration-300 ease-in-out transform md:hidden',
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
            {t('navFeatures')}
          </a>
          <a
            href="#about"
            className="text-lg font-medium py-2 border-b border-gray-100"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {t('navAbout')}
          </a>
          <a
            href="#pricing"
            className="text-lg font-medium py-2 border-b border-gray-100"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {t('navPricing')}
          </a>
          <a
            href="#contact"
            className="text-lg font-medium py-2 border-b border-gray-100"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {t('navContact')}
          </a>
          
          {/* Language Switcher in Mobile Menu */}
          <div className="py-2 border-b border-gray-100">
            <div className="flex gap-4">
              <button 
                onClick={() => setLanguage('id')}
                className={cn("px-3 py-1 rounded", language === 'id' ? "bg-black text-white" : "bg-gray-100")}
              >
                ID
              </button>
              <button 
                onClick={() => setLanguage('en')}
                className={cn("px-3 py-1 rounded", language === 'en' ? "bg-black text-white" : "bg-gray-100")}
              >
                EN
              </button>
            </div>
          </div>
          
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
