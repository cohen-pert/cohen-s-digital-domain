import { motion } from "framer-motion";
import { ArrowRight, Bot, TrendingUp, Building2, Settings } from "lucide-react";

const Hero = () => {
  const stats = [
    { icon: Bot, label: "AI Automation" },
    { icon: TrendingUp, label: "Business Consulting" },
    { icon: Building2, label: "Venture Building" },
    { icon: Settings, label: "Systems & Operations" },
  ];

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gold/10 rounded-full blur-3xl"
        />
      </div>

      <div className="section-container relative z-10">
        <div className="text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-display text-6xl md:text-8xl font-bold mb-4">
              <span className="gold-gradient-text">Cohen Pert</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-foreground/90 max-w-3xl mx-auto leading-relaxed"
          >
            Young entrepreneur building AI-powered systems and ventures.
            <br />
            <span className="text-foreground/70">
              I help small business owners run smoother, grow faster, and adopt real AI
              solutions that actually work.
            </span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6"
          >
            <a
              href="https://cal.com/cohen-pert/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-4 bg-gold text-primary-foreground font-bold text-lg rounded-lg hover:bg-gold-light transition-all gold-glow-lg flex items-center gap-2"
            >
              Book a Call
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#work"
              className="px-8 py-4 border-2 border-gold text-gold font-bold text-lg rounded-lg hover:bg-gold/10 transition-all flex items-center gap-2"
            >
              View My Work
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto pt-12"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                className="flex flex-col items-center gap-2 p-4 rounded-lg bg-card/50 border border-border/50 hover:border-gold/50 transition-colors"
              >
                <stat.icon className="w-6 h-6 text-gold" />
                <span className="text-xs text-center text-foreground/70">{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;