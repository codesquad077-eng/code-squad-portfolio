import React from "react";
import { motion } from "framer-motion";
import { FiSend, FiMessageSquare, FiMail, FiUser } from "react-icons/fi";
import { useForm, ValidationError } from "@formspree/react";

export default function Contact() {
  const [state, handleSubmit] = useForm("mdkdjred");

  return (
    <section
      id="contact"
      className="relative py-10 md:py-16 px-4 sm:px-3 lg:px-4 overflow-hidden bg-transparent"
    >
      {/* Background elements */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.15 }}
        viewport={{ once: true }}
        className="absolute top-1/3 left-1/2 w-full max-w-2xl h-64 bg-cs-gold rounded-full blur-[150px] transform -translate-x-1/2 -translate-y-1/2"
      />

      <div className="mx-auto max-w-4xl relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's <span className="text-cs-gold">Build Together</span>
          </h2>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
            Get in touch to discuss your project and receive a free consultation
          </p>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 rounded-xl backdrop-blur-sm bg-white/5 border border-white/10"
        >
          {state.succeeded ? (
            <div className="md:col-span-2 p-6 text-center">
              <h3 className="text-2xl font-bold text-cs-gold mb-2">
                Thank You!
              </h3>
              <p className="text-white/80">
                We've received your message and will get back to you within 24
                hours.
              </p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {/* Name Field */}
                <div className="relative">
                  <label className="block text-sm font-medium text-white/70 mb-2">
                    Name
                  </label>
                  <div className="relative">
                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50">
                      <FiUser />
                    </div>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full pl-10 pr-4 py-3 rounded-lg border border-white/10 bg-white/5 text-white placeholder-white/30 focus:border-cs-gold/50 focus:ring-1 focus:ring-cs-gold/20 outline-none transition-all"
                      placeholder="Your name"
                    />
                  </div>
                  <ValidationError
                    prefix="Name"
                    field="name"
                    errors={state.errors}
                    className="text-red-400 text-sm mt-1"
                  />
                </div>

                {/* Email Field */}
                <div className="relative">
                  <label className="block text-sm font-medium text-white/70 mb-2">
                    Email
                  </label>
                  <div className="relative">
                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50">
                      <FiMail />
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full pl-10 pr-4 py-3 rounded-lg border border-white/10 bg-white/5 text-white placeholder-white/30 focus:border-cs-gold/50 focus:ring-1 focus:ring-cs-gold/20 outline-none transition-all"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                    className="text-red-400 text-sm mt-1"
                  />
                </div>

                {/* Message Field */}
                <div className="relative md:col-span-2">
                  <label className="block text-sm font-medium text-white/70 mb-2">
                    Message
                  </label>
                  <div className="relative">
                    <div className="absolute left-3 top-4 text-white/50">
                      <FiMessageSquare />
                    </div>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      required
                      className="w-full pl-10 pr-4 py-3 rounded-lg border border-white/10 bg-white/5 text-white placeholder-white/30 focus:border-cs-gold/50 focus:ring-1 focus:ring-cs-gold/20 outline-none transition-all"
                      placeholder="Tell us about your project..."
                    />
                  </div>
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                    className="text-red-400 text-sm mt-1"
                  />
                </div>

                {/* Form Footer */}
                <div className="md:col-span-2 flex flex-col sm:flex-row items-center justify-between gap-4 mt-4">
                  <div className="text-sm text-white/60 flex items-center">
                    <span className="hidden sm:inline mr-2">👋</span>
                    Prefer WhatsApp?{" "}
                    <a
                      href="https://wa.me/923299759046"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cs-gold ml-1 hover:underline cursor-pointer"
                    >
                      +92 329 9759046
                    </a>
                    {"  "}
                    (9am–6pm PKT)
                  </div>
                  <motion.button
                    type="submit"
                    disabled={state.submitting}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center px-6 py-3 bg-gradient-to-r from-cs-gold to-yellow-500 text-black font-semibold rounded-lg shadow-lg hover:shadow-cs-gold/50 transition-all duration-300"
                  >
                    {state.submitting ? "Sending..." : "Send Message"}
                    <FiSend className="ml-2" />
                  </motion.button>
                </div>
              </div>
            </>
          )}
        </motion.form>

        {/* Additional Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center"
        >
          <div className="p-6 rounded-xl backdrop-blur-sm bg-white/5 border border-white/10">
            <div className="text-2xl text-cs-gold mb-2">Email</div>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=codesquad077@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-cs-gold transition-colors"
            >
              codesquad077@gmail.com
            </a>
          </div>
          <div className="p-6 rounded-xl backdrop-blur-sm bg-white/5 border border-white/10">
            <div className="text-2xl text-cs-gold mb-2">Office</div>
            <div className="text-white/80">Gujranwala, Pakistan</div>
          </div>
          <div className="p-6 rounded-xl backdrop-blur-sm bg-white/5 border border-white/10">
            <div className="text-2xl text-cs-gold mb-2">Hours</div>
            <div className="text-white/80">Mon-Fri: 9am–6pm PKT</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
