import React from "react";
import { motion } from "framer-motion";
import teamwork from "../../assets/images/teamwork.png";

const SolutionHero = () => {
  return (
    <section className="bg-black text-white font-satoshi px-6 py-20 md:py-28">
      <div className="max-w-5xl mx-auto text-center">
        {/* Main Title */}
        <motion.h1
          className="text-3xl md:text-5xl font-extrabold leading-tight mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          Your Talent Partner<br />
          <span className="bg-gradient-to-r from-white via-gray-300 to-accent bg-clip-text text-transparent">
            in a Fast-Moving World
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          className="text-gray-300 text-base md:text-lg leading-relaxed max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
        >
          At <span className="text-white font-semibold">Codeproofs Private Limited</span>, we understand that the right talent is the backbone of every successful business. Our Manpower Solutions division bridges the gap between skilled professionals and growing enterprises by offering end-to-end staffing services tailored to meet industry-specific needs.
          <br /><br />
          Whether you're scaling a startup, expanding operations globally, or strengthening project teams, our curated talent pool and agile hiring strategies ensure you get the right people, right on time.
        </motion.p>

        {/* Image */}
        <motion.img
          src={teamwork}
          alt="Teamwork illustration"
          className="mt-12 rounded-lg shadow-xl mx-auto w-full max-w-2xl hover:scale-105 transition-transform duration-500"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
        />
      </div>
    </section>
  );
};

export default SolutionHero;
