import { MotionConfig } from "framer-motion";
import Navigation from "@/components/portfolio/Navigation";
import Journey from "@/components/portfolio/Journey";
import { Hero, About, Ventures, Projects, Leadership, Honors, Education, BehindScenes, HowIWork, Contact, Footer } from "@/components/portfolio/Sections";

const Index = () => (
  <MotionConfig reducedMotion="user">
    <div className="portfolio-site">
      <a href="#main-content" className="skip-link">Skip to content</a>
      <Navigation />
      <main id="main-content">
        <Hero />
        <About />
        <Ventures />
        <Projects />
        <Journey />
        <Leadership />
        <Honors />
        <Education />
        <BehindScenes />
        <HowIWork />
        <Contact />
      </main>
      <Footer />
    </div>
  </MotionConfig>
);
export default Index;
