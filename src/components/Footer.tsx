import { ExternalLink, Linkedin } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border/20 py-8">
    <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="text-xs text-foreground/40">
        © 2026 Cohen Pert. All rights reserved.
      </p>
      <div className="flex items-center gap-6">
        <a
          href="https://the-pert-group.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-foreground/40 hover:text-gold transition-colors flex items-center gap-1"
        >
          The Pert Group <ExternalLink className="w-3 h-3" />
        </a>
        <a
          href="https://linkedin.com/in/cohen-pert-a4bb51300"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-foreground/40 hover:text-gold transition-colors flex items-center gap-1"
        >
          LinkedIn <Linkedin className="w-3 h-3" />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
