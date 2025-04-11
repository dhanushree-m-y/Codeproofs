import React from "react";
import Navbar from "../components/Navbar"; 
import SolutionHero from "../components/solution/SolutionHero";
import WhatWeOffer from "../components/solution/WhatWeOffer";
import WhyChooseUs from "../components/solution/WhyChooseUs";
import IndustriesWeServe from "../components/solution/IndustriesWeServe";
import Footer from "../components/Footer";
function Solution() {
  return (
    <div className="bg-background text-text font-satoshi">
      {/* Navbar */}
      <Navbar />

      {/* Hero */}
      <div className="mt-16">
        <SolutionHero />
      </div>

      {/* Sticky Sections Wrapper */}
      <section className="sticky top-0 h-screen flex items-center justify-center">
          <WhatWeOffer />
        </section>
        <section className="sticky top-0 h-screen flex items-center justify-center">
          <WhyChooseUs />
        </section>
        <section className="sticky top-0 h-screen flex items-center justify-center">
          <IndustriesWeServe />
        </section>
        <Footer/>
    </div>
  );
}

export default Solution;
