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
    <section ref={ref} className="py-12 border-y border-border/30">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <p className="text-sm text-gold font-semibold tracking-wider uppercase">The Pert Group Metrics</p>
        </motion.div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
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
              <div className="text-xs md:text-sm text-foreground/60 group-hover:text-foreground/80 transition-colors font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SnapshotStats;