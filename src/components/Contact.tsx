import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone } from "lucide-react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contactInfo = [
    {
      icon: Mail,
      label: "Personal Email",
      value: "cohenpert@gmail.com",
      href: "mailto:cohenpert@gmail.com",
    },
    {
      icon: Mail,
      label: "Work Email",
      value: "cohen@the-pert-group.com",
      href: "mailto:cohen@the-pert-group.com",
    },
    {
      icon: Phone,
      label: "Company Phone",
      value: "+1 (470) 256-5977",
      href: "tel:+14702565977",
    },
  ];

  return (
    <section id="contact" ref={ref} className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="font-display text-5xl md:text-7xl font-bold mb-6">
          Let's <span className="gold-gradient-text">Talk</span>
        </h2>
        <p className="text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
          Whether you're a business owner needing automation, a student interested in tech, or someone
          exploring an investment collaboration — reach out anytime.
        </p>
      </motion.div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12">
        {/* Left Side - Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6"
        >
          {contactInfo.map((info, index) => (
            <motion.a
              key={index}
              href={info.href}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="card-premium p-6 flex items-center gap-6 group block"
            >
              <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                <info.icon className="w-6 h-6 text-gold" />
              </div>
              <div className="flex-1">
                <div className="text-xs text-muted-foreground mb-1 uppercase tracking-wider">{info.label}</div>
                <div className="font-semibold text-foreground group-hover:text-gold transition-colors">
                  {info.value}
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Right Side - Embedded Booking */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="card-premium p-2 overflow-hidden"
        >
          <iframe
            src="https://cal.com/cohen-pert/30min"
            className="w-full h-[600px] rounded-lg"
            frameBorder="0"
            title="Book a call with Cohen Pert"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
