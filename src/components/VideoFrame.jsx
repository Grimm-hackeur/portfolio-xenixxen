import { useRef } from 'react'
import { HERO_VIDEO_SRC } from '../config.js'

export default function VideoFrame() {
  const stageRef = useRef(null)
  const frameRef = useRef(null)

  const applyTilt = (clientX, clientY) => {
    const stage = stageRef.current
    const frame = frameRef.current
    if (!stage || !frame) return
    const rect = stage.getBoundingClientRect()
    const x = (clientX - rect.left) / rect.width - 0.5
    const y = (clientY - rect.top) / rect.height - 0.5
    frame.style.animation = 'none'
    frame.style.transform = `rotateX(${(-y * 16).toFixed(2)}deg) rotateY(${(x * 18).toFixed(2)}deg)`
  }

  const resetTilt = () => {
    const frame = frameRef.current
    if (!frame) return
    frame.style.transform = 'rotateX(6deg) rotateY(-8deg)'
    frame.style.animation = ''
  }

  return (
    <div
      ref={stageRef}
      className="relative mx-auto"
      style={{ perspective: '1200px', width: 'min(340px, 82vw)' }}
      onMouseMove={(e) => applyTilt(e.clientX, e.clientY)}
      onMouseLeave={resetTilt}
      onTouchMove={(e) => {
        const t = e.touches[0]
        if (t) applyTilt(t.clientX, t.clientY)
      }}
      onTouchEnd={resetTilt}
    >
      {/* sparkles */}
      <span className="absolute w-[18px] h-[18px] -top-1.5 right-3 text-[var(--color-amber)] pointer-events-none animate-[sparkle_3.2s_ease-in-out_infinite]" style={{ animationDelay: '.5s' }}>
        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0l2.2 8.8L23 11l-8.8 2.2L12 22l-2.2-8.8L1 11l8.8-2.2z" /></svg>
      </span>
      <span className="absolute w-[10px] h-[10px] bottom-5 -left-1 text-[var(--color-amber)] pointer-events-none animate-[sparkle_3.2s_ease-in-out_infinite]" style={{ animationDelay: '1.4s' }}>
        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0l2.2 8.8L23 11l-8.8 2.2L12 22l-2.2-8.8L1 11l8.8-2.2z" /></svg>
      </span>

      <div
        ref={frameRef}
        className="w-full aspect-[4/3] rounded-[22px] p-[3px] will-change-transform"
        style={{
          background: 'linear-gradient(155deg, var(--color-amber-2), var(--color-amber) 35%, #4a3410 75%, #1a1a22)',
          boxShadow: '0 30px 60px -20px rgba(0,0,0,0.7), 0 0 60px -14px rgba(244,183,64,0.35)',
          transform: 'rotateX(6deg) rotateY(-8deg)',
          transition: 'transform .3s cubic-bezier(.16,1,.3,1)',
          animation: 'hero-float 7s ease-in-out infinite',
        }}
      >
        <div className="w-full h-full rounded-[19px] overflow-hidden bg-black relative">
          <video
            className="w-full h-full object-cover block"
            autoPlay
            muted
            loop
            playsInline
            src={HERO_VIDEO_SRC}
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: 'linear-gradient(115deg, rgba(255,255,255,0.14) 0%, transparent 30%)' }}
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: 'linear-gradient(180deg, transparent 55%, rgba(0,0,0,0.55) 100%)' }}
          />
          <div
            className="absolute -inset-px rounded-[19px] pointer-events-none"
            style={{ boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.08)' }}
          />
        </div>
      </div>

      <style>{`
        @keyframes hero-float {
          0%, 100% { transform: rotateX(6deg) rotateY(-8deg) translateY(0); }
          50% { transform: rotateX(4deg) rotateY(-6deg) translateY(-8px); }
        }
        @keyframes sparkle {
          0%, 100% { opacity: 0; transform: scale(0.6) rotate(0deg); }
          50% { opacity: .85; transform: scale(1) rotate(15deg); }
        }
      `}</style>
    </div>
  )
}
