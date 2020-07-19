import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";

class ThankYou extends Component {
  nextClicked = () => {
    console.log(`button clicked`);
    axios
      .post("/feedback", this.props.reduxState.thisFeedback)
      .then((response) => {
        console.log("POST successful!");
      })
      .catch((err) => {
        console.log("Error in post. Error is", err);
      });
    this.props.history.push("/");
  };

  render() {
    return (
      <>
        <h3>Thank you!</h3>
        <div className="buttonClass">
          <button onClick={this.nextClicked}>Next</button>
        </div>
      </>
    );
  }
}

const putReduxStateOnProps = (reduxState) => ({
  reduxState,
});

export default connect(putReduxStateOnProps)(ThankYou);
