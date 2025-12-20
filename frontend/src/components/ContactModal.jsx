import ContactForm from "./ContactForm";

export default function ContactModal({ onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center ">

      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm "
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div className="relative  bg-white rounded-xl shadow-xl w-full max-w-md p-6">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-gray-500 hover:text-black text-xl"
        >
          ✕
        </button>

        <h2 className="text-xl font-bold text-center mb-4">
          Get a Free Consultation
        </h2>
{/* Blue Form Card */}
        <div className="bg-[#9fb3ff] rounded-xl p-8 shadow-lg flex justify-center">
          <form className="w-full max-w-sm space-y-4">
            
            <input
              placeholder="Full Name"
              className="w-full px-4 py-3 rounded-md bg-transparent border border-white/70 placeholder-white text-white focus:outline-none"
            />

            <input
              placeholder="Email Address"
              className="w-full px-4 py-3 rounded-md bg-transparent border border-white/70 placeholder-white text-white focus:outline-none"
            />

            <input
              placeholder="Mobile Number"
              className="w-full px-4 py-3 rounded-md bg-transparent border border-white/70 placeholder-white text-white focus:outline-none"
            />

            <input
              placeholder="Area, City"
              className="w-full px-4 py-3 rounded-md bg-transparent border border-white/70 placeholder-white text-white focus:outline-none"
            />

            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-md transition"
            >
              Get Quick Quote
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}
