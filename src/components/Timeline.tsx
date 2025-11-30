import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Timeline = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const milestones = [
    { 
      age: "7", 
      event: "Started first business selling snacks",
      detail: "Launched a neighborhood snack shack, learning the fundamentals of customer service, inventory management, and profit margins at a young age."
    },
    { 
      age: "10", 
      event: "Began investing in stock market",
      detail: "Started building an investment portfolio, studying market trends and developing a long-term wealth-building mindset through equity investments."
    },
    { 
      age: "13", 
      event: "Built middle school sales operation (14 reps, $1,000 run-rate)",
      detail: "Recruited and managed a 14-person sales team, creating structured commission systems and coordinating operations to generate consistent monthly revenue."
    },
    { 
      age: "15", 
      event: "Founded The Pert Group",
      detail: "Established an AI consulting agency focused on helping small businesses implement automation systems, CRM tools, and operational infrastructure."
    },
    { 
      age: "16", 
      event: "Began building AI SaaS tools and funded projects",
      detail: "Developed proprietary AI-powered software solutions and secured funding for multiple technology ventures, expanding into product development."
    },
    { 
      age: "16", 
      event: "Won $10,000 Emergent Ventures grant",
      detail: "Received prestigious grant funding from Emergent Ventures in recognition of entrepreneurial potential and innovative business approach."
    },
    { 
      age: "16", 
      event: "2nd place National Youth Entrepreneurship Award ($1,500 prize)",
      detail: "Earned national recognition for entrepreneurial achievement, placing second among youth entrepreneurs across the country and receiving prize funding."
    },
    { 
      age: "16", 
      event: "2nd place National FBLA Stock Market Game",
      detail: "Demonstrated investment expertise by securing second place in a national competition, validating financial analysis and portfolio management skills."
    },
  ];

  return (
    <section id="timeline" ref={ref} className="section-container bg-card/20 rounded-3xl border border-border/50">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="font-display text-5xl md:text-7xl font-bold mb-4">
          My <span className="gold-gradient-text">Journey</span>
        </h2>
        <p className="text-xl text-muted-foreground">Key milestones over the years</p>
      </motion.div>

      <div className="max-w-4xl mx-auto relative">
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

              <div className="card-premium p-6 space-y-2">
                <div className="font-display text-2xl font-bold text-gold mb-2">
                  Age {milestone.age}
                </div>
                <p className="text-foreground font-semibold mb-2">{milestone.event}</p>
                <p className="text-sm text-foreground/60 leading-relaxed">{milestone.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;