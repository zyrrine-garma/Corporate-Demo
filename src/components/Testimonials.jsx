import React from "react";

function Testimonials() {
  const testimonials = [
    {
      name: "Jane Doe",
      feedback:
        "Outstanding consulting! They transformed our business strategy.",
    },
    {
      name: "John Smith",
      feedback: "Innovative and professional. Highly recommend!",
    },
    {
      name: "Emily Clark",
      feedback:
        "Their team helped our business scale efficiently with smart solutions.",
    },
    {
      name: "Michael Lee",
      feedback:
        "Professional, insightful, and creative. Our go-to consulting team!",
    },
  ];

  return (
    <section id="testimonials" className="py-24 bg-lavender">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gunmetal">
          What Our Clients Say
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((t, idx) => {
            const animationClass =
              idx % 2 === 0 ? "animate-fadeInLeft" : "animate-fadeInRight";
            return (
              <div
                key={idx}
                className={`${animationClass} p-6 bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-500`}
                style={{
                  animationDelay: `${0.2 * idx}s`,
                  animationFillMode: "forwards",
                }}
              >
                <p className="mb-4 italic text-lg text-gunmetal">
                  "{t.feedback}"
                </p>
                <h4 className="font-semibold text-teal">{t.name}</h4>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
