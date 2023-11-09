import { SessionProvider } from "next-auth/react"
import { Inter } from 'next/font/google'
import '../styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Urban Farming Oasis',
  description: 'DevHack 2021',
}


export default function App({ Component, session, pageProps, children }) {
  return (
    <>
      <SessionProvider session={session}>
        <Component {...pageProps}>{children}</Component>
      </SessionProvider>
    </>
  )
}