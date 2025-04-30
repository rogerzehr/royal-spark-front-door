
import React from 'react';
import { cn } from '@/lib/utils';

interface SparkIconProps {
  className?: string;
}

const SparkIcon = ({ className }: SparkIconProps) => {
  return (
    <svg 
      viewBox="0 0 24 24" 
      className={cn("w-6 h-6", className)}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path 
        d="M9 21.5L17.5 13L13 10L15 2.5L6.5 11L11 14L9 21.5Z" 
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="1.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default SparkIcon;
