import { Brain, Cpu, Layers, ShieldCheck, FlaskConical, Info } from 'lucide-react'
import { SectionHeading } from './section-heading'

const services = [
  {
    icon: Brain,
    title: 'Custom Robot Brain Development',
    description:
      'Purpose-built software intelligence designed around your robot’s sensors, actuators, and the tasks you want it to perform.',
  },
  {
    icon: Cpu,
    title: 'Robot AI Reprogramming',
    description:
      'Reworking existing robot behavior and decision logic so a compatible robot can serve a new role or workflow.',
  },
  {
    icon: Layers,
    title: 'Intelligence Upgrades and Integration',
    description:
      'Adding capabilities such as computer vision, navigation, or new control logic on top of supported robot platforms.',
  },
  {
    icon: ShieldCheck,
    title: 'Authorized Robot Data Reset and Ownership Transition',
    description:
      'Helping verified owners clear prior data and configurations when a robot changes hands — performed only with proof of authorization.',
  },
  {
    icon: FlaskConical,
    title: 'Robotics Software Simulation and Testing',
    description:
      'Validating behavior in simulation with automated tests before any software is considered for a physical robot.',
  },
]

export function Services() {
  return (
    <section id="services" aria-labelledby="services-title" className="relative border-t border-border/60 py-24 md:py-32">
      <div className="bg-grid absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          id="services-title"
          eyebrow="02 / Our Services"
          title="Software intelligence, engineered for your robot."
          description="Every engagement starts with your robot and your goal. These are the core areas where we design and deliver custom robotics software."
        />
        <ul className="mt-14 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, description }, i) => (
            <li key={title} className="group relative bg-background p-7 transition-colors hover:bg-card">
              <div className="flex items-center justify-between">
                <span className="flex size-11 items-center justify-center rounded-lg border border-primary/30 bg-primary/10 text-primary transition-colors group-hover:border-primary/60">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <span className="font-mono text-xs text-muted-foreground">{String(i + 1).padStart(2, '0')}</span>
              </div>
              <h3 className="mt-6 text-lg font-semibold leading-snug">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{description}</p>
            </li>
          ))}
          <li className="flex flex-col justify-between gap-6 bg-primary/[0.06] p-7">
            <span className="flex size-11 items-center justify-center rounded-lg border border-border text-foreground">
              <Info className="size-5" aria-hidden="true" />
            </span>
            <div>
              <h3 className="text-lg font-semibold">Compatibility comes first</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                All services depend on robot compatibility, available software and hardware interfaces, and verified
                owner authorization. Not every robot can be reprogrammed, and we will tell you clearly if yours cannot.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  )
}
