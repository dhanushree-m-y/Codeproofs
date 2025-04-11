import React from "react";
import { motion } from "framer-motion";
import gallopinggear from "../../assets/logo/gallopingGears.png";
import gallopingpower from "../../assets/logo/gallopingPower.png";
import skillonx from "../../assets/logo/image.png";
import tjai from "../../assets/logo/image.png";
import websterlabs from "../../assets/logo/image.png";
import neuvue from "../../assets/logo/image.png";

const fadeInVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.5,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const GrowthHighlights = () => {
  const sections = [
    {
      title: "Operational Presence",
      content: "India (Bangalore, Mysore), Malaysia (Kuala Lumpur), Indonesia (Jakarta)",
    },
    {
      title: "Flagship Products",
      items: [
        {
          img: gallopinggear,
          name: "GallopingGear",
          link: "https://gallopinggear.com",
          desc: "– Vertical e-commerce for horse racing gear",
        },
        {
          img: gallopingpower,
          name: "GallopingPower",
          link: "https://gallopingpower.com",
          desc: "– AI-based horse race prediction engine",
        },
        {
          img: tjai,
          name: "TJAI",
          link: "https://tjai.in",
          desc: "– ERP for Jockeys and Racing Institutions in India",
        },
      ],
    },
    {
      title: "Subsidiaries",
      items: [
        {
          img: websterlabs,
          name: "Webster Labs",
          link: "https://websterlabs.in",
          desc: "– Innovation & Research",
        },
        {
          img: skillonx,
          name: "SkillonX",
          link: "https://skillonx.com",
          desc: "– Training & Education",
        },
        {
          img: neuvue,
          name: "NeuVue",
          link: "https://neuvue.ai",
          desc: "– Smart Infrastructure & CCTV Systems",
        },
      ],
    },
    {
      title: "Workforce",
      content: "Agile talent ecosystem through our own manpower outsourcing services.",
    },
    {
      title: "Market Expansion",
      content: "Early-stage traction in Southeast Asia with a strong localization strategy.",
    },
  ];

  return (
    <section className="bg-black text-white min-h-screen w-full flex flex-col items-center justify-center px-4 md:px-8 py-20 font-satoshi text-center">
      <motion.h2
        initial="hidden"
        animate="visible"
        custom={0}
        variants={fadeInVariant}
        className="text-4xl md:text-5xl font-bold text-accent uppercase mb-16"
      >
        Growth Highlights
      </motion.h2>

      <div className="flex flex-col items-center justify-center space-y-16 max-w-6xl w-full">
        {sections.map((section, index) => (
          <motion.div
            key={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInVariant}
            custom={index + 1}
            className="space-y-4 w-full text-center"
          >
            <h3 className="text-2xl font-semibold border-b-2 border-accent inline-block pb-1 mx-auto">
              {section.title}
            </h3>

            {section.items ? (
              <ul className="space-y-4 mt-4">
                {section.items.map((item, idx) => (
                  <motion.li
                    key={idx}
                    custom={idx + 1}
                    variants={fadeInVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="flex flex-col md:flex-row md:items-center justify-center space-y-2 md:space-y-0 md:space-x-4"
                  >
                    <img src={item.img} alt={item.name} className="w-8 h-8 mx-auto md:mx-0" />
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent font-medium hover:text-white hover:underline transition"
                    >
                      {item.name}
                    </a>
                    <span className="text-white/80 text-lg">{item.desc}</span>
                  </motion.li>
                ))}
              </ul>
            ) : (
              <p className="text-white/80 text-lg max-w-xl mx-auto">{section.content}</p>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default GrowthHighlights;
