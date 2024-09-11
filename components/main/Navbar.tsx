"use client"; // Add this line to mark the component as a client component

import { Socials } from "@/constants";
import Image from "next/image";
import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // Icons for mobile menu toggle

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-5 md:px-10 transition-all duration-300 ease-in-out">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto">
        <a href="#about-me" className="h-auto w-auto flex flex-row items-center">
          <span className="font-bold ml-[10px] text-gray-300 text-sm md:text-base">
            LEKAS DIMITRIS
          </span>
        </a>

        {/* Main navigation links for desktop */}
        <div className="hidden md:flex w-[500px] h-full flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] px-[20px] py-[10px] rounded-full text-gray-200">
            <a href="#about-me" className="cursor-pointer hover:text-[#7042f8] transition-all duration-200">
              About me
            </a>
            <a href="#skills" className="cursor-pointer hover:text-[#7042f8] transition-all duration-200">
              Skills
            </a>
            <a href="#projects" className="cursor-pointer hover:text-[#7042f8] transition-all duration-200">
              Projects
            </a>
          </div>
        </div>

        {/* Social media icons */}
        <div className="hidden md:flex flex-row gap-3 md:gap-5">
          {Socials.map((social) => (
            <a
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              key={social.name}
              className="flex items-center justify-center"
            >
              <Image
                src={social.src}
                alt={social.name}
                width={24} // Adjusted for mobile
                height={24}
                className="cursor-pointer hover:opacity-80 transition-opacity duration-200"
              />
            </a>
          ))}
        </div>

        {/* Hamburger Menu for mobile */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-300 transition-transform duration-300 ease-in-out transform hover:scale-110"
          >
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />} {/* Toggle between open/close icons */}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          menuOpen ? "opacity-100 scale-100" : "opacity-0 scale-95"
        } md:hidden w-full flex flex-col bg-[#030014] py-5 transition-all duration-500 ease-in-out transform`}
      >
        <div className="flex flex-col items-center mb-4 space-y-3">
          <a
            href="#about-me"
            className="cursor-pointer py-2 text-gray-200 hover:text-[#7042f8] transition-all duration-200"
            onClick={() => setMenuOpen(false)}
          >
            About me
          </a>
          <a
            href="#skills"
            className="cursor-pointer py-2 text-gray-200 hover:text-[#7042f8] transition-all duration-200"
            onClick={() => setMenuOpen(false)}
          >
            Skills
          </a>
          <a
            href="#projects"
            className="cursor-pointer py-2 text-gray-200 hover:text-[#7042f8] transition-all duration-200"
            onClick={() => setMenuOpen(false)}
          >
            Projects
          </a>
        </div>

        {/* Social media icons in mobile menu */}
        <div className="flex justify-center space-x-5">
          {Socials.map((social) => (
            <a
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              key={social.name}
              className="flex items-center justify-center ml-3 hover:scale-110 transition-transform duration-200"
            >
              <Image
                src={social.src}
                alt={social.name}
                width={24}
                height={24}
                className="cursor-pointer hover:opacity-80 transition-opacity duration-200"
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
