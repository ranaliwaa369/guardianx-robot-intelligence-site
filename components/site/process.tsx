import { SectionHeading } from './section-heading'

const steps = [
  {
    title: 'Share your robot specifications',
    description: 'You provide the manufacturer, model, current functionality, and what you want the robot to do next.',
  },
  {
    title: 'Compatibility evaluation',
    description: 'GuardianX evaluates software and hardware compatibility, available interfaces, and authorization.',
  },
  {
    title: 'Custom software design',
    description: 'We design a custom software solution scoped to what your specific robot can technically support.',
  },
  {
    title: 'Simulate, test, integrate',
    description: 'We simulate and test the solution, then integrate it on the robot where technically supported.',
  },
]

export function Process() {
  return (
    <section id="process" aria-labelledby="process-title" className="border-t border-border/60 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          id="process-title"
          eyebrow="03 / How It Works"
          title="A clear, four-step engineering process."
          description="Transparent from the first conversation: we confirm what is possible before any design work begins."
        />
        <ol className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <li key={step.title} className="relative">
              <div className="flex items-center gap-4">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-primary/50 bg-background font-mono text-sm text-primary">
                  {i + 1}
                </span>
                {i < steps.length - 1 && (
                  <span className="hidden h-px flex-1 bg-gradient-to-r from-primary/50 to-border lg:block" aria-hidden="true" />
                )}
              </div>
              <p className="mt-6 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Step {i + 1}</p>
              <h3 className="mt-2 text-lg font-semibold">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
