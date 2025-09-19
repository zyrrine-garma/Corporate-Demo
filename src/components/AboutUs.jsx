import React from "react";
import AboutImage from "../assets/images/about.jpg";
import { User, Twitter, Linkedin, Facebook } from "lucide-react";

function AboutUs() {
  return (
    <section className="py-20 text-gray-100 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      <div className="max-w-6xl px-6 mx-auto space-y-24">
        {/* Header */}
        <div className="text-center animate-fadeInUp">
          <h1 className="mb-6 text-4xl font-extrabold text-white md:text-5xl">
            About Us
          </h1>
          <p className="max-w-3xl mx-auto text-lg text-gray-300 md:text-xl opacity-90">
            We are{" "}
            <span className="font-semibold text-teal-400">MyCompany</span>, a
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
        <div className="flex flex-col items-center gap-12 md:flex-row animate-fadeInUp">
          {/* Image */}
          <div className="relative w-full md:w-1/2 h-[450px] md:h-[600px] rounded-3xl overflow-hidden shadow-2xl">
            <img
              src={AboutImage}
              alt="Our Story"
              className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20"></div>
          </div>

          {/* Text */}
          <div className="flex-1 space-y-4">
            <h2 className="text-3xl font-bold text-white">Our Story</h2>
            <p className="text-lg leading-relaxed text-gray-300">
              Our journey began with a simple belief: that{" "}
              <span className="font-medium text-teal-400">technology</span>,
              when applied with creativity and purpose, has the power to
              transform the way businesses grow.{" "}
              <span className="font-medium text-teal-400">MyCompany</span>{" "}
              started as a small group of innovators who shared a passion for
              solving real-world challenges through smart, scalable, and
              human-centered solutions.
            </p>
            <p className="text-lg leading-relaxed text-gray-300">
              What began as a few late nights of brainstorming and coding
              quickly evolved into a thriving team dedicated to delivering
              measurable impact for our clients. Over the years, we’ve partnered
              with{" "}
              <span className="font-medium text-white">startups, SMEs</span>,
              and <span className="font-medium text-white">enterprises</span>,
              helping them harness technology to scale and succeed.
            </p>
            <p className="text-lg leading-relaxed text-gray-300">
              Each project sharpened our expertise and expanded our vision,
              allowing us to grow into a trusted partner known for our
              reliability, innovation, and client-first approach. Our success
              has never been about short-term gains—it has always been about
              building lasting relationships and empowering businesses to unlock
              their full potential.
            </p>
            <p className="text-lg leading-relaxed text-gray-300">
              Today,{" "}
              <span className="font-medium text-teal-400">MyCompany</span> is
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
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="mb-6 text-3xl font-bold text-white">Our Next Step</h2>
          <p className="mb-6 text-lg leading-relaxed text-gray-300">
            As technology evolves, so do we. Our journey forward is about
            embracing{" "}
            <span className="font-semibold text-teal-400">innovation</span>{" "}
            while staying true to our mission of delivering solutions that
            create real impact.
          </p>
          <p className="mb-6 text-lg leading-relaxed text-gray-300">
            In the coming years, we aim to strengthen our expertise in{" "}
            <span className="font-semibold text-teal-400">
              AI-driven applications
            </span>{" "}
            that enhance decision-making, automate processes, and provide
            smarter insights. We’re also expanding our{" "}
            <span className="font-semibold text-teal-400">
              cloud-native services
            </span>{" "}
            to help businesses scale securely and efficiently, no matter where
            they are in their digital journey.
          </p>
          <p className="mb-6 text-lg leading-relaxed text-gray-300">
            Beyond technology, our next step involves building{" "}
            <span className="font-semibold text-teal-400">
              cross-industry collaborations
            </span>{" "}
            with startups, enterprises, and communities to co-create solutions
            that tackle global challenges. From sustainability to digital
            inclusion, we see opportunities to make a difference.
          </p>
          <p className="text-lg leading-relaxed text-gray-300">
            Above all, our future is about people. By investing in our team,
            nurturing talent, and fostering creativity, we envision becoming a
            hub for{" "}
            <span className="font-semibold text-teal-400">
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
          <h2 className="mb-8 text-3xl font-bold text-center text-white">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3">
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
                className="p-6 text-center transition-all duration-300 bg-gray-800 shadow-lg rounded-2xl hover:shadow-teal-500/30 hover:-translate-y-2"
              >
                <div className="flex items-center justify-center w-24 h-24 mx-auto mb-4 text-white rounded-full bg-gradient-to-tr from-teal-500 to-gray-700">
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
          <h2 className="mb-6 text-3xl font-bold text-white">Follow Us</h2>
          <p className="mb-6 text-lg text-gray-300">
            Stay connected and join our journey!
          </p>
          <div className="flex justify-center space-x-10">
            <button
              type="button"
              className="text-gray-400 transition-transform transform hover:text-teal-400 hover:scale-150"
              aria-label="Twitter"
            >
              <Twitter size={50} />
            </button>
            <button
              type="button"
              className="text-gray-400 transition-transform transform hover:text-teal-400 hover:scale-150"
              aria-label="LinkedIn"
            >
              <Linkedin size={50} />
            </button>
            <button
              type="button"
              className="text-gray-400 transition-transform transform hover:text-teal-400 hover:scale-150"
              aria-label="Facebook"
            >
              <Facebook size={50} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
