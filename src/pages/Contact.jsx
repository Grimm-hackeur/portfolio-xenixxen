import { useState } from 'react'
import PageHeader from '../components/PageHeader.jsx'
import GithubIcon from '../components/GithubIcon.jsx'

const CHANNELS = [
  {
    label: 'Email', value: 'xenoxxen@xenix.xen', href: 'mailto:xenizzxenn@gmail.com',
    icon: <><path d="M22 6l-10 7L2 6" /><rect x="2" y="4" width="20" height="16" rx="2" /></>,
  },
  {
    label: 'Telegram', value: '@Just_xenix', href: 't.me/Just_xenix',
    icon: <><line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" /></>,
  },
  {
    label: 'WhatsApp', value: 'Discuter directement', href: '#',
    icon: <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />,
  },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Nouveau message de ${form.name || 'un visiteur'} — via klivens.dev`)
    const body = encodeURIComponent(
      `Nom : ${form.name}\nEmail : ${form.email}\n\nMessage :\n${form.message}`
    )
    window.location.href = `mailto:xenizzxenn@gmail.com?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <div className="pb-4">
      <PageHeader eyebrow="Contact" title="Discutons de ton projet" subtitle="Un projet en tête, une question, ou juste envie d'échanger — choisis ton canal." />

      <main className="px-5 pt-6 max-w-xl mx-auto">
        <div className="reveal" style={{ animationDelay: '.1s' }}>
          <div className="status-badge mb-5.5" style={{ marginBottom: 22 }}>
            <span className="pulse-dot" />
            Réponse habituelle sous 24h
          </div>
        </div>

        <div className="flex flex-col gap-2.5 reveal" style={{ animationDelay: '.16s' }}>
          {CHANNELS.map((c, i) => (
            <a
              key={c.label}
              href={c.href}
              className="group flex items-center gap-3.5 p-4 rounded-2xl border border-[var(--color-border)] bg-white/[0.02] relative overflow-hidden hover:border-[#f4b74055] hover:-translate-y-0.5 transition duration-300"
              style={{ boxShadow: '0 0 0 rgba(0,0,0,0)' }}
            >
              <span className="absolute top-3 right-4 font-[var(--font-mono)] text-[11px] tracking-widest" style={{ color: '#5a4a2a' }}>
                0{i + 1}
              </span>
              <span className="w-11 h-11 rounded-[13px] flex-shrink-0 flex items-center justify-center bg-[var(--color-amber)]/10 border border-[#f4b74033] text-[var(--color-amber)] group-hover:bg-[var(--color-amber)] group-hover:text-[#1a1206] transition duration-300">
                <svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" strokeWidth="2">{c.icon}</svg>
              </span>
              <div>
                <div className="text-[11px] text-[var(--color-muted)] uppercase tracking-wide font-semibold">{c.label}</div>
                <div className="text-[14.5px] font-semibold mt-0.5">{c.value}</div>
              </div>
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" className="ml-auto text-[var(--color-muted)] group-hover:text-[var(--color-amber)] group-hover:translate-x-1 transition duration-300">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
          ))}
          <a
            href="https://github.com/xenixxenox"
            className="group flex items-center gap-3.5 p-4 rounded-2xl border border-[var(--color-border)] bg-white/[0.02] relative overflow-hidden hover:border-[#f4b74055] hover:-translate-y-0.5 transition duration-300"
          >
            <span className="absolute top-3 right-4 font-[var(--font-mono)] text-[11px] tracking-widest" style={{ color: '#5a4a2a' }}>04</span>
            <span className="w-11 h-11 rounded-[13px] flex-shrink-0 flex items-center justify-center bg-[var(--color-amber)]/10 border border-[#f4b74033]https://github.com/xenixxenox text-[var(--color-amber)] group-hover:bg-[var(--color-amber)] group-hover:text-[#1a1206] transition duration-300">
              <GithubIcon size={19} />
            </span>
            <div>
              <div className="text-[11px] text-[var(--color-muted)] uppercase tracking-wide font-semibold">GitHub</div>
              <div className="text-[14.5px] font-semibold mt-0.5">klivens</div>
            </divmber)] group-hover:translate-x-1 transition duration-300">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
        </div>

        <div className="flex items-center gap-3 my-7 reveal" style={{ animationDelay: '.22s' }}>
          <div className="flex-1 h-px bg-[var(--color-border)]" />
          <span className="text-[11px] text-[var(--color-muted)] uppercase tracking-wide">ou écris directement</span>
          <div className="flex-1 h-px bg-[var(--color-border)]" />
        </div>

        <form onSubmit={handleSubmit} className="glass rounded-[20px] p-[22px] mb-6 reveal" style={{ animationDelay: '.26s' }}>
          <div className="mb-3.5">
            <label className="block text-[11.5px] font-semibold text-[var(--color-muted)] uppercase tracking-wide mb-1.5">Nom</label>
            <input
              type="text"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="Ton nom"
              className="w-full px-3.5 py-3 rounded-xl bg-white/[0.03] border border-[var(--color-border)] text-[var(--color-ink)] text-sm outline-none focus:border-[var(--color-amber)] focus:bg-[var(--color-amber)]/5 transition duration-200"
              style={{ boxShadow: 'none' }}
            />
          </div>
          <div className="mb-3.5">
            <label className="block text-[11.5px] font-semibold text-[var(--color-muted)] uppercase tracking-wide mb-1.5">Email</label>
            <input
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="ton@email.com"
              className="w-full px-3.5 py-3 rounded-xl bg-white/[0.03] border border-[var(--color-border)] text-[var(--color-ink)] text-sm outline-none focus:border-[var(--color-amber)] focus:bg-[var(--color-amber)]/5 transition duration-200"
            />
          </div>
          <div className="mb-3.5">
            <label className="block text-[11.5px] font-semibold text-[var(--color-muted)] uppercase tracking-wide mb-1.5">Message</label>
            <textarea
              required
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder="Parle-moi de ton projet..."
              rows={4}
              className="w-full px-3.5 py-3 rounded-xl bg-white/[0.03] border border-[var(--color-border)] text-[var(--color-ink)] text-sm outline-none focus:border-[var(--color-amber)] focus:bg-[var(--color-amber)]/5 transition duration-200 resize-y"
            />
          </div>
          <button type="submit" className="btn-primary-amber w-full py-3.5 rounded-xl font-bold text-sm flex items-center justify-center gap-2">
            {sent ? 'Client mail ouvert ✓' : 'Envoyer le message'}
            <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" />
            </svg>
          </button>
          <p className="text-[11.5px] text-[var(--color-muted)] text-center mt-3">
            Ouvre ton application mail avec le message pré-rempli.
          </p>
        </form>
      </main>
    </div>
  )
}
