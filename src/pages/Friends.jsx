import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader.jsx'

// Liste des amis. Pour en ajouter un : copie un bloc { ... } et remplis ses infos.
// avatar : chemin dans public/avatars/, ou '' pour afficher une initiale à la place.
// instagram : optionnel — laisse le champ de côté (ou vide) si pas de compte à afficher.
const FRIENDS = [
  {
    name: 'DsPrimis',
    realName: 'Fritz',
    role: 'Co-PDG · Syrix Vision',
    skills: 'Fullstack · Bots',
    github: 'https://github.com/DEVPRIMIS',
    site: 'https://dsprimis-porfolios.zone.id',
    avatar: '/avatars/dsprimis.jpg',
  },
  {
    name: 'Inconnu boy sensei',
    realName: 'Dawens',
    role: 'PDG · Syrix Vision',
    skills: 'Dev Web · Bots · Fullstack',
    github: 'https://github.com/INCONNU-BOY-SENSEI',
    site: 'https://inconnu-boy-sensei.zone.id',
    avatar: '/avatars/inconnu.jpg',
  },
  {
    name: 'Sidd',
    realName: '',
    role: 'Développeur · depuis 2025',
    skills: 'Vue · Node.js · Bots',
    github: 'https://github.com/siddtechx',
    site: 'https://notsidd-production.up.railway.app',
    instagram: 'https://www.instagram.com/siiddhrts',
    avatar: '/avatars/sidd.jpg',
  },
]

export default function Friends() {
  const uniqueRoles = new Set(FRIENDS.map((f) => f.role)).size

  return (
    <div className="pb-4">
      <PageHeader eyebrow="Réseau" title="Friends" subtitle="D'autres développeurs que Xenix suit et recommande." />

      <main className="px-5 pt-6 max-w-xl mx-auto">
        <div className="flex gap-2.5 mb-5.5 reveal" style={{ animationDelay: '.1s', marginBottom: 22 }}>
          {[
            [String(FRIENDS.length), 'Profils'],
            [String(uniqueRoles), 'Rôles'],
            ['—', 'Pays'],
          ].map(([num, lbl]) => (
            <div key={lbl} className="flex-1 text-center py-3.5 rounded-[14px] border border-[var(--color-border)] bg-white/[0.02]">
              <div className="font-[var(--font-display)] font-bold text-[19px] text-[var(--color-amber)]">{num}</div>
              <div className="text-[10.5px] text-[var(--color-muted)] mt-0.5 uppercase tracking-wide">{lbl}</div>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-3 reveal" style={{ animationDelay: '.16s' }}>
          {FRIENDS.map((f) => (
            <div key={f.name} className="glass glass-hover rounded-2xl p-5 relative overflow-hidden">
              <div className="flex items-start gap-4">
                <div
                  className="w-14 h-14 rounded-2xl flex-shrink-0 p-0.5"
                  style={{
                    background: 'linear-gradient(155deg, var(--color-amber-2), var(--color-amber) 60%, #4a3410)',
                    boxShadow: '0 0 22px -8px rgba(244,183,64,0.5)',
                  }}
                >
                  {f.avatar ? (
                    <img
                      src={f.avatar}
                      alt={f.name}
                      className="w-full h-full rounded-[13px] object-cover"
                    />
                  ) : (
                    <div
                      className="w-full h-full rounded-[13px] flex items-center justify-center font-[var(--font-display)] font-bold text-lg text-[var(--color-amber)]"
                      style={{ background: 'linear-gradient(145deg, #1c1a12, #0d0c08)' }}
                    >
                      {f.name.charAt(0)}
                    </div>
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="font-[var(--font-display)] font-bold text-[15.5px]">
                    {f.name}
                    {f.realName && <span className="text-[var(--color-muted)] font-medium text-[13px]"> / {f.realName}</span>}
                  </h3>
                  <p className="text-[12.5px] text-[var(--color-muted)] mt-0.5">{f.role}</p>
                  <span className="inline-block mt-2 px-2.5 py-1 rounded-full text-[11px] font-[var(--font-mono)] text-[var(--color-amber)] bg-[var(--color-amber)]/10 border border-[#f4b74033]">
                    {f.skills}
                  </span>
                </div>
              </div>

              <div className="flex gap-2 mt-4">
                {f.instagram && (
                  <a
                    href={f.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="btn-ghost-dark flex items-center justify-center w-11 rounded-xl flex-shrink-0"
                  >
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="2" y="2" width="20" height="20" rx="5" />
                      <circle cx="12" cy="12" r="4" />
                      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                    </svg>
                  </a>
                )}
                <a
                  href={f.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost-dark flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-[12.5px] font-semibold"
                >
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.29-.01-1.05-.02-2.06-3.34.72-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.49 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6.02 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.8 5.63-5.48 5.92.43.37.81 1.1.81 2.22 0 1.6-.01 2.89-.01 3.29 0 .32.22.7.83.58C20.56 21.79 24 17.3 24 12c0-6.63-5.37-12-12-12Z" /></svg>
                  GitHub
                </a>
                <a
                  href={f.site}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary-amber flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-[12.5px] font-semibold"
                >
                  Portfolio
                  <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M7 17L17 7M7 7h10v10" /></svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div
          className="mt-7 mb-5 p-[22px] rounded-[18px] text-center reveal"
          style={{ background: 'linear-gradient(155deg, rgba(244,183,64,0.08), rgba(244,183,64,0.02))', border: '1px solid #f4b74025', animationDelay: '.26s' }}
        >
          <h3 className="font-[var(--font-display)] font-bold text-[15.5px] mb-1">Tu es développeur toi aussi ?</h3>
          <p className="text-[13px] text-[var(--color-muted)] mb-3.5">Fais-toi connaître de Xenix pour apparaître ici.</p>
          <Link to="/contact" className="btn-ghost-dark inline-flex items-center gap-2 px-5 py-2.75 rounded-xl text-[13.5px] font-semibold" style={{ paddingTop: 11, paddingBottom: 11 }}>
            Me contacter
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
          </Link>
        </div>
      </main>
    </div>
  )
                    }
                      
