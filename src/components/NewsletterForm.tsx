import { useState } from "react";
import { cn } from "@/lib/utils";
import { ArrowRight, Check, Loader2 } from "lucide-react";

interface NewsletterFormProps {
  variant?: "default" | "minimal" | "hero";
  className?: string;
}

export const NewsletterForm = ({ variant = "default", className }: NewsletterFormProps) => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setStatus("success");
    setEmail("");
    
    // Reset after 3 seconds
    setTimeout(() => setStatus("idle"), 3000);
  };

  if (variant === "hero") {
    return (
      <div className={cn("", className)}>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@company.com"
            className="flex-1 rounded-full border border-border bg-background px-5 py-3 text-sm placeholder:text-text-meta focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
            disabled={status === "loading" || status === "success"}
          />
          <button
            type="submit"
            disabled={status === "loading" || status === "success"}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-70"
          >
            {status === "loading" ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : status === "success" ? (
              <>
                <Check className="h-4 w-4" />
                Subscribed!
              </>
            ) : (
              <>
                Subscribe
                <ArrowRight className="h-4 w-4" />
              </>
            )}
          </button>
        </form>
        <p className="mt-3 text-xs text-text-meta">
          Join 2,000+ founders. One essay per week. No spam.
        </p>
      </div>
    );
  }

  return (
    <div className={cn("rounded-lg border border-border bg-surface-raised p-6", className)}>
      <h3 className="font-serif text-xl font-semibold text-text-headline mb-2">
        Subscribe to the newsletter
      </h3>
      <p className="text-sm text-text-meta mb-4">
        Deep essays on startups, systems, and ideas. Delivered weekly.
      </p>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@company.com"
          className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm placeholder:text-text-meta focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
          disabled={status === "loading" || status === "success"}
        />
        <button
          type="submit"
          disabled={status === "loading" || status === "success"}
          className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-70"
        >
          {status === "loading" ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : status === "success" ? (
            <>
              <Check className="h-4 w-4" />
              You're in!
            </>
          ) : (
            "Subscribe"
          )}
        </button>
      </form>
    </div>
  );
};
