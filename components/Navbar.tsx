'use client'

import { useState, useCallback, memo } from 'react'
import { Menu, X, Copy, Check } from 'lucide-react'

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
]

const Navbar = memo(function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [copied, setCopied] = useState(false)

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev)
  }, [])

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false)
  }, [])

  const copyEmail = useCallback(() => {
    navigator.clipboard.writeText('ajaysinghj8@hotmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }, [])

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#f5f0e8]">
      <div className="w-full px-6 lg:px-12">
        <div className="relative flex items-center h-14 border-b border-[#e0d9ce]">

          {/* Left: name */}
          <a
            href="#home"
            className="text-lg font-medium text-[#1c1917] hover:text-[#78716c] transition-colors shrink-0"
          >
            Ajay Panwar
          </a>

          {/* Center: nav links (desktop) — absolutely centered */}
          <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-7">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm text-[#78716c] hover:text-[#1c1917] transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Right: email copy button (desktop) + mobile toggle */}
          <div className="flex items-center gap-4 ml-auto">
            <button
              onClick={copyEmail}
              className="hidden md:flex items-center gap-2 text-sm font-semibold text-[#1c1917] bg-[#e8e0d4] hover:bg-[#dfd6c8] px-3 py-1.5 rounded transition-colors w-[220px] justify-center"
              title="Copy email"
            >
              {copied ? (
                <>
                  <Check className="h-3.5 w-3.5 shrink-0" />
                  <span>copied!</span>
                </>
              ) : (
                <>
                  <Copy className="h-3.5 w-3.5 shrink-0" />
                  <span>ajaysinghj8@hotmail.com</span>
                </>
              )}
            </button>

            <button
              onClick={toggleMobileMenu}
              className="md:hidden text-[#78716c] hover:text-[#1c1917] transition-colors focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#f5f0e8] border-b border-[#e0d9ce]">
          <div className="px-6 py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={closeMobileMenu}
                className="text-sm text-[#78716c] hover:text-[#1c1917] transition-colors"
              >
                {item.name}
              </a>
            ))}
            <button
              onClick={copyEmail}
              className="flex items-center gap-2 text-sm font-semibold text-[#1c1917] self-start"
            >
              {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
              <span>{copied ? 'copied!' : 'ajaysinghj8@hotmail.com'}</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  )
})

export default Navbar
