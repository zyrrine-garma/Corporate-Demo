import React from "react";
import { FaTwitter, FaLinkedin, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gunmetal text-white py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <p className="text-center md:text-left mb-4 md:mb-0">
          &copy; 2025 CorpBrand. All rights reserved.
        </p>
        <div className="flex gap-6 text-2xl">
          <a href="#" className="hover:text-teal transition-colors">
            <FaTwitter />
          </a>
          <a href="#" className="hover:text-teal transition-colors">
            <FaLinkedin />
          </a>
          <a href="#" className="hover:text-teal transition-colors">
            <FaFacebook />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
