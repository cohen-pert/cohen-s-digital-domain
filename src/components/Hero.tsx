import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Rocket, Layers, Cpu } from "lucide-react";
import techBg from "@/assets/tech-background.jpg";
const Hero = () => {
  const stats = [{
    icon: Sparkles,
    label: "AI Automation"
  }, {
    icon: Rocket,
    label: "Business Consulting"
  }, {
    icon: Layers,
    label: "Venture Building"
  }, {
    icon: Cpu,
    label: "Systems & Operations"
  }];
  return <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Tech Background */}
      <div className="absolute inset-0 opacity-[0.03]">
        <img src={techBg} alt="" className="w-full h-full object-cover" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div animate={{
        scale: [1, 1.1, 1],
        opacity: [0.05, 0.1, 0.05]
      }} transition={{
        duration: 10,
        repeat: Infinity,
        ease: "easeInOut"
      }} className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gold/10 rounded-full blur-3xl" />
        <motion.div animate={{
        scale: [1.1, 1, 1.1],
        opacity: [0.05, 0.08, 0.05]
      }} transition={{
        duration: 12,
        repeat: Infinity,
        ease: "easeInOut"
      }} className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gold/10 rounded-full blur-3xl" />
      </div>

      <div className="section-container relative z-10">
        <div className="text-center space-y-10">
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }}>
            <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-bold mb-6 tracking-tight">
              <span className="gold-gradient-text">Cohen Pert</span>
              
            </h1>
          </motion.div>

          <motion.p initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.2
        }} className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed font-light">
            I help small businesses streamline operations and grow faster through AI automation, 
            custom business systems, and strategic consulting. From workflow automation to 
            full-scale AI integration, I build solutions that actually work.
          </motion.p>

          <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.4
        }} className="flex flex-col sm:flex-row items-center justify-center gap-5 pt-4">
            <a href="https://cal.com/cohen-pert/30min" target="_blank" rel="noopener noreferrer" className="group px-10 py-5 bg-gold text-primary-foreground font-bold text-lg rounded-xl hover:bg-gold-light transition-all gold-glow-lg flex items-center gap-3 shadow-2xl">
              Book a Call
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#work" className="px-10 py-5 border-2 border-gold/50 text-gold font-semibold text-lg rounded-xl hover:bg-gold/10 hover:border-gold transition-all flex items-center gap-3">
              View My Work
            </a>
          </motion.div>

          <motion.div initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          duration: 0.8,
          delay: 0.6
        }} className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto pt-16">
            {stats.map((stat, index) => <motion.div key={stat.label} initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.7 + index * 0.1
          }} className="flex flex-col items-center gap-3 p-6 rounded-xl bg-card/30 border border-border/30 hover:border-gold/50 hover:bg-card/50 transition-all group">
                <stat.icon className="w-8 h-8 text-gold group-hover:scale-110 transition-transform" strokeWidth={1.5} />
                <span className="text-sm text-center text-foreground/70 font-medium">{stat.label}</span>
              </motion.div>)}
          </motion.div>
        </div>
      </div>
    </section>;
};
export default Hero;