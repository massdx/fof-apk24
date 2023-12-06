import { Analytics } from '@vercel/analytics/react';
import './globals.css'
import { Work_Sans } from 'next/font/google'
import LenisScroll from './lenis'
import LoadingPage from '@/components/loading-page'
import { Metadata } from 'next';
const work = Work_Sans({ subsets: ['latin'], weight: ['400', '500' , '600' , '700' , '800'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://apk.com'),
  openGraph: {
    title: "Explorez l'Émergence des Produits Numériques Africains avec Africa Product Keynote #APK2024",
    description: "Découvrez la révolution des solutions numériques conçues par et pour les Africains, célébrant fièrement nos racines culturelles. Plongez dans l'écosystème dynamique des produits africains lors de l'Africa Product Keynote #APK2024, dévoilant l'innovation, la créativité et l'avenir numérique du continent.",
    type: 'article',
    publishedTime: '2023-8-31T00:00:00.000Z',
    authors: ['Frient of figma lomé'],
    url: 'fof.tg',
    siteName: 'fof.tg',
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
  title: "Explorez l'Émergence des Produits Numériques Africains avec Africa Product Keynote #APK2024",
  description: "Découvrez la révolution des solutions numériques conçues par et pour les Africains, célébrant fièrement nos racines culturelles. Plongez dans l'écosystème dynamique des produits africains lors de l'Africa Product Keynote #APK2024, dévoilant l'innovation, la créativité et l'avenir numérique du continent."
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
