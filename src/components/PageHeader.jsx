export default function PageHeader({ eyebrow, title, subtitle }) {
  return (
    <div className="px-5 pt-8 pb-2 reveal" style={{ animationDelay: '.05s' }}>
      <span className="eyebrow font-[var(--font-display)] text-xs font-semibold tracking-widest uppercase text-[var(--color-amber)] mb-2.5">
        {eyebrow}
      </span>
      <h1 className="title-gradient font-[var(--font-display)] font-bold tracking-tight text-[clamp(1.9rem,8vw,2.6rem)] mt-2.5">
        {title}
      </h1>
      {subtitle && <p className="text-[var(--color-muted)] text-sm mt-1.5 max-w-md">{subtitle}</p>}
    </div>
  )
}
