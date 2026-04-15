import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, Wrench, Target, Shield } from "lucide-react";

const principles = [
  {
    icon: Brain,
    title: "Systems-First Thinking",
    description: "Every problem starts with building a scalable system — not a quick fix.",
  },
  {
    icon: Wrench,
    title: "Practical Tech Stacks",
    description: "No overengineering. Just the right tools that actually work for your needs.",
  },
  {
    icon: Target,
    title: "Long-Term Focus",
    description: "Solutions built to serve your business not just today, but for years to come.",
  },
  {
    icon: Shield,
    title: "Reliable & Secure",
    description: "Enterprise-grade stability and security you can trust for critical operations.",
  },
];

const HowIWork = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
      >
        <h2 className="font-display text-4xl md:text-6xl font-bold mb-3">
          How I <span className="gold-gradient-text">Work</span>
        </h2>
        <p className="text-foreground/50 text-lg">My approach to building solutions</p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {principles.map((p, index) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 25 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 + index * 0.08 }}
            className="text-center p-6 group"
          >
            <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-gold/20 group-hover:scale-110 transition-all">
              <p.icon className="w-6 h-6 text-gold" strokeWidth={1.5} />
            </div>
            <h3 className="font-display text-base font-bold mb-2">{p.title}</h3>
            <p className="text-foreground/50 text-sm leading-relaxed">{p.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HowIWork;
