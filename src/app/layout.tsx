import './globals.css'
import type { Metadata } from 'next'
import { Chakra_Petch } from 'next/font/google'

const inter = Chakra_Petch({
  weight: ['300','400','500', '600'],
  subsets: ['latin'],
  display:'auto',
  variable: "--chakra-petch"
})

export const metadata: Metadata = {
  title: 'Portfolio Clément Haon',
  description: 'Portfolio de Clément Haon développeur full stack',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
