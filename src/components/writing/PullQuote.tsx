import { cn } from "@/lib/utils";

interface PullQuoteProps {
  children: string;
  attribution?: string;
  className?: string;
}

export const PullQuote = ({ children, attribution, className }: PullQuoteProps) => {
  return (
    <figure className={cn("my-12 text-center", className)}>
      <blockquote className="relative">
        <span className="absolute -top-4 left-1/2 -translate-x-1/2 text-6xl text-primary/20 font-serif">
          "
        </span>
        <p className="font-serif text-2xl md:text-3xl text-text-headline leading-relaxed italic px-8">
          {children}
        </p>
      </blockquote>
      {attribution && (
        <figcaption className="mt-4 text-sm text-text-meta">
          — {attribution}
        </figcaption>
      )}
    </figure>
  );
};
