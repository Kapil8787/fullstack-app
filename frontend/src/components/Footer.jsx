import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0b1629] text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Left */}
        <p className="text-sm">
          © 2025 All Rights Reserved | Real Trust
        </p>

        {/* Center Logo */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <img
            src="/logo.svg"
            alt="Real Trust"
            className="h-7 invert brightness-0"
          />
        </div>

        {/* Right Social Icons */}
        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-white transition">
            <FaFacebookF />
          </a>
          <a href="#" className="hover:text-white transition">
            <FaTwitter />
          </a>
          <a href="#" className="hover:text-white transition">
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </footer>
  );
}
