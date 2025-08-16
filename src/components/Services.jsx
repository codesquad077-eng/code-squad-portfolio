import React from "react";
import { motion } from "framer-motion";
import { FiCode, FiSmartphone, FiLayout, FiServer } from "react-icons/fi";

const services = [
  {
    title: "Custom Web Apps",
    desc: "We craft modern single-page applications with cutting-edge technologies like React, Next.js, and Node.js — engineered for security, scalability, and blazing-fast performance.",
    chips: ["React", "Next.js", "Authentication", "REST/GraphQL", "Redux"],
    icon: <FiCode className="text-cs-gold text-3xl" />,
    color: "from-purple-500/10 to-transparent",
  },
  {
    title: "Mobile Apps",
    desc: "Beautiful cross-platform mobile experiences that feel native, with offline capabilities and buttery-smooth animations.",
    chips: ["React Native", "Expo", "Offline-first", "Push Notifications"],
    icon: <FiSmartphone className="text-cs-gold text-3xl" />,
    color: "from-blue-500/10 to-transparent",
  },
  {
    title: "UI/UX Design",
    desc: "Pixel-perfect interfaces with intuitive user flows, backed by research and iterative prototyping for maximum engagement.",
    chips: ["Figma", "Design Systems", "Prototyping", "User Testing"],
    icon: <FiLayout className="text-cs-gold text-3xl" />,
    color: "from-emerald-500/10 to-transparent",
  },
  {
    title: "Backend & DevOps",
    desc: "Robust API architectures with automated deployments, monitoring, and scaling to handle your growth.",
    chips: ["Node/Express", "PostgreSQL", "Docker", "AWS/GCP", "CI/CD"],
    icon: <FiServer className="text-cs-gold text-3xl" />,
    color: "from-amber-500/10 to-transparent",
  },
];

export default function Services() {
  return (
    <>
      <section
        id="services"
        className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden"
      >
        {/* Decorative background elements */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.1 }}
          viewport={{ once: true }}
          className="absolute -top-20 -left-20 w-64 h-64 bg-cs-gold rounded-full blur-[100px]"
        />

        <div className="mx-auto max-w-7xl">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="text-cs-gold">Specialized</span> Services
            </h2>
            <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
              End-to-end digital solutions tailored to your business needs
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="section-card p-8 rounded-xl backdrop-blur-sm bg-white/5 border border-white/10"
                whileHover={{ y: -5 }}
              >
                <div className="flex items-start gap-6">
                  <div className="p-3 bg-cs-gold/10 rounded-lg flex-shrink-0">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-3">
                      {service.title}
                    </h3>
                    <p className="text-white/90 mb-4">{service.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {service.chips.map((chip) => (
                        <span
                          key={chip}
                          className="px-3 py-1 text-xs font-medium rounded-full bg-white/5 text-white/80 border border-white/10"
                        >
                          {chip}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-20 text-center"
          >
            <p className="text-lg md:text-xl text-white/80 mb-8">
              Have a project in mind? Let's discuss how we can help.
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex px-8 py-3 bg-gradient-to-r from-cs-gold to-yellow-500 text-black font-semibold rounded-lg shadow-lg hover:shadow-cs-gold/50 transition-all duration-300"
            >
              Get a Free Consultation
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
