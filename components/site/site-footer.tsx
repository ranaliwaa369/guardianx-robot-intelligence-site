import { ArrowUpRight } from 'lucide-react'
import { navLinks, site } from '@/lib/site'
import { Logo } from './logo'

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 py-14">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-5 md:flex-row md:items-start md:justify-between md:px-8">
        <div className="max-w-sm">
          <Logo />
          <p className="mt-5 text-sm font-medium">{site.company}</p>
          <p className="text-sm text-muted-foreground">Robotics Software &amp; Intelligent Systems</p>
          <address className="mt-4 flex flex-col gap-1 text-sm not-italic">
            <a href={`mailto:${site.contactEmail}`} className="text-muted-foreground transition-colors hover:text-primary">
              {site.contactEmailDisplay}
            </a>
            <a href={site.phoneHref} className="text-muted-foreground transition-colors hover:text-primary">
              {site.phoneDisplay}
            </a>
          </address>
          <p className="mt-4 font-mono text-xs uppercase tracking-[0.2em] text-primary">{site.tagline}</p>
        </div>
        <nav aria-label="Footer" className="grid grid-cols-2 gap-x-12 gap-y-3 text-sm">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-muted-foreground transition-colors hover:text-foreground">
              {link.label}
            </a>
          ))}
          <a
            href={site.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="col-span-2 inline-flex items-center gap-1.5 text-muted-foreground transition-colors hover:text-primary"
          >
            Crawl-Q4 repository on GitHub
            <ArrowUpRight className="size-3.5" aria-hidden="true" />
            <span className="sr-only">(opens in a new tab)</span>
          </a>
        </nav>
      </div>
      <div className="mx-auto mt-12 max-w-7xl px-5 md:px-8">
        <p className="border-t border-border/60 pt-6 text-xs text-muted-foreground">
          {`© ${new Date().getFullYear()} ${site.company}. GuardianX does not manufacture or sell robots. Software services depend on robot compatibility and owner authorization.`}
        </p>
      </div>
    </footer>
  )
}
