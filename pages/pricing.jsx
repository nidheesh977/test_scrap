import React from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Img1 from "../images/home_img_1.png";
import homeStyles from "../styles/Home.module.css";
import styles from "../styles/Pricing.module.css";
import DoneIcon from "@mui/icons-material/Done";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";

function Pricing() {
  const accordionItem = {
    marginBottom: "10px",
    borderRadius: "4px",
    padding: "10px",
  };
  const [faqs, setFaqs] = useState([
    {
      question: "How do I grow my business?",
      answer:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
    },
    {
      question: "Can I cancel my subscription?",
      answer:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
    },
    {
      question: "How do I contact the support?",
      answer:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
    },
    {
      question: "Is a credit card required?",
      answer:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
    },
  ]);
  return (
    <section>
      <Grid
        container
        columnSpacing={2}
        className={homeStyles.homepageSubSection}
      >
        <Grid item xs={12} md={6}>
          <Box className={homeStyles.homepageColContainer}>
            <div>
              <h1 className={homeStyles.homeHeading}>AI for Everyone</h1>
              <p>
                Looking to get insights on your competition or find the perfect
                candidate? Look no further than our LinkedIn profile scraping AI
                tool. With our tool, you can easily and efficiently gather data
                on LinkedIn profiles, including contact information, work
                history, education, and much more.
              </p>
              <Button
                variant="contained"
                className={`btn1 ${homeStyles.homeGetStartedBtn}`}
              >
                Get Started
              </Button>
            </div>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box className={homeStyles.homepageColContainer}>
            <Image src={Img1} className={homeStyles.homeImg} />
          </Box>
        </Grid>
      </Grid>
      <Box className={styles.pricingSection} sx={{ marginBottom: "50px" }}>
        <h1 className="t-center">Pricing plans that suit you</h1>
        <p className="t-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor.
        </p>
        <Grid container columnSpacing={1} className={styles.plansBenifits}>
          <Grid item xs={12} md={4}>
            <h5 className={homeStyles.homePlanBens}>
              <DoneIcon sx={{ marginRight: "10px", color: "#1465FA" }} /> Free
              15-day trial
            </h5>
          </Grid>
          <Grid item xs={12} md={4}>
            <h5 className={homeStyles.homePlanBens}>
              <DoneIcon sx={{ marginRight: "10px", color: "#1465FA" }} />{" "}
              Unlimited Team Members
            </h5>
          </Grid>
          <Grid item xs={12} md={4}>
            <h5 className={homeStyles.homePlanBens}>
              <DoneIcon sx={{ marginRight: "10px", color: "#1465FA" }} /> Cancel
              Anytime
            </h5>
          </Grid>
        </Grid>
        {/* <Box className = {`${homeStyles.homePlanTimespanContainer} t-center`}>
        <span>get 3 months free</span>
        <span>Billed Yearly</span>
        <span>Billed Monthly</span>
      </Box> */}
        <Grid
          container
          spacing={5}
          className={homeStyles.homeAllPlansContainer}
        >
          <Grid item xs={12} md={4}>
            <div className={`${homeStyles.homePlanContainer} t-center`}>
              <h4>Startup</h4>
              <h1 className={homeStyles.homePlanPrice}>$1</h1>

              <Button className={homeStyles.homePlanBtn1} variant="outlined">
                Start My 15-day Trial
              </Button>
              <div className={homeStyles.homePlanseparator}></div>
              <p className={homeStyles.homeplanUsersCount}>1 User</p>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={`${homeStyles.homePlanContainerMid} t-center`}>
              <h4>Business</h4>
              <h1 className={homeStyles.homePlanPrice}>$29</h1>
              <Button variant="contained" className={homeStyles.homePlanBtn2}>
                Start My 15-day Trial
              </Button>
              <div className={homeStyles.homePlanseparator}></div>
              <p className={homeStyles.homeplanUsersCount}>5 User</p>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={`${homeStyles.homePlanContainer} t-center`}>
              <h4>Agency</h4>
              <h1 className={homeStyles.homePlanPrice}>$139</h1>
              <Button className={homeStyles.homePlanBtn1} variant="outlined">
                Start My 15-day Trial
              </Button>
              <div className={homeStyles.homePlanseparator}></div>
              <p className={homeStyles.homeplanUsersCount}>Unlimited User</p>
            </div>
          </Grid>
        </Grid>
      </Box>
      <div className={styles.faqsContainer}>
        <Grid container>
          <Grid item md={6} lg={4}>
            <h1 className={styles.faqsTitle}>Frequestly Asked Questions</h1>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt.
            </p>
          </Grid>
          <Grid item md={6} lg={8}>
            <div>
              {faqs.map((item, index) => {
                return (
                  <Accordion sx={accordionItem} key = {index}>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls={`panel${index+1}a-content`}
                      id={`panel${index+1}a-header`}
                    >
                      <Typography>
                        <h5>{item.question}</h5>
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        {item.answer}
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                );
              })}
            </div>
          </Grid>
        </Grid>
      </div>
      <div className={styles.PricingAdditionalText}>
        <h1 className="t-center">
          Are you ready to grow your business with us?
        </h1>
        <p className="t-center">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy.
        </p>
      </div>
    </section>
  );
}

export default Pricing;
