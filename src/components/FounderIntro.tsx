import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import headshotImage from "@/assets/cohen-headshot.png";
import { Linkedin } from "lucide-react";

const metrics = [
  { number: "12+", label: "Businesses Served" },
  { number: "5x", label: "Average ROI" },
  { number: "$50K+", label: "Company Valuation" },
  { number: "$10K", label: "Grant Winner" },
  { number: "2", label: "Organizations" },
];

const FounderIntro = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" ref={ref} className="section-container">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-6"
          >
            <div className="flex items-center gap-5 mb-2">
              <div className="relative w-20 h-20 flex-shrink-0">
                <div className="absolute inset-0 bg-gold/20 rounded-full blur-xl" />
                <img
                  src={headshotImage}
                  alt="Cohen Pert headshot"
                  width={80}
                  height={80}
                  className="relative w-full h-full object-cover rounded-full border-2 border-gold/30"
                />
              </div>
              <div>
                <h2 className="font-display text-3xl md:text-4xl font-bold">
                  About <span className="gold-gradient-text">Me</span>
                </h2>
              </div>
            </div>

            <p className="text-foreground/70 leading-relaxed">
              I'm a 16-year-old entrepreneur, operator, and builder focused on AI automation, 
              business systems, and smart technology. I founded The Pert Group, an AI consulting 
              agency serving 12+ businesses with measurable results — streamlining operations, 
              reducing manual work, and building infrastructure that scales.
            </p>

            <p className="text-foreground/60 leading-relaxed text-sm">
              Starting my first business at age 7, investing in markets by 10, managing a 14-person 
              sales team by 13, and founding a company at 15 — I've spent nearly a decade building 
              and operating ventures. Winner of a $10K Emergent Ventures grant and 2nd place National 
              Youth Entrepreneurship Award.
            </p>

            <a
              href="https://www.linkedin.com/in/cohen-pert-a4bb51300/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium border border-border/50 rounded-lg text-foreground/70 hover:border-gold/50 hover:text-gold transition-all group"
            >
              <Linkedin className="w-4 h-4" />
              Connect on LinkedIn
            </a>
          </motion.div>

          {/* Right: Metrics */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="grid grid-cols-2 gap-4">
              {metrics.map((metric, index) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.08 }}
                  className="card-premium p-6 text-center group"
                >
                  <div className="text-3xl md:text-4xl font-display font-bold gold-gradient-text mb-1">
                    {metric.number}
                  </div>
                  <div className="text-xs text-foreground/50 font-medium uppercase tracking-wider">
                    {metric.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FounderIntro;
