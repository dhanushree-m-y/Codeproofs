import React from "react";
import Navbar from "../components/Navbar"; 
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import WhatWeDo from "../components/sections/WhatWeDo";
import OurImpact from "../components/sections/OurImpact";
import OurProducts from "../components/sections/OurProducts";
import ExtendedEcosystem from "../components/sections/Ecosystem";
import JoinCommunity from "../components/sections/JoinCommunity";
import FeatureSection from "../components/sections/FeatureSection";
import SeamlessConnection from "../components/sections/SeamlessConection";
import Testimonials from "../components/sections/Testimonials";
import BusinessBanner from "../components/sections/BusinessBanner";
import CodeproofsBanner from "../components/sections/CodeproofBanner";
import Footer from "../components/Footer";

function Landing() {
  return (
    <div className="bg-background text-text font-satoshi">
      {/* Navbar */}
      <Navbar />

      {/* Hero */}
      <div className="mt-16">
        <Hero />
      </div>

      {/* Sticky Sections Wrapper */}
      <div className="relative h-[500vh]">
        {/* About */}
        <section className="sticky top-0 h-screen flex items-center justify-center">
          <About />
        </section>

        {/* What We Do */}
        <section className="sticky top-0 h-screen flex items-center justify-center">
          <WhatWeDo />
        </section>

        {/* Our Impact */}
        <section className="sticky top-0 h-screen flex items-center justify-center">
          <OurImpact />
        </section>

        {/* Our Products */}
       
      </div>

      {/* Extended Ecosystem - Not Sticky for better readability */}
     

      {/* Remaining sections */}
      <JoinCommunity />
      <FeatureSection />
      <SeamlessConnection />
      <Testimonials />
      <BusinessBanner />
      <CodeproofsBanner />
      <Footer />
    </div>
  );
}

export default Landing;
