import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Company", href: "#company" },
    { label: "Work", href: "#work" },
    { label: "Timeline", href: "#timeline" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#hero" className="font-display text-xl font-bold gold-gradient-text">
            Cohen Pert
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-foreground/80 hover:text-gold transition-colors gold-underline"
              >
                {item.label}
              </a>
            ))}
            <a
              href="https://cal.com/cohen-pert/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 bg-gold text-primary-foreground font-semibold text-sm rounded-md hover:bg-gold-light transition-all gold-glow"
            >
              Book Call
            </a>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;