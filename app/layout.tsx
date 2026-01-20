import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import StarField from '@/components/StarField'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ajay Panwar - Engineering Manager Portfolio',
  description: 'Seasoned Engineering Manager with 11+ years of experience leading large teams, architecting systems, and enabling strong execution rhythms',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StarField />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
