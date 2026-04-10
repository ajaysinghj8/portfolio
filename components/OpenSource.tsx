'use client'

import { motion } from 'framer-motion'

const projects = [
  {
    name: 'osham',
    description: 'A configurable proxy + cache server with Redis support for caching API responses.',
    stars: 55,
    forks: 7,
    language: 'TypeScript',
    npm: 'https://www.npmjs.com/package/osham',
    github: 'https://github.com/ajaysinghj8/osham',
    tags: ['cache', 'proxy', 'redis', 'nodejs'],
  },
  {
    name: 'angular-inport',
    description: 'Angular directives for detecting when elements enter or leave the viewport, powered by the native IntersectionObserver API.',
    stars: 34,
    forks: 18,
    language: 'TypeScript',
    npm: 'https://www.npmjs.com/package/angular-inport',
    github: 'https://github.com/ajaysinghj8/angular-inport',
    tags: ['angular', 'viewport', 'intersection-observer'],
  },
  {
    name: 'angular-draggable',
    description: 'A lightweight draggable directive for Angular 2+ as an NgModule.',
    stars: 23,
    forks: 18,
    language: 'TypeScript',
    npm: null,
    github: 'https://github.com/ajaysinghj8/angular-draggable',
    tags: ['angular', 'draggable', 'directive'],
  },
  {
    name: 'E-Commerce-MicroService-Architecture',
    description: 'Angular 2+ and Node.js based micro-service architecture reference implementation for e-commerce.',
    stars: 8,
    forks: 2,
    language: 'TypeScript',
    npm: null,
    github: 'https://github.com/ajaysinghj8/E-Commerce-MicroService-Architecture',
    tags: ['microservices', 'angular', 'nodejs'],
  },
]

export default function OpenSource() {
  return (
    <section id="opensource">
      <div className="w-full px-6 lg:px-12 py-14">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <p className="text-xs tracking-widest uppercase text-[#78716c] mb-8">
            Open Source
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
                  <div className="flex items-center gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[15px] font-medium text-[#1c1917] hover:text-[#78716c] transition-colors"
                    >
                      {project.name}
                    </a>
                    {project.npm && (
                      <a
                        href={project.npm}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[10px] tracking-wide uppercase text-[#a8a29e] border border-[#e0d9ce] px-1.5 py-0.5 hover:text-[#78716c] hover:border-[#78716c] transition-colors"
                      >
                        npm
                      </a>
                    )}
                  </div>
                  <div className="flex items-center gap-3 ml-4 flex-shrink-0">
                    <span className="text-xs text-[#a8a29e]">★ {project.stars}</span>
                    <span className="text-xs text-[#a8a29e]">⑂ {project.forks}</span>
                  </div>
                </div>
                <p className="text-sm text-[#78716c] leading-relaxed mb-3">{project.description}</p>
                <p className="text-xs text-[#a8a29e]">{project.tags.join(' · ')}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-10">
            <a
              href="https://github.com/ajaysinghj8"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-[#78716c] hover:text-[#1c1917] transition-colors"
            >
              View all on GitHub →
            </a>
          </div>
        </motion.div>
      </div>

      <hr />
    </section>
  )
}
