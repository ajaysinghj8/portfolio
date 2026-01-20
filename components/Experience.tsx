'use client'

import { motion } from 'framer-motion'
import { Briefcase, Calendar, MapPin } from 'lucide-react'

interface ExperienceItem {
  title: string
  company: string
  location: string
  period: string
  description: string[]
}

const experiences: ExperienceItem[] = [
  {
    title: 'Engineering Manager',
    company: 'BharatPe',
    location: 'Gurugram, India',
    period: 'April 2022 – Present',
    description: [
      'Architected multiple high-reliability, scalable, and cost-efficient systems, including backend-driven solutions for the BharatPe App, CRM, Logistics Services, eNACH, and Lending Risk platforms',
      'Led and managed large cross-functional teams of 15+ members, driving project planning and execution with clear objectives aligned with organizational goals',
      'Achieved major business impact: reduced WhatsApp cost by 5 Cr/month, facilitated 6 Cr in gold investments, reduced merchant churn via reactivation campaigns, and enabled UPI AutoPay',
      'Collaborated with teams to re-architect the App Home Page using lightning-fast APIs (under 300 ms; P75: 147 ms; 40K RPM)',
      'Fostered a culture of continuous improvement, ownership, and engineering excellence through mentoring and technical design reviews',
      'Recognized with multiple awards including Technical Guru, A-Team Award, and Customer Success IVR Chatbot Award',
    ],
  },
  {
    title: 'Principal Engineer',
    company: 'BharatPe',
    location: 'New Delhi, India',
    period: 'June 2020 – March 2022',
    description: [
      'Actively contributed to company-wide knowledge sharing by regularly presenting lessons learned from completed projects',
      'Applied research principles and techniques to design, develop and test electronic systems and equipment',
      'Reviewed designs created by other engineers, offering constructive feedback for improvement where necessary',
      'Collaborated with cross-functional teams to ensure successful project completion',
      'Designed innovative engineering solutions for complex technical challenges',
    ],
  },
  {
    title: 'Solution Architect',
    company: 'Ralali.com',
    location: 'Jakarta, Indonesia',
    period: 'November 2019 – April 2020',
    description: [
      'Maintained technical project ownership, including architecture, estimation, product planning and user requirement creation',
      'Communicated technical design details in conversation, documentation and presentations',
    ],
  },
  {
    title: 'Tech Lead',
    company: 'Srijan Technologies',
    location: 'New Delhi, India',
    period: 'August 2014 – October 2019',
    description: [
      'Led software engineering teams in various projects, upskilling peers through mentoring and training',
      'Designed, wrote, and maintained high-quality software, adapting to new hardware and emerging technologies',
      'Produced clean, error-free code to meet aggressive timelines',
      'Optimized application performance through profiling tools, refactoring code, and implementing caching strategies',
    ],
  },
]

export default function Experience() {
  return (
    <section
      id="experience"
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
            Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-purple-500 mx-auto"></div>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-space-800/50 backdrop-blur-sm border border-primary-500/20 rounded-lg shadow-lg p-6 md:p-8 hover:shadow-xl hover:border-primary-400/40 transition-all"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <div className="flex items-center mb-2">
                    <Briefcase className="h-5 w-5 text-primary-400 mr-2" />
                    <h3 className="text-2xl font-semibold text-white">
                      {exp.title}
                    </h3>
                  </div>
                  <p className="text-xl text-primary-400 font-medium mb-2">
                    {exp.company}
                  </p>
                  <div className="flex flex-wrap items-center gap-4 text-gray-600">
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1 text-primary-400" />
                      <span className="text-gray-300">{exp.location}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1 text-primary-400" />
                      <span className="text-gray-300">{exp.period}</span>
                    </div>
                  </div>
                </div>
              </div>
              <ul className="list-disc list-inside space-y-2 text-gray-300 mt-4">
                {exp.description.map((item, idx) => (
                  <li key={idx} className="leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
