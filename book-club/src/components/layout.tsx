import type { Metadata } from 'next'
import { MAIN_PAGE } from '@/constants/main'
import Header from '@/components/Header/Header'
import { Timeline } from '@/components/Timeline'
import localFont from 'next/font/local'
const mainFont = localFont({ src: '../../public/fonts/bertsans_light.ttf' })
import { Provider } from 'react-redux';
import { wrapper } from "@/store/store";
import Head from 'next/head';

const metadata = {
  title: MAIN_PAGE.title,
  description: MAIN_PAGE.description,
}

export default function RootLayout({
  children,
  ...rest
}: {
  children: React.ReactNode
}) {
  const { store } = wrapper.useWrappedStore(rest);
  return (
        <Provider store={store}>
          <Head>
            <title>{ metadata.title }</title>
            <link rel="shortcut icon" href="/logo.png" />
          </Head>
          <div className={`${mainFont.className} bg-slate-200 text-gray-950 flex flex-col`}>
            <Header/>
            <Timeline/>
            <div className="flex flex-col items-center">
              {children}
            </div>
          </div>
        </Provider>
  )
}
