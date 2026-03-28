'use client'

import { motion } from 'framer-motion'

const projects = [
  {
    title: 'BharatPe App Home Page Re-architecture',
    period: '2023',
    description: 'Re-architected the App Home Page with lightning-fast APIs achieving under 300ms response time (P75: 147ms) at 40K RPM.',
    tags: ['Java', 'Spring Boot', 'Node.js', 'Kafka'],
  },
  {
    title: 'WhatsApp Cost Optimisation',
    period: '2023',
    description: 'Architected cost-efficient messaging solutions that reduced WhatsApp operational expenses by ₹5 Cr/month while maintaining service quality.',
    tags: ['Java', 'Kafka', 'Redis'],
  },
  {
    title: 'Gold Investment Platform',
    period: '2022',
    description: 'Developed and launched a platform enabling gold investments, facilitating ₹6 Cr in investments. Integrated with payment and banking systems.',
    tags: ['Java', 'Spring Boot', 'React', 'MySQL'],
  },
  {
    title: 'UPI AutoPay System',
    period: '2022',
    description: 'Architected the UPI AutoPay system enabling automated recurring payments, integrated with banking systems with high reliability and compliance.',
    tags: ['Java', 'Kafka', 'MySQL', 'eNACH'],
  },
  {
    title: 'Merchant Reactivation Campaigns',
    period: '2022',
    description: 'Data-driven reactivation campaigns that significantly reduced merchant churn and improved retention through targeted personalised outreach.',
    tags: ['Node.js', 'React', 'Kafka', 'MongoDB'],
  },
  {
    title: 'CRM & Logistics Services Platform',
    period: '2022',
    description: 'Architected backend-driven solutions for CRM and Logistics Services, enabling efficient merchant operations at scale.',
    tags: ['Java', 'Spring Boot', 'Kafka', 'MySQL'],
  },
]

export default function Projects() {
  return (
    <section id="projects">
      <div className="w-full px-6 lg:px-12 py-14">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <p className="text-xs tracking-widest uppercase text-[#78716c] mb-8">
            Projects
          </p>

          <div className="space-y-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 6 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.04 }}
              >
                <div className="flex items-baseline justify-between mb-2">
                  <h3 className="text-[15px] font-medium text-[#1c1917]">{project.title}</h3>
                  <span className="text-xs text-[#a8a29e] ml-4 flex-shrink-0">{project.period}</span>
                </div>
                <p className="text-sm text-[#78716c] leading-relaxed mb-3">{project.description}</p>
                <p className="text-xs text-[#a8a29e]">{project.tags.join(' · ')}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <hr />
    </section>
  )
}
