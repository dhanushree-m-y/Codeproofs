import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const [showProductDropdown, setShowProductDropdown] = useState(false);
  const [showSubsidiaryDropdown, setShowSubsidiaryDropdown] = useState(false);

  const navItems = [
    { title: "Home", link: "/" },
    { title: "About", link: "/about" },
    { title: "Products", link: "#" },
    { title: "Subsidiaries", link: "#" },
    { title: "Solution", link: "/solution" },
    { title: "Career", link: "/career" },
    { title: "Invest", link: "/invest" },
    { title: "Contact", link: "/contact" },
  ];

  const productItems = [
    { title: "Galloping Power", link: "https://gallopingpower.netlify.app/admin" },
    { title: "Galloping Gears", link: "https://zippy-belekoy-1fc802.netlify.app/" },
    { title: "TJAI", link: "https://skillonx.com/hackathon" },
  ];

  const subsidiaryItems = [
    { title: "SkillOnx", link: "https://skillonx.com/hackathon" },
    { title: "Webstor Labs", link: "https://skillonx.com/hackathon" },
    { title: "NeuVue", link: "https://skillonx.com/hackathon" },
    { title: "PT Digital Bright", link: "https://skillonx.com/hackathon" },
  ];

  const toggleDropdown = (dropdownType) => {
    if (dropdownType === "products") {
      setShowProductDropdown(!showProductDropdown);
      setShowSubsidiaryDropdown(false);
    } else if (dropdownType === "subsidiaries") {
      setShowSubsidiaryDropdown(!showSubsidiaryDropdown);
      setShowProductDropdown(false);
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-black text-white py-4 shadow-lg z-50">
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-accent">C</h1>

        {/* Navigation */}
        <ul className="flex space-x-10 text-lg relative font-satoshi">
          {navItems.map((item, index) => {
            const isActive = location.pathname === item.link;

            if (item.title === "Products") {
              return (
                <li key={index} className="relative">
                  <button
                    className={`hover:text-accent transition duration-300 ${
                      showProductDropdown ? "text-accent" : ""
                    }`}
                    onClick={() => toggleDropdown("products")}
                  >
                    {item.title}
                  </button>
                  {showProductDropdown && (
                    <ul className="absolute left-0 mt-2 w-52 bg-[#0B0B0B] border border-[#23DB5D]/20 rounded shadow-lg z-50">
                      {productItems.map((product, idx) => (
                        <li key={idx}>
                          <a
                            href={product.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block px-4 py-2 hover:bg-[#23DB5D]/10 transition"
                          >
                            {product.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            }

            if (item.title === "Subsidiaries") {
              return (
                <li key={index} className="relative">
                  <button
                    className={`hover:text-accent transition duration-300 ${
                      showSubsidiaryDropdown ? "text-accent" : ""
                    }`}
                    onClick={() => toggleDropdown("subsidiaries")}
                  >
                    {item.title}
                  </button>
                  {showSubsidiaryDropdown && (
                    <ul className="absolute left-0 mt-2 w-56 bg-[#0B0B0B] border border-[#23DB5D]/20 rounded shadow-lg z-50">
                      {subsidiaryItems.map((subsidiary, idx) => (
                        <li key={idx}>
                          <a
                            href={subsidiary.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block px-4 py-2 hover:bg-[#23DB5D]/10 transition"
                          >
                            {subsidiary.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            }

            return (
              <li key={index}>
                <a
                  href={item.link}
                  className={`hover:text-accent transition duration-300 ${
                    isActive ? "text-accent font-bold" : ""
                  }`}
                >
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
