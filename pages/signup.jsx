import React, { useState } from "react";
import styles from "../styles/LoginSignup.module.css";
import Image from "next/image";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Link from "next/link";
import LoginSignupImg from "../images/LoginSignupImg.png";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

function Signup() {
  let [showPassword1, setShowPassword1] = useState(false);
  let [showPassword2, setShowPassword2] = useState(false);
  let [passwordValidationChecked, setPasswordValidationChecked] = useState([
    1, 0, 0, 0,
  ]);

  const toggleShowPassword1 = () => {
    setShowPassword1(!showPassword1);
  };

  const toggleShowPassword2 = () => {
    setShowPassword2(!showPassword2);
  };

  return (
    <section>
      <Grid container>
        <Grid item xs={12} md={6} sx={{ display: { xs: "none", md: "unset" } }}>
          <Box className={styles.loginSignupImgContainer}>
            <div>
              <Image src={LoginSignupImg} className={styles.loginSignupImg} />
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
                  <label htmlFor="first-name" className="label">
                    First Name
                  </label>
                  <div className={styles.inputContainer}>
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      className="input1"
                    />
                    <PersonOutlineOutlinedIcon className={styles.inputIcon} />
                  </div>
                  <p className="form-err-msg" id="first-name-err-msg">
                    First Name is required
                  </p>
                </Grid>
                <Grid item xs={6} sx={{ paddingLeft: "10px" }}>
                  <label htmlFor="last-name" className="label">
                    Last Name
                  </label>
                  <div className={styles.inputContainer}>
                    <input
                      type="text"
                      name="last-name"
                      id="last-name"
                      className="input1"
                    />
                    <PersonOutlineOutlinedIcon className={styles.inputIcon} />
                  </div>
                  <p className="form-err-msg" id="last-name-err-msg">
                    Last Name is required
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
                />
                <MailOutlinedIcon className={styles.inputIcon} />
              </div>
              <p className="form-err-msg" id="email-err-msg">
                Email is required
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
                  <p className="form-err-msg" id="email-err-msg">
                    Password is required
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
                  <p className="form-err-msg" id="email-err-msg">
                    Confirm Password is required
                  </p>
                </Grid>
              </Grid>
              <Box className={styles.signupPasswordInstructionContainer}>
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
              </Box>
              <Button variant="contained" className={styles.submitBtn}>
                Sign Up
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
