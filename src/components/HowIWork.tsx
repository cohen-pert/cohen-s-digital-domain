import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, Wrench, Target, MessageCircle, Building, Shield } from "lucide-react";
import businessWorkImg from "@/assets/business-work.jpg";
import investingWorkImg from "@/assets/investing-work.jpg";

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
    {
      icon: Shield,
      title: "Reliable & secure infrastructure",
      description: "Enterprise-grade security and stability you can trust for mission-critical operations",
    },
  ];

  const gallery = [
    { image: businessWorkImg, alt: "Cohen working on business systems" },
    { image: investingWorkImg, alt: "Cohen analyzing investments" },
  ];

  return (
    <section ref={ref} className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="font-display text-5xl md:text-7xl font-bold mb-4">
          How I <span className="gold-gradient-text">Work</span>
        </h2>
        <p className="text-xl text-muted-foreground">My approach to building solutions</p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
        {principles.map((principle, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
            className="card-premium p-8 space-y-4 group"
          >
            <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 group-hover:scale-110 transition-all">
              <principle.icon className="w-7 h-7 text-gold" strokeWidth={1.5} />
            </div>

            <h3 className="font-display text-xl font-bold">{principle.title}</h3>
            <p className="text-foreground/70 leading-relaxed text-sm">{principle.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Gallery Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="max-w-5xl mx-auto"
      >
        <h3 className="font-display text-3xl font-bold text-center mb-8">
          Behind the <span className="gold-gradient-text">Scenes</span>
        </h3>
        
        <div className="grid md:grid-cols-2 gap-6">
          {gallery.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
              className="relative h-80 rounded-2xl overflow-hidden group"
            >
              <img
                src={item.image}
                alt={item.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default HowIWork;
