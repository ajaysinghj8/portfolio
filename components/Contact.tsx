'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText('ajaysinghj8@hotmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="contact">
      <div className="w-full px-6 lg:px-12 py-14">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <p className="text-xs tracking-widest uppercase text-[#78716c] mb-6">
            Contact
          </p>

          <p className="text-[15px] text-[#1c1917] mb-8">
            Open to new opportunities, interesting projects, or engineering leadership.
          </p>

          <div className="flex flex-col items-center md:flex-row md:justify-center gap-4 md:gap-8">
            <button
              onClick={copyEmail}
              className="text-sm text-[#1c1917] underline underline-offset-4 decoration-[#e0d9ce] hover:decoration-[#78716c] transition-all"
            >
              {copied ? 'copied!' : 'ajaysinghj8@hotmail.com'}
            </button>
            <p className="text-sm text-[#78716c]">Gurugram, India</p>
            <a
              href="https://linkedin.com/in/ajaysinghj8"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[#78716c] hover:text-[#1c1917] transition-colors"
            >
              LinkedIn ↗
            </a>
            <a
              href="https://github.com/ajaysinghj8"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[#78716c] hover:text-[#1c1917] transition-colors"
            >
              GitHub ↗
            </a>
          </div>
        </motion.div>
      </div>

      <hr />
    </section>
  )
}
