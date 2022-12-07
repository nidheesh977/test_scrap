import React from "react";
import ContactImg from "../images/contact_img.png";
import Image from "next/image";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Link from "next/link";
import style from "../styles/Contact.module.css";

function Contact() {
  return (
    <section>
      <Grid container>
        <Grid item xs={12} md={6} sx={{ display: { xs: "none", md: "unset" } }}>
          <Box className = {style.contactImgContainer}>
            <div>
              <h3 className="t-center">Contact Information</h3>
              <p className="t-center">Say something to start a live chat!</p>
              <Image src={ContactImg} className = {style.contactImg}/>
            </div>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
        <Box className = {style.formContainer}>
            <Box>
                <Grid container>
                    <Grid item xs={6} sx={{ paddingRight: "10px" }}>
                    <div>
                        <label htmlFor="first-name" className="label">
                        First Name
                        </label>
                        <input type="text" className="input2" id = "first-name" />
                        <p className="form-err-msg" id="first-name-err-msg">
                        First name is required
                        </p>
                    </div>
                    </Grid>
                    <Grid item xs={6} sx={{ paddingLeft: "10px" }}>
                    <div>
                        <label htmlFor="last-name" className="label">
                        Last Name
                        </label>
                        <input type="text" className="input2" id = "last-name" />
                        <p className="form-err-msg" id="last-name-err-msg">
                        Last name is required
                        </p>
                    </div>
                    </Grid>
                    <Grid item xs={6} sx={{ paddingRight: "10px" }}>
                    <div>
                        <label htmlFor="email" className="label">
                        Email
                        </label>
                        <input type="email" className="input2" id = "email" />
                        <p className="form-err-msg" id="email-err-msg">
                        Email is required
                        </p>
                    </div>
                    </Grid>
                    <Grid item xs={6} sx={{ paddingLeft: "10px" }}>
                    <div>
                        <label htmlFor="phone" className="label">
                        Phone Number
                        </label>
                        <input type="text" className="input2" id = "phone" />
                        <p className="form-err-msg" id="phone-err-msg">
                        Phone Number is required
                        </p>
                    </div>
                    </Grid>
                </Grid>
                <div className={style.selectSubjectMainContainer}>
                    <h6 className = {style.subjectTitle}>Select Subject?</h6>
                    <div className={style.selectSubjectContainer}>
                    <div className={style.selectSubjectcontent}>
                        <input
                        type="radio"
                        name="subject"
                        id="general"
                        className="radio1"
                        />
                        <label className={style.selectSubjectLabel} htmlFor="general">
                        General Inquiry
                        </label>
                    </div>
                    <div className={style.selectSubjectcontent}>
                        <input
                        type="radio"
                        name="subject"
                        id="technical"
                        className="radio1"
                        />
                        <label className={style.selectSubjectLabel} htmlFor="technical">
                        Technical Inquiry
                        </label>
                    </div>
                    <div className={style.selectSubjectcontent}>
                        <input
                        type="radio"
                        name="subject"
                        id="pricing"
                        className="radio1"
                        />
                        <label className={style.selectSubjectLabel} htmlFor="pricing">
                        Pricing Inquiry
                        </label>
                    </div>
                    <div className={style.selectSubjectcontent}>
                        <input
                        type="radio"
                        name="subject"
                        id="demo"
                        className="radio1"
                        />
                        <label className={style.selectSubjectLabel} htmlFor="demo">
                        Demo Inquiry
                        </label>
                    </div>
                    </div>
                </div>
                <div className={style.messageContainer}>
                    <label htmlFor="message" className="label">
                    Message
                    </label>
                    <textarea
                    name="message"
                    id="message"
                    rows="1"
                    className="input2"
                    ></textarea>
                    <p className="form-err-msg" id="message-err-msg">
                        Message is required
                    </p>
                </div>
                <div className = {style.submitBtn}>
                    <Button variant="contained" className = "btn2">
                        Send Message
                    </Button>
                </div>
            </Box>
        </Box>
        </Grid>
      </Grid>
    </section>
  );
}

export default Contact;
