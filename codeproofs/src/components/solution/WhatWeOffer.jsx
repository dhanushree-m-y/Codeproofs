import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/navigation";

import itTech from "../../assets/images/itTech.png";
import education from "../../assets/images/education.png";
import admin from "../../assets/images/admin.png";
import contract from "../../assets/images/contract.png";
import project from "../../assets/images/agile.png";

const offers = [
  {
    title: "IT & Tech Staffing",
    description:
      "Deploy experienced developers, engineers, system architects, and analysts on short-term or long-term projects.",
    image: itTech,
  },
  {
    title: "Education & Training Resources",
    description:
      "Supply certified trainers, instructors, and academic consultants through our extended network, especially via SkillonX.",
    image: education,
  },
  {
    title: "Administrative & Operational Staffing",
    description:
      "Support services for business operations including HR, admin, logistics, and technical support roles.",
    image: admin,
  },
  {
    title: "Contract-to-Hire Services",
    description:
      "Flexible workforce engagement models to suit startups and established firms alike.",
    image: contract,
  },
  {
    title: "Project-Based Resource Deployment",
    description:
      "On-demand talent for specific project durations — reducing overhead while maintaining agility.",
    image: project,
  },
];

const WhatWeOffer = () => {
  return (
    <section className="bg-black text-white py-20 px-4 font-satoshi relative">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-center text-4xl md:text-5xl font-bold mb-16 text-[#23DB5D]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          What We Offer
        </motion.h2>

        {/* Custom Swiper arrow styles */}
        <style>{`
          .swiper-button-next,
          .swiper-button-prev {
            color: #ccc;
            width: 30px;
            height: 30px;
          }
          .swiper-button-next::after,
          .swiper-button-prev::after {
            font-size: 16px;
          }
          @media (max-width: 768px) {
            .swiper-button-next,
            .swiper-button-prev {
              display: none;
            }
          }
        `}</style>

        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          autoplay={{ delay: 6000 }}
          loop
          className="w-full"
        >
          {offers.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col lg:flex-row items-center gap-10 px-2 lg:px-12">
                {/* Image section */}
                <motion.div
                  className="w-full lg:w-3/5 flex justify-center"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-auto max-h-[420px] object-cover rounded-xl shadow-2xl"
                  />
                </motion.div>

                {/* Text section */}
                <motion.div
                  className="w-full lg:w-2/5 text-left"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <h3 className="text-2xl md:text-3xl font-bold text-[#23DB5D] mb-4">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default WhatWeOffer;
