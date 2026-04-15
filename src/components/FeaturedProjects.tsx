import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Building2, Truck, Wallet } from "lucide-react";

const projects = [
  {
    icon: Building2,
    name: "Real Estate Investment Platform",
    description: "Commercial real estate opportunities with full due diligence and analysis systems. Built to evaluate deals and prepare for private investments.",
    tags: ["Due Diligence", "Deal Analysis", "Commercial RE"],
  },
  {
    icon: Truck,
    name: "Mobile Food Business OS",
    description: "Complete operating system for mobile food businesses. Automates operations, orders, scheduling, and workflows for food truck operators.",
    tags: ["Automation", "Operations", "Workflows"],
  },
  {
    icon: Wallet,
    name: "Private Investment Fund",
    description: "Private fund managing capital for friends and family. Focused on disciplined, long-term investment strategies with transparent reporting.",
    tags: ["Capital Management", "Long-term", "F&F"],
  },
];

const FeaturedProjects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="work" ref={ref} className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
      >
        <h2 className="font-display text-4xl md:text-6xl font-bold mb-3">
          Featured <span className="gold-gradient-text">Projects</span>
        </h2>
        <p className="text-foreground/50 text-lg">What I'm building right now</p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={project.name}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 + index * 0.1 }}
            className="card-premium p-8 flex flex-col group"
          >
            <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mb-6 group-hover:bg-gold/15 group-hover:scale-105 transition-all">
              <project.icon className="w-7 h-7 text-gold" strokeWidth={1.5} />
            </div>

            <h3 className="font-display text-xl font-bold mb-3">{project.name}</h3>
            <p className="text-foreground/60 text-sm leading-relaxed flex-1">{project.description}</p>

            <div className="flex flex-wrap gap-2 mt-6">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-[11px] font-medium uppercase tracking-wider rounded-full border border-border/50 text-foreground/40"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProjects;
