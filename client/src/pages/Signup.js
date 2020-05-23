import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
// import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
// import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
// import { useGlobalContext } from '../Utils/GlobalState.js';
import api from '../Utils/api';
// import { useHistory } from 'react-router-dom';
// import autoBind from 'react-autobind';

// const useStyles = makeStyles(theme => ({
//   paper: {
//     marginTop: theme.spacing(8),
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//   },
//   avatar: {
//     margin: theme.spacing(1),
//     backgroundColor: theme.palette.secondary.main,
//   },
//   form: {
//     width: '100%', // Fix IE 11 issue.
//     marginTop: theme.spacing(3),
//   },
//   submit: {
//     margin: theme.spacing(3, 0, 2),
//   },
// }));

class Signup extends Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      phoneNumber: '',
      camperFirstName: '',
      camperLastName: '',
      birthday: '',
      grade: '',
      redirectTo: null,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(event) {
    console.log('sign-up handleSubmit, email: ');
    console.log(this.state.email);
    event.preventDefault();
    api
      .signup({
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        password: this.state.password,
        phoneNumber: this.state.phoneNumber,
        camperFirstName: this.state.camperFirstName,
        camperLastName: this.state.camperLastName,
        birthday: this.state.birthday,
        grade: this.state.grade,
      })
      .then(response => {
        console.log(response);
        if (!response.data.errmsg) {
          console.log('successful signup');
          this.setState({
            //redirect to login page
            redirectTo: '/dashboard',
          });
        } else {
          console.log('email already taken');
        }
      })
      .catch(error => {
        console.log('signup error: ');
        console.log(error);
      });
  }
  render() {
    if (this.state.redirectTo) {
      return <Redirect to={{ pathname: this.state.redirectTo }} />;
    } else {
      return (
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div>
            <Avatar>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <form noValidate>
              <Grid container spacing={2}>
                <Grid item xs={9} sm={6}>
                  <TextField
                    autoComplete="fname"
                    name="firstName"
                    variant="outlined"
                    required
                    fullWidth
                    value={this.state.firstName}
                    onChange={this.handleChange}
                    label="First Name"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    label="Last Name"
                    name="lastName"
                    value={this.state.lastName}
                    onChange={this.handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    label="Email Address"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                    autoComplete="current-password"
                  />
                </Grid>
                <Grid item xs={9} sm={6}>
                  <TextField
                    autoComplete="fname"
                    name="phoneNumber"
                    variant="outlined"
                    required
                    fullWidth
                    value={this.state.phoneNumber}
                    onChange={this.handleChange}
                    label="Phone Number"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    value={this.state.camperFirstName}
                    onChange={this.handleChange}
                    label="Camper First Name"
                    name="camperFirstName"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="camperLastName"
                    label="Camper Last Name"
                    value={this.state.camperLastName}
                    onChange={this.handleChange}
                  />
                </Grid>
                <Grid item xs={9} sm={6}>
                  <TextField
                    autoComplete="fname"
                    name="birthday"
                    variant="outlined"
                    required
                    fullWidth
                    value={this.state.birthday}
                    onChange={this.handleChange}
                    label="Camper Birthday"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    value={this.state.grade}
                    onChange={this.handleChange}
                    label="Grade"
                    name="grade"
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={
                      <Checkbox value="allowExtraEmails" color="primary" />
                    }
                    label="I want to receive inspiration, marketing promotions and updates via email."
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                onClick={this.handleSubmit}>
                Sign Up
              </Button>
              <Grid container justify="flex-end"></Grid>
            </form>
          </div>
        </Container>
      );
    }
  }
}
export default Signup;
