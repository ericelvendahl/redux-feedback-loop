import React, { Component } from "react";
import axios from "axios";
import { HashRouter as Router, Route, Link } from "react-router-dom";

class Supported extends Component {
  nextClicked = () => {
    console.log(`button clicked`);
    this.props.history.push("/comments")
  };

  render() {
    return (
      <>
        <h3>How well are you being supported?</h3>
        <div className="buttonClass">
          <button onClick={this.nextClicked}>Next</button>
        </div>

      </>
    );
  }
}

export default Supported;
