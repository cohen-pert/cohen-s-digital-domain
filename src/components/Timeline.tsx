import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const milestones = [
  { age: "7", event: "Started first business — neighborhood snack shack" },
  { age: "10", event: "Began investing in the stock market" },
  { age: "13", event: "Built 14-person sales team, $1K monthly run-rate" },
  { age: "15", event: "Founded The Pert Group" },
  { age: "16", event: "Won $10K Emergent Ventures grant" },
  { age: "16", event: "2nd place National Youth Entrepreneurship Award" },
];

const Timeline = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="timeline" ref={ref} className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
      >
        <h2 className="font-display text-4xl md:text-6xl font-bold mb-3">
          The <span className="gold-gradient-text">Journey</span>
        </h2>
        <p className="text-foreground/50 text-lg">Key milestones along the way</p>
      </motion.div>

      <div className="max-w-3xl mx-auto relative">
        {/* Vertical line */}
        <div className="absolute left-[23px] top-2 bottom-2 w-px bg-gradient-to-b from-gold/60 via-gold/30 to-transparent" />

        <div className="space-y-6">
          {milestones.map((m, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.08 }}
              className="relative pl-14 group"
            >
              {/* Dot */}
              <div className="absolute left-[17px] top-[10px] w-3 h-3 rounded-full bg-gold/80 border-2 border-background group-hover:scale-150 transition-transform" />

              <div className="flex items-baseline gap-4">
                <span className="font-display text-lg font-bold text-gold shrink-0">
                  Age {m.age}
                </span>
                <span className="text-foreground/70 text-sm leading-relaxed">
                  {m.event}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
