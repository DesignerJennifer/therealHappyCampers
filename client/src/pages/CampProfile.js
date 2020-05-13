import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';
import Figure from 'react-bootstrap/Figure';
import download from '../download.png';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

export default function Deposits() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Figure>
        <Figure.Image
          width="200px"
          height="200px"
          alt="Camper Icon"
          src={download}
        />
      </Figure>

      <Container maxWidth="lg" className={classes.container}>
        <Grid item xs={12}>
          <Grid container spacing={0}>
            <Grid item xs={6}>
              <Title>Preferred name</Title>
              <Typography color="textSecondary">Camper ID: 11678</Typography>
              <Typography color="textSecondary">Name: first last</Typography>
              <Typography color="textSecondary">Birthday: 1/1/2011</Typography>
              <Typography color="textSecondary">Phone number: </Typography>
              <Typography color="textSecondary">Email: </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography color="textSecondary">Grade: 5th</Typography>
              <Typography color="textSecondary">Allergies:</Typography>
              <Typography color="textSecondary">Dietery Needs:</Typography>
              <Typography color="textSecondary">
                Swimming Skill Level: intermediate
              </Typography>
              <Typography color="textSecondary">Shirt Size: </Typography>
              <Typography color="textSecondary">
                Guardian: first last
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}
