import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { site } from '@/lib/site'

const focusAreas = ['Custom AI brains', 'Software upgrades', 'Simulation & testing']

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="relative isolate overflow-hidden pt-16">
      <Image
        src="/images/hero-robot.png"
        alt="Robotic head and arm illuminated by teal light in a dark engineering lab"
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover object-[70%_center] opacity-70"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-background via-background/85 to-background/20" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-background via-transparent to-transparent" />
      <div className="bg-grid absolute inset-0 -z-10 [mask-image:linear-gradient(to_right,black,transparent_70%)]" />

      <div className="mx-auto flex min-h-[calc(100svh-4rem)] max-w-7xl flex-col justify-center px-5 py-24 md:px-8">
        <div className="max-w-2xl animate-in fade-in slide-in-from-bottom-4 duration-700">
          <p className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 font-mono text-xs uppercase tracking-[0.2em] text-primary">
            <span className="size-1.5 rounded-full bg-primary animate-pulse-dot" aria-hidden="true" />
            {site.tagline}
          </p>
          <h1 id="hero-title" className="mt-6 text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl md:text-7xl">
            Your Robot.{' '}
            <span className="block bg-gradient-to-r from-primary to-cyan bg-clip-text text-transparent">A New Intelligence.</span>
          </h1>
          <p className="mt-4 text-pretty font-mono text-sm uppercase tracking-[0.15em] text-foreground/80 sm:text-base">
            Custom Intelligence for the Next Generation of Robotics.
          </p>
          <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Custom AI brains, robotics software, and intelligent system upgrades for customer-owned robots.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Explore Our Services
              <ArrowRight className="size-4" aria-hidden="true" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-md border border-border bg-secondary/60 px-6 py-3 text-sm font-medium backdrop-blur transition-colors hover:border-primary/50 hover:bg-secondary"
            >
              Request a Consultation
            </a>
          </div>
          <ul className="mt-12 flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs uppercase tracking-widest text-muted-foreground">
            {focusAreas.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="h-px w-4 bg-primary" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
