import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/nav-bar'
import { Work_Sans } from 'next/font/google'
const work = Work_Sans({ subsets: ['latin'], weight: ['400', '500' , '600' , '700' , '800'] })

export const metadata: Metadata = {
  title: 'APK 24',
  description: 'description',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={work.className}>
        {children}</body>
    </html>
  )
}
