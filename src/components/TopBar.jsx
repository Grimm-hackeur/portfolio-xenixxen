import { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Maison' },
  { to: '/about', label: 'À propos' },
  { to: '/portfolio', label: 'Projet' },
  { to: '/friends', label: 'Amis' },
  { to: '/contact', label: 'Contact' },
]

export default function TopBar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const panelRef = useRef(null)
  const btnRef = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onClick = (e) => {
      if (
        panelRef.current &&
        !panelRef.current.contains(e.target) &&
        !btnRef.current.contains(e.target)
      ) {
        setMenuOpen(false)
      }
    }
    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [])

  return (
    <div
      className={`flex items-center justify-between px-5 py-4 border-b border-[var(--color-border)] sticky top-0 z-20 backdrop-blur-[18px] transition-all duration-300 ${
        scrolled ? 'bg-[rgba(8,8,13,0.85)] shadow-[0_8px_24px_-16px_rgba(0,0,0,0.6)]' : 'bg-[rgba(10,10,15,0.5)]'
      }`}
    >
      <NavLink to="/" className="flex items-center gap-2.5" onClick={() => setMenuOpen(false)}>
        <span
          className="w-9 h-9 rounded-[10px] flex items-center justify-center font-[var(--font-display)] font-bold text-[15px] text-[var(--color-amber)]"
          style={{
            background: 'linear-gradient(145deg, #1c1a12, #0d0c08)',
            border: '1px solid #f4b74044',
            boxShadow:
              'inset 0 1px 0 rgba(255,255,255,0.06), 0 4px 10px -4px rgba(0,0,0,0.6), 0 0 18px -6px rgba(244,183,64,0.5)',
          }}
        >
          K
        </span>
        <span className="font-[var(--font-display)] font-semibold tracking-tight text-[15px]">
          KLIVENS <span className="text-[var(--color-amber)]">.</span>
        </span>
      </NavLink>

      <div className="flex items-center gap-2 relative">
        <button
          className="w-9 h-9 rounded-[10px] border border-[var(--color-border)] bg-white/[0.02] flex items-center justify-center text-[var(--color-muted)] hover:border-[#f4b74055] hover:text-[var(--color-amber)] hover:-translate-y-px transition duration-300 text-xs font-semibold"
          aria-label="Langue"
        >
          FR
        </button>
        <button
          className="w-9 h-9 rounded-[10px] border border-[var(--color-border)] bg-white/[0.02] flex items-center justify-center text-[var(--color-muted)] hover:border-[#f4b74055] hover:text-[var(--color-amber)] hover:-translate-y-px transition duration-300"
          aria-label="Thème"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
          </svg>
        </button>
        <button
          ref={btnRef}
          className={`w-9 h-9 rounded-[10px] border flex items-center justify-center transition duration-300 ${
            menuOpen
              ? 'text-[var(--color-amber)] border-[#f4b74055]'
              : 'text-[var(--color-muted)] border-[var(--color-border)] bg-white/[0.02] hover:border-[#f4b74055] hover:text-[var(--color-amber)]'
          }`}
          aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((o) => !o)}
        >
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="4" y1="7" x2="20" y2="7" />
            <line x1="4" y1="12" x2="20" y2="12" />
            <line x1="4" y1="17" x2="14" y2="17" />
          </svg>
        </button>

        <div
          ref={panelRef}
          className={`absolute top-12 right-0 w-56 rounded-2xl p-2 border border-[var(--color-border)] transition-all duration-200 ${
            menuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'
          }`}
          style={{
            background: 'rgba(16,16,22,0.9)',
            backdropFilter: 'blur(20px)',
            boxShadow: '0 20px 50px -20px rgba(0,0,0,0.8), inset 0 1px 0 rgba(255,255,255,0.05)',
          }}
        >
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `flex items-center px-3 py-2.5 rounded-lg text-sm font-medium transition duration-200 ${
                  isActive ? 'text-[var(--color-amber)] bg-[var(--color-amber)]/10' : 'text-[var(--color-ink)] hover:bg-[var(--color-amber)]/8 hover:text-[var(--color-amber)]'
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  )
}
