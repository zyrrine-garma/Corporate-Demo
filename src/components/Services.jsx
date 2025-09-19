import React from "react";
import { FaLightbulb, FaLaptopCode, FaChartLine } from "react-icons/fa";

function Services() {
  const services = [
    {
      title: "Business Strategy",
      desc: "Tailored strategies for growth and success.",
      icon: <FaLightbulb size={36} className="text-teal mb-4" />,
    },
    {
      title: "Technology Consulting",
      desc: "Innovative tech solutions for your business needs.",
      icon: <FaLaptopCode size={36} className="text-teal mb-4" />,
    },
    {
      title: "Market Analysis",
      desc: "Actionable insights to drive smart decisions.",
      icon: <FaChartLine size={36} className="text-teal mb-4" />,
    },
  ];

  return (
    <section
      id="services"
      className="relative py-24 bg-gradient-to-b from-lavender/90 via-white to-lavender/60"
    >
      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        {/* Section Heading */}
        <h2
          className="text-3xl md:text-4xl font-bold mb-16 text-gunmetal opacity-0 animate-fadeInUp"
          style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}
        >
          Our Services
        </h2>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-10">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="p-8 bg-white rounded-3xl shadow-md hover:shadow-xl transform transition-all duration-500 hover:scale-105 hover:bg-lavender/30 opacity-0 animate-fadeInUp"
              style={{
                animationDelay: `${0.2 + idx * 0.2}s`,
                animationFillMode: "forwards",
              }}
            >
              <div className="flex flex-col items-center justify-center">
                {service.icon}
                <h3 className="text-xl md:text-2xl font-semibold mb-3 text-gunmetal">
                  {service.title}
                </h3>
                <p className="text-gunmetal text-center mb-6">{service.desc}</p>
                <a
                  href="#contact"
                  className="px-6 py-3 bg-teal text-white rounded-lg shadow-lg hover:bg-columbia_blue hover:scale-105 transition-all duration-300 font-medium"
                >
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
