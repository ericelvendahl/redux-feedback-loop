import React, { Component } from "react";
import axios from "axios";

class Understanding extends Component {
  
  nextClicked = () => {
    console.log(`button clicked`);
    this.props.history.push("/supported")
  };

  render() {
    return (
      <>
        <h2>This the Understanding component.</h2>
        <div className="buttonClass">
          <button onClick={this.nextClicked}>Next</button>
        </div>
      </>
    );
  }
}

export default Understanding;
