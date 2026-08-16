import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader.jsx'

export default function Friends() {
  return (
    <div className="pb-4">
      <PageHeader eyebrow="Réseau" title="Friends" subtitle="D'autres développeurs que Xenix suit et recommande." />

      <main className="px-5 pt-6 max-w-xl mx-auto">
        <div className="flex gap-2.5 mb-5.5 reveal" style={{ animationDelay: '.1s', marginBottom: 22 }}>
          {[
            ['0', 'Profils'],
            ['—', 'Rôles'],
            ['—', 'Pays'],
          ].map(([num, lbl]) => (
            <div key={lbl} className="flex-1 text-center py-3.5 rounded-[14px] border border-[var(--color-border)] bg-white/[0.02]">
              <div className="font-[var(--font-display)] font-bold text-[19px] text-[var(--color-amber)]">{num}</div>
              <div className="text-[10.5px] text-[var(--color-muted)] mt-0.5 uppercase tracking-wide">{lbl}</div>
            </div>
          ))}
        </div>

        <div className="relative overflow-hidden rounded-[22px] px-6 py-12 flex flex-col items-center text-center gap-3.5 glass reveal" style={{ animationDelay: '.16s', paddingTop: 48, paddingBottom: 48 }}>
          <div
            className="absolute w-[280px] h-[280px] rounded-full pointer-events-none -top-24 left-1/2 -translate-x-1/2"
            style={{ background: 'rgba(244,183,64,0.12)', filter: 'blur(70px)' }}
          />
          <div
            className="w-14 h-14 rounded-[18px] flex items-center justify-center relative text-[#1a1206]"
            style={{ background: 'linear-gradient(155deg, var(--color-amber-2), var(--color-amber))', boxShadow: '0 1px 0 rgba(255,255,255,0.4) inset, 0 14px 30px -10px rgba(244,183,64,0.6)' }}
          >
            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16.5 19v-1.8a3.6 3.6 0 0 0-3.6-3.6H6.6A3.6 3.6 0 0 0 3 17.2V19" />
              <circle cx="9.8" cy="6.8" r="3.6" />
              <path d="M21 19v-1.8a3.6 3.6 0 0 0-2.7-3.48" />
              <path d="M14.9 3.13a3.6 3.6 0 0 1 0 6.98" />
            </svg>
          </div>
          <h2 className="font-[var(--font-display)] font-bold text-[17px] relative">Aucun profil ajouté pour l'instant</h2>
          <p className="text-[var(--color-muted)] text-[13.5px] max-w-[340px] relative leading-relaxed">
            Cette section mettra en avant d'autres développeurs du réseau de Xenix — nom, rôle et lien vers leur profil.
          </p>

          <div className="flex gap-2.5 mt-1.5 relative">
            {[0, 1, 2].map((i) => (
              <div key={i} className="w-13 h-13 rounded-[14px] border border-dashed border-[var(--color-border)] bg-white/[0.015] flex items-center justify-center text-[var(--color-border)]" style={{ width: 52, height: 52 }}>
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <circle cx="12" cy="8" r="4" />
                  <path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7" />
                </svg>
              </div>
            ))}
          </div>
        </div>

        <div
          className="mt-7 mb-5 p-[22px] rounded-[18px] text-center reveal"
          style={{ background: 'linear-gradient(155deg, rgba(244,183,64,0.08), rgba(244,183,64,0.02))', border: '1px solid #f4b74025', animationDelay: '.22s' }}
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
