import React from "react";
import AboutImage from "../assets/images/about.jpg";
import { Link } from "react-router-dom";

function About() {
  return (
    <section
      id="about"
      className="relative py-24 bg-gradient-to-b from-lavender/80 via-white to-lavender/60"
    >
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        {/* Image */}
        <div
          className="flex-1 opacity-0 animate-fadeInUp"
          style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}
        >
          <img
            src={AboutImage}
            alt="About us"
            className="rounded-3xl shadow-xl w-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Text Content */}
        <div
          className="flex-1 text-center md:text-left opacity-0 animate-fadeInUp"
          style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gunmetal">
            About Us
          </h2>
          <p className="text-gunmetal text-lg md:text-xl leading-relaxed mb-6">
            At <span className="font-semibold text-teal">MyCompany</span>, we
            provide intelligent business solutions tailored to your success.
            Combining innovative technology, strategic insights, and a dedicated
            team of experts, we empower your business to reach new heights.
          </p>
          <p className="text-gunmetal text-lg md:text-xl leading-relaxed mb-6">
            Whether you’re looking to streamline operations, enhance
            productivity, or innovate in your industry, we deliver actionable
            strategies that make a real impact.
          </p>
          <Link
            to="/about"
            className="inline-block px-6 py-3 bg-teal text-white rounded-lg shadow-lg hover:bg-columbia_blue hover:scale-105 transition-all duration-300 font-medium"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}

export default About;
