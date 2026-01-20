'use client'

import { motion } from 'framer-motion'

interface SkillCategory {
  category: string
  skills: string[]
}

const skillCategories: SkillCategory[] = [
  {
    category: 'Leadership & Management',
    skills: [
      'Team Leadership',
      'Scrum',
      'Project Management',
      'Team Building',
      'Mentoring',
      'Hiring',
      'Ownership',
      'Cross-functional Collaboration',
    ],
  },
  {
    category: 'Backend Technologies',
    skills: [
      'Java',
      'Spring Boot',
      'Node.js',
      'Python',
      'Rust',
      'Kafka',
      'Multi-threading',
      'REST API',
      'GraphQL',
      'Apollo',
    ],
  },
  {
    category: 'Frontend Technologies',
    skills: [
      'React',
      'Angular',
      'Angular.js',
      'Next.js',
      'TypeScript',
      'Material UI',
      'jQuery',
      'Svelte',
      'SSR',
      'SPA',
      'PWA',
    ],
  },
  {
    category: 'Storage & Databases',
    skills: [
      'MongoDB',
      'MySQL',
      'Elastic Search',
      'Redis',
      'S3',
    ],
  },
  {
    category: 'Cloud & DevOps',
    skills: [
      'AWS',
      'Kubernetes',
      'Docker',
      'Devtron',
      'Git',
      'CI/CD',
    ],
  },
  {
    category: 'Tools & Others',
    skills: [
      'VS Code',
      'IntelliJ',
      'Nginx',
      'Webpack',
      'Babel',
      'RxJS',
      'D3.js',
      'SEO',
      'Google Analytics',
    ],
  },
]

export default function Skills() {
  return (
    <section
      id="skills"
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
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-purple-500 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-space-800/50 backdrop-blur-sm border border-primary-500/20 rounded-lg p-6 shadow-lg hover:shadow-xl hover:border-primary-400/40 transition-all"
            >
              <h3 className="text-xl font-semibold text-white mb-4">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="bg-primary-600/30 text-primary-300 border border-primary-500/30 px-3 py-1 rounded-full text-sm font-medium hover:bg-primary-600/50 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
