import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

export default function SwitchesGroup() {
  const [state, setState] = React.useState({
    gilad: true,
    jason: false,
    antoine: true,
  });

  const handleChange = event => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <Container maxWidth="lg">
      <Grid item xs={12}>
        <Grid container spacing={4}>
          <Grid item xs={6}>
            <FormControl component="fieldset">
              <FormGroup>
                <FormControlLabel
                  control={
                    <Switch
                      checked={state.gilad}
                      onChange={handleChange}
                      name="gilad"
                    />
                  }
                  label="Gilad Gray"
                />
                <FormControlLabel
                  control={
                    <Switch
                      checked={state.jason}
                      onChange={handleChange}
                      name="jason"
                    />
                  }
                  label="Jason Killian"
                />
                <FormControlLabel
                  control={
                    <Switch
                      checked={state.antoine}
                      onChange={handleChange}
                      name="antoine"
                    />
                  }
                  label="Antoine Llorca"
                />
                <FormControlLabel
                  control={
                    <Switch
                      checked={state.jason}
                      onChange={handleChange}
                      name="jason"
                    />
                  }
                  label="Jason Killian"
                />
                <FormControlLabel
                  control={
                    <Switch
                      checked={state.jason}
                      onChange={handleChange}
                      name="jason"
                    />
                  }
                  label="Jason Killian"
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
                      checked={state.gilad}
                      onChange={handleChange}
                      name="gilad"
                    />
                  }
                  label="Gilad Gray"
                />
                <FormControlLabel
                  control={
                    <Switch
                      checked={state.jason}
                      onChange={handleChange}
                      name="jason"
                    />
                  }
                  label="Jason Killian"
                />
                <FormControlLabel
                  control={
                    <Switch
                      checked={state.jason}
                      onChange={handleChange}
                      name="jason"
                    />
                  }
                  label="Jason Killian"
                />
                <FormControlLabel
                  control={
                    <Switch
                      checked={state.jason}
                      onChange={handleChange}
                      name="jason"
                    />
                  }
                  label="Jason Killian"
                />
                <FormControlLabel
                  control={
                    <Switch
                      checked={state.antoine}
                      onChange={handleChange}
                      name="antoine"
                    />
                  }
                  label="Antoine Llorca"
                />
              </FormGroup>
            </FormControl>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
