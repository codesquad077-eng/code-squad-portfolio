import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../assets/logo.png";

export default function Navbar() {
  const [active, setActive] = useState("about");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const links = [
    { id: "about", label: "About" },
    { id: "services", label: "Services" }, //noascascascas
    { id: "projects", label: "Projects" },
    { id: "testimonials", label: "Testimonials" },
    { id: "contact", label: "Contact" },
  ];

  const scrollTo = (id) => {
    setActive(id);
    setMobileMenuOpen(false);

    // Add slight delay to ensure menu closes before scrolling
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        const yOffset = -80; // Adjust for fixed header height
        const y =
          element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }, 100);
  };

  useEffect(() => {
    const handleScroll = () => {
      for (let link of links) {
        const section = document.getElementById(link.id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActive(link.id);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [links]);

  // Close mobile menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed left-0 right-0 top-0 z-30 bg-black/80 backdrop-blur-md"
    >
      <div className="container-pad mx-auto flex items-center justify-between py-4 px-4">
        {/* Logo */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3"
        >
          <img
            src={Logo}
            alt="CODE SQUAD"
            className="w-36 md:w-48 h-12 md:h-16 rounded-lg ring-1 ring-white/10"
          />
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-7">
          {links.map((l) => (
            <div key={l.id} className="group relative">
              <button
                onClick={() => scrollTo(l.id)}
                className={`text-sm md:text-base transition-all duration-300 ${
                  active === l.id
                    ? "text-cs-gold font-medium drop-shadow-[0_0_8px_rgba(212,175,55,0.8)]"
                    : "text-white/80 hover:text-cs-gold"
                }`}
              >
                {l.label}
              </button>
              {active !== l.id && (
                <span className="absolute -bottom-1 left-0 h-0.5 bg-cs-gold w-0 opacity-0 transition-all duration-300 group-hover:w-full group-hover:opacity-100" />
              )}
            </div>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-white focus:outline-none"
          aria-label="Toggle menu"
        >
          <div className="w-6 flex flex-col gap-1.5">
            <span
              className={`h-0.5 bg-white transition-all ${
                mobileMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`h-0.5 bg-white transition-all ${
                mobileMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            ></span>
            <span
              className={`h-0.5 bg-white transition-all ${
                mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </div>
        </button>

        {/* Desktop Get a Quote Button */}
        <motion.a
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            scrollTo("contact");
          }}
          animate={{
            x: [0, -20, 20, -20, 20, 0], // Bigger movement
          }}
          transition={{
            duration: 1.5, // Faster shake cycle
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
          className="hidden md:inline-block ml-auto sm:ml-0 mr-5 px-5 py-2 bg-gradient-to-r from-cs-gold to-yellow-500 text-black font-semibold rounded-lg shadow-lg hover:shadow-cs-gold/50 transition-transform duration-300"
        >
          Get a Quote
        </motion.a>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md"
          >
            <div className="container-pad px-4 pb-4 flex flex-col gap-2">
              {links.map((l) => (
                <button
                  key={l.id}
                  onClick={() => scrollTo(l.id)}
                  className={`text-left py-3 px-4 rounded-lg transition-all ${
                    active === l.id
                      ? "bg-cs-gold/20 text-cs-gold font-medium"
                      : "text-white hover:bg-white/10"
                  }`}
                >
                  {l.label}
                </button>
              ))}
              {/* Get a Quote (right corner) */}
              <motion.a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo("contact");
                }}
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: [1, 1.05, 1], opacity: 1 }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className="ml-auto sm:ml-0 mr-5 px-5 py-2 bg-gradient-to-r from-cs-gold to-yellow-500 text-black font-semibold rounded-lg shadow-lg hover:shadow-cs-gold/50 hover:scale-105 transition-transform duration-300"
              >
                Get a Quote
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Divider line */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="pointer-events-none h-px w-full bg-gradient-to-r from-transparent via-cs-gold/50 to-transparent"
      />
    </motion.header>
  );
}
