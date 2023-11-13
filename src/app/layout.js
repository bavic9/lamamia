import { Inter, Montserrat } from 'next/font/google'
import './globals.css'
import { Navbar } from 'react-bootstrap'
import Nav from '@/components/navbar/Nav'
import Footer from '@/components/footer/Footer'

const inter = Inter({ subsets: ['latin'] })
const montserrat = Montserrat({ subsets: ['latin'], weight: '400' })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <div className='container'>
          <Nav/>
          {children}
          <Footer/>
        </div>
      </body>
    </html>
  )
}
