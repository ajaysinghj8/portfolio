'use client'

import { motion } from 'framer-motion'

const skillCategories = [
  {
    category: 'Leadership',
    skills: ['Team Leadership', 'Scrum', 'Project Management', 'Team Building', 'Mentoring', 'Hiring', 'Ownership'],
  },
  {
    category: 'Backend',
    skills: ['Java', 'Spring Boot', 'Node.js', 'Python', 'Rust', 'Kafka', 'REST API', 'GraphQL'],
  },
  {
    category: 'Frontend',
    skills: ['React', 'Angular', 'Next.js', 'TypeScript', 'Svelte', 'SSR', 'PWA'],
  },
  {
    category: 'Data & Storage',
    skills: ['MongoDB', 'MySQL', 'Elastic Search', 'Redis', 'S3'],
  },
  {
    category: 'Cloud & DevOps',
    skills: ['AWS', 'Kubernetes', 'Docker', 'Devtron', 'Git', 'CI/CD'],
  },
  {
    category: 'Tools',
    skills: ['Nginx', 'Webpack', 'RxJS', 'D3.js', 'SEO', 'Google Analytics'],
  },
]

export default function Skills() {
  return (
    <section id="skills">
      <div className="w-full px-6 lg:px-12 py-14">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <p className="text-xs tracking-widest uppercase text-[#78716c] mb-8">
            Skills
          </p>

          <div className="space-y-5">
            {skillCategories.map((cat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 6 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.04 }}
                className="flex gap-6"
              >
                <p className="text-xs tracking-wide text-[#a8a29e] w-24 flex-shrink-0 pt-0.5">
                  {cat.category}
                </p>
                <p className="text-sm text-[#1c1917] leading-relaxed">
                  {cat.skills.join(' · ')}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <hr />
    </section>
  )
}
