import React from "react";
import { motion } from "framer-motion";
import Logo from "../assets/logo2.png";
import { FiGithub, FiTwitter, FiLinkedin, FiMail } from "react-icons/fi";

export default function Footer() {
  const year = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <FiGithub className="text-lg" />,
      url: "https://github.com/codesquad",
      label: "GitHub",
    },
    {
      icon: <FiTwitter className="text-lg" />,
      url: "https://twitter.com/codesquad",
      label: "Twitter",
    },
    {
      icon: <FiLinkedin className="text-lg" />,
      url: "https://linkedin.com/company/codesquad",
      label: "LinkedIn",
    },
    {
      icon: <FiMail className="text-lg" />,
      url: "mailto:hello@codesquad.com",
      label: "Email",
    },
  ];

  return (
    <footer className="relative z-10 border-t border-white/10 bg-gradient-to-b from-black/70 to-black/90 backdrop-blur-md">
      <div className="container mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand Column */}
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-3 mb-4">
              <img
                src={Logo}
                alt="CODE SQUAD"
                className="h-9 w-9 rounded-lg ring-1 ring-white/10"
              />
              <span className="text-xl font-semibold text-white">
                CODE SQUAD
              </span>
            </div>
            <p className="text-white/70 mb-4">
              Building digital excellence through innovative solutions.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  className="text-white/60 hover:text-cs-gold transition-colors"
                  aria-label={link.label}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#home"
                  className="text-white/70 hover:text-cs-gold transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-white/70 hover:text-cs-gold transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-white/70 hover:text-cs-gold transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-white/70 hover:text-cs-gold transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-3 text-white/70">
              <li className="hover:text-cs-gold transition-colors">
                Web Development
              </li>
              <li className="hover:text-cs-gold transition-colors">
                Mobile Apps
              </li>
              <li className="hover:text-cs-gold transition-colors">
                UI/UX Design
              </li>
              <li className="hover:text-cs-gold transition-colors">DevOps</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-3 text-white/70">
              <li className="flex items-start gap-2">
                <FiMail className="mt-0.5 flex-shrink-0" />
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=codesquad077@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-cs-gold transition-colors"
                >
                  codesquad077@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <svg
                  className="w-4 h-4 mt-0.5 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <a
                  href="https://wa.me/923299759046"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cs-gold transition-colors"
                >
                  +92 329 9759046
                </a>
              </li>
              <li className="flex items-start gap-2">
                <svg
                  className="w-4 h-4 mt-0.5 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>Gujranwala, Pakistan</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm">
            © {year} CODE SQUAD. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
