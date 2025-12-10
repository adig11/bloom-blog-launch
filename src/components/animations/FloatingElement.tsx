import { ReactNode, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface FloatingElementProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  distance?: number;
  className?: string;
}

export const FloatingElement = ({
  children,
  delay = 0,
  duration = 6,
  distance = 20,
  className,
}: FloatingElementProps) => {
  return (
    <div
      className={cn("animate-float", className)}
      style={{
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`,
        ["--float-distance" as string]: `${distance}px`,
      }}
    >
      {children}
    </div>
  );
};
