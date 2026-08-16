import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader.jsx'

const STACK = [
  { name: 'JavaScript', icon: <path d="M9 18V5l12-2v13M9 18a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM21 16a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" /> },
  { name: 'React', icon: null, ring: true },
  { name: 'Node.js', icon: <path d="M12 2 3 7v10l9 5 9-5V7z M3 7l9 5 9-5 M12 12v10" /> },
  { name: 'Express', icon: <path d="M4 6h16M4 12h16M4 18h7" /> },
  { name: 'MongoDB', icon: <path d="M12 3c3 3 5 6 5 9a5 5 0 0 1-10 0c0-3 2-6 5-9z" /> },
  { name: 'Vite', icon: <path d="M3 4l9 16 9-16zM8 4l4 12 4-12" /> },
  { name: 'Tailwind CSS', icon: <><rect x="3" y="3" width="18" height="18" rx="3" /><path d="M8 12h8M8 8h8M8 16h5" /></> },
  { name: 'JWT', icon: <><rect x="3" y="11" width="18" height="10" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></> },
]

export default function About() {
  return (
    <div className="pb-4">
      <PageHeader eyebrow="À propos" title="Qui est Xenix ?" />

      <main className="px-5 pt-6 max-w-xl mx-auto">
        <div className="glass rounded-[18px] p-[18px] mb-6 flex items-center gap-4 reveal" style={{ animationDelay: '.12s' }}>
          <div
            className="w-16 h-16 rounded-2xl flex-shrink-0 p-0.5"
            style={{ background: 'linear-gradient(155deg, var(--color-amber-2), var(--color-amber) 60%, #4a3410)', boxShadow: '0 0 26px -8px rgba(244,183,64,0.5)' }}
          >
            <div
              className="w-full h-full rounded-[14px] flex items-center justify-center font-[var(--font-display)] font-bold text-xl text-[var(--color-amber)]"
              style={{ background: 'linear-gradient(145deg, #1c1a12, #0d0c08)' }}
            >
              K
            </div>
          </div>
          <div>
            <h2 className="font-[var(--font-display)] font-bold text-base">
              KLIVENS <span className="text-[var(--color-muted)] font-medium">/ Xenix</span>
            </h2>
            <p className="text-[12.5px] text-[var(--color-muted)] font-[var(--font-mono)] mt-0.5">Full Stack Developer</p>
            <div className="status-badge mt-2" style={{ padding: '4px 10px', fontSize: 11 }}>
              <span className="pulse-dot" style={{ width: 6, height: 6 }} />
              Disponible pour de nouveaux projets
            </div>
          </div>
        </div>

        <div className="glass glass-hover rounded-[18px] p-5 mb-6 reveal" style={{ animationDelay: '.18s' }}>
          <span className="font-[var(--font-mono)] text-[11px] text-[var(--color-amber)] tracking-widest">// BIO</span>
          <p className="text-[var(--color-muted)] leading-relaxed text-[14.5px] mt-2.5">
            Développeur full stack, je travaille sur l'ensemble de la chaîne — de l'API
            jusqu'à l'interface finale. Cette carte est prête à accueillir ta bio complète
            dès que tu me la donnes.
          </p>
        </div>

        <div className="flex items-center gap-3 my-7 reveal" style={{ animationDelay: '.24s' }}>
          <h3 className="font-[var(--font-display)] font-bold text-base whitespace-nowrap">Stack technique</h3>
          <div className="flex-1 h-px" style={{ background: 'linear-gradient(90deg, var(--color-border), transparent)' }} />
        </div>
        <div className="grid grid-cols-2 gap-2.5 reveal" style={{ animationDelay: '.28s' }}>
          {STACK.map((s) => (
            <div
              key={s.name}
              className="flex items-center gap-2.5 px-3.5 py-3 rounded-[14px] border border-[var(--color-border)] bg-white/[0.02] text-[13px] font-medium hover:border-[#f4b74045] hover:bg-[var(--color-amber)]/5 hover:-translate-y-0.5 transition duration-200"
            >
              <span className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 bg-[var(--color-amber)]/10 text-[var(--color-amber)]">
                {s.ring ? (
                  <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="2.2" />
                    <ellipse cx="12" cy="12" rx="10" ry="4.2" />
                    <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(60 12 12)" />
                    <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(120 12 12)" />
                  </svg>
                ) : (
                  <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2">
                    {s.icon}
                  </svg>
                )}
              </span>
              {s.name}
            </div>
          ))}
        </div>

        <div className="flex items-center gap-3 my-7 reveal" style={{ animationDelay: '.34s' }}>
          <h3 className="font-[var(--font-display)] font-bold text-base whitespace-nowrap">Parcours</h3>
          <div className="flex-1 h-px" style={{ background: 'linear-gradient(90deg, var(--color-border), transparent)' }} />
        </div>
        <div className="relative pl-[22px] reveal" style={{ animationDelay: '.38s' }}>
          <div
            className="absolute left-[5px] top-1 bottom-1 w-px"
            style={{ background: 'linear-gradient(180deg, var(--color-amber), var(--color-border))' }}
          />
          {[
            { year: '2023', title: 'Premiers projets en Full Stack', desc: 'Les débuts sur des projets Node.js / MongoDB.' },
            { year: 'Aujourd\u2019hui', title: 'Développeur Full Stack indépendant', desc: 'Conception et déploiement d\u2019applications complètes.' },
          ].map((t, i, arr) => (
            <div key={t.year} className={`relative ${i === arr.length - 1 ? '' : 'pb-5.5'}`} style={{ paddingBottom: i === arr.length - 1 ? 0 : 22 }}>
              <span
                className="absolute -left-[22px] top-[3px] w-[11px] h-[11px] rounded-full"
                style={{ background: 'var(--color-amber)', boxShadow: '0 0 0 4px var(--color-void), 0 0 12px -2px rgba(244,183,64,0.6)' }}
              />
              <div className="text-[11px] text-[var(--color-amber)] font-semibold font-[var(--font-mono)] mb-0.5">{t.year}</div>
              <div className="text-sm font-semibold">{t.title}</div>
              <div className="text-[13px] text-[var(--color-muted)] mt-0.5 leading-relaxed">{t.desc}</div>
            </div>
          ))}
        </div>

        <div
          className="mt-8 mb-4 p-6 rounded-[20px] text-center reveal"
          style={{ background: 'linear-gradient(155deg, rgba(244,183,64,0.1), rgba(244,183,64,0.02))', border: '1px solid #f4b74030', animationDelay: '.44s' }}
        >
          <h3 className="font-[var(--font-display)] font-bold text-[17px] mb-1.5">Envie de collaborer ?</h3>
          <p className="text-[13.5px] text-[var(--color-muted)] mb-4">Discutons de ton projet, sans engagement.</p>
          <Link to="/contact" className="btn-primary-amber inline-flex items-center gap-2 px-[22px] py-3 rounded-xl text-[13.5px] font-semibold">
            Me contacter
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
          </Link>
        </div>
      </main>
    </div>
  )
}
