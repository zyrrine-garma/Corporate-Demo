import React from "react";
import { FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-b from-columbia_blue/20 via-lavender/30 to-white"
    >
      <div className="max-w-3xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2
          className="text-3xl md:text-4xl font-bold mb-6 text-gunmetal opacity-0 animate-fadeInUp"
          style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}
        >
          Contact Us
        </h2>

        {/* Subheading */}
        <p
          className="text-gunmetal mb-12 opacity-0 animate-fadeInUp"
          style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
        >
          Reach out for consultations or inquiries. We'd love to hear from you!
        </p>

        {/* Form */}
        <form
          className="flex flex-col gap-4 mb-8 opacity-0 animate-fadeInUp"
          style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}
        >
          <input
            type="text"
            placeholder="Your Name"
            className="p-4 rounded-xl border border-columbia_blue focus:outline-none focus:ring-2 focus:ring-teal transition-all hover:shadow-md"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="p-4 rounded-xl border border-columbia_blue focus:outline-none focus:ring-2 focus:ring-teal transition-all hover:shadow-md"
          />
          <textarea
            placeholder="Message"
            className="p-4 rounded-xl border border-columbia_blue focus:outline-none focus:ring-2 focus:ring-teal transition-all resize-none h-32 hover:shadow-md"
          />
          <button className="bg-teal hover:bg-gunmetal text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition-all transform hover:-translate-y-1 hover:scale-105">
            Send Message
          </button>
        </form>

        {/* Social Media Icons */}
        <div
          className="flex justify-center gap-6 text-2xl text-gunmetal opacity-0 animate-fadeInUp"
          style={{ animationDelay: "0.7s", animationFillMode: "forwards" }}
        >
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal transition-colors"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal transition-colors"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal transition-colors"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
