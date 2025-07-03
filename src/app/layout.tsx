import type { Metadata } from 'next'
import './global.css'

export const metadata: Metadata = {
  title: 'NextJS Lite Boilerplate',
  appleWebApp: {
    capable: true,
    title: 'NextJS Lite Boilerplate',
    statusBarStyle: 'default',
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
