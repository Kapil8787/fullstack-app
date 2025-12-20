export default function AboutUs() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto text-center px-4">
        
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-semibold text-blue-600">
          About Us
        </h2>

        {/* Underline */}
        <div className="w-12 h-1 bg-blue-600 mx-auto mt-3 mb-6 rounded"></div>

        {/* Description */}
        <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
          With years of experience in the real estate market, we provide
          exceptional services and a commitment to work hard, listen and follow
          through. We value quality service to build relationships with clients
          and, more importantly, maintain those relationships by communicating
          effectively.
        </p>

        {/* Button */}
        <div className="mt-8">
          <button className="px-6 py-2 border border-blue-600 text-blue-600 text-sm font-medium rounded hover:bg-blue-600 hover:text-white transition">
            LEARN MORE
          </button>
        </div>
      </div>
    </section>
  );
}
