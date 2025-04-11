import React from 'react';
import Navbar from '../components/Navbar'; // adjust path as needed
import Footer from '../components/Footer';
const Career = () => {
  return (
    <div className="min-h-screen bg-black text-white font-satoshi">
      <Navbar />
      <div className="flex items-center justify-center px-4 pt-12 pb-24">
        <div className="max-w-3xl w-full bg-[#0B0B0B] border border-gray-800 p-8 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold text-white mb-1">
            Join the <span className="text-[#23DB5D]">Codeproofs</span> Team
          </h1>
          <p className="text-sm text-[#23DB5D] mb-6">
            Your Next Opportunity Starts Here
          </p>
          <p className="text-gray-300 text-sm leading-relaxed mb-8">
            We’re thrilled that you're considering a career with Codeproofs Private Limited — a place where innovation meets impact. Fill out the form below to tell us more about yourself. Whether you’re applying for a specific job or just want to be part of our talent pool, we’re always looking for passionate, curious, and driven individuals to join our global journey.
          </p>

          <form className="space-y-5">
            {['Full Name', 'Email Address', 'Phone Number', 'Current Location (City & Country)', "Role You're Applying For"].map((placeholder, idx) => (
              <input
                key={idx}
                type="text"
                placeholder={placeholder}
                className="w-full bg-[#121212] border border-gray-700 text-white placeholder:text-gray-500 p-3 rounded-md focus:outline-none focus:ring-1 focus:ring-[#23DB5D] transition"
              />
            ))}

            <select className="w-full bg-[#121212] border border-gray-700 text-white p-3 rounded-md focus:outline-none focus:ring-1 focus:ring-[#23DB5D]">
              <option>Preferred Work Location</option>
              <option>Remote</option>
              <option>Onsite</option>
              <option>Hybrid</option>
            </select>

            <select className="w-full bg-[#121212] border border-gray-700 text-white p-3 rounded-md focus:outline-none focus:ring-1 focus:ring-[#23DB5D]">
              <option>Experience Level</option>
              <option>Internship</option>
              <option>Entry Level</option>
              <option>Mid Level</option>
              <option>Senior Level</option>
            </select>

            <input
              type="file"
              className="w-full file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-medium file:bg-[#23DB5D] file:text-black hover:file:bg-[#1aa64a] transition"
            />

            <button
              type="submit"
              className="w-full bg-[#23DB5D] hover:bg-[#1aa64a] text-black font-semibold py-3 rounded-md transition"
            >
              Submit Application
            </button>
          </form>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Career;
