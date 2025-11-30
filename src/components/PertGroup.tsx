import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import tpgLogo from "@/assets/tpg-logo.png";
import { ExternalLink, Users, TrendingUp, Bot, LineChart } from "lucide-react";

const PertGroup = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const values = [
    { icon: Users, text: "12+ businesses served" },
    { icon: TrendingUp, text: "5x average ROI delivered" },
    { icon: Bot, text: "AI-first systems for real service businesses" },
    { icon: LineChart, text: "Full operations infrastructure builds" },
  ];

  return (
    <section id="company" ref={ref} className="section-container bg-card/20 rounded-3xl border border-border/50">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <div className="flex justify-center mb-8">
          <motion.img
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            src={tpgLogo}
            alt="The Pert Group"
            className="h-32 md:h-40 w-auto"
          />
        </div>
        <h2 className="font-display text-4xl md:text-6xl font-bold mb-6">
          The Pert <span className="gold-gradient-text">Group</span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          My Company
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="max-w-4xl mx-auto space-y-8"
      >
        <p className="text-lg text-foreground/80 leading-relaxed text-center">
          The Pert Group is an AI consulting agency providing tailored automation systems for small
          businesses. We design and build AI-powered workflows, CRM tools, internal dashboards, and
          complete operational systems that reduce manual work and help companies grow with confidence.
        </p>

        <div className="grid md:grid-cols-2 gap-6 pt-6">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className="flex items-center gap-4 p-6 rounded-xl bg-background/50 border border-border/50 hover:border-gold/50 transition-all group"
            >
              <div className="p-3 rounded-lg bg-gold/10 group-hover:bg-gold/20 transition-colors">
                <value.icon className="w-6 h-6 text-gold" />
              </div>
              <span className="text-foreground/90 group-hover:text-foreground transition-colors">
                {value.text}
              </span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center pt-8"
        >
          <a
            href="https://the-pert-group.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-primary-foreground font-bold text-lg rounded-lg hover:bg-gold-light transition-all gold-glow group"
          >
            Visit Website
            <ExternalLink className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default PertGroup;