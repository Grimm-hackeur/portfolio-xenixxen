import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader.jsx'

const FILTERS = ['Tous', 'Web', 'API', 'Bots']

export default function Portfolio() {
  return (
    <div className="pb-4">
      <PageHeader eyebrow="Projets" title="Portfolio" subtitle="Une sélection de ce que Xenix construit — bientôt disponible ici." />

      <main className="px-5 pt-6 max-w-xl mx-auto">
        <div className="flex gap-2 flex-wrap mb-5.5 reveal" style={{ animationDelay: '.1s', marginBottom: 22 }}>
          {FILTERS.map((f, i) => (
            <span
              key={f}
              className={`px-3.5 py-2 rounded-full text-[12.5px] font-semibold font-[var(--font-mono)] border ${
                i === 0
                  ? 'text-[var(--color-amber)] border-[#f4b74055] bg-[var(--color-amber)]/10'
                  : 'text-[var(--color-muted)] border-[var(--color-border)]'
              }`}
            >
              {f}
            </span>
          ))}
        </div>

        <div className="relative overflow-hidden rounded-[22px] px-6 py-13 flex flex-col items-center text-center gap-3.5 glass reveal" style={{ animationDelay: '.16s', paddingTop: 52, paddingBottom: 52 }}>
          <div
            className="absolute w-[280px] h-[280px] rounded-full pointer-events-none -top-24 left-1/2 -translate-x-1/2"
            style={{ background: 'rgba(244,183,64,0.12)', filter: 'blur(70px)' }}
          />
          <div
            className="w-14 h-14 rounded-[18px] flex items-center justify-center relative text-[#1a1206]"
            style={{ background: 'linear-gradient(155deg, var(--color-amber-2), var(--color-amber))', boxShadow: '0 1px 0 rgba(255,255,255,0.4) inset, 0 14px 30px -10px rgba(244,183,64,0.6)' }}
          >
            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
            </svg>
          </div>
          <h2 className="font-[var(--font-display)] font-bold text-[17px] relative">Les projets arrivent bientôt</h2>
          <p className="text-[var(--color-muted)] text-[13.5px] max-w-[340px] relative leading-relaxed">
            Chaque carte affichera une image, une description et un lien vers le dépôt ou la démo — dès que Xenix les ajoute.
          </p>

          <div className="grid gap-3 mt-2 w-full relative">
            {[0, 1].map((i) => (
              <div key={i} className="flex items-center gap-3 p-3.5 rounded-[14px] border border-dashed border-[var(--color-border)] bg-white/[0.015]">
                <div
                  className="w-11 h-11 rounded-[10px] flex-shrink-0"
                  style={{ background: 'repeating-linear-gradient(45deg, rgba(255,255,255,0.03), rgba(255,255,255,0.03) 4px, transparent 4px, transparent 8px)' }}
                />
                <div className="flex-1 flex flex-col gap-1.5">
                  <div className="h-2 rounded w-3/5" style={{ background: 'rgba(255,255,255,0.04)' }} />
                  <div className="h-2 rounded w-2/5" style={{ background: 'rgba(255,255,255,0.04)' }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          className="mt-7 mb-5 p-[22px] rounded-[18px] text-center reveal"
          style={{ background: 'linear-gradient(155deg, rgba(244,183,64,0.08), rgba(244,183,64,0.02))', border: '1px solid #f4b74025', animationDelay: '.24s' }}
        >
          <p className="text-[13px] text-[var(--color-muted)] mb-3.5">Un projet en tête ? Parlons-en pendant que la vitrine se remplit.</p>
          <Link to="/contact" className="btn-ghost-dark inline-flex items-center gap-2 px-5 py-2.75 rounded-xl text-[13.5px] font-semibold" style={{ paddingTop: 11, paddingBottom: 11 }}>
            Me contacter
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
          </Link>
        </div>
      </main>
    </div>
  )
}
