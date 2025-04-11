import React from "react";
import Navbar from "../components/Navbar";
import InvestHero from "../components/invest/InvestHero";
import InvestmentPhilosophy from "../components/invest/InvestmentPhilosophy";
import GrowthHighlights from "../components/invest/GrowthHighlights";
import InvestorShowcase from "../components/invest/InvestorShowcase";
import Footer from "../components/Footer";
const Invest = () => {
  return (
    <div className="bg-background text-text font-satoshi">
      {/* Navbar */}
      <Navbar />

      {/* Hero */}
      <div className="mt-16">
        <InvestHero />
      </div>

      {/* Sticky Scroll Sections */}
      <div className="relative h-[400vh]">
        {/* Section 1: Investment Philosophy */}
        <section className="sticky top-0 h-screen flex items-center justify-center">
          <InvestmentPhilosophy />
        </section>

        {/* Section 2: Growth Highlights */}
        <section className="sticky top-0 h-screen flex items-center justify-center">
          <GrowthHighlights />
        </section>


        <section className="sticky top-0 h-screen flex items-center justify-center">
          <InvestorShowcase/>
        </section>


       

       
      </div>
      <Footer/>
    </div>
  );
};

export default Invest;
