import { Analytics } from '@vercel/analytics/react';
import './globals.css'
import { Work_Sans } from 'next/font/google'
import LenisScroll from './lenis'
import LoadingPage from '@/components/loading-page'
const work = Work_Sans({ subsets: ['latin'], weight: ['400', '500' , '600' , '700' , '800'] })

export const metadata = {
  metadataBase: new URL('https://apk.com'),
  openGraph: {
    title: 'Africa product keynote : SEO title ',
    description: "SEO decription ",
    type: 'article',
    publishedTime: '2023-8-31T00:00:00.000Z',
    authors: ['TDEV COMMUNITY'],
    url: 'festival.ourtdev.com',
    siteName: 'Tdev festival 2023',
    locale: 'fr_TG',
    images: [
      {
        url: 'https://media.licdn.com/dms/image/D4D22AQFXza8Pa_TsnA/feedshare-shrink_800/0/1699878730955?e=1704326400&v=beta&t=PYmpFaM9BztvRRSY4Ew24f0GB4R-ys470HLHGH5BQNs',
        width: 800,
        height: 600,
      },
      {
        url: 'https://media.licdn.com/dms/image/D4D22AQFXza8Pa_TsnA/feedshare-shrink_800/0/1699878730955?e=1704326400&v=beta&t=PYmpFaM9BztvRRSY4Ew24f0GB4R-ys470HLHGH5BQNs',
        width: 1800,
        height: 1600,
        alt: 'Africa product keynote',
      },
    ],
  },
  title: {
    default: "APK Title SEO ici ",
    template: "%s"
  },
  description: "description APK SEO "
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={work.className}>

        <LenisScroll/>
        <LoadingPage/>
        {children}
        <Analytics />
        </body>
        
    </html>
  )
}
