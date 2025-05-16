"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useMediaQuery } from "@/hooks/use-media-query"
import { Libre_Barcode_39_Text } from "next/font/google"

const libreBarcode = Libre_Barcode_39_Text({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
})

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [scrolled, setScrolled] = useState(false)
  const isMobile = useMediaQuery("(max-width: 768px)")

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      const sections = document.querySelectorAll("section[id]")
      const scrollPosition = window.scrollY + 100

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop
        const sectionHeight = (section as HTMLElement).offsetHeight
        const sectionId = section.getAttribute("id") || ""

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId)
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setIsOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" })
  }

  const toggleMenu = () => {
    if (isOpen) {
      setIsOpen(false)
    } else {
      // Scroll to top before opening menu if we're at bottom
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
        window.scrollTo({ top: 0, behavior: "smooth" })
        setTimeout(() => setIsOpen(true), 500) // Wait for scroll to complete
      } else {
        setIsOpen(true)
      }
    }
  }

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 dark:bg-black/90 backdrop-blur-md shadow-sm" : ""
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 sm:px-6 py-3">
        <div className="flex items-center justify-between">
          <motion.div
            className="text-2xl font-bold text-black dark:text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <span className={`${libreBarcode.className} text-4xl sm:text-5xl font-bold`}>Nishant</span>
          </motion.div>

          {!isMobile ? (
            <nav className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <Button
                  key={item.name}
                  variant="ghost"
                  className={`relative px-3 py-1 text-sm sm:px-4 sm:py-2 sm:text-base ${
                    activeSection === item.href.substring(1)
                      ? "text-black dark:text-white font-medium"
                      : "text-neutral-700 dark:text-neutral-300"
                  }`}
                  onClick={() => handleNavClick(item.href)}
                >
                  {item.name}
                  {activeSection === item.href.substring(1) && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-black dark:bg-white"
                      layoutId="activeSection"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Button>
              ))}
              <Button
                variant="outline"
                className="ml-2 border-black text-black hover:bg-neutral-100 dark:border-white dark:text-white dark:hover:bg-neutral-900 text-sm sm:text-base"
                onClick={() => window.open("/nishantResumeTCS.pdf", "_blank")}
              >
                <Download className="h-4 w-4 mr-2" />
                Resume
              </Button>
            </nav>
          ) : (
            <div className="flex items-center space-x-2">
              <Button
                variant="outline"
                size="sm"
                className="border-black text-black hover:bg-neutral-100 dark:border-white dark:text-white dark:hover:bg-neutral-900"
                onClick={() => window.open("/resume.pdf", "_blank")}
              >
                <Download className="h-4 w-4" />
                <span className="sr-only sm:not-sr-only sm:ml-2">Resume</span>
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={toggleMenu}
                className="md:hidden"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          )}
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-white dark:bg-black z-50 flex flex-col"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            <div className="container mx-auto px-4 py-3 flex justify-end">
              <Button variant="ghost" size="icon" onClick={toggleMenu}>
                <X className="h-6 w-6" />
              </Button>
            </div>
            <div className="flex flex-col items-center justify-start pt-10 space-y-6 px-4 overflow-y-auto">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="w-full max-w-xs"
                >
                  <Button 
                    variant="ghost" 
                    className="w-full text-xl py-4"
                    onClick={() => handleNavClick(item.href)}
                  >
                    {item.name}
                  </Button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}