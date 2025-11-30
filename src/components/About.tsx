import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import headshotImage from "@/assets/cohen-headshot.png";
import { Linkedin } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="font-display text-5xl md:text-7xl font-bold mb-4">
          Who I <span className="gold-gradient-text">Am</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-5 gap-12 md:gap-16 items-center max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="md:col-span-2 relative"
        >
          <div className="relative w-full max-w-sm mx-auto">
            <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-gold-dark/20 rounded-full blur-3xl" />
            <img
              src={headshotImage}
              alt="Cohen Pert"
              className="relative w-full aspect-square object-cover rounded-full border-4 border-gold/30 shadow-2xl"
            />
          </div>
          
          <motion.a
            href="https://www.linkedin.com/in/cohen-pert-a4bb51300/"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-8 flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg hover:shadow-xl group"
          >
            <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
            Connect on LinkedIn
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="md:col-span-3 space-y-6"
        >
          <p className="text-lg text-foreground/80 leading-relaxed">
            Cohen Pert is a young entrepreneur, operator, and builder focused on AI automation,
            business systems, and smart technology that helps real companies grow. At just 16 years old,
            he's already built and scaled The Pert Group, an AI consulting agency serving over 12 businesses
            with measurable results. His work focuses on streamlining operations, reducing manual work, and
            building digital infrastructure that scales with growing companies.
          </p>

          <p className="text-lg text-foreground/80 leading-relaxed">
            Starting his first business at age 7 with a neighborhood snack shack, Cohen has been building
            and operating ventures for nearly a decade. By 10, he was investing in the stock market. At 13,
            he managed a 14-person sales team generating $1,000 in monthly revenue. At 15, he founded The Pert Group.
            Now at 16, he's building AI SaaS tools, managing a $30,000 investment portfolio, and has won a $10,000
            Emergent Ventures grant and placed 2nd in the National Youth Entrepreneurship Award. His approach
            combines systems-first thinking with practical technology that delivers real ROI for service-based
            businesses seeking operational excellence.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;