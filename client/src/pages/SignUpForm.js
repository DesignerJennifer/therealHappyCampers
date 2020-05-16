import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import registration from "../Utils/registration"


export default function SignUpForm() {
    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Your Information
      </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id={registration.firstName}
                        name="firstName"
                        label="First name"
                        fullWidth
                        autoComplete="fname"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id={registration.lastName}
                        name="lastName"
                        label="Last name"
                        fullWidth
                        autoComplete="lname"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="phoneNumber"
                        name={registration.phoneNumber}
                        label="Phone Number"
                        fullWidth
                        autoComplete="Phone Number"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        id="address"
                        name={registration.address}
                        label="Address"
                        fullWidth
                        autoComplete="Address"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="city"
                        name={registration.city}
                        label="City"
                        fullWidth
                        autoComplete="City"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField id="state" name="state" label="State/Province/Region" fullWidth />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="zip"
                        name={registration.zip}
                        label="Zip / Postal code"
                        fullWidth
                        autoComplete="billing postal-code"
                    />
                </Grid>

            </Grid>
        </React.Fragment>
    );
}