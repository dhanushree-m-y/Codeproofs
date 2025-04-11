import React from "react";
import aboutImage from "../../assets/images/about.png"; // Ensure the correct path
const InvestmentPhilosophy = () => {
  return (
    <section className="bg-black text-white py-16 px-6 md:px-12 lg:px-24 font-satoshi">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Image Section */}
        <div className="w-full lg:w-1/2">
          <img
            src={aboutImage}
            alt="Investment"
            className="rounded-lg shadow-lg w-full"
          />
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-accent text-lg font-semibold tracking-wide uppercase mb-4">
             Our Investment Philosophy
          </h2>
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            Invest in Innovation. Invest in Codeproofs.
          </h1>
          <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-8">
            We believe in long-term value creation through product excellence, smart execution, 
            and strategic partnerships. We are open to working with investors, VCs, and strategic 
            collaborators who share our passion for:
          </p>

          <ul className="text-gray-200 space-y-4">
            <li className="flex items-center gap-3">
              <span className="text-accent">•</span> AI-driven platforms
            </li>
            <li className="flex items-center gap-3">
              <span className="text-accent">•</span> Hyper-niche tech markets
            </li>
            <li className="flex items-center gap-3">
              <span className="text-accent">•</span> Scalable global operations
            </li>
            <li className="flex items-center gap-3">
              <span className="text-accent">•</span> Talent-focused business models
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default InvestmentPhilosophy;
