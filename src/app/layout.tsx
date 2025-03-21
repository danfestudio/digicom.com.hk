import './globals.css'
import { GoogleAnalytics } from '@next/third-parties/google'
import { Inter, Poppins } from 'next/font/google'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import LayoutManager from './LayoutManager';
import type { Metadata } from 'next'

// const inter = Inter({ subsets: ['latin'] })
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.digicom.com.hk/'),
  alternates: {
    canonical: '/',
    // languages: {
    //   'en-US': '/en-US',
    //   'de-DE': '/de-DE',
    // },
  },
  keywords: ['Digicom', 'Digicom Nepal', 'digicom nepal', 'digicom', 'digicom products'],
  title: 'Digicom | Networking Solutions, Consumer Electronics, Household Appliances',
  description: 'DIGICOM, based in Hong Kong, is a technology leader with over 20 years of expertise in networking solutions, consumer electronics, and household appliances.',
  openGraph: {
    images: `/digicomofficial.png`,
  },
  // icons: {
  //   icon: "/favicon.ico",
  // },
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en" className='scroll-smooth' >
      <GoogleAnalytics gaId="G-Z9FRFM8G5J" />
      <body className={poppins.className}>
        <LayoutManager>
          {children}
        </LayoutManager>

      </body>
    </html>
  )
}
