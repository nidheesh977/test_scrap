import React, {useState} from 'react'
import styles from '../styles/LoginSignup.module.css'
import Image from 'next/image'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Link from 'next/link';
import LoginSignupImg from "../images/loginSignupImg.png"
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';

function Login() {
  let [showPassword, setShowPassword] = useState(false)

  const toggleShowPassword = () => {
    setShowPassword(!showPassword)
  }
  return (
    <section>
        <Grid container>
            <Grid item xs = {12} md = {6} sx = {{display: {xs: "none", md: "unset"}}}>
              <Box className = {styles.loginSignupImgContainer}>
                <div>
                  <Image src = {LoginSignupImg} className = {styles.loginSignupImg}/>
                  <h3 className='t-center'>Welcome Back</h3>
                </div>
              </Box>
            </Grid>
            <Grid item xs = {12} md = {6}>
                <Box className = {styles.formContainer}>
                  <div>
                    <h1 className = {styles.formTitle}>Sign In</h1>
                    <label htmlFor = "email" className = "label">Email</label>
                    <div className = {styles.inputContainer}>
                      <input type="email" name="email" id="email" className = "input1" />
                      <MailOutlinedIcon className = {styles.inputIcon}/>
                    </div>
                    <p className = "form-err-msg" id = "email-err-msg">Email is required</p>
                    <label htmlFor = "password" className = "label">Password</label>
                    <div className = {styles.inputContainer}>
                      <input type={showPassword?"text":"password"} name="password" id="password" className = "input1" />
                      {showPassword
                        ? <VisibilityOutlinedIcon className = {`${styles.inputIcon} c-pointer`} onClick = {toggleShowPassword}/>
                        : <VisibilityOffOutlinedIcon className = {`${styles.inputIcon} c-pointer`} onClick = {toggleShowPassword}/>
                      }
                    </div>
                    <p className = "form-err-msg" id = "email-err-msg">Password is required</p>
                    <Button variant="contained" className = {styles.submitBtn}>Sign In</Button>
                    <p className = {styles.redirectionLinkContent}>Don’t have an account? <Link href = "/signup" className = {styles.redirectionLink}>Sign Up</Link></p>
                  </div>
                </Box>
            </Grid>
        </Grid>
    </section>
  )
}

export default Login