import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Invest from "./pages/Invest";
import Solution from "./pages/Solution";
import About from "./pages/AboutPage";
import AboutPage from "./pages/AboutPage";
import Career from "./pages/Career";
import ContactUs from "./pages/ContactUs";
// Import other pages if needed

function App() {
  return (
    <Router>
      <div className="bg-background text-text font-satoshi min-h-screen">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/career" element={<Career />} />
          <Route path="/invest" element={<Invest />} />
          <Route path="/solution" element={<Solution />} />
          <Route path="/contact" element={<ContactUs />} />
          

          {/* Add more routes if needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
