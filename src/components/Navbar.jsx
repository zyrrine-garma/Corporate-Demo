import React, { useState, useEffect, useMemo } from "react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { NavLink, useLocation } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const location = useLocation();

  const toggleNav = () => setNavOpen(!navOpen);

  // Memoize sections to avoid ESLint warning
  const sections = useMemo(
    () => ["home", "about", "services", "testimonials", "contact"],
    []
  );

  // Scroll effect for navbar background
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Track active section only on homepage
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
  }, [location.pathname, sections]);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 backdrop-blur-md ${
        scrolled
          ? "bg-gunmetal/90 shadow-2xl shadow-teal/30"
          : "bg-transparent shadow-none"
      }`}
    >
      <div className="flex items-center justify-between h-20 px-6 mx-auto max-w-7xl lg:px-10">
        {/* Logo */}
        <div
          className="flex items-center space-x-3 cursor-pointer"
          onClick={() => scroll.scrollToTop()}
        >
          <img src="/logo.png" alt="MyCompany Logo" className="w-auto h-10" />
          <span className="text-2xl font-bold transition duration-300 text-columbia_blue hover:text-teal">
            MyCompany
          </span>
        </div>

        {/* Desktop Links */}
        <ul className="items-center hidden space-x-8 font-medium text-white md:flex">
          {location.pathname === "/" ? (
            sections.map((section) =>
              section === "contact" ? (
                <ScrollLink
                  key={section}
                  to={section}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  className={`px-4 py-2 rounded-lg shadow-lg transition-all duration-300 transform ${
                    activeSection === section
                      ? "bg-teal text-white scale-105 shadow-2xl shadow-teal/40"
                      : "bg-teal text-white hover:bg-columbia_blue hover:scale-105 hover:shadow-xl"
                  }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </ScrollLink>
              ) : (
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
              )
            )
          ) : (
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
          )}
        </ul>

        {/* Mobile Menu */}
        <div
          className={`md:hidden fixed top-0 left-0 w-full h-screen bg-gunmetal/95 text-white flex flex-col items-center justify-center space-y-6 transition-transform duration-500 ease-in-out z-50 ${
            navOpen
              ? "translate-y-0 opacity-100"
              : "-translate-y-full opacity-0 pointer-events-none"
          }`}
        >
          {location.pathname === "/" ? (
            sections.map((section) => (
              <ScrollLink
                key={section}
                to={section}
                smooth={true}
                duration={500}
                offset={section === "contact" ? -80 : 0}
                className="text-2xl transition-all duration-300 cursor-pointer hover:text-teal"
                onClick={() => setNavOpen(false)}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </ScrollLink>
            ))
          ) : (
            <NavLink
              to="/"
              className="text-2xl transition-all duration-300 hover:text-teal"
              onClick={() => setNavOpen(false)}
            >
              Home
            </NavLink>
          )}
        </div>

        {/* Mobile Hamburger */}
        <div
          className="text-2xl text-white cursor-pointer md:hidden"
          onClick={toggleNav}
        >
          {navOpen ? <HiX /> : <HiMenu />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
