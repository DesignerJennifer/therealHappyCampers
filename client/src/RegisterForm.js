import React from "react";
import { render } from "react-dom";
// import { }
// import Navigation from "";

class ParentInfoForm extends React.Component {
    constructor(props) {
    }
    super(props);

    this.state = {
    userid: "",
    password: "",
    guardianFirstName: "",
    guardianLastName: "",
    guardianPhoneNumber: "",
    guardianEmail: "",
    howDidYouHere: ""
};

this.handleChange = this.handleChange.bind(this);
this.handleArrayChange = this.handleArrayChange.bind(this);
this.handleSubmit = this.handleSubmit.bind(this);
}

handleChange(event)
{
}

handleArrayChange(event)
{
}

handleSubmit(event)
{

}

render()
{
    return (
        <div>
            <Navigation />
            <h1>Parent Information</h1>
            <p>
                Please fill in all the required fields to create a new account.
            </p>
            {this.state.success === false &&
                <p className="alert alert-danger" role="alert">
                    {this.state.message}
                </p>}
            {this.state.sucess === true &&
                <p className="alert alert-success" role="alert">
                    User Account created
                </p>}
            {!this.state.success &&
                <form onSubmit={this.handleSubmit}>
                </form>}
        </div>
    );
}
}

export default RegisterForm;