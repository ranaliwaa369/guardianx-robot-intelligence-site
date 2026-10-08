import { SiteHeader } from '@/components/site/site-header'
import { Hero } from '@/components/site/hero'
import { WhatWeDo } from '@/components/site/what-we-do'
import { Services } from '@/components/site/services'
import { Process } from '@/components/site/process'
import { FeaturedProject } from '@/components/site/featured-project'
import { Contact } from '@/components/site/contact'
import { SiteFooter } from '@/components/site/site-footer'

export default function Page() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
      >
        Skip to content
      </a>
      <SiteHeader />
      <main id="main">
        <Hero />
        <WhatWeDo />
        <Services />
        <Process />
        <FeaturedProject />
        <Contact />
      </main>
      <SiteFooter />
    </>
  )
}
