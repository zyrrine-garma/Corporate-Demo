import React from "react";
import AboutImage from "../assets/images/about.jpg";
import { User, Twitter, Linkedin, Facebook } from "lucide-react";

function AboutUs() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-gray-100">
      <div className="max-w-6xl mx-auto px-6 space-y-24">
        {/* Header */}
        <div className="text-center animate-fadeInUp">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            About Us
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto opacity-90">
            We are{" "}
            <span className="text-teal-400 font-semibold">MyCompany</span>, a
            team of passionate professionals delivering{" "}
            <span className="font-medium text-white">
              smart, scalable, and impactful solutions
            </span>{" "}
            for modern businesses.
          </p>
        </div>

        {/* Divider */}
        <hr className="border-t border-gray-700" />

        {/* Our Story */}
        <div className="flex flex-col md:flex-row items-center gap-12 animate-fadeInUp">
          {/* Image */}
          <div className="relative w-full md:w-1/2 h-[450px] md:h-[600px] rounded-3xl overflow-hidden shadow-2xl">
            <img
              src={AboutImage}
              alt="Our Story"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20"></div>
          </div>

          {/* Text */}
          <div className="flex-1 space-y-4">
            <h2 className="text-3xl font-bold text-white">Our Story</h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              Our journey began with a simple belief: that{" "}
              <span className="text-teal-400 font-medium">technology</span>,
              when applied with creativity and purpose, has the power to
              transform the way businesses grow.{" "}
              <span className="text-teal-400 font-medium">MyCompany</span>{" "}
              started as a small group of innovators who shared a passion for
              solving real-world challenges through smart, scalable, and
              human-centered solutions.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              What began as a few late nights of brainstorming and coding
              quickly evolved into a thriving team dedicated to delivering
              measurable impact for our clients. Over the years, we’ve partnered
              with{" "}
              <span className="font-medium text-white">startups, SMEs</span>,
              and <span className="font-medium text-white">enterprises</span>,
              helping them harness technology to scale and succeed.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Each project sharpened our expertise and expanded our vision,
              allowing us to grow into a trusted partner known for our
              reliability, innovation, and client-first approach. Our success
              has never been about short-term gains—it has always been about
              building lasting relationships and empowering businesses to unlock
              their full potential.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Today,{" "}
              <span className="text-teal-400 font-medium">MyCompany</span> is
              more than just a service provider—we are a growth partner. We
              combine cutting-edge technologies with deep industry insights to
              craft solutions that not only meet today’s challenges but also
              anticipate tomorrow’s opportunities.
            </p>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-t border-gray-700" />

        {/* Our Next Step */}
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-white">Our Next Step</h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            As technology evolves, so do we. Our journey forward is about
            embracing
            <span className="text-teal-400 font-semibold">
              {" "}
              innovation
            </span>{" "}
            while staying true to our mission of delivering solutions that
            create real impact.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            In the coming years, we aim to strengthen our expertise in
            <span className="text-teal-400 font-semibold">
              {" "}
              AI-driven applications
            </span>{" "}
            that enhance decision-making, automate processes, and provide
            smarter insights. We’re also expanding our
            <span className="text-teal-400 font-semibold">
              {" "}
              cloud-native services
            </span>{" "}
            to help businesses scale securely and efficiently, no matter where
            they are in their digital journey.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            Beyond technology, our next step involves building
            <span className="text-teal-400 font-semibold">
              {" "}
              cross-industry collaborations
            </span>{" "}
            with startups, enterprises, and communities to co-create solutions
            that tackle global challenges. From sustainability to digital
            inclusion, we see opportunities to make a difference.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            Above all, our future is about people. By investing in our team,
            nurturing talent, and fostering creativity, we envision becoming a
            hub for
            <span className="text-teal-400 font-semibold">
              {" "}
              innovation and growth
            </span>{" "}
            — empowering businesses and communities to thrive in the digital
            era.
          </p>
        </div>

        {/* Divider */}
        <hr className="border-t border-gray-700" />

        {/* Meet Our Team */}
        <div>
          <h2 className="text-3xl font-bold mb-8 text-white text-center">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {[
              { name: "Jane Doe", role: "CEO & Founder" },
              { name: "John Smith", role: "CTO" },
              { name: "Sarah Lee", role: "Lead Designer" },
              { name: "Michael Chen", role: "Head of Development" },
              { name: "Emily Davis", role: "Marketing Strategist" },
              { name: "David Kim", role: "Project Manager" },
            ].map((member, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-2xl shadow-lg p-6 text-center hover:shadow-teal-500/30 hover:-translate-y-2 transition-all duration-300"
              >
                <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-tr from-teal-500 to-gray-700 rounded-full flex items-center justify-center text-white">
                  <User size={40} />
                </div>
                <h3 className="text-xl font-semibold text-white">
                  {member.name}
                </h3>
                <p className="text-teal-400">{member.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <hr className="border-t border-gray-700" />

        {/* Follow Us */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">Follow Us</h2>
          <p className="text-lg text-gray-300 mb-6">
            Stay connected and join our journey!
          </p>
          <div className="flex justify-center space-x-10">
            <a
              href="#"
              className="text-gray-400 hover:text-teal-400 transition-transform transform hover:scale-150"
            >
              <Twitter size={50} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-teal-400 transition-transform transform hover:scale-150"
            >
              <Linkedin size={50} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-teal-400 transition-transform transform hover:scale-150"
            >
              <Facebook size={50} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
