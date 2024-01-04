
import { Inter, Montserrat } from 'next/font/google'
import './globals.css'
import Nav from '@/components/navbar/Nav'
import Footer from '@/components/footer/Footer'
import { ThemeProvider } from '@/context/ThemeContext'
import { AuthProvider } from '@/components/AuthProvider/AuthProvider'

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
          {/* <AuthProvider> */}
            <div className='container'>
              <Nav/>
              {children}
              <Footer/>
            </div>
          {/* </AuthProvider> */}
        </ThemeProvider>
      </body>
    </html>
  )
}
