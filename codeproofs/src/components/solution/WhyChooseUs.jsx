import React from "react";
import { motion } from "framer-motion";
import {
  GlobeAltIcon,
  AcademicCapIcon,
  Cog6ToothIcon,
  ClipboardDocumentCheckIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    title: "Global Talent Access",
    description:
      "Our presence in India, Malaysia, and Indonesia allows us to source and deploy talent across geographies.",
    icon: GlobeAltIcon,
  },
  {
    title: "Domain Expertise",
    description:
      "Backed by our own product engineering and educational subsidiaries, we know what talent quality means.",
    icon: AcademicCapIcon,
  },
  {
    title: "Agile Hiring Model",
    description:
      "Scale your team fast without compromising on skill, compliance, or culture.",
    icon: Cog6ToothIcon,
  },
  {
    title: "End-to-End Compliance",
    description:
      "From onboarding to payroll, we manage the entire lifecycle with full legal and HR support.",
    icon: ClipboardDocumentCheckIcon,
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-[#000000] text-white py-20 px-6 font-satoshi">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-[#23DB5D] mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Why Choose Codeproofs?
        </motion.h2>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-2">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-[#0B4D1E]/30 border border-[#23DB5D]/20 rounded-xl p-6 flex items-center justify-between shadow-md"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
            >
              <div className="text-left max-w-[80%]">
                <h3 className="text-xl font-semibold text-[#23DB5D] mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-sm md:text-base">
                  {feature.description}
                </p>
              </div>
              <feature.icon className="w-10 h-10 text-[#23DB5D] ml-4 shrink-0" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
