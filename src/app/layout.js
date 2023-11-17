import { Inter, Montserrat } from 'next/font/google'
import './globals.css'
import { Navbar } from 'react-bootstrap'
import Nav from '@/components/navbar/Nav'
import Footer from '@/components/footer/Footer'
import { ThemeProvider } from '@/context/ThemeContext'

const inter = Inter({ subsets: ['latin'] })
const montserrat = Montserrat({ subsets: ['latin'], weight: '400' })

export const metadata = {
  title: 'Lama Dev',
  description: 'This is the description',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <ThemeProvider>
          <div className='container'>
            <Nav/>
            {children}
            <Footer/>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
