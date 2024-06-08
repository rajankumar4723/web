import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-slate-500 p-2 bg-gradient-to-r from-blue-500 to-purple-600 flex justify-between items-center fixed top-0 w-full z-10">
      <div className="text-xl font-bold text-red-50">Portfolio</div>
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-red-50 focus:outline-none">
          {/* Hamburger icon */}
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
      <ul className={`md:flex gap-3 md:items-center md:static absolute  md:bg-transparent top-10 md:top-auto left-0 w-full md:w-auto transition-transform duration-300 ease-in-out ${isOpen ? "block" : "hidden"}`}>
        <li className="md:inline-block">
          <Link to="/" className="block p-2 text-black md:text-white md:p-0 hover:text-gray-700 md:hover:text-yellow-300 transition-colors duration-300">Home</Link>
        </li>
        <li className="md:inline-block">
          <Link to="/about" className="block p-2 text-black md:text-white md:p-0 hover:text-gray-700 md:hover:text-yellow-300 transition-colors duration-300">About</Link>
        </li>
        <li className="md:inline-block">
          <Link to="/projects" className="block p-2 text-black md:text-white md:p-0 hover:text-gray-700 md:hover:text-yellow-300 transition-colors duration-300">Projects</Link>
        </li>
        <li className="md:inline-block">
          <Link to="/contact" className="block p-2 text-black md:text-white md:p-0 hover:text-gray-700 md:hover:text-yellow-300 transition-colors duration-300">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
