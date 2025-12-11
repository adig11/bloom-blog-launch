import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";

const navItems = [
  { href: "/", label: "Home", external: false },
  { href: "/articles", label: "Articles", external: false },
  { href: "/series/graph-of-the-week", label: "Graph of the Week", external: false },
  { href: "https://adig-portfolio.netlify.app/", label: "About", external: true },
];

const AnimatedLogo = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    // Toggle every 4 seconds
    const interval = setInterval(() => {
      setIsCollapsed(prev => !prev);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Link 
      to="/" 
      className="font-poppins text-xl font-bold tracking-tight text-text-headline transition-colors hover:text-primary relative overflow-hidden"
    >
      <span className="relative inline-block">
        <span 
          className={cn(
            "inline-block transition-all duration-700 ease-in-out",
            isCollapsed ? "max-w-0 opacity-0" : "max-w-[200px] opacity-100"
          )}
          style={{ overflow: 'hidden', whiteSpace: 'nowrap' }}
        >
          thepaper
        </span>
        <span 
          className={cn(
            "inline-block transition-all duration-700 ease-in-out",
            isCollapsed ? "max-w-0 opacity-0" : "max-w-[80px] opacity-100"
          )}
          style={{ overflow: 'hidden', whiteSpace: 'nowrap' }}
        >
          founder
        </span>
        <span 
          className={cn(
            "inline-block transition-all duration-700 ease-in-out",
            isCollapsed ? "max-w-[40px] opacity-100" : "max-w-0 opacity-0"
          )}
          style={{ overflow: 'hidden', whiteSpace: 'nowrap' }}
        >
          tpf
        </span>
        <span className="text-primary font-black text-2xl">.</span>
      </span>
    </Link>
  );
};

export const Header = () => {
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container flex h-16 items-center justify-between">
        <AnimatedLogo />

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            item.external ? (
              <a
                key={item.href}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium transition-colors hover:text-primary text-text-meta"
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  location.pathname === item.href
                    ? "text-text-headline"
                    : "text-text-meta"
                )}
              >
                {item.label}
              </Link>
            )
          ))}
        </nav>

        <Link
          to="/subscribe"
          className="hidden md:inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
        >
          Subscribe
        </Link>

        {/* Mobile menu button */}
        <button className="md:hidden p-2 text-text-meta hover:text-text-headline">
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
};
