import React, {useEffect} from 'react'
import Image from "next/image";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Img1 from "../images/home_img_1.png";
import homeStyles from "../styles/Home.module.css";
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import styles from "../styles/Workflow.module.css";
import { styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';
import Stack from '@mui/material/Stack';
import axios from "axios"
import Router from 'next/router';

const backend = process.env.NEXT_PUBLIC_BACKEND

function Workflow() {
  const [activeStep, setActiveStep] = React.useState(0);
  const fieldsList = {
    individual: [
      "Basic",
      "Contact",
      "Education",
      "Experience",
      "Skills"
    ],
    company: [
      "Basic",
      "About",
      "Employees"
    ]
  }
  const handleNext = () => {
    console.log(mainData)
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const [showPassword, setShowPassword] = React.useState(false)
  const [error, setError] = React.useState(false)

  const [mainData, setMainData] = React.useState({
    user: "",
    given_link: "",
    link_type: 2,
    needed_data: [],
    credentials: {
      username: "",
      password: "",
      website: 1,
    }
  })

  useEffect(()=>{
    let tempMainData = mainData
    tempMainData.user = localStorage.getItem("user")
    setMainData({...tempMainData})
  }, [])

  const handleChange = (prop) => (event) => {
    setError(false)
    let tempMainData = mainData
    tempMainData["credentials"][prop] = event.target.value
    setMainData({...tempMainData})
  };

  const handleUrlChange = (e) => {
    setError(false)
    let tempMainData = mainData
    tempMainData.given_link = event.target.value
    setMainData({...tempMainData})
  }

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword)
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = () => {
    console.log(mainData)
    setError(true)
    // axios.post(`${backend}/api/task-create`, mainData)
    // .then(res => {
    //   console.log(res)
    //   Router.push("/data")
    // })
    // .catch(err => {
      // setError(true)
    //   console.log(err)
    //   setActiveStep(0)
    // })
  }

  const flipField = (field) => {
    setError(false)
    let fields = mainData.needed_data
    if (fields.includes(field)){
      fields.splice(fields.indexOf(field), 1)
    }else{
      fields.push(field)
    }

    setMainData({
      ...mainData,
      needed_data: fields
    })
  }

  const handleStep = (step) => {
    if (step < activeStep){
      setActiveStep(step)
    }
  }

  const AntSwitch = styled(Switch)(({ theme }) => ({
    width: 28,
    height: 16,
    padding: 0,
    display: 'flex',
    '&:active': {
      '& .MuiSwitch-thumb': {
        width: 15,
      },
      '& .MuiSwitch-switchBase.Mui-checked': {
        transform: 'translateX(9px)',
      },
    },
    '& .MuiSwitch-switchBase': {
      padding: 2,
      '&.Mui-checked': {
        transform: 'translateX(12px)',
        color: '#fff',
        '& + .MuiSwitch-track': {
          opacity: 1,
          backgroundColor: theme.palette.mode === 'dark' ? '#177ddc' : '#000',
        },
      },
    },
    '& .MuiSwitch-thumb': {
      boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
      width: 12,
      height: 12,
      borderRadius: 6,
      transition: theme.transitions.create(['width'], {
        duration: 200,
      }),
    },
    '& .MuiSwitch-track': {
      borderRadius: 16 / 2,
      opacity: 1,
      backgroundColor:
        theme.palette.mode === 'dark' ? 'rgba(255,255,255,.35)' : 'rgba(0,0,0,.25)',
      boxSizing: 'border-box',
    },
  }));

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
      <Box sx={{ maxWidth: 700, margin: "50px auto" }}>
        <Stepper activeStep={activeStep} orientation="vertical">
            <Step>
                <StepLabel
                className = "c-pointer"
                optional={
                    <Typography variant="caption">Ender LinkedIn Credential</Typography>
                }
                onClick = {()=>handleStep(0)}
                >
                Step 1
                </StepLabel>
                <StepContent>
                    <Box sx = {{margin: "20px 0px"}}>
                        <TextField id="outlined-basic" label="Email ID" variant="outlined" fullWidth className={styles.inputField} value = {mainData.credentials.username} onChange={handleChange('username')}/>
                        <FormControl variant="outlined" fullWidth className={styles.inputField}>
                            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-password"
                                type={showPassword ? 'text' : 'password'}
                                value={mainData.credentials.password}
                                onChange={handleChange('password')}
                                endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                    >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                                }
                                label="Password"
                            />
                        </FormControl>
                    </Box>
                <Box sx={{ mb: 2 }}>
                    <div>
                    <Button
                        variant="contained"
                        onClick={handleNext}
                        sx={{ mt: 1, mr: 1 }}
                    >
                        Submit
                    </Button>
                    {/* <Button
                        disabled={false}
                        onClick={handleBack}
                        sx={{ mt: 1, mr: 1 }}
                    >
                        Back
                    </Button> */}
                    </div>
                </Box>
                </StepContent>
            </Step>
            <Step>
                <StepLabel
                className = "c-pointer"
                optional={
                    <Typography variant="caption">Ender the Search Link </Typography>
                }
                onClick = {()=>handleStep(1)}
                >
                Step 2
                </StepLabel>
                <StepContent>
                <Box sx = {{margin: "20px 0px"}}>
                    <TextField id="outlined-basic" label="URL" variant="outlined" fullWidth className={styles.inputField} value = {mainData.given_link} onChange = {handleUrlChange}/>
                </Box>
                <Box sx={{ mb: 2 }}>
                    <div>
                    <Button
                        variant="contained"
                        onClick={handleNext}
                        sx={{ mt: 1, mr: 1 }}
                    >
                        Submit
                    </Button>
                    {/* <Button
                        disabled={false}
                        onClick={handleBack}
                        sx={{ mt: 1, mr: 1 }}
                    >
                        Back
                    </Button> */}
                    </div>
                </Box>
                </StepContent>
            </Step>
            <Step>
                <StepLabel
                className = "c-pointer"
                optional={
                    <Typography variant="caption">Select require data</Typography>
                }
                onClick = {()=>handleStep(2)}
                >
                Step 3
                </StepLabel>
                <StepContent>
                <Box sx = {{margin: "20px 0px"}}>
                    {fieldsList.company.map((field, index) => {
                        return(
                            <Stack direction="row" spacing={1} alignItems="center" key = {index} sx = {{marginBottom: "10px"}}>
                                <AntSwitch inputProps={{ 'aria-label': 'ant design' }} checked = {mainData.needed_data.includes(field)} onChange = {()=>flipField(field)}/>
                                <Typography>{field}</Typography>
                            </Stack>

                        )
                    })}
                </Box>
                <Box sx={{ mb: 2 }}>
                    <div>
                      <Button
                          variant="contained"
                          onClick={handleSubmit}
                          sx={{ mt: 1, mr: 1 }}
                      >
                          Gerrate Lead
                      </Button>
                      {/* <Button
                          disabled={false}
                          onClick={handleBack}
                          sx={{ mt: 1, mr: 1 }}
                      >
                          Back
                      </Button> */}
                    </div>
                </Box>
                </StepContent>
            </Step>
        </Stepper>
        <p className='form-err-msg' style = {error?{display: "block"}:{}}>Invalid fields</p>
      </Box>
      {/* {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Reset
          </Button>
        </Paper>
      )} */}
    </section>
  )
}

export default Workflow