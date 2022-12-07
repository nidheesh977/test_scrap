import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Img1 from "../images/home_img_1.png";
import FeaturesImg from "../images/home_features.png";
import AutomateLinkedin from "../images/automate_linkedin.png";
import Testimonial1 from "../images/testimonial1.png";
import Testimonial2 from "../images/testimonial2.png";
import Testimonial3 from "../images/testimonial3.png";
import Testimonial4 from "../images/testimonial4.png";
import Testimonial5 from "../images/testimonial5.png";
import DoneIcon from "@mui/icons-material/Done";
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import LoopIcon from '@mui/icons-material/Loop';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import CameraIcon from '@mui/icons-material/Camera';

export default function Home() {
  return (
    <section className={styles.homepageSection}>
      <Grid container columnSpacing={2} className={styles.homepageSubSection}>
        <Grid item xs={12} md={6}>
          <Box className={styles.homepageColContainer}>
            <div>
              <h1 className={styles.homeHeading}>AI for Everyone</h1>
              <p>
                Looking to get insights on your competition or find the perfect
                candidate? Look no further than our LinkedIn profile scraping AI
                tool. With our tool, you can easily and efficiently gather data
                on LinkedIn profiles, including contact information, work
                history, education, and much more.
              </p>
              <Button
                variant="contained"
                className={`btn1 ${styles.homeGetStartedBtn}`}
              >
                Get Started
              </Button>
            </div>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box className={styles.homepageColContainer}>
            <Image src={Img1} className={styles.homeImg} />
          </Box>
        </Grid>
      </Grid>
      <h3 className="t-center">Our features</h3>
      <Grid container columnSpacing={2} className={styles.homepageSubSection}>
        <Grid item xs={12} md={6}>
          <Box className={styles.homepageColContainer}>
            <div>
              <h3 className={styles.homeHeading2}>
                Generate lead form linkedIn
              </h3>
              <p>
                Looking to get insights on your Prospects or find the perfect
                candidate? Look no further than our LinkedIn profile scraping AI
                tool. With our tool, you can easily and efficiently gather data
                on LinkedIn profiles, including contact information, work
                history, education, and much more.{" "}
              </p>
            </div>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box className={styles.homepageColContainer}>
            <Image src={FeaturesImg} className={styles.homeImg} />
          </Box>
        </Grid>
      </Grid>
      <Grid container columnSpacing={2} className={styles.homepageSubSection}>
        <Grid item xs={12} md={6}>
          <Box className={styles.homepageColContainer}>
            <Image src={AutomateLinkedin} className={styles.homeImg} />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box className={styles.homepageColContainer}>
            <div>
              <h3 className={styles.homeHeading2}>
                Automate your LinkedIn workflow
              </h3>
              <p>
                If you are looking to automate your LinkedIn workflow, our AI
                tool is the perfect solution. With our tool, you can add new
                connections, send messages, and post updates automatically. This
                will save you time and help you stay connected with your
                network.
              </p>
              <Button
                variant="contained"
                className={`btn1 ${styles.homeGetStartedBtn}`}
              >
                Requiest Demo
              </Button>
            </div>
          </Box>
        </Grid>
      </Grid>
      <Box className={styles.homeTestimonialsMainContainer}>
        <div className={`t-center ${styles.homeTestimonialsTitle}`}>
          Trusted brand logos
        </div>
        <div className={styles.homeTestimonialsContainer}>
          <Image src={Testimonial1} className={styles.homeTestimonial} />
          <Image src={Testimonial2} className={styles.homeTestimonial} />
          <Image src={Testimonial3} className={styles.homeTestimonial} />
          <Image src={Testimonial5} className={styles.homeTestimonial} />
          <Image src={Testimonial4} className={styles.homeTestimonial} />
        </div>
      </Box>
      <h2 className={`t-center ${styles.homeHeading3}`}>
        Manage All Your Lead genenaration and Linkedin workflow in One Place.
      </h2>
      <Box>
        {" "}
        <Grid container>
          {" "}
          <Grid item xs={12} md={6}>
            {" "}
            <h4>Discover More</h4>{" "}
            <h2>Analyze your sales and marketing leads</h2>{" "}
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua invidunt ut labore.
            </p>{" "}
          </Grid>{" "}
          <Grid item xs={12} md={6}>
            {" "}
            <Box sx={{ display: "flex", alignItems: "center" }}>
              {" "}
              <SignalCellularAltIcon
                sx={{
                  padding: "10px",
                  margin: "10px",
                  fontSize: "40px",
                  borderRadius: "50%",
                  background: "#F4F5F7",
                }}
              />{" "}
              <Box>
                {" "}
                <h4>Sales Tracking</h4>{" "}
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>{" "}
              </Box>{" "}
            </Box>{" "}
            <Box sx={{ display: "flex", alignItems: "center" }}>
              {" "}
              <ManageAccountsIcon
                sx={{
                  padding: "10px",
                  margin: "10px",
                  fontSize: "40px",
                  borderRadius: "50%",
                  background: "#F4F5F7",
                }}
              />{" "}
              <Box>
                {" "}
                <h4>Sales Tracking</h4>{" "}
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>{" "}
              </Box>{" "}
            </Box>{" "}
            <Box sx={{ display: "flex", alignItems: "center" }}>
              {" "}
              <LoopIcon
                sx={{
                  padding: "10px",
                  margin: "10px",
                  fontSize: "40px",
                  borderRadius: "50%",
                  background: "#F4F5F7",
                }}
              />{" "}
              <Box>
                {" "}
                <h4>Sales Tracking</h4>{" "}
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>{" "}
              </Box>{" "}
            </Box>{" "}
          </Grid>{" "}
        </Grid>{" "}
        <h2 className="t-center">Features</h2>{" "}
        <Grid
          container
          sx={{
            background: "#D798E126",
            padding: "30px",
            borderRadius: "24px",
          }}
        >
          {" "}
          <Grid
            item
            xs={12}
            md={6}
            lg={4}
            sx={{
              padding: "20px",
              borderRight: { md: "1px solid #a5a5a5" },
              borderBottom: { xs: "1px solid #a5a5a5", md: "none" },
            }}
          >
            {" "}
            <SmartToyIcon sx={{ fontSize: "40px", color: "#638AFF" }} />{" "}
            <h2>Advanced 256-bit encryption</h2>{" "}
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor.
            </p>{" "}
          </Grid>{" "}
          <Grid
            item
            xs={12}
            md={6}
            lg={4}
            sx={{
              padding: "20px",
              borderRight: { lg: "1px solid #a5a5a5" },
              borderBottom: { xs: "1px solid #a5a5a5", md: "none" },
            }}
          >
            {" "}
            <QuestionAnswerIcon
              sx={{ fontSize: "40px", color: "#638AFF" }}
            />{" "}
            <h2>Simple collaboration tools</h2>{" "}
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor.
            </p>{" "}
          </Grid>{" "}
          <Grid
            item
            xs={12}
            md={6}
            lg={4}
            sx={{
              padding: "20px",
              borderBottom: { xs: "1px solid #a5a5a5", md: "none" },
            }}
          >
            {" "}
            <CameraIcon sx={{ fontSize: "40px", color: "#638AFF" }} />{" "}
            <h2>Customizable AI features</h2>{" "}
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor.
            </p>{" "}
          </Grid>{" "}
        </Grid>{" "}
        <h1>The stunning results our customers have experienced</h1>{" "}
        <Grid container>
          {" "}
          <Grid item xs={12} md={6} lg={4} sx={{ padding: "10px" }}>
            {" "}
            <Box
              sx={{
                border: "2px solid #6199ED42",
                borderRadius: "25px",
                padding: "30px",
              }}
              className="t-center"
            >
              {" "}
              <h6>
                {" "}
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua.{" "}
              </h6>{" "}
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDJzEaxLN-jGRYYUO65pWu7Q9GXoNt4LUSSA&usqp=CAU" style = {{height: "55px", width: "55px", objectFit: "cover", borderRadius: "50%", margin: "10px 0px"}}/>{" "}
              <h5>Ron Wood</h5> <p>CEO</p>{" "}
            </Box>{" "}
          </Grid>{" "}
          <Grid item xs={12} md={6} lg={4} sx={{ padding: "10px" }}>
            {" "}
            <Box
              sx={{
                border: "2px solid #6199ED42",
                borderRadius: "25px",
                padding: "30px",
              }}
              className="t-center"
            >
              {" "}
              <h6>
                {" "}
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua.{" "}
              </h6>{" "}
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDJzEaxLN-jGRYYUO65pWu7Q9GXoNt4LUSSA&usqp=CAU" style = {{height: "55px", width: "55px", objectFit: "cover", borderRadius: "50%", margin: "10px 0px"}}/>{" "}
              <h5>Ron Wood</h5> <p>CEO</p>{" "}
            </Box>{" "}
          </Grid>{" "}
          <Grid item xs={12} lg={4} sx={{ padding: "10px" }}>
            {" "}
            <Box
              sx={{
                border: "2px solid #6199ED42",
                borderRadius: "25px",
                padding: "30px",
              }}
              className="t-center"
            >
              {" "}
              <h6>
                {" "}
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua.{" "}
              </h6>{" "}
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDJzEaxLN-jGRYYUO65pWu7Q9GXoNt4LUSSA&usqp=CAU" style = {{height: "55px", width: "55px", objectFit: "cover", borderRadius: "50%", margin: "10px 0px"}}/>{" "}
              <h5>Ron Wood</h5> <p>CEO</p>{" "}
            </Box>{" "}
          </Grid>{" "}
        </Grid>{" "}
        <h1 className="t-center">
          Are you ready to grow your business with us?
        </h1>{" "}
      </Box>
    </section>
  );
}
