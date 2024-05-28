// src/components/NavBar.jsx
import { useState } from "react";
import "./NavBar.css";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex justify-between items-center h-20 px-6 lg:px-20 border-b">
      <a href="#profile">
        <div className="logo text-2xl">Rajan Moliya</div>
      </a>
      <ul className="hidden lg:flex nav-links gap-8 text-xl list-none">
        <li>
          <a href="#about" className="hover:border-b hover:text-slate-600">
            About
          </a>
        </li>
        <li>
          <a href="#experience" className="hover:border-b hover:text-slate-600">
            Skills
          </a>
        </li>
        <li>
          <a href="#projects" className="hover:border-b hover:text-slate-600">
            Projects
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:border-b hover:text-slate-600">
            Contact
          </a>
        </li>
      </ul>
      <div className="lg:hidden relative">
        <div
          className="hamburger-icon flex flex-col justify-between h-6 w-8 cursor-pointer"
          onClick={toggleMenu}
        >
          <span
            className={`block w-full h-1 bg-black transition-transform ${
              isOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`block w-full h-1 bg-black my-1 ${
              isOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block w-full h-1 bg-black transition-transform ${
              isOpen ? "-rotate-45 -translate-y-3" : ""
            }`}
          ></span>
        </div>
        <ul
          className={` absolute top-full right-0 bg-white  transition-all duration-300 ease-in-out overflow-hidden ${
            isOpen
              ? "max-h-screen opacity-100 bg-slate-100 shadow-lg p-1 mt-7 "
              : "max-h-0 opacity-0"
          }`}
        >
          <li>
            <a
              href="#about"
              className="block p-4 hover:border-b hover:text-slate-600"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#experience"
              className="block p-4 hover:border-b hover:text-slate-600"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="block p-4 hover:border-b hover:text-slate-600"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="block p-4 hover:border-b hover:text-slate-600"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
