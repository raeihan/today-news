import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="py-8 px-5 md:px-20 bg-black flex justify-between items-center shadow-lg relative">
      <h2 className="text-2xl md:text-3xl font-bold text-red-500">Today News</h2>
      <div className="block md:hidden">
        <button
          className="text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
          </svg>
        </button>
      </div>
      <nav
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } flex-col md:flex md:flex-row fixed md:relative top-0 right-0 mt-16 md:mt-0 w-full md:w-auto bg-black md:bg-transparent z-10 p-5 md:p-0`}
      >
        <ul className="flex flex-col md:flex-row gap-4 md:gap-8">
          <li>
            <Link
              to="/"
              className={`text-lg font-medium ${
                location.pathname === "/" ? "text-white underline" : "text-gray-200 hover:text-white"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/internasional"
              className={`text-lg font-medium ${
                location.pathname === "/internasional" ? "text-white underline" : "text-gray-200 hover:text-white"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              International
            </Link>
          </li>
          <li>
            <Link
              to="/nasional"
              className={`text-lg font-medium ${
                location.pathname === "/nasional" ? "text-white underline" : "text-gray-200 hover:text-white"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Local
            </Link>
          </li>
          <li>
            <Link
              to="/olahraga"
              className={`text-lg font-medium ${
                location.pathname === "/olahraga" ? "text-white underline" : "text-gray-200 hover:text-white"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Sport
            </Link>
          </li>
          <li>
            <Link
              to="/ekonomi"
              className={`text-lg font-medium ${
                location.pathname === "/ekonomi" ? "text-white underline" : "text-gray-200 hover:text-white"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Economic
            </Link>
          </li>
          <li>
            <Link
              to="/teknologi"
              className={`text-lg font-medium ${
                location.pathname === "/teknologi" ? "text-white underline" : "text-gray-200 hover:text-white"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Technology
            </Link>
          </li>
          <li>
            <Link
              to="/hiburan"
              className={`text-lg font-medium ${
                location.pathname === "/hiburan" ? "text-white underline" : "text-gray-200 hover:text-white"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Entertainment
            </Link>
          </li>
          <li>
            <Link
              to="/gaya-hidup"
              className={`text-lg font-medium ${
                location.pathname === "/gaya-hidup" ? "text-white underline" : "text-gray-200 hover:text-white"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Lifestyle
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
