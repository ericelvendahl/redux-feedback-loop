import React, { Component } from "react";
import axios from "axios";

class Feeling extends Component {
  nextClicked = () => {
    console.log(`button clicked`);
    this.props.history.push("/understanding")
  };

  render() {
    return (
      <>
        <h3>How are you feeling today?</h3>
        <div className="buttonClass">
          <button onClick={this.nextClicked}>Next</button>
        </div>

      </>
    );
  }
}

export default Feeling;
