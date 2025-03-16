
import React from 'react';
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'ghost' | 'link';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'default',
  size = 'md',
  children,
  className,
  fullWidth = false,
  ...props
}) => {
  return (
    <button
      className={cn(
        "relative overflow-hidden rounded-lg font-medium transition-all flex items-center justify-center",
        
        // Variants
        variant === 'default' && "bg-primary text-primary-foreground hover:bg-primary/90",
        variant === 'outline' && "border border-primary bg-transparent text-primary hover:bg-primary/10",
        variant === 'ghost' && "bg-transparent text-primary hover:bg-primary/10",
        variant === 'link' && "bg-transparent text-primary underline-offset-4 hover:underline",
        
        // Sizes
        size === 'sm' && "text-sm px-3 py-1.5",
        size === 'md' && "text-sm px-4 py-2.5",
        size === 'lg' && "text-base px-6 py-3",
        
        // Full width
        fullWidth && "w-full",
        
        className
      )}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      <span className="absolute inset-0 w-full h-full scale-0 rounded-lg transition-all duration-300 group-hover:scale-100 group-hover:bg-opacity-10"></span>
    </button>
  );
};

export default Button;
