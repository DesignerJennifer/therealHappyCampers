import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { useGlobalContext } from '../Utils/GlobalState.js';

export default function CamperRegForm() {
  const [state, dispatch] = useGlobalContext();
  const handleChange = event => {
    dispatch({ type: event.target.name, value: event.target.value });
    console.log(handleChange);
  };
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
            id="firstName"
            name="firstName"
            label="First name"
            onChange={handleChange}
            state={state.firstName}
            fullWidth
            autoComplete="First Name"
          />
        </Grid>

        {/* Gaurdian Last Name */}
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            onChange={handleChange}
            state={state.lastName}
            fullWidth
            autoComplete="Last Name"
          />
        </Grid>

        {/* Create Password */}
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="password"
            name="password"
            label="Create Password"
            onChange={handleChange}
            state={state.password}
            fullWidth
            autoComplete="Password"
          />
        </Grid>

        {/* email */}
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="email"
            name="email"
            label="email"
            onChange={handleChange}
            state={state.email}
            fullWidth
            autoComplete="email"
          />
        </Grid>

        {/* phone number */}
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="phoneNumber"
            name="phoneNumber"
            label="Phone Number"
            onChange={handleChange}
            state={state.phoneNumber}
            fullWidth
            autoComplete="Phone Number"
          />
        </Grid>

        {/* street address */}
        <Grid item xs={12}>
          <TextField
            id="address"
            name="address"
            label="Address"
            fullWidth
            onChange={handleChange}
            state={state.address}
            autoComplete="Address"
          />
        </Grid>

        {/* City */}
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            onChange={handleChange}
            state={state.city}
            autoComplete="City"
          />
        </Grid>

        {/* State */}
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="state"
            name="state"
            label="State/Province/Region"
            fullWidth
            onChange={handleChange}
            state={state.state}
            autoComplete="State/Province/Region"
          />
        </Grid>

        {/* zip */}
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Zip / Postal code"
            fullWidth
            onChange={handleChange}
            state={state.zip}
            autoComplete="billing postal-code"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
