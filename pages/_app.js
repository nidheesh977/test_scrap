import '../styles/globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Container from '@mui/material/Container';
import { useState, useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  let [loggedIn, setLoggedIn] = useState(false)
  useEffect(()=>{
    if (localStorage.getItem("access")){
      console.log("Logged in")
      setLoggedIn(true)
    }else{
      console.log("not logged in")
      setLoggedIn(false)
    }
  }, [])
  const logout = () => {
    localStorage.clear()
    setLoggedIn(false)
  }
  const updateLoginStatus = (status) => {
    setLoggedIn(status)
  }
  return (
    <>
      <Navbar isLoggedIn = {loggedIn} logout = {logout}/>
      <Container maxWidth="xxl">
        <Component {...pageProps} updateLoginStatus = {updateLoginStatus} isLoggedIn = {loggedIn} logout = {logout}/>
      </Container>
      <Footer isLoggedIn = {loggedIn} />
    </>
  )
}

export default MyApp
