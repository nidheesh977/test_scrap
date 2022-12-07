import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import styles from "../styles/Footer.module.css";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import Link from "next/link";
import Image from "next/image";
import FooterLogo from "../images/footer_logo.png"
const CssTextField = styled(TextField)({
  "& label": { color: "#fff" },
  "& label.Mui-focused": { color: "#fff" },
  "& .MuiInput-underline:after": { borderBottomColor: "green" },
  "& .MuiOutlinedInput-root": {
    "& fieldset": { borderColor: "#1B1E2C", color: "#fff" },
    "&:hover fieldset": { borderColor: "#858585", color: "#fff" },
    "&.Mui-focused fieldset": { borderColor: "#858585", color: "#fff" },
  },
});
function Footer() {
  return (
    <Box className={styles.main}>
      {" "}
      <Grid container className={styles.footerGridIContainer}>
        {" "}
        <Grid item xs={12} sm={6} lg={3} className={styles.footerGridItem}>
          {" "}
          <ul className={styles.footerUl}>
            <li className={styles.footerTitle}>Company</li>{" "}
            <li>
              <Link className={styles.footerLink} href="/">
                About Us
              </Link>
            </li>{" "}
            <li>
              <Link className={styles.footerLink} href="/">
                Why Choose us
              </Link>
            </li>{" "}
            <li>
              <Link className={styles.footerLink} href="/">
                Pricing
              </Link>
            </li>{" "}
            <li>
              <Link className={styles.footerLink} href="/">
                Testimonial
              </Link>
            </li>{" "}
          </ul>{" "}
        </Grid>{" "}
        <Grid item xs={12} sm={6} lg={3} className={styles.footerGridItem}>
          {" "}
          <ul className={styles.footerUl}>
            <li className={styles.footerTitle}>Resources</li>{" "}
            <li>
              <Link className={styles.footerLink} href="/">
                Privacy Policy
              </Link>
            </li>{" "}
            <li>
              <Link className={styles.footerLink} href="/">
                Terms and Condition
              </Link>
            </li>{" "}
            <li>
              <Link className={styles.footerLink} href="/">
                Blog
              </Link>
            </li>{" "}
            <li>
              <Link className={styles.footerLink} href="/">
                Contact Us
              </Link>
            </li>{" "}
          </ul>{" "}
        </Grid>{" "}
        <Grid item xs={12} sm={6} lg={3} className={styles.footerGridItem}>
          {" "}
          <ul className={styles.footerUl}>
            <li className={styles.footerTitle}>Product</li>{" "}
            <li>
              <Link className={styles.footerLink} href="/">
                Lead Generation
              </Link>
            </li>{" "}
            <li>
              <Link className={styles.footerLink} href="/">
                LinkedIn Automation
              </Link>
            </li>{" "}
            <li>
              <Link className={styles.footerLink} href="/">
                Cold Email Tool
              </Link>
            </li>{" "}
            <li>
              <Link className={styles.footerLink} href="/">
                Remote Collaboration
              </Link>
            </li>{" "}
          </ul>{" "}
        </Grid>{" "}
        <Grid item xs={12} sm={6} lg={3} className={styles.footerGridItem}>
          <div className = "t-center">
            <Image src = {FooterLogo} className = {styles.footerLogo}/>
          </div>
          <h5>Subscribe to our Newsletter</h5>{" "}
          <CssTextField
            label="Enter your Email"
            id="custom-css-outlined-input"
            fullWidth
            sx={{ borderRadius: "8px", background: "#2B2E3C" }}
          />{" "}
        </Grid>{" "}
      </Grid>{" "}
    </Box>
  );
}
export default Footer;
