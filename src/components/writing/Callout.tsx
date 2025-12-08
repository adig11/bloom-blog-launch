import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Lightbulb, AlertTriangle, Quote, Zap, Hammer } from "lucide-react";
import { CalloutType } from "@/lib/types";

interface CalloutProps {
  type: CalloutType;
  title?: string;
  children: ReactNode;
  className?: string;
}

const calloutConfig = {
  insight: {
    icon: Lightbulb,
    bg: "bg-callout-insight",
    border: "border-l-primary",
    iconColor: "text-primary",
    defaultTitle: "Key Insight",
  },
  warning: {
    icon: AlertTriangle,
    bg: "bg-callout-warning",
    border: "border-l-destructive",
    iconColor: "text-destructive",
    defaultTitle: "Warning",
  },
  quote: {
    icon: Quote,
    bg: "bg-callout-quote",
    border: "border-l-text-meta",
    iconColor: "text-text-meta",
    defaultTitle: undefined,
  },
  contrarian: {
    icon: Zap,
    bg: "bg-callout-warning",
    border: "border-l-chart-5",
    iconColor: "text-chart-5",
    defaultTitle: "Contrarian Take",
  },
  build: {
    icon: Hammer,
    bg: "bg-callout-insight",
    border: "border-l-chart-2",
    iconColor: "text-chart-2",
    defaultTitle: "If I Were to Build This",
  },
};

export const Callout = ({ type, title, children, className }: CalloutProps) => {
  const config = calloutConfig[type];
  const Icon = config.icon;

  return (
    <aside
      className={cn(
        "my-8 rounded-lg border-l-4 p-6",
        config.bg,
        config.border,
        className
      )}
    >
      <div className="flex gap-4">
        <Icon className={cn("h-5 w-5 shrink-0 mt-0.5", config.iconColor)} />
        <div className="flex-1">
          {(title || config.defaultTitle) && (
            <p className="font-sans text-sm font-semibold text-text-headline mb-2">
              {title || config.defaultTitle}
            </p>
          )}
          <div className="text-sm text-text-body leading-relaxed">
            {children}
          </div>
        </div>
      </div>
    </aside>
  );
};
