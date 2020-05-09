import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

class FormContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            newUser: {
                firstname: '',
                lastname: '',
                email: '',
                phonenumber: 0,
                camperfirstname: '',
                camperlastname: '',
                nickname: '',
                birthday: 0,
                grade: 0,
                allergies: '',
                dietaryneeds: ''
            },

            shirtsizeOptions: ['Youth Small', 'Youth Medium', 'Youth Large', 'Youth XL', 'Adult Small', 'Adult Medium', 'Adult Large', 'Adult XL']
        }
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }
    handleFormSubmit() {

    }
    render() {
        return (
            <form className={classes.root} noValidate autoComplete="off" onSubmit={this.handleFormSubmit}>
                <div>
                    <TextField required id="standard-required" label="Required"
                        defaultValue="First Name"></TextField>
                </div>

            </form>

        )
    }
}