import Image from 'next/image'
import { Check, X } from 'lucide-react'
import { SectionHeading } from './section-heading'

const weDo = [
  'Design, customize, and upgrade robot software intelligence',
  'Assess compatibility of the robot you already own',
  'Simulate and test behavior before any integration',
]

const weDont = ['Manufacture physical robots', 'Sell robot hardware', 'Modify robots without authorization']

export function WhatWeDo() {
  return (
    <section id="what-we-do" aria-labelledby="what-we-do-title" className="border-t border-border/60 py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 md:px-8 lg:grid-cols-2 lg:gap-20">
        <div>
          <SectionHeading
            id="what-we-do-title"
            eyebrow="01 / What We Do"
            title="Robotics software. Not hardware manufacturing."
            description="GuardianX is a robotics software initiative. You supply the robot — we focus entirely on the intelligence that runs it. After evaluating compatibility, we design software that gives your robot new capabilities and a new purpose."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <div>
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-foreground">We focus on</h3>
              <ul className="mt-4 space-y-3">
                {weDo.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-foreground">We do not</h3>
              <ul className="mt-4 space-y-3">
                {weDont.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                    <X className="mt-0.5 size-4 shrink-0 text-muted-foreground/70" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-border">
            <Image
              src="/images/software-lab.png"
              alt="Robotics software workstation with code and kinematics diagrams next to a connected robot arm"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
            <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
              <div className="animate-scan h-1/3 w-full bg-gradient-to-b from-transparent via-primary/10 to-transparent" />
            </div>
          </div>
          <div className="absolute -bottom-6 left-6 right-6 rounded-lg border border-border bg-card/90 p-4 backdrop-blur sm:left-auto sm:w-72">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary">Our model</p>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
              Customer-owned hardware. GuardianX-engineered intelligence.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
