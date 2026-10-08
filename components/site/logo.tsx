import Image from 'next/image'

export function Logo() {
  return (
    <a href="#top" className="flex items-center gap-3" aria-label="GuardianX home">
      <Image
        src="/images/guardianx-logo.jpeg"
        alt="GuardianX"
        width={1320}
        height={647}
        priority
        className="h-10 w-auto rounded-md md:h-14"
      />
      <span className="hidden font-mono text-[10px] uppercase leading-tight tracking-[0.2em] text-muted-foreground sm:block md:text-xs">
        Robot
        <br />
        Intelligence Lab
      </span>
    </a>
  )
}
