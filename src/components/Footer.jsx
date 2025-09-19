import React from "react";
import { FaTwitter, FaLinkedin, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="py-10 text-white bg-gunmetal">
      <div className="flex flex-col items-center justify-between px-6 mx-auto max-w-7xl md:flex-row">
        <p className="mb-4 text-center md:text-left md:mb-0">
          &copy; 2025 CorpBrand. All rights reserved.
        </p>
        <div className="flex gap-6 text-2xl">
          <a
            href="javascript:void(0)"
            aria-label="Twitter"
            className="transition-colors hover:text-teal"
          >
            <FaTwitter />
          </a>
          <a
            href="javascript:void(0)"
            aria-label="LinkedIn"
            className="transition-colors hover:text-teal"
          >
            <FaLinkedin />
          </a>
          <a
            href="javascript:void(0)"
            aria-label="Facebook"
            className="transition-colors hover:text-teal"
          >
            <FaFacebook />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
