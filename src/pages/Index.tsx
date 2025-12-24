import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import SnapshotStats from "@/components/SnapshotStats";
import About from "@/components/About";
import PertGroup from "@/components/PertGroup";
import CaseStudies from "@/components/CaseStudies";
import Projects from "@/components/Projects";
import Timeline from "@/components/Timeline";
import HowIWork from "@/components/HowIWork";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main role="main">
        <Hero />
        <SnapshotStats />
        <About />
        <PertGroup />
        <CaseStudies />
        <Projects />
        <Timeline />
        <HowIWork />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
