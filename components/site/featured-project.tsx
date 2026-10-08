import Image from 'next/image'
import { ArrowUpRight, Move3d, Eye, Thermometer, Route, ShieldAlert, LayoutDashboard } from 'lucide-react'
import { site } from '@/lib/site'
import { SectionHeading } from './section-heading'

const features = [
  { icon: Move3d, label: 'Modular motion control' },
  { icon: Eye, label: 'Computer vision' },
  { icon: Thermometer, label: 'Environmental sensors' },
  { icon: Route, label: 'Navigation' },
  { icon: ShieldAlert, label: 'Safety logic' },
  { icon: LayoutDashboard, label: 'Browser-based dashboard' },
]

const status = [
  { label: 'Prototype', value: 'Demonstrated in simulation', state: 'done' },
  { label: 'Automated tests', value: '14 / 14 passed', state: 'done' },
  { label: 'Physical integration', value: 'Future development phase', state: 'pending' },
] as const

export function FeaturedProject() {
  return (
    <section id="crawl-q4" aria-labelledby="crawl-q4-title" className="border-t border-border/60 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          id="crawl-q4-title"
          eyebrow="04 / Featured Project"
          title="GuardianX Crawl-Q4"
          description="Our robotics software prototype designed for quadruped crawl-space inspection — a modular software stack built to explore tight, hard-to-reach spaces safely."
        />

        <div className="mt-14 grid overflow-hidden rounded-xl border border-border bg-card lg:grid-cols-5">
          <div className="relative aspect-[4/3] lg:col-span-3 lg:aspect-auto">
            <Image
              src="/images/crawl-q4-sim.png"
              alt="Simulation render of a quadruped inspection robot in a crawl space with a teal scan overlay"
              fill
              sizes="(min-width: 1024px) 60vw, 100vw"
              className="object-cover"
            />
            <span className="absolute left-4 top-4 rounded-md border border-border bg-background/80 px-2.5 py-1 font-mono text-[11px] uppercase tracking-[0.2em] text-primary backdrop-blur">
              Simulation view
            </span>
          </div>

          <div className="flex flex-col gap-8 p-7 md:p-10 lg:col-span-2">
            <div>
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Software features</h3>
              <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {features.map(({ icon: Icon, label }) => (
                  <li key={label} className="flex items-center gap-3 text-sm">
                    <Icon className="size-4 shrink-0 text-primary" aria-hidden="true" />
                    {label}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Current status</h3>
              <dl className="mt-4 divide-y divide-border rounded-lg border border-border">
                {status.map((item) => (
                  <div key={item.label} className="flex items-center justify-between gap-4 px-4 py-3 text-sm">
                    <dt className="text-muted-foreground">{item.label}</dt>
                    <dd className="flex items-center gap-2 text-right font-medium">
                      <span
                        className={
                          item.state === 'done'
                            ? 'size-1.5 rounded-full bg-primary'
                            : 'size-1.5 rounded-full border border-muted-foreground'
                        }
                        aria-hidden="true"
                      />
                      {item.value}
                    </dd>
                  </div>
                ))}
              </dl>
              <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                Crawl-Q4 is currently a software prototype. It has not yet been deployed on physical hardware.
              </p>
            </div>

            <a
              href={site.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              View Project on GitHub
              <ArrowUpRight className="size-4" aria-hidden="true" />
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
