import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Mail, Phone } from "lucide-react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" ref={ref} className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center max-w-2xl mx-auto"
      >
        <h2 className="font-display text-4xl md:text-6xl font-bold mb-4">
          Let's <span className="gold-gradient-text">Talk</span>
        </h2>
        <p className="text-foreground/60 text-lg mb-10 leading-relaxed">
          Whether you need automation for your business, want to explore an investment opportunity, 
          or just want to connect — I'd love to chat.
        </p>

        <a
          href="https://cal.com/cohen-pert/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-3 px-12 py-5 bg-gold text-primary-foreground font-bold text-lg rounded-lg hover:bg-gold-light transition-all gold-glow-lg"
        >
          Book a Call
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </a>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mt-12 text-sm text-foreground/50">
          <a href="mailto:cohenpert@gmail.com" className="flex items-center gap-2 hover:text-gold transition-colors">
            <Mail className="w-4 h-4" /> cohenpert@gmail.com
          </a>
          <a href="mailto:cohen@the-pert-group.com" className="flex items-center gap-2 hover:text-gold transition-colors">
            <Mail className="w-4 h-4" /> cohen@the-pert-group.com
          </a>
          <a href="tel:+14702565977" className="flex items-center gap-2 hover:text-gold transition-colors">
            <Phone className="w-4 h-4" /> +1 (470) 256-5977
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
