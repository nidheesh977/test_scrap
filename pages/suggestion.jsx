import React from 'react'
import Img1 from "../images/home_img_1.png"
import styles from "../styles/suggestion.module.css"
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Image from 'next/image'
import homeStyles from '../styles/Home.module.css'

function Suggestion() {
  return (
    <section className = {styles.suggestionSection}>
        <Grid container columnSpacing={2} className={homeStyles.homepageSubSection}>
        <Grid item xs = {12} md = {6}>
          <Box className = {homeStyles.homepageColContainer}>
            <div>
              <h1 className = {homeStyles.homeHeading}>AI for Everyone</h1>
              <p>Looking to get insights on your competition or find the perfect candidate? Look no further than our LinkedIn profile scraping AI tool. With our tool, you can easily and efficiently gather data on LinkedIn profiles, including contact information, work history, education, and much more.</p>
              <Button variant="contained" className = {`btn1 ${homeStyles.homeGetStartedBtn}`}>Get Started</Button>
            </div>
          </Box>
        </Grid>
        <Grid item xs = {12} md = {6}>
          <Box className = {homeStyles.homepageColContainer}>
            <Image src = {Img1} className = {homeStyles.homeImg}/>
          </Box>
        </Grid>
      </Grid>
      <Box className = {styles.SuggestionsContainer}>
        <h6 className = {styles.suggestionsTitle}>Suggections</h6>
        <label>
            <Box className = {`${styles.suggestionInputContainer} bg-l-pink`}>
                <label className = {styles.suggestionLabel} htmlFor = "suggestion">Enter your text here</label>
                <input id = "suggestion" type = "text" className = {styles.suggestionInput} />
                <span className = {styles.suggestionInputLeftBox}></span>
            </Box>
        </label>
        <Button variant="contained" color='success' className = {styles.suggestionSubmitBtn}>Submit</Button>
      </Box>
      <Box className = {styles.SuggestionsContainer}>
        <h6 className = {styles.suggestionsTitle}>Personalized sticky notes (Swap avatar for your own)</h6>
        <label>
            <Box className = {`${styles.suggestionInputContainer} bg-l-orange`}>
                <label className = {styles.suggestionLabel} htmlFor = "personalized">Enter your text here</label>
                <input id = "personalized" type = "text" className = {styles.suggestionInput} />
                <span className = {styles.suggestionInputLeftBox}></span>
            </Box>
        </label>
        <Button variant="contained" color='success' className = {styles.suggestionSubmitBtn}>Submit</Button>
      </Box>
      <Box className = {styles.SuggestionsContainer}>
        <h6 className = {styles.suggestionsTitle}>With voting dots</h6>
        <label>
            <Box className = {`${styles.suggestionInputContainer} bg-l-blue`}>
                <label className = {styles.suggestionLabel} htmlFor = "voting">Enter your text here</label>
                <input id = "voting" type = "text" className = {styles.suggestionInput} />
                <span className = {styles.suggestionInputLeftBox}></span>
            </Box>
        </label>
        <Button variant="contained" color='success' className = {styles.suggestionSubmitBtn}>Submit</Button>
      </Box>
    </section>
  )
}

export default Suggestion