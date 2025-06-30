import React from "react";

export default function About() {
  return (
    <div className="bg-gray-100 py-12 px-4 md:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          About TheWebPal
        </h1>
        <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
          At TheWebPal, we are passionate about empowering businesses with
          modern web solutions. Whether you’re looking for sleek e-commerce,
          professional websites, or custom web apps, our experienced team is
          ready to deliver exceptional results with creativity and precision.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        <div className="bg-white shadow rounded p-6 text-left">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Our Mission
          </h2>
          <p className="text-gray-600">
            We aim to bridge the gap between technology and user experience
            by providing high-quality, affordable, and scalable web solutions
            for clients worldwide. Your success is our mission.
          </p>
        </div>
        <div className="bg-white shadow rounded p-6 text-left">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Our Vision
          </h2>
          <p className="text-gray-600">
            To become a trusted partner for entrepreneurs, startups, and
            businesses by continuously adapting to the latest technologies
            and industry best practices, ensuring innovation at every step.
          </p>
        </div>
        <div className="bg-white shadow rounded p-6 text-left">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Our Values
          </h2>
          <ul className="list-disc ml-5 text-gray-600 space-y-1">
            <li>Integrity and Transparency</li>
            <li>Client-Centric Mindset</li>
            <li>Continuous Learning</li>
            <li>Quality-First Approach</li>
          </ul>
        </div>
        <div className="bg-white shadow rounded p-6 text-left">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Why Choose TheWebPal?
          </h2>
          <p className="text-gray-600">
            Our talented team combines experience with innovation, helping
            your business stay ahead of the competition. We pride ourselves
            on being responsive, agile, and truly invested in your success.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto text-center mt-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Let's Work Together
        </h2>
        <p className="text-gray-600 mb-6">
          Ready to elevate your online presence? Contact us today and let’s
          start building something amazing together.
        </p>
        <a
          href="/contact"
          className="inline-block bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 transition"
        >
          Contact Us
        </a>
      </div>
    </div>
  );
}
