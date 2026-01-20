'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

interface Project {
  title: string
  description: string
  technologies: string[]
  link?: string
  github?: string
  highlights: string[]
}

const projects: Project[] = [
  {
    title: 'BharatPe App Home Page Re-architecture',
    description:
      'Led the re-architecture of the App Home Page with lightning-fast APIs, achieving exceptional performance metrics and handling high traffic volumes.',
    technologies: ['Java', 'Spring Boot', 'Node.js', 'React', 'Kafka'],
    highlights: [
      'Achieved API response times under 300ms (P75: 147ms)',
      'Handled 40K RPM (Requests Per Minute)',
      'Significantly improved user experience and app performance',
    ],
  },
  {
    title: 'Cost Optimization - WhatsApp Integration',
    description:
      'Architected and implemented cost-efficient solutions that significantly reduced operational expenses while maintaining service quality.',
    technologies: ['Java', 'Spring Boot', 'Kafka', 'Redis'],
    highlights: [
      'Reduced WhatsApp cost by 5 Cr/month',
      'Maintained high reliability and scalability',
      'Improved cost efficiency without compromising functionality',
    ],
  },
  {
    title: 'Gold Investment Platform',
    description:
      'Developed and launched a platform enabling gold investments, driving significant business value and user engagement.',
    technologies: ['Java', 'Spring Boot', 'React', 'MySQL', 'Redis'],
    highlights: [
      'Facilitated 6 Cr in gold investments',
      'Built scalable and secure investment platform',
      'Integrated with multiple payment and banking systems',
    ],
  },
  {
    title: 'UPI AutoPay System',
    description:
      'Architected and implemented the UPI AutoPay system, enabling automated recurring payments and improving user convenience.',
    technologies: ['Java', 'Spring Boot', 'Kafka', 'MySQL', 'eNACH'],
    highlights: [
      'Enabled seamless UPI AutoPay functionality',
      'Integrated with banking and payment systems',
      'Ensured high reliability and compliance',
    ],
  },
  {
    title: 'Merchant Reactivation Campaigns',
    description:
      'Developed and executed reactivation campaigns that significantly reduced merchant churn and improved retention.',
    technologies: ['Node.js', 'React', 'Kafka', 'MongoDB', 'Redis'],
    highlights: [
      'Reduced merchant churn through targeted campaigns',
      'Improved customer engagement and retention',
      'Data-driven approach to reactivation',
    ],
  },
  {
    title: 'CRM & Logistics Services Platform',
    description:
      'Architected backend-driven solutions for CRM and Logistics Services, enabling efficient operations and scalability.',
    technologies: ['Java', 'Spring Boot', 'Kafka', 'MySQL', 'MongoDB'],
    highlights: [
      'Built scalable CRM platform for merchant management',
      'Developed logistics services integration',
      'Ensured high reliability and performance',
    ],
  },
]

export default function Projects() {
  return (
    <section
      id="projects"
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
            Key Projects & Initiatives
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-purple-500 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-space-800/50 backdrop-blur-sm border border-primary-500/20 rounded-lg shadow-lg p-6 hover:shadow-xl hover:border-primary-400/40 transition-all flex flex-col"
            >
              <h3 className="text-xl font-semibold text-white mb-3">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-4 flex-grow">
                {project.description}
              </p>
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-primary-300 mb-2">
                  Key Highlights:
                </h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-300">
                  {project.highlights.map((highlight, idx) => (
                    <li key={idx}>{highlight}</li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-primary-600/30 text-primary-300 border border-primary-500/30 px-2 py-1 rounded text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex space-x-4 mt-auto">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-primary-400 hover:text-primary-300 text-sm font-medium"
                  >
                    <ExternalLink className="h-4 w-4 mr-1" />
                    View Project
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-300 hover:text-gray-200 text-sm font-medium"
                  >
                    <Github className="h-4 w-4 mr-1" />
                    GitHub
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
