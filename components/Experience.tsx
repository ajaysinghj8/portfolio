'use client'

import { motion } from 'framer-motion'

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
    period: '2022 – Present',
    description: [
      'Architected multiple high-reliability, scalable, and cost-efficient systems, including backend-driven solutions for the BharatPe App, CRM, Logistics Services, eNACH, and Lending Risk platforms',
      'Led and managed large cross-functional teams of 15+ members, driving project planning and execution with clear objectives aligned with organizational goals',
      'Achieved major business impact: reduced WhatsApp cost by 5 Cr/month, facilitated 6 Cr in gold investments, reduced merchant churn via reactivation campaigns, and enabled UPI AutoPay',
      'Re-architected the App Home Page using lightning-fast APIs (under 300 ms; P75: 147 ms; 40K RPM)',
    ],
  },
  {
    title: 'Principal Engineer',
    company: 'BharatPe',
    location: 'New Delhi, India',
    period: '2020 – 2022',
    description: [
      'Actively contributed to company-wide knowledge sharing by regularly presenting lessons learned from completed projects',
      'Reviewed designs created by other engineers, offering constructive feedback for improvement',
      'Designed innovative engineering solutions for complex technical challenges',
    ],
  },
  {
    title: 'Solution Architect',
    company: 'Ralali.com',
    location: 'Jakarta, Indonesia',
    period: '2019 – 2020',
    description: [
      'Maintained technical project ownership, including architecture, estimation, product planning and user requirement creation',
      'Communicated technical design details in conversation, documentation and presentations',
    ],
  },
  {
    title: 'Tech Lead',
    company: 'Srijan Technologies',
    location: 'New Delhi, India',
    period: '2014 – 2019',
    description: [
      'Led software engineering teams in various projects, upskilling peers through mentoring and training',
      'Designed, wrote, and maintained high-quality software, adapting to new hardware and emerging technologies',
      'Optimized application performance through profiling tools, refactoring code, and implementing caching strategies',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience">
      <div className="w-full px-6 lg:px-12 py-14">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <p className="text-xs tracking-widest uppercase text-[#44403c] mb-8">
            Experience
          </p>

          <div className="space-y-10">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 6 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <div className="flex items-baseline justify-between mb-1">
                  <h3 className="text-[15px] font-medium text-[#1c1917]">{exp.company}</h3>
                  <span className="text-xs text-[#6b6460] tabular-nums">{exp.period}</span>
                </div>
                <p className="text-sm text-[#44403c] mb-3">{exp.title} · {exp.location}</p>
                <ul className="space-y-1.5">
                  {exp.description.map((item, idx) => (
                    <li key={idx} className="text-sm text-[#44403c] leading-relaxed pl-3 border-l border-[#d9d2c8]">
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <hr />
    </section>
  )
}
