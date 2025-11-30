import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Timeline = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const milestones = [
    { age: "7", event: "Started first business selling snacks" },
    { age: "10", event: "Began investing in stock market" },
    { age: "13", event: "Built middle school sales operation (14 reps, $1,000 run-rate)" },
    { age: "15", event: "Founded The Pert Group" },
    { age: "16", event: "Began building AI SaaS tools and funded projects" },
    { age: "16", event: "Won $10,000 Emergent Ventures grant" },
    { age: "16", event: "2nd place National Youth Entrepreneurship Award ($1,500 prize)" },
    { age: "16", event: "2nd place National FBLA Stock Market Game" },
  ];

  return (
    <section id="timeline" ref={ref} className="section-container bg-card/20 rounded-3xl border border-border/50">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="font-display text-4xl md:text-6xl font-bold mb-4">
          My <span className="gold-gradient-text">Journey</span>
        </h2>
        <p className="text-xl text-muted-foreground">Key milestones over the years</p>
      </motion.div>

      <div className="max-w-3xl mx-auto relative">
        {/* Timeline Line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gold via-gold/50 to-gold" />

        <div className="space-y-8">
          {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative pl-20 group"
            >
              {/* Timeline Dot */}
              <div className="absolute left-6 top-1 w-5 h-5 rounded-full bg-gold border-4 border-background group-hover:scale-125 transition-transform" />

              <div className="card-premium p-6">
                <div className="font-display text-2xl font-bold text-gold mb-2">
                  Age {milestone.age}
                </div>
                <p className="text-foreground/80 leading-relaxed">{milestone.event}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;