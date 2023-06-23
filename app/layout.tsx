import { useRouter } from 'next/router'
import Footer from './Footer'
import NavBar from './NavBar'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'MY NEXT 1',
  description: 'My first next js app',
}

export default function RootLayout({children,}: {
  children: React.ReactNode
}) {

  // const routes = useRouter()
  
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* {routes.} */}
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
