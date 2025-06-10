import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; 
const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "_about", path: "/about" },
    { name: "_resume", path: "/resume" },
  ];

  return (
    <div className="w-full bg-[#1a1a1b] px-6 py-3">
      <div className="flex justify-between items-center">
        {/* Branding */}
        <Link to="/">
          <p className="text-white text-xl">// <span className="text-3xl">soumya</span></p>
          <p className="text-[#9190ee] text-2xl ml-5">web_dev</p>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 items-center">
          {links.map((link, i) => (
            <Link
              key={i}
              to={link.path}
              className="text-white hover:text-[#9796fa] transition text-2xl"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X className="text-white w-7 h-7" /> : <Menu className="text-white w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Links Dropdown */}
      {menuOpen && (
        <div className="mt-4 flex flex-col items-start space-y-4 md:hidden">
          {links.map((link, i) => (
            <Link
              key={i}
              to={link.path}
              className="text-[#e6c94c] hover:text-[#9796fa] transition text-xl"
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Nav;
