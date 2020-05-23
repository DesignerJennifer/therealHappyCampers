import React from 'react';
import useStyles from "../components/useStyles/useStyles"
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Grid from '@material-ui/core/Grid';
import { useGlobalContext } from '../Utils/GlobalState'
import { ListItemText } from '@material-ui/core';
// import App from "../App";


const classes = useStyles;


export default function Review() {
    const [state, dispatch] = useGlobalContext();
    const handleChange = (event) => {
        dispatch({ type: event.target.name, value: event.target.value })
        console.log(handleChange)
    };

    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Registration Summary
                 <p>Please review your information below.</p>
            </Typography>

            <Typography variant="h6" gutterBottom>
                Your Information
            </Typography>

            <Grid item xs={12}>
                <List disablePadding>
                    <ListItem className={classes.listItem} >
                        <ListItemText onChange={handleChange} primary="First Name" secondary={state.firstName} />
                        <ListItemText onChange={handleChange} primary="Last Name" secondary={state.lastName} />
                    </ListItem>
                </List>
            </Grid>

            <Grid item xs={12}>
                <List disablePadding>
                    <ListItem className={classes.listItem} >
                        <ListItemText onChange={handleChange} primary="Email" secondary={state.email} />
                        <ListItemText onChange={handleChange} primary="Phone Number" secondary={state.phoneNumber} />
                    </ListItem>
                </List>
            </Grid>

            <Grid item xs={12}>
                <List disablePadding>
                    <ListItem className={classes.listItem} >
                        <ListItemText onChange={handleChange} primary="Address" secondary={state.address} />
                        <ListItemText onChange={handleChange} primary="city" secondary={state.city} />
                        <ListItemText onChange={handleChange} primary="state" secondary={state.state} />
                        <ListItemText onChange={handleChange} primary="state" secondary={state.zip} />
                    </ListItem>
                </List>
            </Grid>

            <Typography variant="h6" gutterBottom>
                Camper Information
            </Typography>

            <Grid item xs={12}>
                <List disablePadding>
                    <ListItem className={classes.listItem} >
                        <ListItemText onChange={handleChange} primary="Camper's First Name" secondary={state.camperFirstName} />
                        <ListItemText onChange={handleChange} primary="Camper's Last Name" secondary={state.camperLastName} />
                        <ListItemText onChange={handleChange} primary="Preferred Name" secondary={state.nickname} />

                    </ListItem>
                </List>
            </Grid>

            <Grid item xs={12}>
                <List disablePadding>
                    <ListItem className={classes.listItem} >
                        <ListItemText onChange={handleChange} primary="Camper's Birth Date" secondary={state.birthday} />
                        <ListItemText onChange={handleChange} primary="Camper's Grade" secondary={state.grade} />
                        <ListItemText onChange={handleChange} primary="Shirt Size" secondary={state.shirtsize} />

                    </ListItem>
                </List>
            </Grid>

            <Grid item xs={12}>
                <List disablePadding>
                    <ListItem className={classes.listItem} >
                        <ListItemText onChange={handleChange} primary="Known Allergies" secondary={state.allergies} />
                        <ListItemText onChange={handleChange} primary="Dietary Needs" secondary={state.dietaryneeds} />
                    </ListItem>
                </List>
            </Grid>


        </React.Fragment>
    );

}

