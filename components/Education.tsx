'use client'

import { motion } from 'framer-motion'
import { GraduationCap, Award } from 'lucide-react'

export default function Education() {
  return (
    <section
      id="education"
      className="py-20 bg-space-900/50 backdrop-blur-sm"
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
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-purple-500 mx-auto"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-space-800/50 backdrop-blur-sm border border-primary-500/20 rounded-lg shadow-lg p-8 hover:shadow-xl hover:border-primary-400/40 transition-all">
            <div className="flex items-start">
              <div className="bg-gradient-to-br from-primary-600 to-purple-600 p-3 rounded-lg mr-6 shadow-lg">
                <GraduationCap className="h-8 w-8 text-white" />
              </div>
              <div className="flex-grow">
                <h3 className="text-2xl font-semibold text-white mb-2">
                  Master of Computer Applications
                </h3>
                <p className="text-xl text-primary-400 font-medium mb-2">
                  Lovely Professional University
                </p>
                <p className="text-gray-300 mb-4">
                  Jalandhar, Punjab, India | 2011 – 2014
                </p>
                <div className="flex items-center text-primary-300">
                  <Award className="h-5 w-5 mr-2 text-primary-400" />
                  <span className="font-semibold">
                    Graduated with First Division (9 CGPA) with Distinction
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
