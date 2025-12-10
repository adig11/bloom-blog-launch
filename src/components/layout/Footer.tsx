import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-surface-sunken">
      <div className="container py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link to="/" className="font-poppins text-xl font-bold text-text-headline">
              thepaperfounder
            </Link>
            <p className="mt-4 max-w-md text-sm text-text-meta">
              A personal lens on startups, systems, markets, and ideas. 
              For founders, operators, and curious generalists.
            </p>
          </div>

          <div>
            <h4 className="font-sans text-sm font-semibold text-text-headline mb-4">
              Explore
            </h4>
            <nav className="flex flex-col gap-2">
              <Link to="/articles" className="text-sm text-text-meta hover:text-primary transition-colors">
                All Articles
              </Link>
              <Link to="/series/graph-of-the-week" className="text-sm text-text-meta hover:text-primary transition-colors">
                Graph of the Week
              </Link>
            </nav>
          </div>

          <div>
            <h4 className="font-sans text-sm font-semibold text-text-headline mb-4">
              Connect
            </h4>
            <nav className="flex flex-col gap-2">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-sm text-text-meta hover:text-primary transition-colors">
                X / Twitter
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-sm text-text-meta hover:text-primary transition-colors">
                LinkedIn
              </a>
              <Link to="/subscribe" className="text-sm text-text-meta hover:text-primary transition-colors">
                Newsletter
              </Link>
            </nav>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-text-meta">
            © {new Date().getFullYear()} thepaperfounder. All rights reserved.
          </p>
          <p className="text-xs text-text-meta">
            Built with obsessive attention to detail.
          </p>
        </div>
      </div>
    </footer>
  );
};
