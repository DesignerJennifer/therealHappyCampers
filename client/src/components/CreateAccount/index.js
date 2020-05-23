import React, { useRef } from 'react';
import { useStoreUserContext } from "../../Utils/UserState"
import { ADD_POST } from "../../Utils/actions";
import API from "../../Utils/api"
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
import Copyright from '../components/Copyright'
import { Grid } from '@material-ui/core';
// import axios from 'react';

function CreatePostForm() {
    const firstNameRef = useRef();
    const lastNameRef = useRef();
    const userNameRef = useRef();
    const passwordRef = useRef();
    const emailRef = useRef();
    const phoneNumberRef = useRef();
    const addressRef = useRef();
    const cityRef = useRef();
    const stateRef = useRef();
    const zipRef = useRef();
    const [state, dispatch] = useStoreContext();

    const handleSubmit = e => {
        e.preventDefault();
        dispatch({ type: LOADING });
        API.savePost({
            firstName: firstNameRef.current.value,
            lastName: lastNameRef.current.value,
            userName: userNameRef.current.value,
            password: passwordRef.current.value,
            email: emailRef.current.value,
            phoneNumber: phoneNumberRef.current.value,
            adddress: addressRef.current.value,
            city: cityRef.current.value,
            state: stateRef.current.value,
            zip: zipRef.current.value
        })
            .then(result => {
                dispatch({
                    type: ADD_POST,
                    post: result.data
                });
            })
            .catch(err => console.log(err));

        firstNameRef.current.value = "";
        lastNameRef.current.value = "";
        userNameRef.current.value = "";
        passwordRef.current.value = "";
        emailRef.current.value = "";
        phoneNumberRef.current.value = "";
        addressRef.current.value = "";
        cityRef.current.value = "";
        stateRef.current.value = "";
        zipRef.current.value = "";
    };

}
// return()
// <CssBaseline />
//     <AppBar position="absolute" color="default" className={classes.appBar}>
//         <Toolbar>
//             <Typography variant="h6" color="inherit" noWrap>
//                 Camp Quest Kansas City
//           </Typography>
//         </Toolbar>

//     </AppBar>
//     <main className={classes.layout}>
//         <Paper className={classes.paper}>
//             <Typography component="h1" variant="h4" align="center">
//                 Create Account
//           </Typography>

//             {/* Registration form - Gaurdian Registration */}
//             <Stepper activeStep={activeStep} className={classes.stepper}>
//                 {steps.map((label) => (
//                     <Step key={label}>
//                         <StepLabel>{label}</StepLabel>
//                     </Step>
//                 ))}
//             </Stepper>

//             <React.Fragment>
//                 {activeStep === steps.length ? (
//                     <React.Fragment>
//                         <Typography variant="h5" gutterBottom>
//                             Thank you for Registering.
//                 </Typography>
//                         <Typography variant="subtitle1">
//                             We are thrilled that you have chosen to send your camper to us this summer! The camper dashboard can be accessed below.
//                 </Typography>
//                         <div>
//                             <Grid container>
//                                 <Grid item>
//                                     <Button href="dashboard" fullWidth variant="contained" color="primary" className={classes.submit.button_orange}>
//                                         Camper Dasboard
//                                     </Button>
//                                 </Grid>
//                             </Grid>
//                         </div>
//                     </React.Fragment>
//                 ) : (
//                         <React.Fragment>
//                             {getStepContent(activeStep)}
//                             <div className={classes.buttons}>
//                                 {activeStep !== 0 && (
//                                     <Button onClick={handleBack} className={classes.button_blue}>
//                                         Back
//                                     </Button>
//                                 )}
//                                 <Button
//                                     variant="contained"
//                                     color="primary"
//                                     onClick={handleNext}
//                                     className={classes.button_orange}
//                                 >
//                                     {activeStep === steps.length - 1 ? 'Complete Registration' : 'Next'}
//                                 </Button>
//                             </div>
//                         </React.Fragment>
//                     )}
//             </React.Fragment>
//         </Paper>
//         <Copyright />
//     </main>
// }
