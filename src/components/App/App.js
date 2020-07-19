import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import Feeling from "../Feeling/Feeling";
import Understanding from "../Understanding/Understanding";
import Supported from "../Supported/Supported";
import Comments from "../Comments/Comments";
import ThankYou from "../ThankYou/ThankYou";
import { connect } from "react-redux";

class App extends Component {
  componentDidMount() {
    axios
      .get("/feedback")
      .then((response) => {
        console.log(
          "in App. GET call to /feedback worked. Back with: ",
          response
        );
        this.props.dispatch({type: "LOG_A_SMILEY"});
      })
      .catch((err) => {
        console.log("Error in /feedback GET. Error is", err);
      });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4>
            <i>Don't forget it!</i>
          </h4>
        </header>
        <br />
        {/* <Supported /> */}
        <Router>
          <Route path="/" component={Feeling} exact />
          <Route path="/understanding" component={Understanding} />
          <Route path="/supported" component={Supported} />
          <Route path="/comments" component={Comments} />
          <Route path="/thankyou" component={ThankYou} />
        </Router>
      </div>
    );
  }
}

// This function says what to put on Component props
const putReduxStateOnProps = (reduxState) => ({
  reduxState,
});

// connect() will make the connection between the redux store and the React app
// connect gives us 'dispatch', this.props.dispatch(action)
// to see redux state, send function to connect
export default connect(putReduxStateOnProps)(App);