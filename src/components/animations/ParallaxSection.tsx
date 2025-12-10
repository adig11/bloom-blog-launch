import { ReactNode, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface ParallaxSectionProps {
  children: ReactNode;
  speed?: number;
  className?: string;
}

export const ParallaxSection = ({
  children,
  speed = 0.3,
  className,
}: ParallaxSectionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const scrolled = window.innerHeight - rect.top;
      setTransform(scrolled * speed);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed]);

  return (
    <div ref={ref} className={cn("relative overflow-hidden", className)}>
      <div
        style={{ transform: `translateY(${transform}px)` }}
        className="will-change-transform"
      >
        {children}
      </div>
    </div>
  );
};
