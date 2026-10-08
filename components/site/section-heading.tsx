type SectionHeadingProps = {
  eyebrow: string
  title: string
  description?: string
  id?: string
}

export function SectionHeading({ eyebrow, title, description, id }: SectionHeadingProps) {
  return (
    <div className="max-w-2xl">
      <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary">{eyebrow}</p>
      <h2 id={id} className="mt-4 text-balance text-3xl font-semibold tracking-tight md:text-4xl">
        {title}
      </h2>
      {description && <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">{description}</p>}
    </div>
  )
}
