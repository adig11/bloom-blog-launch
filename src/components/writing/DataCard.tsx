import { cn } from "@/lib/utils";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";

interface DataCardProps {
  label: string;
  value: string;
  change?: {
    value: string;
    direction: "up" | "down" | "neutral";
  };
  context?: string;
  className?: string;
}

export const DataCard = ({ label, value, change, context, className }: DataCardProps) => {
  const TrendIcon = change?.direction === "up" 
    ? TrendingUp 
    : change?.direction === "down" 
    ? TrendingDown 
    : Minus;

  const trendColor = change?.direction === "up"
    ? "text-chart-2"
    : change?.direction === "down"
    ? "text-destructive"
    : "text-text-meta";

  return (
    <div className={cn(
      "rounded-lg border border-border bg-surface-raised p-6",
      className
    )}>
      <p className="text-xs font-medium uppercase tracking-wider text-text-meta mb-2">
        {label}
      </p>
      <p className="font-serif text-4xl font-bold text-text-headline mb-2">
        {value}
      </p>
      {change && (
        <div className={cn("flex items-center gap-1 text-sm", trendColor)}>
          <TrendIcon className="h-4 w-4" />
          <span>{change.value}</span>
        </div>
      )}
      {context && (
        <p className="mt-3 text-sm text-text-meta">
          {context}
        </p>
      )}
    </div>
  );
};
