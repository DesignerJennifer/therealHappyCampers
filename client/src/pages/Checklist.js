import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

export default function SwitchesGroup() {
  const [state, setState] = React.useState({
    Bedding: true,
    Shorts: false,
    Tshirts: true,
    Sneakers: true,
    Jacket: true,
    Swimsuit: true,
    Towel: true,
    Sunscreen: true,
    Hat: true,
    Toothbrush: true,
    Shower: true,
    Bug: true,
    Water: true,
    Rainwear: true,
    Flashlight: true,
    Hairbrush: true,
    Socks: true,
    Campday: true,
  });

  const handleChange = event => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <Container maxWidth="lg">
      <Grid item xs={12}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <FormControl component="fieldset">
              <FormGroup>
                <FormControlLabel
                  control={
                    <Switch
                      checked={state.Bedding}
                      onChange={handleChange}
                      name="Bedding"
                    />
                  }
                  label="Bedding & Pillows"
                />
                <FormControlLabel
                  control={
                    <Switch
                      checked={state.Tshirts}
                      onChange={handleChange}
                      name="Tshirts"
                    />
                  }
                  label="T-shirts"
                />
                <FormControlLabel
                  control={
                    <Switch
                      checked={state.Jacket}
                      onChange={handleChange}
                      name="Jacket"
                    />
                  }
                  label="Light Jacket"
                />
                <FormControlLabel
                  control={
                    <Switch
                      checked={state.Shorts}
                      onChange={handleChange}
                      name="Shorts"
                    />
                  }
                  label="Shorts"
                />
                <FormControlLabel
                  control={
                    <Switch
                      checked={state.Swimsuit}
                      onChange={handleChange}
                      name="Swimsuit"
                    />
                  }
                  label="Swimsuit"
                />
                <FormControlLabel
                  control={
                    <Switch
                      checked={state.Sneakers}
                      onChange={handleChange}
                      name="Sneakers"
                    />
                  }
                  label="Sneakers"
                />
                <FormControlLabel
                  control={
                    <Switch
                      checked={state.Hat}
                      onChange={handleChange}
                      name="Hat"
                    />
                  }
                  label="Hat/Sunglasses"
                />
                <FormControlLabel
                  control={
                    <Switch
                      checked={state.Socks}
                      onChange={handleChange}
                      name="Socks"
                    />
                  }
                  label="Socks"
                />
                <FormControlLabel
                  control={
                    <Switch
                      checked={state.Rainwear}
                      onChange={handleChange}
                      name="Rainwear"
                    />
                  }
                  label="Rain wear"
                />
              </FormGroup>
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <FormControl component="fieldset">
              <FormGroup>
                <FormControlLabel
                  control={
                    <Switch
                      checked={state.sunscreen}
                      onChange={handleChange}
                      name="sunscreen"
                    />
                  }
                  label="Sunscreen"
                />
                <FormControlLabel
                  control={
                    <Switch
                      checked={state.Towel}
                      onChange={handleChange}
                      name="Towel"
                    />
                  }
                  label="Beach Towel / Shower Towel"
                />
                <FormControlLabel
                  control={
                    <Switch
                      checked={state.Bug}
                      onChange={handleChange}
                      name="Bug"
                    />
                  }
                  label="Bug Spray"
                />
                <FormControlLabel
                  control={
                    <Switch
                      checked={state.Shower}
                      onChange={handleChange}
                      name="Shower"
                    />
                  }
                  label="Shower Products"
                />
                <FormControlLabel
                  control={
                    <Switch
                      checked={state.Toothbrush}
                      onChange={handleChange}
                      name="Toothbrush"
                    />
                  }
                  label="Toothbrush/Toothpaste"
                />
                <FormControlLabel
                  control={
                    <Switch
                      checked={state.Hairbrush}
                      onChange={handleChange}
                      name="Hairbrush"
                    />
                  }
                  label="Hairbrush"
                />
                <FormControlLabel
                  control={
                    <Switch
                      checked={state.Water}
                      onChange={handleChange}
                      name="Water"
                    />
                  }
                  label="Water-bottle"
                />
                <FormControlLabel
                  control={
                    <Switch
                      checked={state.Flashlight}
                      onChange={handleChange}
                      name="Flashlight"
                    />
                  }
                  label="Flashlight"
                />
                <FormControlLabel
                  control={
                    <Switch
                      checked={state.Campday}
                      onChange={handleChange}
                      name="Campday"
                    />
                  }
                  label="Camp day theme attire"
                />
              </FormGroup>
            </FormControl>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
