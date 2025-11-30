import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const SnapshotStats = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { number: "12+", label: "Businesses Served" },
    { number: "5x", label: "Average ROI for Clients" },
    { number: "$30K+", label: "Company Valuation" },
    { number: "$10K", label: "Grant Winner" },
  ];

  return (
    <section ref={ref} className="py-20 border-y border-border/50">
      <div className="section-container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center space-y-2 group"
            >
              <div className="text-4xl md:text-5xl font-display font-bold gold-gradient-text">
                {stat.number}
              </div>
              <div className="text-sm md:text-base text-foreground/70 group-hover:text-foreground/90 transition-colors">
                {stat.label}
              </div>
              <div className="h-0.5 w-12 mx-auto bg-gold/0 group-hover:bg-gold transition-all duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SnapshotStats;