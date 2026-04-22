'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const PHOTO_URL = '/profile.jpg'

export default function Hero() {
  return (
    <section id="home" className="pt-14">
      <div className="w-full px-6 lg:px-12 py-16">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16"
        >
          {/* Profile photo */}
          <Image
            src={PHOTO_URL}
            alt="Ajay Panwar"
            width={280}
            height={280}
            className="rounded-full object-cover grayscale shrink-0"
            priority
          />

          {/* Text */}
          <div className="w-full md:w-[50rem] text-center">
            <p className="text-sm tracking-widest uppercase text-[#44403c] mb-4">
              Available for opportunities
            </p>

            <h1 className="text-5xl font-semibold text-[#1c1917] leading-snug mb-3">
              Engineering Manager
            </h1>

            <p className="text-[30px] text-[#44403c] leading-relaxed mb-6">
              Seasoned Engineering Manager with 11+ years of experience leading large teams,
              architecting systems, and enabling strong execution rhythms at scale.
            </p>

          </div>
        </motion.div>
      </div>

      <hr />
    </section>
  )
}
