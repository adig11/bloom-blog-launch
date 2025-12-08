import { Github, Linkedin, Twitter, Instagram, Youtube, Mail } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "X (Twitter)" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Mail, href: "#", label: "Email" },
];

export const SocialLinks = () => {
  return (
    <div className="flex items-center gap-4">
      {socialLinks.map(({ icon: Icon, href, label }) => (
        <a
          key={label}
          href={href}
          aria-label={label}
          className="text-muted-foreground transition-colors duration-200 hover:text-foreground"
        >
          <Icon className="h-5 w-5" />
        </a>
      ))}
    </div>
  );
};
