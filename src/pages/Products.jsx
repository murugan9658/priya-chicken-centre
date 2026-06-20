import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const products = [
  {
    name: "1/2 Kg Fresh Chicken",
    price: 120,
    img: "rawchicken.jpg",
  },
  {
    name: "1 Kg Fresh Chicken",
    price: 240,
    img: "rawchicken.jpg",
  },
  {
    name: "2 Kg Fresh Chicken",
    price: 480,
    img: "rawchicken.jpg",
  },
  {
    name: "3 Kg Fresh Chicken",
    price: 720,
    img: "rawchicken.jpg",
  },
  {
    name: "4 Kg Fresh Chicken",
    price: 960,
    img: "rawchicken.jpg",
  },
  {
    name: "5 Kg Fresh Chicken",
    price: 1200,
    img: "rawchicken.jpg",
  },
];

const phone = "919361212290"; // Replace with your actual phone number

const Products = () => {
  return (
    <div className="font-serif pt-24 px-4 md:px-10 bg-gray-100 min-h-screen">

      {/* Back Button */}
      <Link
        to="/"
        className="inline-block mb-6 bg-blue-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
      >
        ← Back to Home
      </Link>

      <h1 className="text-3xl font-bold text-center mb-10 text-blue-600">
         Fresh Chicken Products
      </h1>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        {products.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden"
          >
            {/* Image */}
           <div className="overflow-hidden">
                <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-80 object-cover transition duration-500 hover:scale-110"
                />
            </div>

            <div className="p-5 text-center bg-blue-300">
              <h2 className="text-lg font-bold text-gray-800">
                {item.name}
              </h2>

              <p className="text-green-600 font-bold mt-2 text-xl">
                ₹{item.price}
              </p>

              {/* Buy Button */}
              <a
                href={`https://wa.me/${phone}?text=🍗%20Hi%20I%20want%20to%20buy%20${item.name}%20for%20₹${item.price}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 bg-green-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-600 transition"
              >
                🛒 Buy Now
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Products;