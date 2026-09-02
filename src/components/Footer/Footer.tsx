import './Footer.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-text">
          Desenvolvido por <strong>Guilherme Oliveira Rocha</strong>.
        </p>
        <div className="footer-links">
          <a
            href="https://www.linkedin.com/in/guilherme-oliveira-rocha/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <span>•</span>
          <a
            href="https://github.com/GuilhermeRocha0"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
        <p className="footer-copy">
          © {currentYear} — Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}
