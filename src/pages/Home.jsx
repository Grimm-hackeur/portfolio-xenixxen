import { Link } from 'react-router-dom'
import VideoFrame from '../components/VideoFrame.jsx'

export default function Home() {
  return (
    <div className="px-5 pt-9 pb-4 text-center max-w-xl mx-auto">
      <div className="reveal" style={{ animationDelay: '.05s' }}>
        <VideoFrame />
      </div>

      <p
        className="eyebrow font-[var(--font-display)] text-sm font-semibold text-[var(--color-amber)] mt-9 mb-1.5 reveal justify-center"
        style={{ animationDelay: '.15s' }}
      >
        Bonjour le monde, je suis
      </p>

      <h1
        className="title-gradient font-[var(--font-display)] font-bold tracking-tight leading-[1.08] text-[clamp(2.1rem,8.5vw,3rem)] reveal"
        style={{ animationDelay: '.22s' }}
      >
        KLIVENS
        <span className="block text-[var(--color-muted)] font-medium text-[0.5em] mt-1.5" style={{ WebkitTextFillColor: 'var(--color-muted)' }}>
          alias Xenix
        </span>
      </h1>

      <div className="flex justify-center reveal" style={{ animationDelay: '.3s' }}>
        <div className="status-badge mt-4">
          <span className="pulse-dot" />
          Disponible pour de nouveaux projets
        </div>
      </div>

      <div
        className="w-9 h-px mx-auto my-5 reveal"
        style={{ background: 'linear-gradient(90deg, transparent, var(--color-border), transparent)', animationDelay: '.36s' }}
      />

      <p className="text-[var(--color-muted)] text-[15px] leading-relaxed max-w-[320px] mx-auto reveal" style={{ animationDelay: '.42s' }}>
        Développeur full stack. Je construis des applications
        web complètes, du serveur jusqu'à l'interface. 👋
      </p>

      <Link
        to="/friends"
        className="inline-flex items-center gap-2 mt-7 px-[22px] py-3.5 rounded-full text-[13.5px] font-semibold reveal"
        style={{
          border: '1px solid #f4b74040',
          background: 'linear-gradient(180deg, rgba(244,183,64,0.10), rgba(244,183,64,0.04))',
          backdropFilter: 'blur(10px)',
          color: 'var(--color-amber-2)',
          boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.06), 0 8px 20px -12px rgba(244,183,64,0.4)',
          animationDelay: '.5s',
        }}
      >
        <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
        Amis et communauté des développeurs
      </Link>

      <div className="flex flex-wrap gap-2.5 justify-center mt-5 reveal" style={{ animationDelay: '.58s' }}>
        <Link to="/portfolio" className="btn-primary-amber px-[22px] py-3 rounded-xl text-[13.5px] font-semibold">
          Voir mes projets
        </Link>
        <Link to="/contact" className="btn-ghost-dark px-[22px] py-3 rounded-xl text-[13.5px] font-semibold">
          Me contacter
        </Link>
      </div>
    </div>
  )
}
