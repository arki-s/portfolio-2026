import type { Metadata, Viewport } from 'next'
import { Inter, Noto_Sans_JP } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter',
})

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  variable: '--font-noto-sans-jp',
})

export const metadata: Metadata = {
  title: 'Rika Saito | Full-stack Engineer',
  description: 'Full-stack software engineer specializing in React, TypeScript, Python, and cloud technologies. Building scalable web applications with modern frameworks.',
  keywords: ['Software Engineer', 'Full Stack Developer', 'React', 'TypeScript', 'Python', 'Next.js'],
  authors: [{ name: 'Rika Saito' }],
  openGraph: {
    title: 'Rika Saito | Full-stack Engineer',
    description: 'Full-stack software engineer building scalable web applications',
    type: 'website',
  },
  icons: {
    icon: { url: '/favicon.svg', type: 'image/svg+xml' },
  },
}

export const viewport: Viewport = {
  themeColor: '#1a0f0a',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${notoSansJP.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
