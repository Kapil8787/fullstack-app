import { useEffect, useState } from "react";
import API from "../services/api";
import Navbar from "../components/Navbar";
import ProjectCard from "../components/ProjectCard";
import ClientCard from "../components/ClientCard";
import ContactForm from "../components/ContactForm";
import heroImg from "../assets/hero.svg";
import WhyChooseUs from "../components/WhyChooseUs";
import AboutUs from "../components/AboutUs";
import CTASection from "../components/CTASection";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import NotAverageRealtor from "../components/NotAverageRealtor";
import ContactModal from "../components/ContactModal";

export default function LandingPage() {
  const [projects, setProjects] = useState([]);
  const [clients, setClients] = useState([]);
  const [showContact, setShowContact] = useState(false);

  useEffect(() => {
    API.get("/clients")
      .then((res) => {
        setClients(res.data);
      })
      .catch((err) => {
        console.error("Error fetching clients:", err);
      });

    API.get("/projects")
      .then((res) => {
        setProjects(res.data);
      })
      .catch((err) => {
        console.error("Error fetching projects:", err);
      });
  }, []);

  useEffect(() => {
    document.body.style.overflow = showContact ? "hidden" : "auto";
  }, [showContact]);

  return (
    <>
      <Navbar onContactClick={() => setShowContact(true)} />

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen bg-cover bg-center relative"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white">
            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
              Consultation, <br />
              Design <span className="text-blue-400">&</span> Marketing
            </h1>

            <p className="text-lg text-gray-200 mb-8">
              We help businesses grow with professional consultation, modern
              design and result-driven marketing strategies.
            </p>

            <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded text-white font-semibold">
              Learn More
            </button>
          </div>

          {/* Right Form */}
          <section id="contact">
            <div className="w-full max-w-md mx-auto">
              <ContactForm variant="hero" />
            </div>
          </section>
        </div>
      </section>
      <NotAverageRealtor />

      {/* Why Choose Us */}
      <section id="services">
        <WhyChooseUs />
      </section>

      {/* About Us */}
      <AboutUs />

      {/* Our Projects */}
      <section id="projects" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          {/* Heading */}
          <h2 className="text-2xl md:text-3xl font-semibold text-center text-blue-600">
            Our Projects
          </h2>

          <p className="text-center text-gray-500 mt-3 max-w-2xl mx-auto text-sm">
            We know what buyers are looking for and suggest projects that will
            bring clients top dollar for the sale of their homes.
          </p>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-10">
            {projects.map((project) => (
              <ProjectCard key={project._id} project={project} />
            ))}
          </div>
        </div>
      </section>
      {/* Happy Clients */}
      <section id="testimonials" className="py-20 bg-[#f9fbff]">
        <h2 className="text-2xl font-bold text-center text-blue-600 mb-12">
          Happy Clients
        </h2>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 px-6">
          {clients.map((client) => (
            <ClientCard key={client._id} client={client} />
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <CTASection />

      <Newsletter />

      <Footer />
      {showContact && <ContactModal onClose={() => setShowContact(false)} />}
    </>
  );
}
