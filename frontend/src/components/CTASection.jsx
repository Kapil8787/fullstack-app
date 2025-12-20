export default function CTASection() {
  return (
    <section
      className="relative bg-cover bg-center h-80 flex items-center justify-center"
      style={{
        backgroundImage:
          "url('/images/cta-bg.')", // local image
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative text-center text-white max-w-2xl px-4">
        <p className="text-lg md:text-xl font-medium mb-4">
          Learn more about our listing process, as well as our additional
          staging and design work.
        </p>

        <button className="bg-white text-gray-900 px-6 py-2 rounded shadow hover:bg-gray-100 transition">
          LEARN MORE
        </button>
      </div>
    </section>
  );
}
