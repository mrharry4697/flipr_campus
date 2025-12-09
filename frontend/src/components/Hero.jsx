import React from "react";
import ContactForm from "./ContactForm"; // import the form

function Hero() {
  return (
    <section className="w-full bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-20 flex flex-col md:flex-row items-center gap-10">

        {/* Text Content */}
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            We Provide Best Web Solutions
          </h1>
          <p className="text-gray-600 mb-6">
            Delivering high-quality web development, design, and IT solutions to help your business grow.
          </p>
          <div className="flex gap-4">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition">
              Get Started
            </button>
            <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-md hover:bg-blue-50 transition">
              Learn More
            </button>
          </div>
        </div>

        {/* Contact Form replaces Hero Image */}
        <div className="flex-1">
          <ContactForm />
        </div>

      </div>
    </section>
  );
}

export default Hero;
