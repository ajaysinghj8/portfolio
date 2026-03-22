'use client'

import { motion } from 'framer-motion'
import { User, Target, Award } from 'lucide-react'

export default function About() {
  return (
    <section
      id="about"
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
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-purple-500 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold text-white mb-4">
              Professional Summary
            </h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Seasoned Engineering Manager with 11+ years of experience leading large teams, 
              architecting systems, and enabling strong execution rhythms. Recognized at 
              BharatPe for driving innovation, simplifying processes, and consistently 
              delivering high-quality products at scale.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Strong communicator with a commitment to coaching teams, improving engineering 
              practices, and aligning technology with organizational goals. Passionate about 
              building scalable, cost-efficient systems and fostering a culture of continuous 
              improvement, ownership, and engineering excellence.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 gap-6"
          >
            <div className="bg-space-800/50 backdrop-blur-sm border border-primary-500/20 p-6 rounded-lg hover:border-primary-400/40 transition-colors">
              <User className="h-8 w-8 text-primary-400 mb-3" />
              <h4 className="text-xl font-semibold text-white mb-2">
                Leadership Philosophy
              </h4>
              <p className="text-gray-300">
                Focus on coaching teams, improving engineering practices, and ensuring 
                strong alignment with organizational goals. Foster ownership, continuous 
                improvement, and engineering excellence through mentorship and clear 
                communication.
              </p>
            </div>

            <div className="bg-space-800/50 backdrop-blur-sm border border-primary-500/20 p-6 rounded-lg hover:border-primary-400/40 transition-colors">
              <Target className="h-8 w-8 text-primary-400 mb-3" />
              <h4 className="text-xl font-semibold text-white mb-2">
                Core Values
              </h4>
              <p className="text-gray-300">
                Innovation, Process Simplification, Quality Delivery, Team Building, 
                Technical Excellence, and Strong Execution Discipline
              </p>
            </div>

            <div className="bg-space-800/50 backdrop-blur-sm border border-primary-500/20 p-6 rounded-lg hover:border-primary-400/40 transition-colors">
              <Award className="h-8 w-8 text-primary-400 mb-3" />
              <h4 className="text-xl font-semibold text-white mb-2">
                Key Achievements
              </h4>
              <p className="text-gray-300">
                Multiple awards including Technical Guru, A-Team Award, and Customer Success 
                IVR Chatbot Award. Achieved major business impact: reduced WhatsApp cost by 
                5 Cr/month, facilitated 6 Cr in gold investments, and enabled UPI AutoPay.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
