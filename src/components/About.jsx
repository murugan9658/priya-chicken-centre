import React from "react";

const About = () => {
  return (
    <div className="w-full min-h-screen bg-gray-100 flex items-center justify-center px-4 py-10">
      
      <div className="max-w-5xl w-full bg-white shadow-lg rounded-2xl overflow-hidden grid md:grid-cols-2">
        
        {/* Image Section */}
        <div className="w-full h-full object-cover object-top md:object-center">
          <img
            src="/aboutc.jpg"
            alt="Chicken Centre"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content Section */}
        <div className="p-6 md:p-10 flex flex-col justify-center">
          
          <h2 className="text-2xl md:text-4xl font-bold text-blue-600">
            About Us 🐔
          </h2>

          <p className="text-gray-600 mt-4 text-sm md:text-base leading-relaxed">
            Welcome to <span className="font-semibold">Priya Chicken Centre</span>, 
            your trusted destination for fresh, hygienic, and high-quality chicken.
            We are committed to delivering farm-fresh chicken daily with proper
            cleaning and safe handling.
          </p>

          <p className="text-gray-600 mt-3 text-sm md:text-base leading-relaxed">
            Our goal is to provide <b>fresh cut chicken</b> at affordable prices 
            with best service for our customers. Quality and customer satisfaction 
            is our top priority.
          </p>

          {/* Features */}
          <div className="mt-5 space-y-2">
            <p className="text-green-600 font-semibold">✔ Fresh Daily Chicken</p>
            <p className="text-green-600 font-semibold">✔ Hygienic Cutting Process</p>
            <p className="text-green-600 font-semibold">✔ Affordable Pricing</p>
            <p className="text-green-600 font-semibold">✔ Quick Home Delivery</p>
          </div>

          {/* Button */}
          <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 hover:text-black transition-transform hover:scale-105 duration-300">
            Contact Us
          </button>

        </div>
      </div>
    </div>
  );
};

export default About;