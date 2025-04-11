import React from "react";
import { FaLinkedin, FaTwitter, FaGithub, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-accent text-black py-12 px-6 md:px-20 font-satoshi">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand Info */}
        <div>
          <h3 className="text-xl font-bold mb-2">SkillonX</h3>
          <p className="text-sm">
            © 2025 SkillonX. All rights reserved. Empowering the next-gen workforce with innovation-driven learning.
          </p>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Stay Connected</h4>
          <p className="text-sm mb-3">
            Subscribe to our newsletter for the latest tech insights and updates.
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-md bg-white text-black w-full sm:w-auto flex-1 focus:outline-none"
            />
            <button className="bg-black text-white px-6 py-2 rounded-md font-semibold hover:bg-opacity-90 transition-all">
              Subscribe
            </button>
          </div>
        </div>

        {/* Social Links */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Follow Us</h4>
          <div className="flex gap-5 mt-2">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-2xl hover:text-primary transition-colors" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-2xl hover:text-primary transition-colors" />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-2xl hover:text-primary transition-colors" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-2xl hover:text-primary transition-colors" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
