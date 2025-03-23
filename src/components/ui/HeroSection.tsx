import React from "react";
import Button from "../common/Button";
import { useLanguage } from "@/contexts/LanguageContext";

const HeroSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="pt-40 pb-20 px-4 md:px-6 lg:px-8 overflow-hidden bg-white text-black">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col items-start space-y-6">
            <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-secondary text-secondary-foreground">
              {t("heroTagline")}
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-tight tracking-tight">
              <span className="block text-primary">{t("heroTitle3")}</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-md">
              {t("heroDescription")}
            </p>
            <div className="flex flex-wrap gap-4 mt-6">
              <a href="http://localhost:8000/register">
                <Button size="lg" fullWidth>
                  {t("heroTryFree")}
                </Button>
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gray-200/50 rounded-full opacity-70 blur-xl -z-10"></div>
            <img
              src="/lovable-uploads/d029158e-e30a-4faa-9dd6-6b648b5ee417.png"
              alt="KOSTPOS Application"
              className="rounded-xl shadow-2xl border border-gray-200 w-full max-w-[100%] mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
