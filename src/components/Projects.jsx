import React from "react";
import { motion } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";

const projects = [
  {
    name: "School Management System",
    desc: "Comprehensive platform connecting administrators, teachers, parents, and students with real-time data synchronization and mobile access.",
    tags: ["React", "Node.js", "PostgreSQL", "React Native", "AWS"],
    link: "#",
    github: "#",
    image: "school-management.jpg", // You would add actual images
  },
  {
    name: "E-Commerce Platform",
    desc: "High-performance online store with headless architecture, achieving 2.5x faster load times than industry average.",
    tags: ["Next.js", "Stripe", "Contentful", "Tailwind CSS"],
    link: "#",
    github: "#",
    image: "ecommerce.jpg",
  },
  {
    name: "Data Analytics Dashboard",
    desc: "Enterprise-grade analytics solution with customizable dashboards, role-based access, and automated reporting.",
    tags: ["React", "D3.js", "Express", "MongoDB"],
    link: "#",
    github: "#",
    image: "analytics.jpg",
  },
];

export default function Projects() {
  return (
    <>
      <section
        id="projects"
        className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden"
      >
        {/* Background elements */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.1 }}
          viewport={{ once: true }}
          className="absolute -bottom-20 -right-20 w-64 h-64 bg-cs-gold rounded-full blur-[100px]"
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
              Our <span className="text-cs-gold">Portfolio</span>
            </h2>
            <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
              Real-world solutions delivering measurable business impact
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="h-full flex flex-col">
                  {/* Project Image Placeholder - Replace with actual images */}
                  <div className="relative overflow-hidden rounded-t-xl h-48 backdrop-blur-sm bg-white/5 border border-white/10 hover:border-cs-gold/30 transition-all duration-300">
                    <div className="absolute inset-0 bg-black/30 group-hover:opacity-0 transition-opacity duration-300" />
                    <div className="absolute inset-0 flex items-center justify-center text-white/20 text-4xl">
                      Project Image
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="flex-1 p-6 border border-t-0 border-white/10 rounded-b-xl group-hover:border-cs-gold/30 transition-all duration-300 bg-gradient-to-br from-white/5 to-white/2">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-semibold">{project.name}</h3>
                      <div className="flex space-x-2">
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noreferrer"
                            className="p-2 text-white/60 hover:text-cs-gold transition-colors"
                            aria-label="GitHub repository"
                          >
                            <FiGithub className="text-lg" />
                          </a>
                        )}
                        {project.link && (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noreferrer"
                            className="p-2 text-white/60 hover:text-cs-gold transition-colors"
                            aria-label="Live project"
                          >
                            <FiExternalLink className="text-lg" />
                          </a>
                        )}
                      </div>
                    </div>

                    <p className="text-white/80 mb-5">{project.desc}</p>

                    <div className="mt-auto">
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 text-xs font-medium rounded-full bg-white/5 text-white/80 border border-white/10"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
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
              Want to see what we can build for you?
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-cs-gold to-yellow-500 text-black font-semibold rounded-lg shadow-lg hover:shadow-cs-gold/50 transition-all duration-300"
            >
              Start Your Project
              <svg
                className="ml-2 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
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
