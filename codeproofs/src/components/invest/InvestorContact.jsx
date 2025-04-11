import React from "react";
import { FiMail } from "react-icons/fi";
import { FaMapMarkerAlt } from "react-icons/fa";

const InvestorContact = () => {
  return (
    <div className="max-w-md w-full border border-[#23DB5D]/30 rounded-2xl bg-black/40 backdrop-blur-md px-8 py-10 shadow-lg text-center text-white">
      <h3 className="text-[#23DB5D] text-sm md:text-base font-semibold uppercase tracking-wider mb-4">
        For Investor Decks, Financials & Proposals
      </h3>
      <p className="text-gray-300 text-[15px] leading-relaxed mb-6">
        Let’s talk about collaboration and growth. Our investor desk is open for detailed discussions and future partnerships.
      </p>

      <div className="flex flex-col gap-5 items-start text-left text-sm text-gray-200">
        <div className="flex items-center gap-3">
          <FiMail className="text-[#23DB5D] text-xl" />
          <span className="hover:text-[#23DB5D] transition-all">
            investors@codeproofs.com
          </span>
        </div>

        <div className="flex items-start gap-3">
          <FaMapMarkerAlt className="text-[#23DB5D] text-xl mt-0.5" />
          <div className="leading-tight">
            Bangalore<br />
            Kuala Lumpur<br />
            Jakarta
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestorContact;
