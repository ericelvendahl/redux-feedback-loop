import React, { Component } from "react";
import axios from "axios";

class Comments extends Component {
  nextClicked = () => {
    console.log(`button clicked`);
    this.props.history.push("/thankyou")
  };

  render() {
    return (
      <>
        <h3>Do you have any comments?</h3>
        <div className="buttonClass">
          <button onClick={this.nextClicked}>Next</button>
        </div>

      </>
    );
  }
}

export default Comments;
