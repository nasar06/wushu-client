import Footer from '@/components/Home/Footer'
import Header from '@/components/Home/Header'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return <>
  <Header />
  <Component {...pageProps} />
  <Footer />
  </>
}
