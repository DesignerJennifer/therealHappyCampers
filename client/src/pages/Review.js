import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Grid from '@material-ui/core/Grid';
import registration from '../Utils/registration.json';

const products = [
    {
        firstName: registration.firstName,
        lastName: registration.lastName,
        email: registration.email,
        phoneNumber: registration.phoneNumber,
        address: registration.address,
        city: registration.city,
        state: registration.state,
        zip: registration.zip,
        camperFirstName: registration.camperFirstName,
        camperLastName: registration.camperLastName,
        nickname: registration.nickname,
        birthday: registration.birthday,
        grade: registration.grade,
        shirtsize: registration.shirtsize,
        allergies: registration.allergies,
        dieteryneeds: registration.dieteryneeds

    }
];


const useStyles = makeStyles((theme) => ({
    listItem: {
        padding: theme.spacing(1, 0),
    },
    total: {
        fontWeight: 700,
    },
    title: {
        marginTop: theme.spacing(2),
    },
}));

export default function Review() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Registration Summary
            </Typography>
            <List disablePadding>
                <ListItem className={products.firstName}> </ListItem>
                <ListItem className={products.lastName}> </ListItem>
            </List>

        </React.Fragment>


    );
}