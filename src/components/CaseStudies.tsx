import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Building2, Pizza, Briefcase, TrendingUp, Clock, Zap } from "lucide-react";

const CaseStudies = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const cases = [
    {
      icon: Building2,
      name: "White Oak Sanitation",
      category: "Business Transformation Project",
      description: "Full digital overhaul: website, social presence, lead system. Automated onboarding + internal task processing. Scalable operational foundation.",
      results: [
        { icon: Clock, text: "40% faster lead response time" },
        { icon: TrendingUp, text: "25% increase in onboarding efficiency" },
      ],
      color: "from-blue-500/20 to-blue-600/20",
    },
    {
      icon: Pizza,
      name: "Mikey's Pizzaria",
      category: "Long-Term Systems Partnership",
      description: "Customer reactivation automations. Financial + cash flow reporting systems. AI receptionist in progress for order intake.",
      results: [
        { icon: TrendingUp, text: "18% reactivation of past customers" },
        { icon: Zap, text: "30% reduction in manual admin work" },
      ],
      color: "from-orange-500/20 to-red-600/20",
    },
    {
      icon: Briefcase,
      name: "Wellspring Financial Solutions",
      category: "Administrative & Marketing Automation",
      description: "Lead intake + qualification automation. Automated forms, docs, and task tracking. Social content scheduling engine.",
      results: [
        { icon: TrendingUp, text: "22% increase in qualified inbound leads" },
        { icon: Zap, text: "35% reduction in manual admin time" },
      ],
      color: "from-green-500/20 to-emerald-600/20",
    },
  ];

  return (
    <section id="work" ref={ref} className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="font-display text-4xl md:text-6xl font-bold mb-4">
          Case <span className="gold-gradient-text">Studies</span>
        </h2>
        <p className="text-xl text-muted-foreground">Real results for real businesses</p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {cases.map((caseStudy, index) => (
          <motion.div
            key={caseStudy.name}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
            className="card-premium p-8 space-y-6 group"
          >
            <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${caseStudy.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
              <caseStudy.icon className="w-8 h-8 text-gold" />
            </div>

            <div>
              <div className="text-xs uppercase tracking-wider text-gold font-semibold mb-2">
                {caseStudy.category}
              </div>
              <h3 className="font-display text-2xl font-bold mb-3">{caseStudy.name}</h3>
              <p className="text-foreground/70 leading-relaxed">{caseStudy.description}</p>
            </div>

            <div className="space-y-3 pt-4 border-t border-border/50">
              <div className="text-sm font-semibold text-gold">Results:</div>
              {caseStudy.results.map((result, i) => (
                <div key={i} className="flex items-center gap-3">
                  <result.icon className="w-4 h-4 text-gold flex-shrink-0" />
                  <span className="text-sm text-foreground/80">{result.text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CaseStudies;