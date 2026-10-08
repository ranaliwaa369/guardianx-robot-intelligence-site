import { Mail, Phone } from 'lucide-react'
import { site } from '@/lib/site'
import { SectionHeading } from './section-heading'
import { InquiryForm } from './inquiry-form'

const notes = [
  'Include the exact manufacturer and model so we can research available interfaces.',
  'Tell us whether you have SDK, API, or developer-mode access.',
  'You must own the robot or be authorized to modify it.',
]

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="relative border-t border-border/60 py-24 md:py-32">
      <div className="absolute inset-x-0 top-0 -z-10 h-96 bg-[radial-gradient(ellipse_at_top,var(--color-primary)_0%,transparent_60%)] opacity-[0.08]" />
      <div className="mx-auto grid max-w-7xl gap-12 px-5 md:px-8 lg:grid-cols-5 lg:gap-16">
        <div className="lg:col-span-2">
          <SectionHeading
            id="contact-title"
            eyebrow="05 / Get Started"
            title="Request a Custom Robot Brain"
            description="Tell us about your robot and what you want it to become. We will review compatibility before discussing any solution."
          />
          <ul className="mt-10 space-y-4">
            {notes.map((note, i) => (
              <li key={note} className="flex gap-4 text-sm leading-relaxed text-muted-foreground">
                <span className="font-mono text-xs text-primary">{String(i + 1).padStart(2, '0')}</span>
                {note}
              </li>
            ))}
          </ul>
          <dl className="mt-10 space-y-4 rounded-xl border border-border bg-card p-6">
            <div className="flex items-center gap-4">
              <Mail className="size-4 shrink-0 text-primary" aria-hidden="true" />
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Email</dt>
                <dd>
                  <a href={`mailto:${site.contactEmail}`} className="text-sm font-medium transition-colors hover:text-primary">
                    {site.contactEmailDisplay}
                  </a>
                </dd>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="size-4 shrink-0 text-primary" aria-hidden="true" />
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Phone</dt>
                <dd>
                  <a href={site.phoneHref} className="text-sm font-medium transition-colors hover:text-primary">
                    {site.phoneDisplay}
                  </a>
                </dd>
              </div>
            </div>
          </dl>
        </div>
        <div className="lg:col-span-3">
          <InquiryForm />
        </div>
      </div>
    </section>
  )
}
