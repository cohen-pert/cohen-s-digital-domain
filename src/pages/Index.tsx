import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import FounderIntro from "@/components/FounderIntro";
import WhatIRun from "@/components/WhatIRun";
import FeaturedProjects from "@/components/FeaturedProjects";
import Timeline from "@/components/Timeline";
import BehindTheScenes from "@/components/BehindTheScenes";
import HowIWork from "@/components/HowIWork";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main role="main">
        <Hero />
        <FounderIntro />
        <WhatIRun />
        <FeaturedProjects />
        <Timeline />
        <BehindTheScenes />
        <HowIWork />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
