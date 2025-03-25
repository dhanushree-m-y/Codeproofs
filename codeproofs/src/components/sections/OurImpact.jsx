import React from "react"; 
import bgImage from "../../assets/images/OurImpact.jpg"; 
import { FaCheckSquare } from "react-icons/fa"; 

const OurImpact = () => {
  return (
    <section className="relative w-full min-h-screen flex items-start justify-start bg-background text-white">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center brightness-75"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>

      {/* Gradient Overlay for Better Readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent"></div>

      {/* Content (Top-Left Aligned) */}
      <div className="relative w-full md:w-2/3 lg:w-1/2 px-10 md:px-16 lg:px-20 pt-12 md:pt-16 z-10 text-left">
        {/* Section Title */}
        <h2 className="text-3xl md:text-5xl font-bold text-accent mb-4">
          Our Impact
        </h2>

        {/* Description */}
        <p className="text-base md:text-lg leading-relaxed text-gray-300">
          Our expertise spans across enterprise software, cloud platforms, CRM systems, ERP solutions, AI applications, web development, mobile apps, and cybersecurity. With our talented team, we deliver cutting-edge technology that drives business growth.
        </p>

        {/* Impact Section */}
        <ul className="mt-6 space-y-4 text-base md:text-lg">
          <li className="flex items-start">
            <FaCheckSquare className="text-green-400 mr-3 mt-1" />
            <span>
              <strong>38+ Satisfied Clients</strong> – Empowering businesses with technology-driven solutions.
            </span>
          </li>
          <li className="flex items-start">
            <FaCheckSquare className="text-green-400 mr-3 mt-1" />
            <span>
              <strong>Trusted by Global Brands</strong> – Partnering with <strong>AKAI, Hitachi</strong>, and other industry leaders.
            </span>
          </li>
          <li className="flex items-start">
            <FaCheckSquare className="text-green-400 mr-3 mt-1" />
            <span>
              <strong>Global Expertise</strong> – Delivering solutions tailored to diverse market needs across multiple regions.
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default OurImpact;
