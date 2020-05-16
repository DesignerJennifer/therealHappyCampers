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
                        autoComplete="First Name"
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
                        name="username"
                        label="Username"
                        fullWidth
                        autoComplete="lname"
                    />
                </Grid>

                {/* Create Password */}
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id={signup.password}
                        name="Create Password"
                        label="Create Password"
                        fullWidth
                        autoComplete="Password"
                    />
                </Grid>

                {/* email */}
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id={signup.email}
                        name="email"
                        label="email"
                        fullWidth
                        autoComplete="email"
                    />
                </Grid>

                {/* phone number */}
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id={signup.phoneNumber}
                        name="phoneNumber"
                        label="Phone Number"
                        fullWidth
                        autoComplete="Phone Number"
                    />
                </Grid>

                {/* street address */}
                <Grid item xs={12}>
                    <TextField
                        id={signup.address}
                        name="address"
                        label="Address"
                        fullWidth
                        autoComplete="Address"
                    />
                </Grid>

                {/* City */}
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id={signup.city}
                        name="city"
                        label="City"
                        fullWidth
                        autoComplete="City"
                    />
                </Grid>

                {/* State */}
                <Grid item xs={12} sm={6}>
                    <TextField id={signup.state}
                        name="state"
                        label="State/Province/Region"
                        fullWidth />
                </Grid>

                {/* zip */}
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id={signup.zip}
                        name="zip"
                        label="Zip / Postal code"
                        fullWidth
                        autoComplete="billing postal-code"
                    />
                </Grid>

            </Grid>
        </React.Fragment>
    );
}