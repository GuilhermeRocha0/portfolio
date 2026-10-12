import { useEffect } from 'react'
import { FaTimes } from 'react-icons/fa'
import './ImageModal.css'

interface ImageModalProps {
  isOpen: boolean
  imageUrl: string
  altText: string
  onClose: () => void
}

export default function ImageModal({
  isOpen,
  imageUrl,
  altText,
  onClose
}: ImageModalProps) {
  // Fecha o modal ao pressionar a tecla 'Escape'
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden' // Trava o scroll da página de fundo
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'unset' // Restaura o scroll ao fechar
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className="image-modal-overlay" onClick={onClose}>
      <div className="image-modal-content" onClick={e => e.stopPropagation()}>
        <button
          className="image-modal-close"
          onClick={onClose}
          aria-label="Fechar modal"
        >
          <FaTimes />
        </button>
        <img src={imageUrl} alt={altText} className="image-modal-img" />
      </div>
    </div>
  )
}
