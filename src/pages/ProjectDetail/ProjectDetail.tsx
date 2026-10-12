import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { projectsData } from '../../data/projectsData'
import {
  FaArrowLeft,
  FaGithub,
  FaExternalLinkAlt,
  FaSearchPlus
} from 'react-icons/fa'
import ImageModal from '../../components/ImageModal/ImageModal'
import './ProjectDetail.css'

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>()
  const project = projectsData.find(p => p.id === id)

  const [modalImage, setModalImage] = useState<{
    url: string
    alt: string
  } | null>(null)

  if (!project) {
    return (
      <div className="not-found-container">
        <h2>Projeto não encontrado</h2>
        <p>O projeto que você está procurando não existe ou foi removido.</p>
        <Link to="/" className="btn-primary-small">
          Voltar para o Início
        </Link>
      </div>
    )
  }

  const hasImages = project.images && project.images.length > 0
  const hasVideos = project.videos && project.videos.length > 0

  return (
    <div className="project-detail-container">
      <div className="project-detail-header">
        <Link to="/#projects" className="back-link">
          <FaArrowLeft /> Voltar para Projetos
        </Link>
        <span className="project-category-badge">{project.category}</span>
      </div>

      <div className="project-detail-main">
        <h1>{project.title}</h1>
        <p className="project-long-desc">{project.longDescription}</p>

        <div className="project-tech-tags">
          {project.technologies.map((tech, index) => (
            <span key={index} className="project-tech-tag">
              {tech}
            </span>
          ))}
        </div>

        <div className="project-detail-actions">
          {project.githubLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link github-btn"
            >
              <FaGithub /> {link.label}
            </a>
          ))}
          {project.deployUrl && (
            <a
              href={project.deployUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link deploy-btn"
            >
              <FaExternalLinkAlt /> Acessar Deploy
            </a>
          )}
        </div>
      </div>

      {hasImages && (
        <div className="project-media-section">
          <h2>Galeria de Screenshots</h2>
          <p className="media-hint">Clique em qualquer imagem para ampliar</p>
          <div className="media-grid">
            {project.images.map((imgUrl, idx) => {
              const altText = `Screenshot ${idx + 1} do projeto ${project.title}`
              return (
                <div
                  key={idx}
                  className="media-card clickable-media"
                  onClick={() => setModalImage({ url: imgUrl, alt: altText })}
                >
                  <img
                    src={imgUrl}
                    alt={altText}
                    className="project-media-item media-image"
                  />
                  <div className="media-overlay-icon">
                    <FaSearchPlus />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      )}

      {hasVideos && (
        <div className="project-media-section">
          <h2>Demonstração em Vídeo</h2>
          <p className="media-hint">Demonstração prática do sistema em vídeo</p>
          <div className="media-grid">
            {project.videos?.map((videoUrl, idx) => (
              <div key={idx} className="media-card video-card-container">
                <iframe
                  src={videoUrl}
                  title={`Demonstração em vídeo ${idx + 1} do projeto ${project.title}`}
                  className="project-media-item youtube-iframe"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            ))}
          </div>
        </div>
      )}

      {!hasImages && !hasVideos && (
        <div className="project-media-section">
          <p className="no-media-text">
            Nenhuma imagem ou vídeo cadastrado para este projeto no momento.
          </p>
        </div>
      )}

      <ImageModal
        isOpen={!!modalImage}
        imageUrl={modalImage?.url || ''}
        altText={modalImage?.alt || ''}
        onClose={() => setModalImage(null)}
      />
    </div>
  )
}
