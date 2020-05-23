import React from "react";

export default class UserLogin extends React.Component {

    constructor() {
        super();
        this.state = {
            firstName: "",
            lastName: "",
            userName: "",
            password: "",
            email: "",
            phoneNumber: "",
            adddress: "",
            city: "",
            state: "",
            zip: ""

        };
    }

    updateInfo = event => {
        let fieldName = event.target.name;
        let fieldValue = even.target.value;
        if (fieldName === 'firstName') {
            this.setState({
                firstName: fieldValue
            })
        }
    };

    addUser = (e) => {
        let { }
        fetch('/api/signup', {
            method: 'post',
        });
    };
}
render()
return (
    <div className={classes.paper}>
        <div>
            <img className="logo_wBorder" src={CQKC_Logo_wBorder_250x250} alt="CQKC Logo" />
        </div>

        <Typography component="h1" variant="h5">
            Sign in
                 </Typography>

        <form className={classes.form} noValidate>
            <TextField
                variant="outlined"
                margin="normal"
                required fullWidth id="email"
                onChange={this.updateInfo}
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                value={this.state.email}
            />

            <TextField
                variant="outlined"
                margin="normal"
                required fullWidth name="password"
                label="Password"
                type="password"
                id={signup.password}
                autoComplete="current-password"
            />

            <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
            />

            <Button type="submit" fullWidth variant="contained" className={classes.submit_orange}>
                Sign In
                    </Button>
            <Button href="CreateAccount" fullWidth variant="contained" color="primary" className={classes.submit_blue}>
                Create an Account
                            </Button>

            <Grid container>
                <Grid item xs>
                    <Link href="#" variant="body2">Forgot password?</Link>
                </Grid>
                <Grid item>

                    {/* <Link href="CreateAccount" variant="body2">Don't have an account? Sign Up</Link> */}

                </Grid>
            </Grid>
        </form>
    </div>
)


