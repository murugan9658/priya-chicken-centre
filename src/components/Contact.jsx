import React, { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully 👍");

    setForm({
      name: "",
      phone: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen bg-gray-400 flex items-center justify-center px-4 py-10">

      {/* CARD */}
      <div className="w-full max-w-5xl bg-white shadow-lg rounded-2xl overflow-hidden flex flex-col md:flex-row">

        {/* IMAGE (TOP in mobile, RIGHT in desktop) */}
        <div className="w-full md:w-1/2  md:h-auto order-1 md:order-2">
          <img
            src="/contactc.jpg"
            alt="contact"
            className="w-full h-full object-cover object-top md:object-center"
          />
        </div>

        {/* FORM (BELOW image in mobile, LEFT in desktop) */}
        <div className="w-full md:w-1/2 p-6 md:p-10 order-2 md:order-1">

          <h2 className="text-2xl md:text-4xl font-bold text-blue-600 text-center md:text-left">
            Contact Us 📞
          </h2>

          <p className="text-center md:text-left text-gray-500 mt-2">
            We are here to take your order & support you anytime
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={form.phone}
              onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />

            <textarea
              name="message"
              placeholder="Your Message / Order Details"
              value={form.message}
              onChange={handleChange}
              rows="4"
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-yellow-400 hover:text-black transition-transform hover:scale-105 duration-300"
            >
              Send Message
            </button>
          </form>

          <div className="mt-6 text-center md:text-left text-gray-600 text-sm">
            📍 Priya Chicken Centre | 🐔 Fresh Daily Chicken | 📞 Quick Response
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;