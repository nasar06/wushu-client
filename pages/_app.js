import Footer from '@/components/Home/Footer'
import Header from '@/components/Home/Header'
import Navbar from '@/components/Home/Navbar'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return <>
  {/* <Header /> */}
  <Navbar />
  <Component {...pageProps} />
  <Footer />
  </>
}
