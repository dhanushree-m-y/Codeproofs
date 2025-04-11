import React from "react";
import codingImage from "../../assets/images/invest/invest1.png"; // Ensure correct import path

const InvestHero = () => {
  return (
    <section className="bg-background text-text flex flex-col items-center justify-center min-h-screen px-6 text-center">
      {/* Hero Content */}
      <div className="max-w-4xl mx-auto mt-20">
        <h1 className="text-5xl md:text-6xl font-bold leading-[1.2] tracking-tight">
          <span className="bg-gradient-to-r from-white via-gray-400 to-gray-600 bg-clip-text text-transparent">
            Invest in Innovation.
          </span>
          <br />
          <span className="bg-gradient-to-r from-gray-400 via-gray-300 to-white bg-clip-text text-transparent">
            Invest in Codeproofs.
          </span>
        </h1>

        <p className="text-lg md:text-xl text-gray-300 mt-8">
          At Codeproofs Private Limited, we are not just building technology — we are creating platforms that reshape niche industries. Since our inception in 2017, we’ve grown from a visionary startup to a globally active company with thriving products, scalable operations, and strong subsidiary networks.
          <br /><br />
          With a foundation rooted in AI, automation, and digital ecosystems, our product-first approach is now delivering tangible value across sectors like horse racing tech, e-commerce, ERP, manpower outsourcing, and IoT services.
        </p>

        {/* CTA Button */}
        <button className="mt-10 px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-opacity-80 transition">
          Get started
        </button>
      </div>

      {/* Image Below */}
    {/* Image Below */}
<div className="mt-16 w-full flex justify-center">
  <img
    src={codingImage}
    alt="Coding Setup"
    className="w-full max-w-2xl object-contain rounded-lg shadow-lg"
  />
</div>

    </section>
  );
};

export default InvestHero;
