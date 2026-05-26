import AnimatedNoise from "@/components/site/AnimatedNoise";
import SiteNav from "@/components/site/SiteNav";
import Hero from "@/components/site/Hero";
import Manifesto from "@/components/site/Manifesto";
import WhatWeDo from "@/components/site/WhatWeDo";
import ArtistGrid from "@/components/site/ArtistGrid";
import ProjectIndex from "@/components/site/ProjectIndex";
import Sessions from "@/components/site/Sessions";
import JoinSection from "@/components/site/JoinSection";
import SponsorSection from "@/components/site/SponsorSection";
import Footer from "@/components/site/Footer";

export default function Home() {
  return (
    <>
      <AnimatedNoise />
      <SiteNav />
      <main>
        <Hero />
        <Manifesto />
        <WhatWeDo />
        <ArtistGrid />
        <ProjectIndex />
        <Sessions />
        <JoinSection />
        <SponsorSection />
      </main>
      <Footer />
    </>
  );
}
