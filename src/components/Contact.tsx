import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, Mail, Phone, ExternalLink } from "lucide-react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contactMethods = [
    {
      icon: Calendar,
      label: "Book a Call",
      value: "Schedule 30 minutes",
      href: "https://cal.com/cohen-pert/30min",
      primary: true,
    },
    {
      icon: Mail,
      label: "Email Me",
      value: "hello@cohenpert.me",
      href: "mailto:hello@cohenpert.me",
    },
    {
      icon: Mail,
      label: "TPG Email",
      value: "team@the-pert-group.com",
      href: "mailto:team@the-pert-group.com",
    },
    {
      icon: Phone,
      label: "TPG Phone",
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
        <h2 className="font-display text-4xl md:text-6xl font-bold mb-6">
          Let's <span className="gold-gradient-text">Talk</span>
        </h2>
        <p className="text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
          Whether you're a business owner needing automation, a student interested in tech, or someone
          exploring an investment collaboration — reach out anytime.
        </p>
      </motion.div>

      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {contactMethods.map((method, index) => (
            <motion.a
              key={index}
              href={method.href}
              target={method.href.startsWith("http") ? "_blank" : undefined}
              rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className={`card-premium p-8 flex items-center gap-6 group ${
                method.primary ? "md:col-span-2 gold-glow" : ""
              }`}
            >
              <div className={`w-16 h-16 rounded-xl flex items-center justify-center ${
                method.primary ? "bg-gold/20" : "bg-gold/10"
              } group-hover:bg-gold/30 transition-colors`}>
                <method.icon className="w-8 h-8 text-gold" />
              </div>

              <div className="flex-1">
                <div className="text-sm text-muted-foreground mb-1">{method.label}</div>
                <div className={`font-semibold ${
                  method.primary ? "text-xl text-gold" : "text-foreground"
                }`}>
                  {method.value}
                </div>
              </div>

              {method.href.startsWith("http") && (
                <ExternalLink className="w-5 h-5 text-gold opacity-0 group-hover:opacity-100 transition-opacity" />
              )}
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;