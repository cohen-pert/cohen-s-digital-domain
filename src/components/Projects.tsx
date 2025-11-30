import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Truck, Users } from "lucide-react";
import businessWorkImg from "@/assets/business-work.jpg";
import investingWorkImg from "@/assets/investing-work.jpg";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      icon: Truck,
      name: "Mobile Food Business OS",
      description: "A complete business operating system for King of Pops entrepreneurs and local food truck operators.",
      focus: "CRM, scheduling, inventory, payments, and growth analytics",
      image: businessWorkImg,
    },
    {
      icon: Users,
      name: "Investment Group",
      description: "A private group of operators and professionals evaluating and investing in standout entrepreneurial ideas.",
      focus: "Prestigious network of investors and founders",
      image: investingWorkImg,
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
          Other <span className="gold-gradient-text">Projects</span>
        </h2>
        <p className="text-xl text-muted-foreground">Additional ventures & initiatives</p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={project.name}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
            className="card-premium overflow-hidden group"
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
            </div>

            <div className="p-8 space-y-4">
              <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center">
                <project.icon className="w-6 h-6 text-gold" />
              </div>

              <h3 className="font-display text-2xl font-bold">{project.name}</h3>
              <p className="text-foreground/70 leading-relaxed">{project.description}</p>

              <div className="pt-4 border-t border-border/50">
                <div className="text-sm text-gold font-semibold mb-1">Focus:</div>
                <div className="text-sm text-foreground/80">{project.focus}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="text-center mt-12"
      >
        <p className="text-muted-foreground italic">More initiatives coming soon...</p>
      </motion.div>
    </section>
  );
};

export default Projects;