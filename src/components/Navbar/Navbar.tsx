import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import ThemeToggle from '../ThemeToggle/ThemeToggle'
import './Navbar.css'

interface NavbarProps {
  theme: 'light' | 'dark'
  toggleTheme: () => void
}

export default function Navbar({ theme, toggleTheme }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const closeMenu = () => setIsMenuOpen(false)

  const handleScrollTo = (id: string) => {
    closeMenu()
    if (location.pathname === '/') {
      const element = document.getElementById(id)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <Link
          to="/"
          className="navbar-logo"
          onClick={() => handleScrollTo('start')}
        >
          Guilherme Rocha
        </Link>

        <div className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          <div className="navbar-links">
            <a
              href="#start"
              className="nav-link"
              onClick={() => handleScrollTo('start')}
            >
              Início
            </a>
            <a
              href="#projects"
              className="nav-link"
              onClick={() => handleScrollTo('projects')}
            >
              Projetos
            </a>
            <a
              href="#about"
              className="nav-link"
              onClick={() => handleScrollTo('about')}
            >
              Sobre
            </a>
            <a
              href="#contact"
              className="nav-link"
              onClick={() => handleScrollTo('contact')}
            >
              Contato
            </a>
          </div>

          <div className="navbar-actions-mobile">
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          </div>
        </div>

        <div className="navbar-right">
          <div className="desktop-toggle">
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          </div>

          <button
            className={`hamburger ${isMenuOpen ? 'open' : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </nav>
  )
}
