
import React, { useEffect, useState } from 'react';
import { CheckCircle, Zap, Shield, BarChart4, Clock, Users } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/contexts/LanguageContext';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
  animationDelay?: string;
}

const FeatureCard = ({ icon, title, description, className, animationDelay }: FeatureCardProps) => {
  return (
    <div 
      className={cn(
        "bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all card-hover",
        className
      )}
      style={{ animationDelay }}
    >
      <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const FeatureSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useLanguage();
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    
    const section = document.getElementById('features');
    if (section) {
      observer.observe(section);
    }
    
    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const features = [
    {
      icon: <Zap className="h-6 w-6" />,
      titleKey: 'featurePos',
      descriptionKey: 'featurePosDesc',
    },
    {
      icon: <BarChart4 className="h-6 w-6" />,
      titleKey: 'featureReports',
      descriptionKey: 'featureReportsDesc',
    },
    {
      icon: <Shield className="h-6 w-6" />,
      titleKey: 'featureSecurity',
      descriptionKey: 'featureSecurityDesc',
    },
    {
      icon: <Users className="h-6 w-6" />,
      titleKey: 'featureCustomer',
      descriptionKey: 'featureCustomerDesc',
    },
    {
      icon: <Clock className="h-6 w-6" />,
      titleKey: 'featureOperation',
      descriptionKey: 'featureOperationDesc',
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      titleKey: 'featureInventory',
      descriptionKey: 'featureInventoryDesc',
    },
  ];

  return (
    <section id="features" className="section-padding bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="headline mb-4">
            {t('featuresTitle')} <span className="text-black">{t('featuresHighlight')}</span>
          </h2>
          <p className="subheadline">
            {t('featuresDescription')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={t(feature.titleKey)}
              description={t(feature.descriptionKey)}
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

export default FeatureSection;
