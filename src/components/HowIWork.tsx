import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, Wrench, Target, MessageCircle, Building } from "lucide-react";

const HowIWork = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const principles = [
    {
      icon: Brain,
      title: "Systems-first thinking",
      description: "I approach every problem by building scalable systems that grow with your business",
    },
    {
      icon: Wrench,
      title: "Simple, practical tech stacks",
      description: "No overengineering—just the right tools that actually work for your needs",
    },
    {
      icon: Target,
      title: "Long-term operational focus",
      description: "Building solutions that serve your business not just today, but for years to come",
    },
    {
      icon: MessageCircle,
      title: "Transparency in processes",
      description: "Clear communication every step of the way—you always know what's happening",
    },
    {
      icon: Building,
      title: "Built for real businesses",
      description: "Not theoretical demos—real solutions for real companies with real results",
    },
  ];

  return (
    <section ref={ref} className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="font-display text-4xl md:text-6xl font-bold mb-4">
          How I <span className="gold-gradient-text">Work</span>
        </h2>
        <p className="text-xl text-muted-foreground">My approach to building solutions</p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {principles.map((principle, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
            className="card-premium p-8 space-y-4 group"
          >
            <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 group-hover:scale-110 transition-all">
              <principle.icon className="w-7 h-7 text-gold" />
            </div>

            <h3 className="font-display text-xl font-bold">{principle.title}</h3>
            <p className="text-foreground/70 leading-relaxed">{principle.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HowIWork;