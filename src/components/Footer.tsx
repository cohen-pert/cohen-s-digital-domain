import { motion } from "framer-motion";
import { ExternalLink, Linkedin } from "lucide-react";

const Footer = () => {
  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Company", href: "#company" },
    { label: "Work", href: "#work" },
    { label: "Timeline", href: "#timeline" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="border-t border-border/30 py-8">
      <div className="section-container">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-6">
            {/* Brand */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <div className="font-display font-bold text-xl gold-gradient-text mb-2">
                Cohen Pert
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                AI entrepreneur building systems and ventures that help businesses grow.
              </p>
            </motion.div>

            {/* Navigation */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h4 className="text-sm font-semibold text-foreground mb-3">Navigate</h4>
              <div className="flex flex-wrap gap-x-4 gap-y-2">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-xs text-foreground/60 hover:text-gold transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Links */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col gap-2"
            >
              <a
                href="https://the-pert-group.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-foreground/60 hover:text-gold transition-colors flex items-center gap-1"
              >
                The Pert Group <ExternalLink className="w-3 h-3" />
              </a>
              <a
                href="https://linkedin.com/in/cohen-pert-a4bb51300"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-foreground/60 hover:text-gold transition-colors flex items-center gap-1"
              >
                LinkedIn <Linkedin className="w-3 h-3" />
              </a>
            </motion.div>
          </div>

          {/* Bottom */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="pt-6 border-t border-border/20 text-center"
          >
            <p className="text-xs text-muted-foreground">
              © 2025 Cohen Pert. All rights reserved.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
