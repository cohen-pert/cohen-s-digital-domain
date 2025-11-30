import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import headshotImage from "@/assets/cohen-headshot.png";
import { DollarSign, Users, Award, TrendingUp } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    { age: "7", achievement: "Started first business (neighborhood snack shack)", icon: DollarSign },
    { age: "10", achievement: "Started investing in stock market", icon: TrendingUp },
    { age: "13", achievement: "Built 14-person sales team running $1,000 operation", icon: Users },
    { age: "15", achievement: "Founded The Pert Group (AI consulting agency)", icon: Award },
    { age: "16", achievement: "Building AI SaaS tools and funded software projects", icon: Award },
    { age: "16", achievement: "Won $10,000 Emergent Ventures grant", icon: Award },
    { age: "16", achievement: "2nd place National Youth Entrepreneurship Award ($1,500)", icon: Award },
    { age: "Current", achievement: "Manages $30,000 investment portfolio", icon: TrendingUp },
  ];

  return (
    <section id="about" ref={ref} className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="font-display text-4xl md:text-6xl font-bold mb-4">
          Who I <span className="gold-gradient-text">Am</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6"
        >
          <p className="text-lg text-foreground/80 leading-relaxed">
            Cohen Pert is a young entrepreneur, operator, and builder focused on AI automation,
            business systems, and smart technology that helps real companies grow. He works with
            service-based businesses to streamline operations, reduce manual work, and build
            digital infrastructure that scales.
          </p>

          <div className="space-y-4 pt-4">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="flex items-start gap-4 p-4 rounded-lg bg-card/30 border border-border/30 hover:border-gold/50 transition-all group"
              >
                <div className="p-2 rounded-lg bg-gold/10 group-hover:bg-gold/20 transition-colors">
                  <item.icon className="w-4 h-4 text-gold" />
                </div>
                <div className="flex-1">
                  <div className="font-display font-bold text-gold mb-1">Age {item.age}</div>
                  <div className="text-sm text-foreground/70">{item.achievement}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="relative w-full max-w-md mx-auto">
            <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-gold-dark/20 rounded-full blur-3xl" />
            <img
              src={headshotImage}
              alt="Cohen Pert"
              className="relative w-full aspect-square object-cover rounded-full border-4 border-gold/30 shadow-2xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;