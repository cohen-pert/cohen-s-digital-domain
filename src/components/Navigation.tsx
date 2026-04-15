import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Ventures", href: "#company" },
  { label: "Projects", href: "#work" },
  { label: "Timeline", href: "#timeline" },
  { label: "Contact", href: "#contact" },
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border/30"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#hero" className="font-display text-lg font-bold gold-gradient-text">
            Cohen Pert
          </a>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-foreground/60 hover:text-gold transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="https://cal.com/cohen-pert/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 bg-gold text-primary-foreground font-semibold text-sm rounded-md hover:bg-gold-light transition-all"
            >
              Book Call
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-foreground/70"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden pt-4 pb-2 space-y-3"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="block text-sm text-foreground/60 hover:text-gold transition-colors py-1"
              >
                {item.label}
              </a>
            ))}
            <a
              href="https://cal.com/cohen-pert/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center px-5 py-2 bg-gold text-primary-foreground font-semibold text-sm rounded-md mt-2"
            >
              Book Call
            </a>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navigation;
