'use client'

import { motion } from 'framer-motion'
import { Mail, Linkedin, Github, Phone, MapPin } from 'lucide-react'

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 bg-space-900/30 backdrop-blur-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-purple-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting
            projects, or just having a conversation about engineering leadership.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold text-white mb-6">
              Contact Information
            </h3>
            <div className="space-y-4">
              <a
                href="mailto:ajaysinghj8@hotmail.com"
                className="flex items-center text-gray-300 hover:text-primary-400 transition-colors"
              >
                <Mail className="h-5 w-5 mr-3 text-primary-400" />
                <span>ajaysinghj8@hotmail.com</span>
              </a>
              <a
                href="tel:+918288818190"
                className="flex items-center text-gray-300 hover:text-primary-400 transition-colors"
              >
                <Phone className="h-5 w-5 mr-3 text-primary-400" />
                <span>+91 8288818190</span>
              </a>
              <div className="flex items-center text-gray-300">
                <MapPin className="h-5 w-5 mr-3 text-primary-400" />
                <span>Gurugram, India</span>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="text-lg font-semibold text-white mb-4">
                Connect with me
              </h4>
              <div className="flex space-x-4">
                <a
                  href="https://linkedin.com/in/ajaysinghj8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary-600 text-white p-3 rounded-lg hover:bg-primary-500 transition-colors shadow-lg shadow-primary-500/50"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="https://github.com/ajaysinghj8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 text-white p-3 rounded-lg hover:bg-gray-700 transition-colors shadow-lg"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-white mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 bg-space-800/50 border border-primary-500/30 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-primary-500 focus:border-primary-400 transition-colors"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-white mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 bg-space-800/50 border border-primary-500/30 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-primary-500 focus:border-primary-400 transition-colors"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-white mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="w-full px-4 py-2 bg-space-800/50 border border-primary-500/30 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-primary-500 focus:border-primary-400 transition-colors"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-500 transition-colors shadow-lg hover:shadow-xl shadow-primary-500/50"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
