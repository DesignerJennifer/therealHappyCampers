import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

import React, { Fragment } from "react";

const CamperForm = () => {
    return (
        // User ID input field
        <div className="input-group">
            <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon"></span>
            </div>
            <input type="text" className="form-control" placeholder="User ID" aria-label="User ID" aria-describedby="basic-addon" />
        </div>

        // Garudian First Name
        <div className="input-group">
            <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon"></span>
            </div>
            <input type="text" className="form-control" placeholder="First Name" aria-label="First Name" aria-describedby="basic-addon" />
        </div>

        // Garudian Last Name
        <div className="input-group">
            <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon"></span>
            </div>
            <input type="text" className="form-control" placeholder="Last Name" aria-label="Last Name" aria-describedby="basic-addon" />
        </div>

        // Phone Number
        <div className="input-group">
            <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon"></span>
            </div>
            <input type="text" className="form-control" placeholder="Phone Number" aria-label="Phone Number" aria-describedby="basic-addon" />
        </div>

        // Email
        <div className="input-group">
            <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon"></span>
            </div>
            <input type="text" className="form-control" placeholder="Email" aria-label="Email" aria-describedby="basic-addon" />
        </div>

        // How did you hear about camp?
        <div className="input-group">
            <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon"></span>
            </div>
            <input type="text" className="form-control" placeholder="Email" aria-label="Email" aria-describedby="basic-addon" />
        </div>


    );

    export default InputPage;