import React from "react"; 
import bgImage from "../../assets/images/OurImpact.jpg"; 
import { FaCheckSquare } from "react-icons/fa"; 

const OurProducts = () => {
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
          Our Products
        </h2>

        {/* Description */}
        <p className="text-base md:text-lg leading-relaxed text-gray-300">
          Codeproofs crafts powerful technology products that cater to high-impact niche markets. Our flagship solutions include:
        </p>

        {/* Products/Services List */}
        <ul className="mt-6 space-y-6 text-base md:text-lg">
          <li className="flex items-start">
            <FaCheckSquare className="text-green-400 mr-3 mt-1" />
            <span>
              <strong>🏇 GallopingPower</strong> – A cutting-edge AI platform for horse racing outcome prediction, helping enthusiasts and analysts make informed decisions.
            </span>
          </li>
          <li className="flex items-start">
            <FaCheckSquare className="text-green-400 mr-3 mt-1" />
            <span>
              <strong>🐎 GallopingGear</strong> – A specialized e-commerce hub for jockeys and horse racing gear, serving both professionals and sports institutions.
            </span>
          </li>
          <li className="flex items-start">
            <FaCheckSquare className="text-green-400 mr-3 mt-1" />
            <span>
              <strong>💼 TJAI (Technology for Jockeys Association of India)</strong> – A robust ERP system designed exclusively for the jockey community in India, enabling efficient race preparation, training management, and logistics.
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default OurProducts;
