import React from "react";
import { FaUsers, FaFlask, FaChalkboardTeacher, FaMicrochip } from "react-icons/fa";

const ExtendedEcosystem = () => {
  return (
    <section className="w-full min-h-screen bg-background text-text py-20 px-6 md:px-20">
      {/* Section Title */}
      <h2 className="text-3xl md:text-5xl font-bold text-accent mb-10">
        Our Extended Ecosystem
      </h2>

      {/* Description */}
      <p className="text-base md:text-lg text-secondary max-w-4xl mb-12">
        Beyond our core products, Codeproofs expands its reach through strategic manpower solutions and innovative subsidiaries.
      </p>

      {/* Ecosystem Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* Manpower Outsourcing */}
        <a
          href="https://codeproofs.com/manpower"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg hover:scale-105 transition-transform block"
        >
          <FaUsers className="text-accent text-3xl mb-4" />
          <h3 className="text-xl font-semibold mb-2">Manpower Outsourcing</h3>
          <p className="text-sm text-secondary">
            Providing tailored staffing solutions across technology and operational domains.
          </p>
        </a>

        {/* SkillonX */}
        <a
          href="https://skillonx.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg hover:scale-105 transition-transform block"
        >
          <FaChalkboardTeacher className="text-accent text-3xl mb-4" />
          <h3 className="text-xl font-semibold mb-2">SkillonX</h3>
          <p className="text-sm text-secondary">
            Driving next-gen tech education through workshops, training programs, and skill development.
          </p>
        </a>

        {/* Webster Labs */}
        <a
          href="https://websterlabs.in"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg hover:scale-105 transition-transform block"
        >
          <FaFlask className="text-accent text-3xl mb-4" />
          <h3 className="text-xl font-semibold mb-2">Webster Labs</h3>
          <p className="text-sm text-secondary">
            The innovation and research wing focused on R&D, prototype development, and emerging technologies.
          </p>
        </a>

        {/* NeuVue Solutions */}
        <a
          href="https://neuvue.tech"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg hover:scale-105 transition-transform block"
        >
          <FaMicrochip className="text-accent text-3xl mb-4" />
          <h3 className="text-xl font-semibold mb-2">NeuVue Solutions</h3>
          <p className="text-sm text-secondary">
            Specializing in surveillance systems, IoT automation, and smart infrastructure deployments.
          </p>
        </a>
      </div>
    </section>
  );
};

export default ExtendedEcosystem;
