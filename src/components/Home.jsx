import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { GoDotFill } from "react-icons/go";

const Home = () => {
  return (
    <div className="relative w-full   h-screen overflow-hidden">
      
      {/* Background Image */}
      <img
        src="/chicken2.jpg"
        alt="hero"
        className="w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center px-4 text-center">
        
        {/* Center Content */}
        <h1 className="text-white text-2xl sm:text-3xl md:text-5xl font-bold hover:text-green-500  hover:duration-1000">
          Fresh Chicken Delivered Daily
        </h1>

        {/* Features */}
        <ul className="flex flex-col sm:flex-row gap-2 sm:gap-6 mt-4">
          <li className="text-white text-lg sm:text-xl font-semibold">
            <GoDotFill className="inline mr-2" />
            Fresh
          </li>
          <li className="text-white text-lg sm:text-xl font-semibold">
            <GoDotFill className="inline mr-2" />
            Hygienic
          </li>
          <li className="text-white text-lg sm:text-xl font-semibold">
            <GoDotFill className="inline mr-2" />
            Daily Cut Chicken
          </li>
        </ul>
      </div>

      {/* Bottom Buttons */}
      <div className="absolute bottom-20  left-1/2 transform -translate-x-1/2 flex flex-col sm:flex-row gap-10">
                  
          <a
            href="https://wa.me/917868863068?text=%F0%9F%8D%97%20Hi%20Priya%20Chicken%20Centre,%20I%20would%20like%20to%20know%20today%27s%20chicken%20rates%20and%20place%20an%20order."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black px-5 py-2 rounded-lg font-semibold hover:bg-green-500 hover:text-white hover:scale-105 duration-500 inline-flex items-center"
          >
            <FaWhatsapp className="mr-2" />
            WhatsApp
          </a>

          <a
            href="tel:+919361212290"
            className="bg-white text-black px-5 py-2 rounded-lg font-semibold hover:bg-blue-500 hover:text-white hover:scale-105 duration-500 inline-flex items-center"
          >
            <FiPhoneCall className="mr-2" />
            Call Now
          </a>

      </div>
    </div>
  );
};

export default Home;