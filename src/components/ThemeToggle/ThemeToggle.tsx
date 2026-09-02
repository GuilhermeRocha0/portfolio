import './ThemeToggle.css'

interface ThemeToggleProps {
  theme: 'light' | 'dark'
  toggleTheme: () => void
}

export default function ThemeToggle({ theme, toggleTheme }: ThemeToggleProps) {
  return (
    <button
      className={`theme-toggle-switch ${theme}`}
      onClick={toggleTheme}
      aria-label="Alternar tema"
    >
      <div className="switch-thumb">{theme === 'light' ? '☀️' : '🌙'}</div>
    </button>
  )
}
