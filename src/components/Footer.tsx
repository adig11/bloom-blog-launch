import { SocialLinks } from "./SocialLinks";
import { Heart } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t border-border px-4 py-12">
      <div className="container">
        <div className="flex flex-col items-center gap-6">
          <SocialLinks />
          
          <p className="flex items-center gap-1 text-sm text-muted-foreground">
            Made with <Heart className="h-4 w-4 text-primary" /> and lots of coffee
          </p>
          
          <p className="text-xs text-muted-foreground/60">
            © {new Date().getFullYear()} The Thoughtful Writer. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
