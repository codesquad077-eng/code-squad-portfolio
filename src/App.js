import React from "react";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ThreeBackground from "./components/ThreeBackground";

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-cs-dark">
      <ThreeBackground />
      <Navbar />
      <main>
        <AnimatePresence mode="wait">
          <Hero />
          <About />
          <Services />
          <Projects />
          <Testimonials />
          <Contact />
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}
