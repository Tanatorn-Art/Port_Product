import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Dev.Portfolio — Full-Stack Engineer',
  description: 'Portfolio, Blog & Products — Tech Clean Design',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
