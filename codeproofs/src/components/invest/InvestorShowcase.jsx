import React from "react";
import { motion } from "framer-motion";
import {
  FaHandshake,
  FaChartLine,
  FaGlobe,
  FaFlask,
  FaBalanceScale,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const offers = [
  {
    text: "Equity partnership in a product-driven enterprise",
    icon: <FaHandshake className="text-accent text-xl md:text-2xl" />,
  },
  {
    text: "Stakeholding opportunities in subsidiary growth",
    icon: <FaChartLine className="text-accent text-xl md:text-2xl" />,
  },
  {
    text: "Collaboration on global product expansion",
    icon: <FaGlobe className="text-accent text-xl md:text-2xl" />,
  },
  {
    text: "Access to early-stage innovations through Webster Labs",
    icon: <FaFlask className="text-accent text-xl md:text-2xl" />,
  },
  {
    text: "Transparent governance and long-term strategic alignment",
    icon: <FaBalanceScale className="text-accent text-xl md:text-2xl" />,
  },
];

const listVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const InvestorShowcase = () => {
  return (
    <section className="sticky top-0 h-screen flex items-center justify-center bg-background px-6 md:px-16 text-white font-satoshi">
      <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-center justify-center w-full max-w-7xl">
        {/* Investor Offers */}
        <motion.div
          className="w-full md:w-1/2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={listVariants}
        >
          <motion.h2
            className="text-accent text-lg md:text-xl font-semibold tracking-wide uppercase mb-8 text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            What We Offer to Investors
          </motion.h2>

          <motion.ul className="space-y-5">
            {offers.map((offer, index) => (
              <motion.li
                key={index}
                variants={itemVariants}
                className="flex items-start gap-4 p-4 border border-accent/20 rounded-xl hover:border-accent/40 transition-all duration-300"
              >
                <div>{offer.icon}</div>
                <p className="text-sm md:text-base leading-relaxed">{offer.text}</p>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        {/* Investor Contact */}
        <motion.div
          className="w-full md:w-1/2 border border-accent/20 rounded-xl p-6 md:p-8 space-y-5 bg-transparent hover:border-accent/40 transition-all duration-300"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h3 className="text-accent text-base md:text-lg font-semibold uppercase tracking-wide text-center">
            For Investor Decks, Financials & Proposals
          </h3>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed text-center">
            Let’s talk about collaboration and growth. Our investor desk is open for detailed
            discussions and future partnerships.
          </p>

          <div className="flex flex-col gap-4 text-sm text-gray-200">
            <div className="flex items-center gap-3">
              <FiMail className="text-accent text-xl" />
              <a href="mailto:investors@codeproofs.com" className="hover:text-accent transition duration-200">
                investors@codeproofs.com
              </a>
            </div>

            <div className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-accent text-xl mt-0.5" />
              <div className="leading-snug">
                Bangalore<br />
                Kuala Lumpur<br />
                Jakarta
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InvestorShowcase;
