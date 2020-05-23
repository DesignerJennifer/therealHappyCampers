import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import DropDown from "../components/DropDown/DropDown";
import { useGlobalContext, Provider } from "../Utils/GlobalState"
// import API from "../Utils/api";


export default function CamperRegForm() {
    const [state, dispatch] = useGlobalContext();
    //     const handleChange = (event) => {
    //         dispatch({ type: event.target.name, value: event.target.value })
    //         console.log(handleChange)
    //     };
    // }
    const handleChange = (event) => {
        dispatch({ type: event.target.name, value: event.target.value })
        console.log(handleChange)
    }

    // const handleSubmit = (event)=> {
    //     altert(this.state.camperFirstName)
    //     event.preventDefault()
    // }

    return (
        <React.Fragment>
            <Provider>
                <Typography variant="h6" gutterBottom>
                    Camper Information
        </Typography>

                <Grid container spacing={3}>

                    {/* Camper first name */}
                    <Grid item xs={12} md={6}>
                        <TextField
                            required
                            id="camperFirstName"
                            name="camperFirstName"
                            label="Camper's First Name"
                            onChange={handleChange}
                            state={state.camperFirstName}
                            fullWidth
                            autoComplete="First Name"
                        />
                    </Grid>

                    {/* Camper Last name */}
                    <Grid item xs={12} md={6}>
                        <TextField
                            required
                            id="camperLastName"
                            name="camperLastName"
                            label="Camper's Last Name"
                            onChange={handleChange}
                            state={state.camperLastName}
                            fullWidth
                            autoComplete="Last Name"
                        />
                    </Grid>

                    {/* Camper Preferred Name */}
                    <Grid item xs={12} md={6}>
                        <TextField
                            required
                            id="nickname"
                            name="nickname"
                            label="Camper's Preferred Name"
                            onChange={handleChange}
                            state={state.nickname}
                            autoComplete="Preferred Name"
                            fullWidth
                            helperText="Name your camper would like go by at camp."
                        />


                    </Grid>

                    {/* Camper Birthdate */}
                    <Grid item xs={12} md={6}>
                        <TextField
                            required
                            id="birthday"
                            name="birthday"
                            label="Camper's Birthdate"
                            onChange={handleChange}
                            state={state.birthday}
                            fullWidth
                            autoComplete="MM-DD-YYYY"
                        />
                    </Grid>

                    {/* Camper's Current Grade */}
                    <Grid item xs={12} md={6}>
                        <TextField
                            required
                            id="grade"
                            name="grade"
                            label="Camper's Grade"
                            onChange={handleChange}
                            state={state.grade}
                            helperText="Grade your camper will be this fall"
                            fullWidth

                        />
                    </Grid>

                    {/* Camper's shirt Size */}
                    <Grid item xs={12} md={6}>
                        <DropDown
                            required
                            id="shirtsize"
                            name="shirtsize"
                            label="Camper's Shirt Size"
                            onChange={handleChange}
                            state={state.shirtsize}
                            helperText="Camper's Tshirt Size. Youth and adult sizes available"
                            fullWidth
                        />
                    </Grid>

                    {/* Camper allergies */}
                    <Grid item xs={12} md={6}>
                        <TextField
                            required
                            id="allergies"
                            name="allergies"
                            label="Camper Known Allergies"
                            onChange={handleChange}
                            state={state.allergies}
                            helperText="List any known allergies your camper has"
                            fullWidth
                        />
                    </Grid>

                    {/* Camper Dietary Needs */}
                    <Grid item xs={12} md={6}>
                        <TextField
                            required
                            id="dietaryneeds"
                            name="dietaryneeds"
                            label="Special Dietary Needs"
                            onChange={handleChange}
                            state={state.dietaryneeds}
                            helperText="Vegitarian, vegan, etc."
                            fullWidth
                        />
                    </Grid>
                </Grid>
            </Provider>
        </React.Fragment>

    );
}
