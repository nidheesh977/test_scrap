import React, { useState, useEffect } from "react";
import styles from "../styles/LoginSignup.module.css";
import Image from "next/image";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Link from "next/link";
import LoginSignupImg from "../images/loginSignupImg.png";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import axios from "axios"
import Router from "next/router";
import CircularProgress from '@mui/material/CircularProgress';
import { FormatListBulletedOutlined } from "@mui/icons-material";

const backend = process.env.NEXT_PUBLIC_BACKEND

function Signup(props) {
  let [showPassword1, setShowPassword1] = useState(false);
  let [showPassword2, setShowPassword2] = useState(false);
  let [passwordValidationChecked, setPasswordValidationChecked] = useState([
    1, 0, 0, 0,
  ]);
  let [validationErrors, setValidationErrors] = useState({
    first_name: {error: false, msg: ""},
    last_name: {error: false, msg: ""},
    email: {error: false, msg: ""},
    password1: {error: false, msg: ""},
    password2: {error: false, msg: ""},
    others: {error: false, msg: ""}
  })
  let [data, setData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password1: "",
    password2: ""
  })
  let [loading, setLoading] = useState(false)

  useEffect(()=>{
    if(localStorage.getItem("access")){
      Router.push("/404")
    }
  }, [])

  const toggleShowPassword1 = () => {
    setShowPassword1(!showPassword1);
  };

  const toggleShowPassword2 = () => {
    setShowPassword2(!showPassword2);
  };

  const changeHandler = (e) => {
    let temp_data = data
    data[e.target.name] = e.target.value
    setData({...temp_data})
    setValidationErrors({...validationErrors, [e.target.id]: {error: false, msg: ""}, others: {error: false, msg: ""}})
  }

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
  
  const clickSubmit = () => {
    console.log(validateEmail(data.email))
    setLoading(true)
    if(!validateEmail(data.email)){
      setValidationErrors({...validationErrors, email: {error: true, msg: "Enter a valid email address."}})
      document.getElementById("email").focus()
      setLoading(false)
    }else if (data.password1 === data.password2){
      axios.post(`${backend}/api/signup`, {
        first_name: data.first_name,
        last_name: data.last_name,
        email: data.email,
        password1: data.password1,
        password2: data.password2,
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
        try{
          let errData = err.response.data
          console.log(errData)
          let temp_val = validationErrors
          for (let i = 0; i < errData.errors.length; i++){
            let err = errData.errors[i]
            temp_val[err.fieldId] = {error: true, msg: err.message}
          }
          document.getElementById(errData.errors[0].fieldId).focus()
          setValidationErrors({...temp_val})
        }catch{
          setValidationErrors({...validationErrors, others: {error: true, msg: "Something went wrong, try again"}})
        }
        setLoading(false)
      })
    }
    else{
      setLoading(false)
      setValidationErrors({...validationErrors, password2:{error: true, msg: "Password doesnt match"}})
    }
    
  }

  return (
    <section>
      <Grid container>
        <Grid item xs={12} md={6} sx={{ display: { xs: "none", md: "unset" } }}>
          <Box className={styles.loginSignupImgContainer}>
            <div>
              <Image src={LoginSignupImg} className={styles.loginSignupImg} alt = "img"/>
              <h3 className="t-center">Welcome Aboard</h3>
              <p className="t-center">Just a couple of clicks and we start</p>
            </div>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box className={styles.formContainer}>
            <div>
              <h1 className={styles.formTitle}>Create Account</h1>
              <Grid container>
                <Grid item xs={6} sx={{ paddingRight: "10px" }}>
                  <label htmlFor="first_name" className="label">
                    First Name
                  </label>
                  <div className={styles.inputContainer}>
                    <input
                      type="text"
                      name="first_name"
                      id="first_name"
                      className="input1"
                      onChange = {changeHandler}
                      value = {data.first_name}
                    />
                    <PersonOutlineOutlinedIcon className={styles.inputIcon} />
                  </div>
                  <p className="form-err-msg" id="first_name-err-msg" style = {{display: validationErrors.first_name.error?"block": 'none'}}>
                    {validationErrors.first_name.msg}
                  </p>
                </Grid>
                <Grid item xs={6} sx={{ paddingLeft: "10px" }}>
                  <label htmlFor="last_name" className="label">
                    Last Name
                  </label>
                  <div className={styles.inputContainer}>
                    <input
                      type="text"
                      name="last_name"
                      id="last_name"
                      className="input1"
                      onChange = {changeHandler}
                      value = {data.last_name}
                    />
                    <PersonOutlineOutlinedIcon className={styles.inputIcon} />
                  </div>
                  <p className="form-err-msg" id="last_name-err-msg" style = {{display: validationErrors.last_name.error?"block": 'none'}}>
                    {validationErrors.last_name.msg}
                  </p>
                </Grid>
              </Grid>
              <label htmlFor="email" className="label">
                Email
              </label>
              <div className={styles.inputContainer}>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="input1"
                  onChange = {changeHandler}
                  value = {data.email}
                />
                <MailOutlinedIcon className={styles.inputIcon} />
              </div>
              <p className="form-err-msg" id="email-err-msg" style = {{display: validationErrors.email.error?"block": 'none'}}>
                {validationErrors.email.msg}
              </p>
              <Grid container>
                <Grid item xs={6} sx={{ paddingRight: "10px" }}>
                  <label htmlFor="password1" className="label">
                    Password
                  </label>
                  <div className={styles.inputContainer}>
                    <input
                      type={showPassword1 ? "text" : "password"}
                      name="password1"
                      id="password1"
                      className="input1"
                      onChange = {changeHandler}
                      value = {data.password1}
                    />
                    {showPassword1 ? (
                      <VisibilityOutlinedIcon
                        className={`${styles.inputIcon} c-pointer`}
                        onClick={toggleShowPassword1}
                      />
                    ) : (
                      <VisibilityOffOutlinedIcon
                        className={`${styles.inputIcon} c-pointer`}
                        onClick={toggleShowPassword1}
                      />
                    )}
                  </div>
                  <p className="form-err-msg" id="email-err-msg" style = {{display: validationErrors.password1.error?"block": 'none'}}>
                    {validationErrors.password1.msg}
                  </p>
                </Grid>
                <Grid item xs={6} sx={{ paddingLeft: "10px" }}>
                  <label htmlFor="password2" className="label">
                    Confirm Password
                  </label>
                  <div className={styles.inputContainer}>
                    <input
                      type={showPassword2 ? "text" : "password"}
                      name="password2"
                      id="password2"
                      className="input1"
                      onChange = {changeHandler}
                      value = {data.password2}
                    />
                    {showPassword2 ? (
                      <VisibilityOutlinedIcon
                        className={`${styles.inputIcon} c-pointer`}
                        onClick={toggleShowPassword2}
                      />
                    ) : (
                      <VisibilityOffOutlinedIcon
                        className={`${styles.inputIcon} c-pointer`}
                        onClick={toggleShowPassword2}
                      />
                    )}
                  </div>
                  <p className="form-err-msg" id="email-err-msg" style = {{display: validationErrors.password2.error?"block": 'none'}}>
                    {validationErrors.password2.msg}
                  </p>
                </Grid>
              </Grid>
              <p className="form-err-msg" id="email-err-msg" style = {{display: validationErrors.others.error?"block": 'none'}}>
                {validationErrors.others.msg}
              </p>
              {/* <Box className={styles.signupPasswordInstructionContainer}>
                <div className={styles.signupPasswordInstructionItem}>
                  <span
                    className={
                      passwordValidationChecked[0]
                        ? styles.signupPasswordInstructionCheckChecked
                        : styles.signupPasswordInstructionCheck
                    }
                  ></span>
                  <p
                    className={
                      passwordValidationChecked[0]
                        ? styles.signupPasswordInstructionTextChecked
                        : styles.signupPasswordInstructionText
                    }
                  >
                    Contains at least one uppercase letter
                  </p>
                </div>
                <div className={styles.signupPasswordInstructionItem}>
                  <span
                    className={
                      passwordValidationChecked[1]
                        ? styles.signupPasswordInstructionCheckChecked
                        : styles.signupPasswordInstructionCheck
                    }
                  ></span>
                  <p
                    className={
                      passwordValidationChecked[1]
                        ? styles.signupPasswordInstructionTextChecked
                        : styles.signupPasswordInstructionText
                    }
                  >
                    Contains at least one special character
                  </p>
                </div>
                <div className={styles.signupPasswordInstructionItem}>
                  <span
                    className={
                      passwordValidationChecked[2]
                        ? styles.signupPasswordInstructionCheckChecked
                        : styles.signupPasswordInstructionCheck
                    }
                  ></span>
                  <p
                    className={
                      passwordValidationChecked[2]
                        ? styles.signupPasswordInstructionTextChecked
                        : styles.signupPasswordInstructionText
                    }
                  >
                    Contains at least one number
                  </p>
                </div>
                <div className={styles.signupPasswordInstructionItem}>
                  <span
                    className={
                      passwordValidationChecked[3]
                        ? styles.signupPasswordInstructionCheckChecked
                        : styles.signupPasswordInstructionCheck
                    }
                  ></span>
                  <p
                    className={
                      passwordValidationChecked[3]
                        ? styles.signupPasswordInstructionTextChecked
                        : styles.signupPasswordInstructionText
                    }
                  >
                    Passowords are matching
                  </p>
                </div>
              </Box> */}
              <Button variant="contained" className={styles.submitBtn} onClick = {clickSubmit} disabled = {loading}>
                Sign Up {loading?<CircularProgress color="inherit" size={"20px"} sx = {{marginLeft: "20px"}}/>:""}
              </Button>
              <p className={styles.redirectionLinkContent}>
                Already a member?{" "}
                <Link href="/login" className={styles.redirectionLink}>
                  Sign In
                </Link>
              </p>
            </div>
          </Box>
        </Grid>
      </Grid>
    </section>
  );
}

export default Signup;
