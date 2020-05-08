import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import App from '../App';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

export default function FormPropsTextFields() {
    const classes = useStyles();

    return (
        <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
        >
            <form className={classes.root} noValidate autoComplete="off">
                <div>
                    <TextField
                        required id="standard-required"
                        label="Required"
                        defaultValue="First Name"
                    />
                </div>

                <div>
                    <TextField
                        required id="standard-required"
                        label="Required"
                        defaultValue="Last Name"
                    />
                </div>

                <div>
                    <TextField
                        required id="standard-required"
                        label="Required"
                        defaultValue="Email"
                        helperText="Please use an email you check frequently"
                    />
                </div>

                <div>
                    <TextField
                        required id="standard-required"
                        label="Required"
                        defaultValue="Phone Number"
                    />
                </div>

                <TextField
                    id="standard-helperText"
                    label="Helper text"
                    defaultValue="Default Value"
                    helperText="Some important text"
                />


            </form>
        </Grid>
    );
}
