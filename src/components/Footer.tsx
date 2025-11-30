import { motion } from "framer-motion";
import { ExternalLink, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border/50 py-12">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <div className="font-display font-bold text-xl gold-gradient-text mb-2">
              Cohen Pert
            </div>
            <p className="text-sm text-muted-foreground">
              Built in <a href="https://lovable.dev" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-gold-light transition-colors">Lovable.dev</a> by Cohen Pert
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap items-center justify-center gap-6"
          >
            <a
              href="https://the-pert-group.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-foreground/70 hover:text-gold transition-colors flex items-center gap-1"
            >
              The Pert Group <ExternalLink className="w-3 h-3" />
            </a>
            <a
              href="https://linkedin.com/in/cohen-pert"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-foreground/70 hover:text-gold transition-colors flex items-center gap-1"
            >
              LinkedIn <Linkedin className="w-3 h-3" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-sm text-muted-foreground"
          >
            © 2025 Cohen Pert. All rights reserved.
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;