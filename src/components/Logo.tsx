
import React from 'react';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  animate?: boolean;
}

const Logo = ({ className, animate = false }: LogoProps) => {
  return (
    <div className={cn("flex items-center", className)}>
      <div className={cn(
        "relative flex items-center justify-center",
        animate && "animate-float"
      )}>
        <div className="absolute w-10 h-10 bg-secondary/60 rounded-full blur-md" />
        <div className="relative text-3xl font-bold z-10 text-white">
          <span className="text-primary">R</span>
          <span className="text-accent">S</span>
        </div>
      </div>
      <div className="ml-3">
        <div className="font-bold text-xl text-foreground">ROYAL SPARK</div>
        <div className="text-xs text-muted-foreground">INNOVATION LAB</div>
      </div>
    </div>
  );
};

export default Logo;
