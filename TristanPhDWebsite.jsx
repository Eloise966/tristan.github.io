import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function TristanPhDWebsite() {
  const [section, setSection] = useState("home");

  const renderContent = () => {
    switch (section) {
      case "home":
        return (
          <motion.div key="home" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <h2 className="text-3xl font-bold mb-4">Featured Articles</h2>
            <p className="text-gray-600 mb-6">Explore a featured selection of my writing work below.</p>
            <div className="border rounded-lg p-4 bg-gray-50 shadow-sm">
              <h3 className="text-xl font-semibold">Green Corrosion Inhibitors for Steel</h3>
              <p className="text-sm text-gray-700">Tested eco-friendly corrosion inhibitors using EIS and SEM on carbon steel in HCl. Achieved up to 85% efficiency. <a className="text-blue-600 underline" href="#">Read more</a></p>
            </div>
          </motion.div>
        );
      case "projects":
        return (
          <motion.div key="projects" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <h2 className="text-2xl font-semibold mb-2">Research Projects</h2>
            <div className="border rounded-lg p-4 bg-blue-50">
              <h3 className="text-xl font-medium">Eco-friendly Inhibitors for Carbon Steel</h3>
              <p>
                Developed and tested novel green inhibitors to reduce corrosion rates in acidic environments.
                Employed electrochemical impedance spectroscopy (EIS) and surface analysis (SEM/EDS).
              </p>
            </div>
          </motion.div>
        );
      case "about":
        return (
          <motion.div key="about" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-semibold mb-4">About Me</h2>
            <p className="mb-4 leading-relaxed">
              I am an ambitious mechanical engineering graduate with expertise in corrosion engineering, eager to learn and seize every possible opportunity.
              My passion for finding unusual ways to optimise solutions and automation naturally led me to mechanical engineering.
              Following in my father’s footsteps, I’ve always been fascinated by computers, software, and how systems are designed to work smarter, not harder.
              Mechanical engineering is where I am able to blend my love for technology, programming, and automotive systems.
            </p>
            <p className="mb-4 leading-relaxed">
              I was born in South Africa and travelled a long way to Australia to pursue my studies at RMIT in Bachelors of Engineering (Mechanical) (Hons).
              I studied for 4 years and took part in many extra-curricular activities. One of my major achievements is being a founding member of RMIT Engineers Australia Student Society (REASS)
              and serving as the student ambassador for Engineers Australia at RMIT. I completed my studies at the end of 2023 with my thesis focused on "Modern Multi-story buildings have to be built of highest possible
              energy efficiency," obtaining a First Class Honours.
            </p>
            <p className="leading-relaxed">
              Nowadays, you can find me working with Cathodic Protection Designs as a Corrosion Engineer at Corrosion Control Engineering (a member of the Eptec Group),
              supporting major pipeline projects across Australia and ensuring homes have their essential utilities.
            </p>
          </motion.div>
        );
      case "contact":
        return (
          <motion.div key="contact" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="max-w-md mx-auto">
            <h2 className="text-3xl font-semibold mb-4">Contact</h2>
            <div className="mb-4">
              <p><strong>Email:</strong> <a href="mailto:tpschool2854@gmail.com" className="text-blue-600 underline">tpschool2854@gmail.com</a></p>
              <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/tristan-pon/" target="_blank" className="text-blue-600 underline">tristan-pon</a></p>
            </div>
            <img src="/contact-image.png" alt="Contact" className="rounded shadow mt-4" />
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <main className="min-h-screen bg-white text-gray-800 flex font-sans">
      <aside className="w-64 min-h-screen text-white p-6 flex flex-col items-center bg-cover bg-center" style={{ backgroundImage: 'url("/background.png")' }}>
        <img src="/avatar.jpg" alt="Tristan Pon" className="w-24 h-24 rounded-full border-2 border-white shadow mb-4 object-cover" />
        <h1 className="text-xl font-bold mb-4">Tristan Pon</h1>
        <div className="flex space-x-4 mb-6">
          <a href="https://www.linkedin.com/in/tristan-pon/" target="_blank" className="hover:opacity-80">
            <img src="/linkedin.png" alt="LinkedIn" className="w-6 h-6 rounded-full bg-white p-1" />
          </a>
          <a href="mailto:tpschool2854@gmail.com" className="hover:opacity-80">
            <img src="/email.png" alt="Email" className="w-6 h-6 rounded-full bg-white p-1" />
          </a>
        </div>
        <nav className="flex flex-col space-y-2 text-sm w-full text-left mt-2">
          <button onClick={() => setSection("home")} className="hover:underline">Home</button>
          <button onClick={() => setSection("about")} className="hover:underline">About</button>
          <button onClick={() => setSection("projects")} className="hover:underline">Projects</button>
          <button onClick={() => setSection("contact")} className="hover:underline">Contact</button>
        </nav>
      </aside>
      <section className="flex-grow p-12 bg-gray-50">
        <AnimatePresence mode="wait">{renderContent()}</AnimatePresence>
      </section>
    </main>
  );
}