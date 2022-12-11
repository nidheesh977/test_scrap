import React, {useState, useEffect} from 'react'
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
import axios from 'axios';
import Router from 'next/router';
import CircularProgress from '@mui/material/CircularProgress';

const backend = process.env.NEXT_PUBLIC_BACKEND

function Login(props) {
  let [showPassword, setShowPassword] = useState(false)
  let [validationErrors, setValidationErrors] = useState({
    email: {error: false, msg: ""},
    password1: {error: false, msg: ""},
    password2: {error: false, msg: ""},
    others: {error: false, msg: ""}
  })
  let [data, setData] = useState({
    email: "",
    password: "",
  })
  let [loading, setLoading] = useState(false)

  useEffect(()=>{
    if(localStorage.getItem("access")){
      Router.push("/404")
    }
  }, [])

  const toggleShowPassword = () => {
    setShowPassword(!showPassword)
  }

  const changeHandler = (e) => {
    let temp_data = data
    data[e.target.name] = e.target.value
    setData({...temp_data})
    setValidationErrors({...validationErrors, [e.target.id]: {error: false, msg: ""}, others: {error: false, msg: ""}})
  }
  
  const clickSubmit = () => {
    console.log(data)
    setLoading(true)
    if (data.email === "" || data.password === ""){
      setLoading(false)
      let temp_err = validationErrors
      if (data.password === ""){
        temp_err.password = {error: true, msg: "Password is required"}
        document.getElementById("password").focus()
      }
      if (data.email === ""){
        temp_err.email = {error: true, msg: "Email is required"}
        document.getElementById("email").focus()
      }
      setValidationErrors({...temp_err})
    }else{
      axios.post(`${backend}/api/signin`, {
        email: data.email,
        password: data.password,
      })
      .then(res => {
        console.log(res)
        localStorage.setItem("access", res.data.data.access)
        localStorage.setItem("refresh", res.data.data.refresh)
        props.updateLoginStatus(true)
        Router.push("/")
        setLoading(false)
      })
      .catch(err => {
        console.log(err)
        setLoading(false)
        setValidationErrors({...validationErrors, others: {error: true, msg: "Invalid credentials"}})
      })
    }
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
                      <input type="email" name="email" id="email" className = "input1" onChange = {changeHandler}/>
                      <MailOutlinedIcon className = {styles.inputIcon}/>
                    </div>
                    <p className = "form-err-msg" id = "email-err-msg" style = {{display: validationErrors.email.error?"block": 'none'}}>{validationErrors.email.msg}</p>
                    <label htmlFor = "password1" className = "label">Password</label>
                    <div className = {styles.inputContainer}>
                      <input type={showPassword?"text":"password"} name="password1" id="password1" className = "input1" onChange = {changeHandler} />
                      {showPassword
                        ? <VisibilityOutlinedIcon className = {`${styles.inputIcon} c-pointer`} onClick = {toggleShowPassword}/>
                        : <VisibilityOffOutlinedIcon className = {`${styles.inputIcon} c-pointer`} onClick = {toggleShowPassword}/>
                      }
                    </div>
                    <p className = "form-err-msg" id = "password1-err-msg" style = {{display: validationErrors.password1.error?"block": 'none'}}>{validationErrors.password1.msg}</p>
                    <label htmlFor = "password2" className = "label">Confirm Password</label>
                    <div className = {styles.inputContainer}>
                      <input type={showPassword?"text":"password"} name="password2" id="password2" className = "input1" onChange = {changeHandler} />
                      {showPassword
                        ? <VisibilityOutlinedIcon className = {`${styles.inputIcon} c-pointer`} onClick = {toggleShowPassword}/>
                        : <VisibilityOffOutlinedIcon className = {`${styles.inputIcon} c-pointer`} onClick = {toggleShowPassword}/>
                      }
                    </div>
                    <p className = "form-err-msg" id = "password2-err-msg" style = {{display: validationErrors.password2.error?"block": 'none'}}>{validationErrors.password2.msg}</p>
                    <p className="form-err-msg" id="other-err-msg" style = {{display: validationErrors.others.error?"block": 'none'}}>
                      {validationErrors.others.msg}
                    </p>
                    <Button variant="contained" className = {styles.submitBtn} onClick = {clickSubmit} disabled = {loading}>Sign In
                      {loading?<CircularProgress color="inherit" size={"20px"} sx = {{marginLeft: "20px"}}/>:""}  
                    </Button>
                    <p className = {styles.redirectionLinkContent}>Don’t have an account? <Link href = "/signup" className = {styles.redirectionLink} >Sign Up</Link></p>
                  </div>
                </Box>
            </Grid>
        </Grid>
    </section>
  )
}

export default Login