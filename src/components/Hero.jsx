import React from "react";
import { motion } from "framer-motion";
import Logo2 from "../assets/logo2.png";

export default function Hero() {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <>
      <section
        className="relative flex min-h-screen items-center justify-center pt-24 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden"
        id="home"
        style={{ paddingTop: "6rem" }}
      >
        {/* Background gradients */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-black/90 to-cs-gold/5" />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "mirror" }}
          className="absolute top-0 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-cs-gold/30 blur-[100px] sm:blur-[150px] rounded-full"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "mirror",
            delay: 1,
          }}
          className="absolute bottom-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-yellow-400/20 blur-[100px] sm:blur-[150px] rounded-full"
        />

        {/* Main Content */}
        <div className="relative z-10 mx-auto w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 items-center gap-10">
          {/* Left content: Text + buttons */}
          <div className="order-1 md:order-1">
            <motion.h1
              variants={textVariants}
              initial="hidden"
              animate="visible"
              custom={1}
              className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl lg:text-6xl"
            >
              <span className="bg-gradient-to-r from-cs-gold to-yellow-300 bg-clip-text text-transparent">
                Digital Excellence
              </span>{" "}
              Engineered for <br className="hidden md:block" /> Tomorrow's
              Demands
            </motion.h1>

            <motion.p
              variants={textVariants}
              initial="hidden"
              animate="visible"
              custom={2}
              className="mt-4 sm:mt-6 max-w-xl text-base sm:text-lg md:text-xl text-white/90"
            >
              At <span className="font-semibold text-cs-gold">CODE SQUAD</span>,
              we architect{" "}
              <span className="italic">bulletproof digital experiences</span>{" "}
              that scale effortlessly. Specializing in high-performance React
              ecosystems, cloud-native Node.js solutions, and pixel-perfect
              interfaces that convert.
            </motion.p>

            {/* Buttons */}
            <motion.div
              variants={textVariants}
              initial="hidden"
              animate="visible"
              custom={3}
              className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3"
            >
              <motion.a
                href="#projects"
                transition={{ type: "spring", stiffness: 300 }}
                className="relative px-5 py-2 sm:px-6 sm:py-3 rounded-lg overflow-hidden 
              ring-1 ring-cs-gold/50 backdrop-blur-sm bg-white/10 
              hover:bg-cs-gold/20 hover:shadow-[0_0_20px_rgba(212,175,55,0.7)]
              text-white transition-all duration-300 text-center"
              >
                View Projects
              </motion.a>

              <motion.a
                href="#contact"
                transition={{ type: "spring", stiffness: 300 }}
                className="relative px-5 py-2 sm:px-6 sm:py-3 rounded-lg overflow-hidden 
              ring-1 ring-cs-gold/50 backdrop-blur-sm bg-white/10 
              hover:bg-white hover:text-black hover:shadow-[0_0_20px_rgba(212,175,55,0.7)]
              text-white transition-all duration-300 text-center"
              >
                Contact Us
              </motion.a>
            </motion.div>
          </div>

          {/* Right Logo Card - now always visible */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="order-2 md:order-2 flex justify-center"
          >
            <motion.div
              animate={{ y: [0, -10, 0], rotate: [0, 2, -2, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="section-card p-4 sm:p-6 md:p-8 text-center"
            >
              <img
                src={Logo2}
                alt="CODE SQUAD logo"
                className="mx-auto h-40 w-40 sm:h-56 sm:w-56 rounded-2xl border border-white/10 p-3 shadow-lg shadow-cs-gold/20"
              />
              <p className="mt-4 sm:mt-6 text-sm sm:text-base">
                "Where Code Meets Excellence" — we turn ideas into
                high-performing products.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
      {/* Divider line */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="pointer-events-none h-px w-full bg-gradient-to-r from-transparent via-cs-gold/50 to-transparent"
      />
    </>
  );
}
