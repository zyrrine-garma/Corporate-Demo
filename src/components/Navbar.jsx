import React, { useState, useEffect } from "react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { NavLink, useLocation } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const location = useLocation(); // know which route we are on

  const toggleNav = () => setNavOpen(!navOpen);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const sections = ["home", "about", "services", "testimonials", "contact"];

  // Only track scroll if we're on the homepage
  useEffect(() => {
    if (location.pathname !== "/") return;

    const handleSectionScroll = () => {
      let current = "home";
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 100) {
          current = section;
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleSectionScroll);
    return () => window.removeEventListener("scroll", handleSectionScroll);
  }, [location.pathname]);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 backdrop-blur-md ${
        scrolled
          ? "bg-gunmetal/90 shadow-2xl shadow-teal/30"
          : "bg-transparent shadow-none"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex justify-between items-center h-20">
        {/* Logo */}
        <div
          className="cursor-pointer flex items-center space-x-3"
          onClick={() => scroll.scrollToTop()}
        >
          {/* Logo image */}
          <img src="/logo.png" alt="MyCompany Logo" className="h-10 w-auto" />
          {/* Company name */}
          <span className="text-2xl font-bold text-columbia_blue hover:text-teal transition duration-300">
            MyCompany
          </span>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-8 items-center text-white font-medium">
          {location.pathname === "/" ? (
            // If homepage → use ScrollLink
            <>
              {sections.slice(0, -1).map((section) => (
                <li key={section} className="relative group">
                  <ScrollLink
                    to={section}
                    smooth={true}
                    duration={500}
                    className={`cursor-pointer transition-all duration-300 transform ${
                      activeSection === section
                        ? "text-teal scale-105 shadow-lg"
                        : "hover:text-teal hover:scale-105 hover:shadow-md"
                    }`}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </ScrollLink>
                  <span
                    className={`absolute left-0 -bottom-1 h-0.5 bg-teal transition-all duration-300 group-hover:w-full ${
                      activeSection === section ? "w-full" : "w-0"
                    }`}
                  ></span>
                </li>
              ))}
              <ScrollLink
                to="contact"
                smooth={true}
                duration={500}
                offset={-80}
                className={`px-4 py-2 rounded-lg shadow-lg transition-all duration-300 transform ${
                  activeSection === "contact"
                    ? "bg-teal text-white scale-105 shadow-2xl shadow-teal/40"
                    : "bg-teal text-white hover:bg-columbia_blue hover:scale-105 hover:shadow-xl"
                }`}
              >
                Contact
              </ScrollLink>
            </>
          ) : (
            // If not homepage → use NavLink
            <>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-teal font-semibold"
                    : "hover:text-teal transition-all duration-300"
                }
              >
                Home
              </NavLink>
            </>
          )}
        </ul>

        {/* Mobile Hamburger */}
        <div
          className="md:hidden text-white text-2xl cursor-pointer"
          onClick={toggleNav}
        >
          {navOpen ? <HiX /> : <HiMenu />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
