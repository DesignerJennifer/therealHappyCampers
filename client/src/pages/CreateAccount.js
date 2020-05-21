import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import SignUpForm from './SignUpForm';
import CamperRegForm from './CamperRegForm';
import Review from './Review';
import Copyright from '../components/Copyright';
import { Grid } from '@material-ui/core';
// import axios from 'react';
import styles from './CreateAccount.module.css';

const useStyles = makeStyles(theme => ({
  appBar: {
    position: 'relative',
    backgroundColor: '#e57200 !important',
    color: 'white !important',
  },

  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },

  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },

  stepper: {
    padding: theme.spacing(3, 0, 5),
  },

  MuiStepIcon: {
    color: '#e57200 !important',
  },

  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button_orange: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
    backgroundColor: '#e57200 !important',
    color: 'white !important',
  },
  button_blue: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
    color: '#002f6c !important',
  },
}));

const steps = [
  'Your Information',
  'Camper Information',
  'Review Your Information',
];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <SignUpForm />;
    case 1:
      return <CamperRegForm />;
    case 2:
      return <Review />;
    default:
      throw new Error('Unknown step');
  }
}

export default function Checkout() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="absolute" color="default" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Camp Quest Kansas City
          </Typography>
        </Toolbar>
      </AppBar>
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            Create Account
          </Typography>

          {/* Registration form - Gaurdian Registration */}
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map(label => (
              <Step key={label}>
                <StepLabel className={styles.stepper}>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>

          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  Thank you for Registering.
                </Typography>
                <Typography variant="subtitle1">
                  We are thrilled that you have chosen to send your camper to us
                  this summer! The camper dashboard can be accessed below.
                </Typography>
                <div>
                  <Grid container>
                    <Grid item>
                      <Button
                        href="dashboard"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}>
                        Camper Dasboard
                      </Button>
                    </Grid>
                  </Grid>
                </div>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep)}
                <div className={classes.buttons}>
                  {activeStep !== 0 && (
                    <Button
                      onClick={handleBack}
                      className={classes.button_blue}>
                      Back
                    </Button>
                  )}
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button_orange}>
                    {activeStep === steps.length - 1
                      ? 'Complete Registration'
                      : 'Next'}
                  </Button>
                </div>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
        <Copyright />
      </main>
    </React.Fragment>
  );
}
