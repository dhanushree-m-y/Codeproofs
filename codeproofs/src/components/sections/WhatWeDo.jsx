import React from "react";
import { FaCheck } from "react-icons/fa";
import bgImage from "../../assets/images/WhatWeDo.jpg";

const WhatWeDo = () => {
  return (
    <section className="relative w-full min-h-screen flex items-start justify-start bg-background text-white">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>

      {/* Gradient Overlay for Better Readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>

      {/* Content Box (Left-Aligned) */}
      <div className="relative w-full md:w-2/3 lg:w-1/2 px-8 md:px-16 lg:px-20 pt-12 md:pt-16 z-10 text-left">
        {/* Section Title */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-accent">
          Years of Innovation at Codeproofs!
        </h2>

        <p className="text-sm md:text-base lg:text-lg mt-4 leading-relaxed font-satoshi">
          At <strong>Codeproofs</strong>, we pride ourselves on delivering{" "}
          <strong>cutting-edge software solutions</strong> with a commitment to{" "}
          <strong>innovation and excellence.</strong> With a team of{" "}
          <strong>22+ experienced professionals</strong> and a{" "}
          <strong>global presence in India and Malaysia</strong>, we have
          successfully built a reputation for providing{" "}
          <strong>scalable, secure, and high-performance</strong> digital
          solutions.
        </p>

        {/* What We Do Section */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-accent mt-8">
          What We Do
        </h2>
        <div className="mt-4 space-y-4 text-sm md:text-base lg:text-lg font-satoshi">
          <div className="flex items-center">
            <FaCheck className="text-accent mr-3" size={20} />
            <span><strong>Enterprise Applications:</strong> Scalable solutions to optimize business operations.</span>
          </div>
          <div className="flex items-center">
            <FaCheck className="text-accent mr-3" size={20} />
            <span><strong>AI-Driven Security:</strong> Advanced AI-powered cybersecurity for enterprises.</span>
          </div>
          <div className="flex items-center">
            <FaCheck className="text-accent mr-3" size={20} />
            <span><strong>Custom Software Development:</strong> Tailored solutions to meet unique business needs.</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
