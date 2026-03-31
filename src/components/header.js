import * as React from "react"
import { useState, useEffect } from "react"
import { Menu, X, Sun, Moon } from "lucide-react"
import { FaLinkedin, FaGithub } from "react-icons/fa"

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [theme, setTheme] = useState("dark")

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 50)
      }
      window.addEventListener("scroll", handleScroll)
      return () => window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  useEffect(() => {
    // Carica il tema salvato al mount (solo nel browser)
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme") || "dark"
      setTheme(savedTheme)
      document.documentElement.classList.toggle("light", savedTheme === "light")
    }
  }, [])

  const toggleTheme = () => {
    if (typeof window !== "undefined") {
      const newTheme = theme === "dark" ? "light" : "dark"
      setTheme(newTheme)
      localStorage.setItem("theme", newTheme)
      document.documentElement.classList.toggle("light", newTheme === "light")
    }
  }

  const navLinks = [
    { href: "#about", label: "Chi sono" },
    { href: "#projects", label: "Portfolio" },
    { href: "#contact", label: "Contatti" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center gap-6">
            <a href="/" className="text-xl font-bold">
              <span className="text-gradient">&lt;SR Dev /&gt;</span>
            </a>
            
            {/* Social Links */}
            <div className="hidden md:flex items-center gap-3 ml-2">
              <a
                href="https://www.linkedin.com/in/tuo-profilo"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-muted-foreground hover:text-primary transition-colors rounded-lg hover:bg-secondary"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/tuo-username"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-muted-foreground hover:text-primary transition-colors rounded-lg hover:bg-secondary"
                aria-label="GitHub"
              >
                <FaGithub className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            <a
              href="#contact"
              className="px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:scale-105 transition-transform"
            >
              Contattami
            </a>
            
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 text-muted-foreground hover:text-primary transition-colors rounded-lg hover:bg-secondary"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-foreground"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden py-6 border-t border-border">
            <div className="flex flex-col gap-4">
              {/* Social Links Mobile */}
              <div className="flex items-center gap-3 pb-4 border-b border-border">
                <a
                  href="https://www.linkedin.com/in/tuo-profilo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-muted-foreground hover:text-primary transition-colors rounded-lg hover:bg-secondary"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://github.com/tuo-username"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-muted-foreground hover:text-primary transition-colors rounded-lg hover:bg-secondary"
                  aria-label="GitHub"
                >
                  <FaGithub className="w-5 h-5" />
                </a>
                
                {/* Theme Toggle Mobile */}
                <button
                  onClick={toggleTheme}
                  className="p-2 text-muted-foreground hover:text-primary transition-colors rounded-lg hover:bg-secondary ml-auto"
                  aria-label="Toggle theme"
                >
                  {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                </button>
              </div>
              
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg text-muted-foreground hover:text-foreground transition-colors py-2"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-4 px-4 py-3 rounded-lg bg-primary text-primary-foreground text-center font-medium"
              >
                Contattami
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}

export default Header
