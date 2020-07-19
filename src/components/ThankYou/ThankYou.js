import React, { Component } from "react";
import axios from "axios";

class ThankYou extends Component {
  nextClicked = () => {
    console.log(`button clicked`);
    this.props.history.push("/")
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
export default ThankYou;
