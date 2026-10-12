import { Link } from 'react-router-dom'
import type { Project } from '../../data/projectsData'
import './ProjectCard.css'

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="project-card">
      <Link to={`/project/${project.id}`} className="project-image-container">
        {project.preview ? (
          <img
            src={project.preview}
            alt={`Preview de ${project.title}`}
            className="project-preview-img"
          />
        ) : (
          <div className="project-image-placeholder">
            <span>Prévia em breve</span>
          </div>
        )}
      </Link>

      <div className="project-content-area">
        <span className="project-category-badge">{project.category}</span>

        <Link to={`/project/${project.id}`} className="project-title-link">
          <h3>{project.title}</h3>
        </Link>

        <p>{project.description}</p>

        <div className="project-tech-tags">
          {project.technologies.map((tech, index) => (
            <span key={index} className="project-tech-tag">
              {tech}
            </span>
          ))}
        </div>

        <div className="project-actions">
          <Link to={`/project/${project.id}`} className="btn-primary-small">
            Ver Detalhes
          </Link>
          {project.githubLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary-small"
            >
              {link.label.includes('API')
                ? 'GitHub (API)'
                : link.label.includes('Web')
                  ? 'GitHub (Web)'
                  : link.label.includes('Mobile')
                    ? 'GitHub (Mobile)'
                    : 'GitHub'}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
