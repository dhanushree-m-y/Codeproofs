import React from "react";
import { motion } from "framer-motion";

import it from "../../assets/images/it-tech.png";
import education from "../../assets/images/ed.png";
import logistics from "../../assets/images/logistics.png";
import ecommerce from "../../assets/images/ecommerce.png";
import smartInfra from "../../assets/images/smart-infra.png";

const industries = [
  { title: "Information Technology", image: it },
  { title: "Education & EdTech", image: education },
  { title: "Manufacturing & Logistics", image: logistics },
  { title: "E-commerce", image: ecommerce },
  { title: "Smart Infrastructure & Automation", image: smartInfra },
];

const IndustriesWeServe = () => {
  return (
    <section className="bg-black text-white pt-32 pb-20 px-6 font-satoshi w-full overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-accent mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Industries We Serve
        </motion.h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
          {industries.map((industry, idx) => (
            <motion.div
              key={idx}
              className="relative w-full max-w-[350px] rounded-xl overflow-hidden group border border-[#1a1a1a] backdrop-blur-md bg-white/5 shadow-lg hover:shadow-green-600/30 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <img
                src={industry.image}
                alt={industry.title}
                className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <h3 className="text-lg md:text-xl font-semibold text-white px-4">
                  {industry.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesWeServe;
