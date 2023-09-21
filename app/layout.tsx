import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import ThemeRegistry from '@/theme/ThemeRegistry'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Task 1',
  description: 'Cypress task_1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <ThemeRegistry>
        <body className={inter.className}>
          <Navbar />
            {children}
          <Footer />
        </body>
      </ThemeRegistry>
    </html>
  )
}
