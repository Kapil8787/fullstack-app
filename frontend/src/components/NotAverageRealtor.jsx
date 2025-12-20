import mainImg from "../assets/realtor-main.svg";
import img1 from "../assets/realtor-1.svg";
import img2 from "../assets/realtor-2.svg";

export default function NotAverageRealtor() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-3xl font-bold text-blue-600 mb-4">
            Not Your Average Realtor
          </h2>

          <p className="text-gray-600 leading-relaxed max-w-md">
            We combine modern design, strategic marketing, and professional
            consultation to help you get the best value for your property.
          </p>
        </div>

        {/* RIGHT IMAGES */}
        <div className="relative flex justify-center items-center">

          {/* BIG IMAGE */}
          <img
            src={mainImg}
            alt="Realtor"
            className="w-72 h-72 rounded-full object-cover shadow-lg z-10"
          />

          {/* SMALL IMAGE 1 */}
          <img
            src={img1}
            alt="Client"
            className="w-32 h-32 rounded-full object-cover absolute -top-6 right-10 border-4 border-white shadow-md"
          />

          {/* SMALL IMAGE 2 */}
          <img
            src={img2}
            alt="Meeting"
            className="w-28 h-28 rounded-full object-cover absolute bottom-0 right-0 border-4 border-white shadow-md"
          />

          {/* DECORATIVE DOTS */}
          <span className="absolute -top-10 left-10 w-4 h-4 bg-blue-500 rounded-full"></span>
          <span className="absolute bottom-10 left-0 w-3 h-3 bg-orange-500 rounded-full"></span>
        </div>

      </div>
    </section>
  );
}
