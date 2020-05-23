import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useGlobalContext } from '../Utils/GlobalState.js';
import api from '../Utils/api';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {
  const [state, setState] = React.useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    phoneNumber: '',
    camperFirstName: '',
    camperLastName: '',
    birthday: '',
    grade: '',
  });

  function handleChange(evt) {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value,
    });
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    api.signup({
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.password,
      phoneNumber: this.state.phoneNumber,
      camperFirstName: this.state.camperFirstName,
      camperLastName: this.state.camperLastName,
      birthday: this.state.birthday,
      grade: this.state.grade,
    });
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={9} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                value={state.firstName}
                onChange={handleChange}
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                value={state.lastName}
                onChange={handleChange}
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                value={state.email}
                onChange={handleChange}
                autoComplete="email"
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
                value={state.password}
                onChange={handleChange}
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
                value={state.phoneNumber}
                onChange={handleChange}
                label="Phone Number"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                value={state.camperFirstName}
                onChange={handleChange}
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
                value={state.camperLastName}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={9} sm={6}>
              <TextField
                autoComplete="fname"
                name="birthday"
                variant="outlined"
                required
                fullWidth
                value={state.birthday}
                onChange={handleChange}
                label="Camper Birthday"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                value={state.grade}
                onChange={handleChange}
                label="Grade"
                name="grade"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            onSubmit={handleFormSubmit}>
            Sign Up
          </Button>
          <Grid container justify="flex-end"></Grid>
        </form>
      </div>
    </Container>
  );
}
}