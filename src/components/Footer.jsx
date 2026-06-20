import React from "react";
import { GiChickenOven } from "react-icons/gi";
import { IoLocationOutline } from "react-icons/io5";
import { FiPhoneCall } from "react-icons/fi";
import { IoMailOpenOutline } from "react-icons/io5";
import { IoHomeOutline } from "react-icons/io5";
import { FcAbout } from "react-icons/fc";
import { LuContact } from "react-icons/lu";

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white mt-10">

      <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* About */}
        <div>
          <h2 className="text-2xl font-bold">
            <GiChickenOven className="inline mr-2" />
             Priya Chicken Centre</h2>
          <p className="mt-3 text-sm text-white/80">
            Fresh, hygienic and daily cut chicken available at best price.
            We ensure quality and customer satisfaction always.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-white/80">
            <li className="hover:text-yellow-300 cursor-pointer"> <IoHomeOutline className="inline mr-2" />Home</li>
            <li className="hover:text-yellow-300 cursor-pointer"><FcAbout className="inline mr-2" />About</li>
            <li className="hover:text-yellow-300 cursor-pointer"> <LuContact className="inline mr-2" />Contact</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Contact</h3>
          <p className="text-white/80"> <IoLocationOutline className="inline mr-2" /> maligaimedu, Tamil Nadu,606204</p>
          <p className="text-white/80 mt-2"> <FiPhoneCall className="inline mr-2" /> +91 98765 43210</p>
          <p className="text-white/80 mt-2"> <IoMailOpenOutline className="inline mr-2" /> priya@gmail.com</p>
        </div>

      </div>

      {/* Bottom line */}
      <div className="border-t border-white/20 text-center py-4 text-sm text-white/70">
        © {new Date().getFullYear()} Priya Chicken Centre. All Rights Reserved.
      </div>

    </footer>
  );
};

export default Footer;