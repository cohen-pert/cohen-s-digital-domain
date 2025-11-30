import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import tpgLogo from "@/assets/tpg-logo.png";
import { ExternalLink, Linkedin, Instagram, Facebook } from "lucide-react";

const PertGroup = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const socials = [
    { icon: Linkedin, href: "https://linkedin.com/company/107512572", label: "LinkedIn" },
    { icon: Instagram, href: "https://instagram.com/the.pert.group", label: "Instagram" },
    { icon: Facebook, href: "https://facebook.com/61576282097663", label: "Facebook" },
  ];

  return (
    <section id="company" ref={ref} className="section-container py-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto"
      >
        <div className="flex flex-col md:flex-row items-center gap-12 bg-card/20 rounded-2xl border border-border/30 p-8 md:p-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:w-1/3"
          >
            <img
              src={tpgLogo}
              alt="The Pert Group"
              className="w-full max-w-[200px] mx-auto"
            />
          </motion.div>

          <div className="md:w-2/3 space-y-6">
            <h2 className="font-display text-4xl md:text-5xl font-bold">
              The Pert <span className="gold-gradient-text">Group</span>
            </h2>
            
            <p className="text-base text-foreground/75 leading-relaxed">
              AI consulting agency providing tailored automation systems for small businesses. 
              We build AI-powered workflows, CRM tools, and operational systems that reduce manual work and drive growth.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="https://the-pert-group.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-primary-foreground font-bold rounded-lg hover:bg-gold-light transition-all gold-glow group"
              >
                Visit Website
                <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>

              <div className="flex items-center gap-3">
                {socials.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                    className="p-3 rounded-lg bg-background/50 border border-border/50 hover:border-gold/50 transition-all group"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 text-foreground/70 group-hover:text-gold transition-colors" />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default PertGroup;