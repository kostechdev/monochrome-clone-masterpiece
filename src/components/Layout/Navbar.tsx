import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X, Globe } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { LoginDialog, RegisterDialog } from "@/components/ui/AuthForms";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

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
      const winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Effect to prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 border-0",
        isScrolled
          ? "bg-white/80 backdrop-blur-md translate-y-0 px-4"
          : "bg-white/90 backdrop-blur-sm px-8"
      )}
    >
      {/* Scroll Progress Indicator */}
      <div className="absolute bottom-0 left-0 w-full">
        <Progress
          value={scrollProgress}
          className="h-[2px] rounded-none bg-gray-100"
        />
      </div>

      <div
        className={cn(
          "flex items-center justify-between mx-auto",
          isScrolled
            ? "max-w-4xl bg-white/90 backdrop-blur-md py-2 px-6 rounded-full"
            : "container"
        )}
      >
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <img
            src="/lovable-uploads/b123027b-f6d1-4147-8ee5-d9202e545d49.png"
            alt="KOSTPOS"
            className="h-10"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#features"
            className="font-medium text-black/80 hover:text-black transition-colors"
          >
            {t("navFeatures")}
          </a>
          <a
            href="#pricing"
            className="font-medium text-black/80 hover:text-black transition-colors"
          >
            {t("navPricing")}
          </a>
          <a
            href="#contact"
            className="font-medium text-black/80 hover:text-black transition-colors"
          >
            {t("navContact")}
          </a>
        </nav>

        {/* CTA Buttons and Language Switcher */}
        <div className="hidden md:flex items-center gap-4">
          {/* Language Switcher */}
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 p-2 rounded-md text-black/70 hover:text-black hover:bg-black/10 transition-colors">
              <Globe className="h-4 w-4" />
              <span className="uppercase">{language}</span>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem
                onClick={() => setLanguage("id")}
                className={language === "id" ? "font-bold" : ""}
              >
                Indonesia (ID)
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => setLanguage("en")}
                className={language === "en" ? "font-bold" : ""}
              >
                English (EN)
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <a href="http://localhost:8000/login">
            <Button
              variant="outline"
              className="bg-white text-black hover:bg-gray-100 border-gray-300 rounded-md"
            >
              Masuk
            </Button>
          </a>

          <a href="http://localhost:8000/daftar">
            <Button
              variant="outline"
              className="bg-black text-white hover:bg-black/90 rounded-md border-none"
            >
              Daftar
            </Button>
          </a>
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
          "fixed inset-0 top-[72px] backdrop-blur-lg bg-black/20 z-40 transition-opacity duration-300 md:hidden",
          isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 top-[72px] bg-white z-50 transition-all duration-300 ease-in-out transform md:hidden",
          isMobileMenuOpen
            ? "translate-x-0 opacity-100"
            : "translate-x-full opacity-0"
        )}
      >
        <nav className="flex flex-col p-6 gap-6">
          <a
            href="#features"
            className="text-lg font-medium py-2 border-b border-gray-200 text-black"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {t("navFeatures")}
          </a>
          <a
            href="#pricing"
            className="text-lg font-medium py-2 border-b border-gray-200 text-black"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {t("navPricing")}
          </a>
          <a
            href="#contact"
            className="text-lg font-medium py-2 border-b border-gray-200 text-black"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Sign Up
          </a>

          {/* Language Switcher in Mobile Menu */}
          <div className="py-2 border-b border-gray-200">
            <div className="flex gap-4">
              <button
                onClick={() => setLanguage("id")}
                className={cn(
                  "px-3 py-1 rounded",
                  language === "id"
                    ? "bg-black text-white"
                    : "bg-gray-200 text-black"
                )}
              >
                ID
              </button>
              <button
                onClick={() => setLanguage("en")}
                className={cn(
                  "px-3 py-1 rounded",
                  language === "en"
                    ? "bg-white text-black"
                    : "bg-gray-800 text-white"
                )}
              >
                EN
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-4 mt-4">
            <a href="http://localhost:8000/login" className="w-full">
              <Button
                variant="outline"
                className="w-full bg-white text-black hover:bg-gray-100 border-gray-300 rounded-md"
              >
                Masuk
              </Button>
            </a>
            <a href="http://localhost:8000/login" className="w-full">
              <Button
                variant="outline"
                className="w-full bg-black text-white hover:bg-black/90 rounded-md border-none"
              >
                Daftar
              </Button>
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
