import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Grid } from '@material-ui/core';
import CQKC_Logo_wBorder_250x250 from '../images/CQKC_Logo_wBorder_250x250.png';
import styles from './main.module.css';
import background from '../images/background.jpeg';

const useStyles = makeStyles(theme => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  cardHeader: {
    backgroundColor:
      theme.palette.type === 'light'
        ? theme.palette.grey[200]
        : theme.palette.grey[700],
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing(2),
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
  },
}));

export default function Landing() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <div>
        <img
          className={styles.background}
          src={background}
          alt="background img"
        />
      </div>
      <CssBaseline />
      <AppBar
        position="static"
        color="default"
        elevation={0}
        className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Typography
            variant="h6"
            color="inherit"
            noWrap
            className={classes.toolbarTitle}>
            Camp Quest
          </Typography>
          <nav></nav>
          <Button
            href="/Login"
            color="primary"
            className={styles.mainButton}
            variant="outlined"
            className={classes.link}>
            Login
          </Button>
          <Button
            href="/CreateAccount"
            color="primary"
            className={styles.mainButton}
            variant="outlined"
            className={classes.link}>
            Sign Up
          </Button>
        </Toolbar>
      </AppBar>
      <Container maxWidth="sm" component="main" className={classes.heroContent}>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="textPrimary"
          gutterBottom></Typography>
        <Grid>
          <div className={styles.mainImg}>
            <img
              className="logo_wBorder"
              src={CQKC_Logo_wBorder_250x250}
              alt="CQKC Logo"
            />
          </div>
        </Grid>
        <Typography
          variant="h5"
          align="center"
          color="textSecondary"
          component="p">
          description
        </Typography>
      </Container>
    </React.Fragment>
  );
}
