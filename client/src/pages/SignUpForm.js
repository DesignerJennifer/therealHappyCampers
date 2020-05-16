import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import signup from "../Utils/signup.json"


export default function SignUpForm() {
    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Your Information
            </Typography>

            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>

                    {/* Garudian First Name */}
                    <TextField
                        required
                        id={signup.firstName}
                        name="firstName"
                        label="First name"
                        fullWidth
                        autoComplete="fname"
                    />
                </Grid>

                {/* Gaurdian Last Name */}
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id={signup.lastName}
                        name="lastName"
                        label="Last name"
                        fullWidth
                        autoComplete="lname"
                    />
                </Grid>

                {/* Username */}
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id={signup.userName}
                        name="lastName"
                        label="Last name"
                        fullWidth
                        autoComplete="lname"
                    />
                </Grid>

                {/* email */}
                <TextField
                    required
                    id="email"
                    name={signup.email}
                    label="email"
                    fullWidth
                    autoComplete="email"
                />


                {/* phone number */}
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="phoneNumber"
                        name={signup.phoneNumber}
                        label="Phone Number"
                        fullWidth
                        autoComplete="Phone Number"
                    />
                </Grid>

                <Grid item xs={12}>
                    <TextField
                        id="address"
                        name={signup.address}
                        label="Address"
                        fullWidth
                        autoComplete="Address"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="city"
                        name={signup.city}
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
                        name={signup.zip}
                        label="Zip / Postal code"
                        fullWidth
                        autoComplete="billing postal-code"
                    />
                </Grid>

            </Grid>
        </React.Fragment>
    );
}