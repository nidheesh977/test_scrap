import React from 'react'
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
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import styles from "../styles/Workflow.module.css";
import { styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';
import Stack from '@mui/material/Stack';

function Workflow() {
  const [activeStep, setActiveStep] = React.useState(0);
  const fieldsList = {
    individual: [
        "profile picture link",
        "Name",
        "degree connection",
        "designation",
        "city",
        "contact info",
        "connections",
        "Highlights link , picture",
        "About",
        "Experience as single data",
        "Education as single data",
        "Skills as a list of data",
        "Project",
        "Interests and groups as a list of data",
        "languages",
    ],
    company: [
        "Name",
        "company profile image link",
        "followers count",
        "employees list , linkedin profile url",
        "about",
    ]
  }
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const [values, setValues] = React.useState({
    email: '',
    password: '',
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

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
                optional={
                    <Typography variant="caption">Ender LinkedIn Credential</Typography>
                }
                >
                Step 1
                </StepLabel>
                <StepContent>
                    <Box sx = {{margin: "20px 0px"}}>
                        <TextField id="outlined-basic" label="Email ID" variant="outlined" fullWidth className={styles.inputField}/>
                        <FormControl variant="outlined" fullWidth className={styles.inputField}>
                            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-password"
                                type={values.showPassword ? 'text' : 'password'}
                                value={values.password}
                                onChange={handleChange('password')}
                                endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                    >
                                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
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
                optional={
                    <Typography variant="caption">Ender the Search Link </Typography>
                }
                >
                Step 2
                </StepLabel>
                <StepContent>
                <Box sx = {{margin: "20px 0px"}}>
                    <TextField id="outlined-basic" label="URL" variant="outlined" fullWidth className={styles.inputField}/>
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
                optional={
                    <Typography variant="caption">Select require data</Typography>
                }
                >
                Step 3
                </StepLabel>
                <StepContent>
                <Box sx = {{margin: "20px 0px"}}>
                    {fieldsList.individual.map((field, index) => {
                        return(
                            <Stack direction="row" spacing={1} alignItems="center" key = {index} sx = {{marginBottom: "10px"}}>
                                <AntSwitch inputProps={{ 'aria-label': 'ant design' }} />
                                <Typography>{field}</Typography>
                            </Stack>
                        )
                    })}
                </Box>
                <Box sx={{ mb: 2 }}>
                    <div>
                      <Button
                          variant="contained"
                          onClick={handleNext}
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