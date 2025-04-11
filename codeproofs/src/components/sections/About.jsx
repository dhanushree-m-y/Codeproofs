import React from "react";
import aboutImage from "../../assets/images/about.png"; // Ensure the correct path

const About = () => {
  return (
    <section 
      id="about" 
      className="relative w-full px-6 md:px-12 lg:px-24 py-16 bg-background bg-mid-gradient"
    >
      {/* About Us Title */}
      <div className="max-w-6xl mx-auto text-left">
        <h2 className="text-accent text-lg font-medium flex items-center gap-2">
          <span className="w-5 h-5 border border-accent flex items-center justify-center rounded-full">
            ✦
          </span>
          About us
        </h2>
        <h1 className="text-4xl md:text-5xl font-bold text-text mt-2">About Us</h1>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center mt-10 gap-10">
        {/* Image Section */}
        <div className="w-full lg:w-1/2">
          <img
            src={aboutImage}
            alt="About Us"
            className="rounded-lg shadow-lg w-full"
          />
        </div>

        {/* Text Content */}
        <div className="w-full lg:w-1/2 text-text font-satoshi">
          <h3 className="text-lg font-semibold mb-2">Inside Codeproofs</h3>
          <div className="w-10 h-1 bg-accent mb-4"></div>
          <p className="text-sm md:text-base leading-relaxed text-secondary">
            Codeproofs Private Limited, established in 2017 and registered under the Registrar of Companies (ROC) Bangalore, is a product-focused technology company with a vision to deliver smart, scalable, and industry-ready innovations. Founded by Leelavathy Yogappa and Moomal Chouhan, the company is built on a foundation of integrity, forward-thinking, and technological excellence.
            <br /><br />
            Headquartered in India with operational footprints in Bangalore, Mysore, Kuala Lumpur (Malaysia), and Jakarta (Indonesia), Codeproofs has evolved into a dynamic player in the global tech ecosystem.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
