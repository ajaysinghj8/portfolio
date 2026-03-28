'use client'

import { motion } from 'framer-motion'

export default function Education() {
  return (
    <section id="education">
      <div className="w-full px-6 lg:px-12 py-14">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <p className="text-xs tracking-widest uppercase text-[#78716c] mb-8">
            Education
          </p>

          <div className="flex items-baseline justify-between mb-1">
            <h3 className="text-[15px] font-medium text-[#1c1917]">Lovely Professional University</h3>
            <span className="text-xs text-[#a8a29e] tabular-nums">2011 – 2014</span>
          </div>
          <p className="text-sm text-[#78716c] mb-1">Master of Computer Applications · Jalandhar, Punjab</p>
          <p className="text-sm text-[#a8a29e]">First Division · 9 CGPA · Distinction</p>
        </motion.div>
      </div>

      <hr />
    </section>
  )
}
