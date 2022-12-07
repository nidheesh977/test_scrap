import '../styles/globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Container from '@mui/material/Container';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Container maxWidth="xxl">
        <Component {...pageProps} />
      </Container>
      <Footer />
    </>
  )
}

export default MyApp
