export default function Navbar({ onContactClick }) {
  return (
   <header className="fixed top-0 left-0  w-full bg-white shadow z-50 ">
  <div className="max-w-7xl mx-auto  px-4 md:px-6 py-4 flex items-center justify-between">


        {/* Logo */}
        <div className="flex items-center gap-2 ">
          <img
            src="/logo.svg"
            alt="Real Trust"
            className="h-8 w-auto "
          />
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-20 ml-30 pl-40 text-sm font-medium">
          <a href="#home" className="hover:text-blue-600">Home</a>
          <a href="#services" className="hover:text-blue-600">Services</a>
          <a href="#projects" className="hover:text-blue-600">About Projects</a>
          <a href="#testimonials" className="hover:text-blue-600">Testimonials</a>
        </nav>

        {/* Contact Button */}
         <button
          onClick={onContactClick}
          className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-md text-sm font-semibold"
        >
          Contact
        </button>
      </div>
    </header>
  );
}
