import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({ subsets: ['latin'], variable: '--font-geist-sans' })
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono' })

export const metadata: Metadata = {
  title: 'GuardianX Robot Intelligence Lab | Custom Robotics Software',
  description:
    'GuardianX develops, customizes, upgrades, and replaces software intelligence for customer-owned robots. Your Robot. Your Purpose. Our Intelligence.',
  generator: 'v0.app',
  keywords: [
    'robotics software',
    'custom robot brain',
    'robot AI reprogramming',
    'robot simulation',
    'GuardianX',
  ],
  openGraph: {
    title: 'GuardianX Robot Intelligence Lab',
    description: 'Custom AI brains, robotics software, and intelligent system upgrades for customer-owned robots.',
    images: ['/images/hero-robot.png'],
    type: 'website',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#151a1d',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} bg-background`}>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
