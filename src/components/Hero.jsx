import React from "react";
import HeroImage from "../assets/images/business-office.jpg";

function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full h-screen flex items-center justify-center"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${HeroImage})` }}
      ></div>

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <h1
          className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg mb-4 opacity-0 animate-fadeInUp"
          style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
        >
          Empower Your Business <span className="text-teal">to Thrive</span>
        </h1>

        <p
          className="text-lg md:text-2xl text-white drop-shadow-md mb-6 opacity-0 animate-fadeInUp"
          style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}
        >
          Innovative solutions, smart strategies, and cutting-edge technology to
          help your business reach new heights.
        </p>

        <a
          href="#services"
          className="bg-teal hover:bg-columbia_blue text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition-all transform hover:scale-105 opacity-0 animate-fadeInUp"
          style={{ animationDelay: "0.8s", animationFillMode: "forwards" }}
        >
          Explore Services
        </a>
      </div>
    </section>
  );
}

export default Hero;
