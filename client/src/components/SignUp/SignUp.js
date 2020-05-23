import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { Grid } from '@material-ui/core';
import { useGlobalContext } from '../../Utils/GlobalState'


export default function CamperRegForm() {
    const [state, dispatch] = useGlobalContext();
    const handleChange = (event) => {
        dispatch({ type: event.target.name, value: event.target.value })
        console.log(handleChange)
    };

    return (
        <div>

        </div>
    )
}

// export default SignUp;