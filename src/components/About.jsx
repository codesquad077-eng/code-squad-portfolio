import React from "react";
import { motion } from "framer-motion";
import { FiUsers, FiCode, FiClock, FiCheckCircle } from "react-icons/fi";

export default function About() {
  const stats = [
    {
      kpi: "25+",
      label: "Projects Delivered",
      icon: <FiCheckCircle className="text-cs-gold text-2xl" />,
    },
    {
      kpi: "10+",
      label: "Happy Clients",
      icon: <FiUsers className="text-cs-gold text-2xl" />,
    },
    {
      kpi: "5+",
      label: "Years Combined Exp.",
      icon: <FiClock className="text-cs-gold text-2xl" />,
    },
  ];

  const features = [
    {
      title: "Who we are",
      description:
        "A elite squad of full-stack engineers and UX specialists crafting digital excellence from Pakistan to the world.",
      icon: <FiUsers className="text-cs-gold text-2xl" />,
    },
    {
      title: "What we do",
      description:
        "We build bulletproof React applications, scalable Node.js backends, and pixel-perfect interfaces that drive results.",
      icon: <FiCode className="text-cs-gold text-2xl" />,
    },
    {
      title: "How we work",
      description:
        "Agile processes with military precision. Weekly sprints, daily standups, and obsessive quality control.",
      icon: <FiClock className="text-cs-gold text-2xl" />,
    },
  ];

  return (
    <>
      <section
        id="about"
        className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden"
        style={{ marginTop: "4rem" }}
      >
        {/* Background elements */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="absolute -bottom-20 -right-20 w-64 h-64 bg-cs-gold rounded-full blur-[100px]"
        />

        <div className="mx-auto max-w-7xl">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Crafting <span className="text-cs-gold">Digital Excellence</span>
            </h2>
            <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
              We're not just developers - we're digital architects building the
              foundations for your success.
            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 mb-20">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="section-card p-8 rounded-xl backdrop-blur-sm bg-white/5 border border-white/10 hover:border-cs-gold/30 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-cs-gold/10 rounded-lg mr-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                </div>
                <p className="text-white/90 pl-16">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h3 className="text-2xl md:text-3xl font-semibold mb-12">
              Our <span className="text-cs-gold">Impact</span> in Numbers
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="section-card p-8 rounded-xl backdrop-blur-sm bg-white/5 border border-white/10"
                >
                  <div className="flex justify-center mb-4">{stat.icon}</div>
                  <div className="text-4xl font-bold text-cs-gold mb-2">
                    {stat.kpi}
                  </div>
                  <div className="text-white/80 uppercase text-sm tracking-wider">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-20 text-center"
          >
            <p className="text-lg md:text-xl text-white/80 mb-8">
              Ready to transform your ideas into exceptional digital
              experiences?
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex px-8 py-3 bg-gradient-to-r from-cs-gold to-yellow-500 text-black font-semibold rounded-lg shadow-lg hover:shadow-cs-gold/50 transition-all duration-300"
            >
              Let's Build Something Amazing
            </motion.a>
          </motion.div>
        </div>
      </section>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="pointer-events-none h-px w-full bg-gradient-to-r from-transparent via-cs-gold/50 to-transparent"
      />
    </>
  );
}
