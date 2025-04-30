
import React from 'react';
import { cn } from '@/lib/utils';

interface BackgroundGridProps {
  className?: string;
}

const BackgroundGrid = ({ className }: BackgroundGridProps) => {
  return (
    <div className={cn("absolute inset-0 overflow-hidden opacity-10", className)}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary to-transparent" />
      <div className="absolute right-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary to-transparent" />

      {/* Grid lines */}
      <div className="grid grid-cols-6 h-full gap-4 px-4">
        {Array(5).fill(0).map((_, i) => (
          <div key={i} className="h-full w-px bg-primary/20 mx-auto" />
        ))}
      </div>

      <div className="grid grid-rows-6 w-full gap-4 py-4">
        {Array(5).fill(0).map((_, i) => (
          <div key={i} className="w-full h-px bg-primary/20 my-auto" />
        ))}
      </div>
    </div>
  );
};

export default BackgroundGrid;
