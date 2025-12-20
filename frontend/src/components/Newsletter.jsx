import { useState } from "react";
import API from "../services/api";

export default function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post("/subscribes", { email }); // ✅ FIXED ROUTE
      alert("Subscribed successfully!");
      setEmail("");
    } catch {
      alert("Already subscribed or error occurred");
    }
  };

  return (
    <section className="bg-blue-600 py-6">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">

        {/* Left Menu */}
        <div className="text-white text-sm flex flex-wrap gap-6">
          <span>Home</span>
          <span>Services</span>
          <span>Projects</span>
          <span>Testimonials</span>
          <span>Contact</span>
        </div>

        {/* Subscribe Form */}
        <form
          onSubmit={handleSubmit}
          className="flex items-center gap-2"
        >
          <span className="text-white text-sm hidden md:block">
            Subscribe Us
          </span>

          <input
            type="email"
            placeholder="Enter Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-white-light border border-gray-100 px-3 py-2 rounded-md text-sm outline-none w-56"
            required
          />

          <button
            type="submit"
            className="bg-white text-blue-600 px-4 py-2 rounded-md font-semibold hover:bg-gray-100"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
