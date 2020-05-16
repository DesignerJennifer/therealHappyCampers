import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import registration from "../Utils/registration";
import DropDown from "../components/DropDown/DropDown";

export default function CamperRegForm() {
    return (
        <React.Fragment>
            {/* Camper Registration Stage */}
            <Typography variant="h6" gutterBottom>
                Camper Information
            </Typography>
            <Grid container spacing={3}>

                {/* Camper first name */}
                <Grid item xs={12} md={6}>
                    <TextField required id={registration.camperFirstName}
                        label="Camper's First Name" fullWidth />
                </Grid>

                {/* Camper Last name */}
                <Grid item xs={12} md={6}>
                    <TextField required
                        id={registration.camperLastName}
                        label="Camper's Last Name" fullWidth />
                </Grid>

                {/* Camper Preferred Name */}
                <Grid item xs={12} md={6}>
                    <TextField
                        required id={registration.nickname}
                        label="Camper's Preferred Name" fullWidth
                        helperText="Name your camper would like go by at camp."
                    />


                </Grid>

                {/* Camper Birthdate */}
                <Grid item xs={12} md={6}>
                    <TextField
                        required
                        id={registration.birthday}
                        label="Camper's Birthdate"
                        helperText="MM-DD-YYYY"
                        fullWidth
                    />
                </Grid>

                {/* Camper's Current Grade */}
                <Grid item xs={12} md={6}>
                    <TextField
                        required
                        id={registration.grade}
                        label="Camper's Grade"
                        helperText="Grade your camper will be this fall"
                        fullWidth
                    />
                </Grid>

                {/* Camper's shirt Size */}
                <Grid item xs={12} md={6}>
                    <DropDown
                        id={registration.shritsize}
                        label="Required"
                        defaultValue="Medium"
                        helperText="Camper's Tshirt Size. Youth and adult sizes available"
                    />
                </Grid>

                {/* Camper allergies */}
                <Grid item xs={12} md={6}>
                    <TextField
                        id={registration.allergies}
                        label="Any Allergies?"
                        helperText="List any known allergies your camper has"
                        fullWidth
                    />
                </Grid>

                {/* Camper Dietary Needs */}
                <Grid item xs={12} md={6}>
                    <TextField
                        id={registration.dieteryneeds}
                        label="Special Diet?"
                        helperText="Vegitarian, vegan, etc."
                        fullWidth
                    />
                </Grid>

            </Grid>
        </React.Fragment>
    );
}

