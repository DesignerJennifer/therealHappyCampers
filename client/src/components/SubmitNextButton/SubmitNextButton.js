import { connect } from "react-redux"

const SubmitNextButton = React.createClass({

    handleNext: function () {
        setActiveStep(activeStep + 1);
    },

    submit: function (e) {
        e.preventDefault();
    },

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}