import React from "react";
import { motion } from "framer-motion";
import { FiStar } from "react-icons/fi";

const testimonials = [
  {
    quote:
      "CODE SQUAD delivered on time and exceeded expectations. Our application handles 10x more traffic than before with zero downtime.",
    name: "Ahsan R.",
    role: "Founder, EduTech",
    rating: 5,
    image: "client1.jpg", // Replace with actual image paths
  },
  {
    quote:
      "The UI/UX they created increased our conversion rate by 35%. Their communication was exceptional throughout the entire project.",
    name: "Sara K.",
    role: "Product Manager, RetailCo",
    rating: 5,
    image: "client2.jpg",
  },
  {
    quote:
      "Their technical expertise helped us scale seamlessly to thousands of active users. The most reliable development team we've worked with.",
    name: "Bilal M.",
    role: "CTO, FinStart",
    rating: 5,
    image: "client3.jpg",
  },
];

export default function Testimonials() {
  return (
    <>
      <section
        id="testimonials"
        className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden bg-transparent"
      >
        {/* Background elements */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.15 }}
          viewport={{ once: true }}
          className="absolute top-1/2 left-1/2 w-full max-w-2xl h-64 bg-cs-gold rounded-full blur-[150px] transform -translate-x-1/2 -translate-y-1/2"
        />

        <div className="mx-auto max-w-7xl relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Trusted by <span className="text-cs-gold">Industry Leaders</span>
            </h2>
            <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
              Don't just take our word for it - hear from our satisfied clients
            </p>
          </motion.div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="h-full p-8 rounded-xl backdrop-blur-sm bg-white/5 border border-white/10 hover:border-cs-gold/30 transition-all duration-300 flex flex-col">
                  {/* Rating Stars */}
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FiStar
                        key={i}
                        className="text-cs-gold fill-current mr-1"
                      />
                    ))}
                  </div>

                  {/* Testimonial Quote */}
                  <blockquote className="text-lg italic text-white/90 mb-6 flex-1">
                    "{testimonial.quote}"
                  </blockquote>

                  {/* Client Info */}
                  <div className="flex items-center">
                    {/* Client Image Placeholder - Replace with actual images */}
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cs-gold to-yellow-500 mr-4 overflow-hidden">
                      <div className="w-full h-full flex items-center justify-center text-white font-bold">
                        {testimonial.name.charAt(0)}
                      </div>
                    </div>
                    <div>
                      <p className="font-medium text-white">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-white/60">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
          >
            <div className="p-6 rounded-xl backdrop-blur-sm bg-white/5 border border-white/10">
              <div className="text-4xl font-bold text-cs-gold mb-2">100%</div>
              <div className="text-white/80">Client Satisfaction</div>
            </div>
            <div className="p-6 rounded-xl backdrop-blur-sm bg-white/5 border border-white/10">
              <div className="text-4xl font-bold text-cs-gold mb-2">25+</div>
              <div className="text-white/80">Projects Completed</div>
            </div>
            <div className="p-6 rounded-xl backdrop-blur-sm bg-white/5 border border-white/10">
              <div className="text-4xl font-bold text-cs-gold mb-2">5.0</div>
              <div className="text-white/80">Average Rating</div>
            </div>
            <div className="p-6 rounded-xl backdrop-blur-sm bg-white/5 border border-white/10">
              <div className="text-4xl font-bold text-cs-gold mb-2">10+</div>
              <div className="text-white/80">Happy Clients</div>
            </div>
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
