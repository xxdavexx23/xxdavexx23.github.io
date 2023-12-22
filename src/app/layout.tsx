import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'David Cohen',
  description: 'Welcome to my Website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <h1>HELLO Im in Layout</h1>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
