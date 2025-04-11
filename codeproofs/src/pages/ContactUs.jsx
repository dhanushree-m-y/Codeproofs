import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-black text-white font-satoshi">
      <Navbar />
      <div className="pt-[100px] pb-24 px-6 lg:px-12 max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-2 text-center">
          Contact <span className="text-[#23DB5D]">Us</span>
        </h1>
        <p className="text-center text-gray-400 mb-10 text-sm max-w-xl mx-auto">
          Have questions about our products, partnerships, or services? Whether you're looking to collaborate, invest, or explore opportunities with us — we're just a message away.
        </p>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column */}
          <div className="space-y-6">
            {/* India */}
            <div className="bg-[#121212] p-6 rounded-xl shadow-md">
              <h2 className="text-lg font-bold text-[#23DB5D]">India</h2>
              <p className="font-semibold text-white mt-2">Head Office – Bangalore</p>
              <p className="text-gray-400">Codeproofs Private Limited</p>
              <p className="text-sm text-gray-500">[Insert Address Here]</p>
              <p className="text-sm text-gray-300 mt-2">📞 +91-XXXXXXXXXX</p>
              <p className="text-sm text-gray-300">📧 info@codeproofs.com</p>

              <p className="mt-4 font-semibold text-white">Development Center – Mysore</p>
              <p className="text-sm text-gray-500">[Insert Address Here]</p>
              <p className="text-sm text-gray-300">📞 +91-XXXXXXXXXX</p>
            </div>

            {/* Malaysia */}
            <div className="bg-[#121212] p-6 rounded-xl shadow-md">
              <h2 className="text-lg font-bold text-[#23DB5D]">Malaysia</h2>
              <p className="font-semibold text-white mt-2">Regional Office – Kuala Lumpur</p>
              <p className="text-sm text-gray-500">[Insert Address Here]</p>
              <p className="text-sm text-gray-300 mt-2">📞 +60-XXXXXXXX</p>
              <p className="text-sm text-gray-300">📧 malaysia@codeproofs.com</p>
            </div>

            {/* Indonesia */}
            <div className="bg-[#121212] p-6 rounded-xl shadow-md">
              <h2 className="text-lg font-bold text-[#23DB5D]">Indonesia</h2>
              <p className="font-semibold text-white mt-2">Operations Hub – Jakarta</p>
              <p className="text-sm text-gray-500">[Insert Address Here]</p>
              <p className="text-sm text-gray-300 mt-2">📞 +62-XXXXXXXX</p>
              <p className="text-sm text-gray-300">📧 indonesia@codeproofs.com</p>
            </div>

            {/* Departmental Contacts */}
            <div className="bg-[#121212] p-6 rounded-xl shadow-md">
              <h3 className="text-lg font-bold text-[#23DB5D] mb-3">📁 Departmental Contacts</h3>
              <ul className="space-y-2 text-sm">
                <li><strong>Investor Relations:</strong> investors@codeproofs.com</li>
                <li><strong>Careers:</strong> careers@codeproofs.com</li>
                <li><strong>Manpower Solutions:</strong> staffing@codeproofs.com</li>
                <li><strong>Workshops & Education:</strong> training@skillonx.com</li>
                <li><strong>General:</strong> hello@codeproofs.com</li>
              </ul>
            </div>
          </div>

          {/* Right Column – Contact Form */}
          <div className="bg-[#0B0B0B] p-8 rounded-xl shadow-lg space-y-6">
            <h2 className="text-2xl font-bold mb-2">Let’s Connect</h2>
            <p className="text-sm text-gray-400">
              We’re active across India and Southeast Asia, with dedicated teams ready to support you wherever you are.
            </p>

            <form className="space-y-5">
              <input
                type="text"
                placeholder="Name"
                className="w-full bg-[#121212] text-white placeholder:text-gray-500 p-3 rounded-md focus:outline-none focus:ring-1 focus:ring-[#23DB5D]"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full bg-[#121212] text-white placeholder:text-gray-500 p-3 rounded-md focus:outline-none focus:ring-1 focus:ring-[#23DB5D]"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full bg-[#121212] text-white placeholder:text-gray-500 p-3 rounded-md focus:outline-none focus:ring-1 focus:ring-[#23DB5D]"
              />

              <select className="w-full bg-[#121212] text-white p-3 rounded-md focus:outline-none focus:ring-1 focus:ring-[#23DB5D]">
                <option value="">Subject</option>
                <option>General</option>
                <option>Product Inquiry</option>
                <option>Partnership</option>
                <option>Careers</option>
                <option>Investor Relations</option>
                <option>Others</option>
              </select>

              <textarea
                placeholder="Message"
                rows={5}
                className="w-full bg-[#121212] text-white placeholder:text-gray-500 p-3 rounded-md focus:outline-none focus:ring-1 focus:ring-[#23DB5D]"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-[#23DB5D] hover:bg-[#1aa64a] text-black font-semibold py-3 rounded-md transition"
              >
                Submit
              </button>

              <p className="text-xs text-gray-500 mt-2">
                🛡️ We value your privacy. Your data is safe with us and will only be used for intended communication.
              </p>
            </form>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default ContactUs;
