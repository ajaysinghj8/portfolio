'use client'

import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about">
      <div className="w-full px-6 lg:px-12 py-14">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <p className="text-xs tracking-widest uppercase text-[#44403c] mb-6">
            About
          </p>

          <p className="text-[15px] text-[#1c1917] leading-relaxed mb-4">
            When I joined BharatPe, the entire platform ran on a <span className="font-medium">PHP monolith backed by MySQL</span>. I led the
            migration to a microservices architecture — incrementally, without a single breaking change
            or moment of downtime. On the merchant side, I built the{' '}
            <span className="font-medium">Merchant App Backend</span>, <span className="font-medium">Organised Trade Dashboard</span>,{' '}
            and <span className="font-medium">Logistics Service</span>. For customer operations, I designed the{' '}
            <span className="font-medium">Modular CRM</span>, <span className="font-medium">Agent App &amp; Dashboard</span>,{' '}
            <span className="font-medium">IVR Platform</span>, and <span className="font-medium">Freshdesk Integration</span>.{' '}
            On the risk and intelligence side, I shipped a <span className="font-medium">Lending Risk Engine</span> and an{' '}
            <span className="font-medium">AI-powered Chatbot</span>.
          </p>
          <p className="text-[15px] text-[#1c1917] leading-relaxed mb-4">
            To drive growth and retention, I architected a <span className="font-medium">Campaign &amp; Rewards System</span> that
            reduced merchant churn through personalised, data-driven outreach, and a{' '}
            <span className="font-medium">Recharge &amp; Earn Service</span> that enabled DTH and mobile recharges with
            commission on every transaction — adding a new revenue stream directly within the app.
          </p>
          <p className="text-[15px] text-[#1c1917] leading-relaxed mb-10">
            The work translated into real numbers: <span className="font-medium">₹5 Cr/month saved</span> in messaging costs,{' '}
            <span className="font-medium">₹6 Cr in gold investments</span> facilitated, and{' '}
            <span className="font-medium">UPI AutoPay</span> enabled at scale. Recognised for this impact with the{' '}
            <span className="font-medium">Technical Guru</span>, <span className="font-medium">A-Team</span> (twice), and{' '}
            <span className="font-medium">Customer Success IVR</span> awards at BharatPe.
          </p>

          <div className="grid grid-cols-2 gap-x-12 gap-y-6 text-sm">
            <div>
              <p className="text-xs tracking-widest uppercase text-[#44403c] mb-2">Location</p>
              <p className="text-[#1c1917]">Gurugram, India</p>
            </div>
            <div>
              <p className="text-xs tracking-widest uppercase text-[#44403c] mb-2">Core Values</p>
              <p className="text-[#1c1917]">Ownership · Innovation · Execution · Quality</p>
            </div>
          </div>
        </motion.div>
      </div>

      <hr />
    </section>
  )
}
