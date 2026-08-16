import { NavLink } from 'react-router-dom'

const ICONS = {
  home: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.5 2 10.8V21a1 1 0 0 0 1 1h5.5a1 1 0 0 0 1-1v-5.5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1V21a1 1 0 0 0 1 1H21a1 1 0 0 0 1-1V10.8L12 2.5Z" />
    </svg>
  ),
  about: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="12" cy="8" r="4.2" />
      <path d="M4.2 21c.6-4.2 3.9-6.5 7.8-6.5s7.2 2.3 7.8 6.5" />
    </svg>
  ),
  portfolio: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="14" rx="2" />
      <path d="M8 21h8M12 18v3" />
      <path d="M9 9l2 2-2 2M13 13h2" />
    </svg>
  ),
  friends: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M16.5 20v-1.8a3.6 3.6 0 0 0-3.6-3.6H6.6A3.6 3.6 0 0 0 3 18.2V20" />
      <circle cx="9.8" cy="7.8" r="3.6" />
      <path d="M21 20v-1.8a3.6 3.6 0 0 0-2.7-3.48" />
      <path d="M14.9 4.13a3.6 3.6 0 0 1 0 6.98" />
    </svg>
  ),
  contact: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="2.5" y="4.5" width="19" height="15" rx="2.5" />
      <path d="M3 7.5l8.4 6a1 1 0 0 0 1.2 0L21 7.5" />
    </svg>
  ),
}

const tabs = [
  { to: '/', label: 'Maison', icon: 'home' },
  { to: '/about', label: 'À propos', icon: 'about' },
  { to: '/portfolio', label: 'Projet', icon: 'portfolio', center: true },
  { to: '/friends', label: 'Amis', icon: 'friends' },
  { to: '/contact', label: 'Contact', icon: 'contact' },
]

export default function BottomTabBar() {
  return (
    <nav
      className="fixed bottom-0 left-0 right-0 flex border-t border-[var(--color-border)] z-20 px-1.5"
      style={{
        background: 'rgba(8,8,13,0.75)',
        backdropFilter: 'blur(20px)',
        paddingTop: 9,
        paddingBottom: 'calc(9px + env(safe-area-inset-bottom))',
        boxShadow: '0 -10px 30px -10px rgba(0,0,0,0.5)',
      }}
    >
      {tabs.map((t) => (
        <NavLink
          key={t.to}
          to={t.to}
          end={t.to === '/'}
          className={({ isActive }) =>
            `flex-1 flex flex-col items-center gap-1.5 pt-0.5 pb-1 text-[10.5px] transition duration-200 active:scale-95 relative ${
              t.center ? 'relative' : ''
            } ${isActive ? 'text-[var(--color-amber)]' : 'text-[var(--color-muted)]'}`
          }
        >
          {({ isActive }) => (
            <>
              <span
                className={`flex items-center justify-center rounded-xl border transition duration-300 ${
                  t.center
                    ? 'absolute -top-5 left-1/2 -translate-x-1/2 w-[46px] h-[46px] rounded-[14px]'
                    : 'w-[38px] h-[38px]'
                } ${
                  isActive
                    ? 'border-transparent text-[#1a1206]'
                    : 'border-[var(--color-border)] bg-white/[0.03]'
                }`}
                style={
                  isActive
                    ? {
                        background: 'linear-gradient(180deg, var(--color-amber-2), var(--color-amber))',
                        boxShadow: t.center
                          ? '0 1px 0 rgba(255,255,255,0.4) inset, 0 10px 24px -8px rgba(244,183,64,0.65), 0 0 0 4px var(--color-void)'
                          : '0 1px 0 rgba(255,255,255,0.4) inset, 0 10px 22px -8px rgba(244,183,64,0.65)',
                      }
                    : t.center
                    ? { boxShadow: '0 0 0 4px var(--color-void)' }
                    : undefined
                }
              >
                <span className="w-[18px] h-[18px]">{ICONS[t.icon]}</span>
              </span>
              <span className={t.center ? 'mt-6' : ''}>{t.label}</span>
              <span
                className="w-3.5 h-0.5 rounded-full transition duration-200"
                style={{
                  background: isActive ? 'var(--color-amber)' : 'transparent',
                  boxShadow: isActive ? '0 0 8px var(--color-amber)' : 'none',
                }}
              />
            </>
          )}
        </NavLink>
      ))}
    </nav>
  )
}
