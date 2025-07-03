import type { Metadata } from 'next'
import './global.css'

export const metadata: Metadata = {
  title: 'NextJS Lite Boilerplate',
  description: 'Only includes what you actually need:',
  appleWebApp: {
    capable: true,
    title: 'NextJS Lite',
    statusBarStyle: 'default',
  },
  openGraph: {
    title: 'NextJS Lite Boilerplate',
    description: 'Only includes what you actually need:',
    images: [{
      url: '/og.png',
      width: 1200,
      height: 630,
      alt: 'Site preview',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NextJS Lite Boilerplate',
    description: 'Only includes what you actually need:',
    images: ['/og.png'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className="antialiased"
      >
        {children}
      </body>
    </html>
  )
}
