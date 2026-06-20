import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GiChickenOven } from "react-icons/gi";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-blue-500 font-serif text-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="flex justify-between items-center px-4 md:px-8 py-4">
        {/* Logo */}
        <h1 className="text-lg md:text-2xl font-bold">
          <GiChickenOven className="inline mr-2 size-12" />
          Priya Chicken Centre
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-lg font-semibold">
          <li className="hover:text-yellow-300 cursor-pointer  hover:scale-105 hover:duration-700">Home</li>
          <li className="hover:text-yellow-300 cursor-pointer hover:scale-105 hover:duration-700">
            <Link to="/products">Products</Link>
          </li>
          <li className="hover:text-yellow-300 cursor-pointer  hover:scale-105 hover:duration-700">About</li>
          <li className="hover:text-yellow-300 cursor-pointer hover:scale-105 hover:duration-700">Contact</li>
        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-3">
            <a
                href="https://wa.me/917868863068?text=%F0%9F%8D%97%20Hi%20Priya%20Chicken%20Centre,%20I%20would%20like%20to%20know%20today%27s%20chicken%20rates%20and%20place%20an%20order."
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:block bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:scale-105 hover:duration-700 hover:bg-yellow-400 hover:text-black transition"
              >
                Order now
              </a>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-3xl"
          >
            {open ? "✖" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu with Framer Motion */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-blue-600 px-6 py-4 space-y-4 text-lg font-semibold"
          >
            <p className="hover:text-yellow-300 cursor-pointer">Home</p>
            <p className="hover:text-yellow-300 cursor-pointer">About</p>
            <p className="hover:text-yellow-300 cursor-pointer">Contact</p>
             <li className="hover:text-yellow-300 cursor-pointer hover:scale-105 hover:duration-700">
            <Link to="/products">Products</Link>
          </li>
           <a
              href="https://wa.me/917868863068?text=%F0%9F%8D%97%20Hi%20Priya%20Chicken%20Centre,%20I%20would%20like%20to%20know%20today%27s%20chicken%20rates%20and%20place%20an%20order."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full mt-3 bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold inline-block text-center hover:bg-green-500 hover:text-white hover:scale-105 duration-500"
            >
              Order Now
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;