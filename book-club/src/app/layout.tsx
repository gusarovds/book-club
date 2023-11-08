import type { Metadata } from 'next'
import './globals.css'
import { MAIN_PAGE } from '@/constants/main'
import Header from '@/components/Header/Header'
import localFont from 'next/font/local'
const mainFont = localFont({ src: '../../public/fonts/bertsans_light.ttf' })

export const metadata: Metadata = {
  title: MAIN_PAGE.title,
  description:  MAIN_PAGE.description,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={mainFont.className}>
        <Header/>
        {children}
      </body>
    </html>
  )
}
