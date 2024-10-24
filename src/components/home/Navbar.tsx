'use client'

import { useState, useEffect } from 'react'
import {
  Bell,
  ChevronDown,
  Facebook,
  Linkedin,
  Mail,
  Phone,
  User,
} from 'lucide-react'
import LandingPage from './LandingPage'

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="bg-[#f5676e]">
      {/* Top bar */}
      <div className="bg-[#f5676e]">
        <div className="container mx-auto py-3 px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <a
                href="#"
                className="flex items-center text-sm text-white hover:text-gray-200"
              >
                <Mail className="w-4 h-4 mr-2" />
                <span className="hidden md:inline">info@domain.com</span>
              </a>
              <a
                href="#"
                className="flex items-center text-sm text-white hover:text-gray-200"
              >
                <Phone className="w-4 h-4 mr-2" />
                <span className="hidden md:inline">+1 234 4567 8910</span>
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <a href="#" className="text-white hover:text-gray-200">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-white hover:text-gray-200">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-white hover:text-gray-200">
                <User className="w-5 h-5" />
              </a>
              <a href="#" className="text-white hover:text-gray-200">
                <Bell className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <nav className={`bg-[#f5676e] ${isScrolled ? 'fixed top-0 left-0 right-0  border-b border-white' : ''}`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <a href="/" className="text-2xl font-bold text-white">
                Horizon
              </a>
            </div>
            <div className="hidden lg:flex items-center space-x-8">
              <NavItem label="Accounts" />
              <NavItem label="Deposits" />
              <NavItem label="Payments" />
              <NavItem label="Cards" />
              <NavItem label="Loans" />
              <NavItem label="Investments" />
              <a href="/login" className="text-white hover:text-gray-200">
                Login
              </a>
              <a href="/contact-us" className="text-white hover:text-gray-200">
                Contact Us
              </a>
              <a href="/more" className="text-white hover:text-gray-200">
                More
              </a>
            </div>
            <div className="lg:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-white hover:text-gray-200 focus:outline-none"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#f5676e]">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <MobileNavItem label="Accounts" />
            <MobileNavItem label="Deposits" />
            <MobileNavItem label="Payments" />
            <MobileNavItem label="Cards" />
            <MobileNavItem label="Loans" />
            <MobileNavItem label="Investments" />
            <a
              href="/login"
              className="block px-3 py-2 text-base font-medium text-white hover:text-gray-200 hover:bg-[#f67b86]"
            >
              Login
            </a>
            <a
              href="/contactus"
              className="block px-3 py-2 text-base font-medium text-white hover:text-gray-200 hover:bg-[#f67b86]"
            >
              Contact Us
            </a>
            <a
              href="/more"
              className="block px-3 py-2 text-base font-medium text-white hover:text-gray-200 hover:bg-[#f67b86]"
            >
              More
            </a>
          </div>
        </div>
      )}

      {/* Hero section placeholder */}
      {/* <div className="bg-[#f5676e] min-h-screen"></div> */}
      <LandingPage/>
    </div>
  )
}

function NavItem({ label }: { label: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div
      className="relative group"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className="flex items-center text-white hover:text-gray-200">
        {label}
        <ChevronDown className="w-4 h-4 ml-1" />
      </button>
      {isOpen && (
        <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem"
            >
              Team
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem"
            >
              Pricing
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem"
            >
              FAQ
            </a>
          </div>
        </div>
      )}
    </div>
  )
}

function MobileNavItem({ label }: { label: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full px-3 py-2 text-base font-medium text-white hover:text-gray-200 hover:bg-[#f67b86]"
      >
        {label}
        <ChevronDown
          className={`w-4 h-4 transition-transform ${
            isOpen ? "transform rotate-180" : ""
          }`}
        />
      </button>
      {isOpen && (
        <div className="px-4 py-2 space-y-1">
          <a
            href="#"
            className="block px-3 py-2 text-sm text-white hover:text-gray-200 hover:bg-[#f67b86]"
          >
            Team
          </a>
          <a
            href="#"
            className="block px-3 py-2 text-sm text-white hover:text-gray-200 hover:bg-[#f67b86]"
          >
            Pricing
          </a>
          <a
            href="#"
            className="block px-3 py-2 text-sm text-white hover:text-gray-200 hover:bg-[#f67b86]"
          >
            FAQ
          </a>
        </div>
      )}
    </div>
  )
}