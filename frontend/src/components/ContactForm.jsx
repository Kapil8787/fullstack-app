import { useState } from "react";
import API from "../services/api";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    city: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post("/contact", formData);
      alert("Message sent successfully!");

      // ✅ correct reset
      setFormData({
        fullName: "",
        email: "",
        mobile: "",
        city: "",
      });
    } catch (err) {
      console.error(err);
      alert("Failed to send message");
    }
  };

  return (
  <div className="bg-[#6884ffa6] rounded-xl shadow-2xl p-10 m-20 w-full max-w-sm mx-auto">
    <h2 className=" text-white text-xl font-semibold mb-6 text-center">
      Get a Free Consultation
    </h2>

    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        name="fullName"
        placeholder="Full Name"
        value={formData.fullName}
        onChange={handleChange}
        className="w-full mb-4 px-4 py-3 rounded-md bg-transparent border border-white/60 text-white placeholder-white/70 focus:outline-none focus:border-white"
        required
      />

      <input
        name="email"
        type="email"
        placeholder="Email Address"
        value={formData.email}
        onChange={handleChange}
        className="w-full mb-4 px-4 py-3 rounded-md bg-transparent border border-white/60 text-white placeholder-white/70 focus:outline-none focus:border-white"
        required
      />

      <input
        name="mobile"
        placeholder="Mobile Number"
        value={formData.mobile}
        onChange={handleChange}
       className="w-full mb-4 px-4 py-3 rounded-md bg-transparent border border-white/60 text-white placeholder-white/70 focus:outline-none focus:border-white"
        required
      />

      <input
        name="city"
        placeholder="Area, City"
        value={formData.city}
        onChange={handleChange}
        className="w-full mb-4 px-4 py-3 rounded-md bg-transparent border border-white/60 text-white placeholder-white/70 focus:outline-none focus:border-white"
        required
      />

      <button
        type="submit"
        className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-md font-semibold transition"
      >
        Get Quick Quote
      </button>
    </form>
  </div>
);
}
