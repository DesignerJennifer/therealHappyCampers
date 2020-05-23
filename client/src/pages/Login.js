import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
// import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import CQKC_Logo_wBorder_250x250 from '../images/CQKC_Logo_wBorder_250x250.png';
import Copyright from '../components/Copyright';
import styles from './login.module.css';
import { Redirect } from 'react-router-dom';
import api from '../Utils/api';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
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

  handleEmail(event) {
    this.setState({ email: event.target.value });
  }
  handlePassword(event) {
    this.setState({ password: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('handleSubmit');
    api
      .login({
        email: this.state.email,
        password: this.state.password,
      })
      .then(response => {
        console.log('login response: ');
        console.log(response);
        if (response.status === 200) {
          console.log(this.props);

          // update the state to redirect to Dashboard
          this.setState({
            redirectTo: '/dashboard',
          });
        }
      })
      .catch(error => {
        console.log('login error: ');
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
            <div>
              <img
                className="logo_wBorder"
                src={CQKC_Logo_wBorder_250x250}
                alt="CQKC Logo"
              />
            </div>

            <Typography component="h1" variant="h5">
              Sign in
            </Typography>

            <form noValidate onSubmit={this.handleSubmit}>
              <TextField
                className={styles.loginInput}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                label="Email Address"
                name="email"
                value={this.state.email}
                autoFocus
                onChange={this.handleChange}
              />

              <TextField
                className={styles.loginInput}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                value={this.state.password}
                onChange={this.handleChange}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                style={{ Color: '002f6c' }}>
                Sign In
              </Button>
              <Button
                href="CreateAccount"
                fullWidth
                variant="contained"
                className={styles.createAccount}>
                <span> Create an Account </span>
              </Button>

              <Grid container>
                <Grid item xs></Grid>
                <Grid item></Grid>
              </Grid>
            </form>
          </div>

          <Box mt={8}>
            <Copyright />
          </Box>
        </Container>
      );
    }
  }
}
export default Login;
