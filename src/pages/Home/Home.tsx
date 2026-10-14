import './Home.css'
import profilePhoto from '../../assets/profile-photo.jpg'
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaCode,
  FaServer,
  FaDatabase,
  FaMobileAlt,
  FaJs,
  FaNodeJs,
  FaReact,
  FaHtml5,
  FaJava,
  FaPython
} from 'react-icons/fa'
import { SiMongodb, SiPostgresql, SiMysql } from 'react-icons/si'
import { projectsData } from '../../data/projectsData'
import ProjectCard from '../../components/ProjectCard/ProjectCard'

export default function Home() {
  return (
    <div className="home-container">
      <section id="start" className="hero-section">
        <div className="hero-content">
          <div className="profile-container">
            <img
              src={profilePhoto}
              alt="Guilherme Oliveira Rocha"
              className="profile-photo"
            />
          </div>
          <span className="hero-badge">Guilherme Rocha</span>
          <h1>Guilherme Oliveira Rocha</h1>
          <p>
            Estudante de Desenvolvimento de Sistemas na FATEC Zona Leste, focado
            na criação de aplicações web e mobile, desenvolvimento de APIs
            robustas e modelagem de banco de dados.
          </p>

          <div className="home-actions">
            <a href="#projects" className="btn-primary">
              Ver Projetos
            </a>
            <a href="#about" className="btn-secondary">
              Sobre Mim
            </a>
            <a href="#contact" className="btn-secondary">
              Contato
            </a>
          </div>
        </div>

        <div className="scroll-down-container">
          <a href="#projects" aria-label="Rolar para a próxima seção">
            <svg
              className="scroll-arrow"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </a>
        </div>
      </section>

      <section id="projects" className="page-section projects-section">
        <div className="section-header">
          <h2>Meus Projetos</h2>
          <p>
            Explore uma seleção de trabalhos e aplicações desenvolvidas ao longo
            da minha trajetória em desenvolvimento de software.
          </p>
        </div>

        <div className="projects-grid">
          {projectsData.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      <section id="about" className="page-section about-section">
        <div className="section-header">
          <h2>Sobre Mim</h2>
          <p>
            Conheça um pouco mais sobre minha trajetória acadêmica e
            conhecimentos técnicos.
          </p>
        </div>

        <div className="about-grid single-column">
          <div className="about-card main-about-card">
            <h3>Trajetória e Foco Profissional</h3>
            <p>
              Estudante de <strong>Desenvolvimento de Sistemas</strong> na{' '}
              <strong>Faculdade FATEC Zona Leste</strong> (6° semestre), com
              previsão de conclusão para junho de 2027. Busco transformar
              desafios lógicos em soluções eficientes, aplicando boas práticas
              de engenharia de software no desenvolvimento de sistemas
              completos.
            </p>

            <div className="about-extra-info">
              <div className="info-block">
                <h4>Stack & Tecnologias</h4>
                <div className="tech-stack-preview">
                  <span className="tech-tag">
                    <FaCode /> Web & Frontend
                  </span>
                  <span className="tech-tag">
                    <FaMobileAlt /> Mobile
                  </span>
                  <span className="tech-tag">
                    <FaServer /> APIs & Backend
                  </span>
                  <span className="tech-tag">
                    <FaDatabase /> Bancos de Dados
                  </span>
                </div>

                <div className="tech-icons-grid">
                  <span className="tech-icon-tag">
                    <FaHtml5 /> HTML5
                  </span>
                  <span className="tech-icon-tag">
                    <FaJs /> JavaScript
                  </span>
                  <span className="tech-icon-tag">
                    <FaReact /> React.js
                  </span>
                  <span className="tech-icon-tag">
                    <FaMobileAlt /> React Native
                  </span>
                  <span className="tech-icon-tag">
                    <FaNodeJs /> Node.js
                  </span>
                  <span className="tech-icon-tag">
                    <FaJava /> Java
                  </span>
                  <span className="tech-icon-tag">
                    <FaPython /> Python
                  </span>
                  <span className="tech-icon-tag">
                    <SiMysql /> SQL
                  </span>
                  <span className="tech-icon-tag">
                    <SiPostgresql /> PostgreSQL
                  </span>
                  <span className="tech-icon-tag">
                    <SiMongodb /> MongoDB
                  </span>
                </div>
              </div>

              <div className="about-extra-info">
                <div className="info-block" style={{ marginTop: '1.5rem' }}>
                  <h4>Idiomas</h4>
                  <p>
                    <strong>Inglês:</strong> Intermediário Avançado (compreensão
                    sólida e boa autonomia técnica)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="page-section contact-section">
        <div className="section-header">
          <h2>Contato</h2>
          <p>
            Estou em busca de novas oportunidades profissionais na área de
            desenvolvimento. Sinta-se à vontade para entrar em contato!
          </p>
        </div>

        <div className="contact-card">
          <div className="about-social-links">
            <a
              href="https://www.linkedin.com/in/guilherme-oliveira-rocha/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link linkedin-btn"
            >
              <FaLinkedin /> LinkedIn
            </a>
            <a
              href="https://github.com/GuilhermeRocha0"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link github-btn"
            >
              <FaGithub /> GitHub
            </a>
            <a
              href="mailto:guilherme.or0@outlook.com"
              className="social-link email-btn"
            >
              <FaEnvelope /> Enviar E-mail
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
