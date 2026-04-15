import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import businessWorkImg from "@/assets/business-work.jpg";
import investingWorkImg from "@/assets/investing-work.jpg";

const gallery = [
  { image: businessWorkImg, alt: "Cohen Pert working on business systems and automation", label: "Building" },
  { image: investingWorkImg, alt: "Cohen Pert analyzing investment opportunities", label: "Investing" },
];

const BehindTheScenes = () => {
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
          Behind the <span className="gold-gradient-text">Scenes</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {gallery.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.15 + index * 0.1 }}
            className="relative h-72 md:h-80 rounded-2xl overflow-hidden group"
          >
            <img
              src={item.image}
              alt={item.alt}
              width={600}
              height={400}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
            <div className="absolute bottom-6 left-6">
              <span className="text-sm font-display font-bold text-gold uppercase tracking-wider">
                {item.label}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default BehindTheScenes;
