import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Bot, TrendingUp, Rocket, ExternalLink } from "lucide-react";
import tpgLogo from "@/assets/tpg-logo.png";

const orgs = [
  {
    icon: Bot,
    name: "The Pert Group",
    description: "AI consulting agency building automation systems, CRM tools, and operational infrastructure for small businesses.",
    link: "https://the-pert-group.com",
    linkText: "Visit Website",
    hasLogo: true,
  },
  {
    icon: TrendingUp,
    name: "Lambert Investment Club",
    description: "Student-led investment organization focused on financial literacy, market analysis, and disciplined long-term investing.",
    link: null,
    linkText: null,
    hasLogo: false,
  },
  {
    icon: Rocket,
    name: "Personal Ventures",
    description: "Independent projects including AI SaaS tools, investment platforms, and entrepreneurial experiments in emerging technology.",
    link: "#work",
    linkText: "See Projects",
    hasLogo: false,
  },
];

const WhatIRun = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="company" ref={ref} className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
      >
        <h2 className="font-display text-4xl md:text-6xl font-bold mb-3">
          What I <span className="gold-gradient-text">Run</span>
        </h2>
        <p className="text-foreground/50 text-lg">Organizations and ventures I operate</p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {orgs.map((org, index) => (
          <motion.div
            key={org.name}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 + index * 0.1 }}
            className="card-premium p-8 flex flex-col group"
          >
            <div className="mb-6">
              {org.hasLogo ? (
                <img src={tpgLogo} alt="The Pert Group logo" className="w-12 h-12 object-contain" width={48} height={48} />
              ) : (
                <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                  <org.icon className="w-6 h-6 text-gold" strokeWidth={1.5} />
                </div>
              )}
            </div>

            <h3 className="font-display text-xl font-bold mb-3">{org.name}</h3>
            <p className="text-foreground/60 text-sm leading-relaxed flex-1">{org.description}</p>

            {org.link && (
              <a
                href={org.link}
                target={org.link.startsWith("http") ? "_blank" : undefined}
                rel={org.link.startsWith("http") ? "noopener noreferrer" : undefined}
                className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-gold hover:text-gold-light transition-colors"
              >
                {org.linkText}
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhatIRun;
