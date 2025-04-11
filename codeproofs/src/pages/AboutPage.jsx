import React from "react";
import Navbar from "../components/Navbar"; 
import About from "../components/sections/About";
import OurProducts from "../components/sections/OurProducts";
import ExtendedEcosystem from "../components/sections/Ecosystem";
import Hero from "../components/sections/Hero";
import Footer from "../components/Footer";
function AboutPage() {
  return (
    <div className="bg-background text-text font-satoshi">
      {/* Navbar */}
      <Navbar />

     
     

      {/* Sticky Sections Wrapper */}
      <div className="relative h-[500vh]">
        {/* About */}
        <section className="sticky top-0 h-screen flex items-center justify-center">
          <About />
        </section>

        {/* What We Do */}
        <section className="sticky top-0 h-screen flex items-center justify-center">
          <OurProducts />
        </section>

        {/* Our Impact */}
        <section className="sticky top-0 h-screen flex items-center justify-center">
          <ExtendedEcosystem />
        </section>


        {/* Our Products */}
        
      </div>

     <Footer/>

    
    </div>
  );
}

export default AboutPage;
