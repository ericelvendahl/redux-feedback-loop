import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import Supported from "../Supported/Supported";
import Understanding from "../Understanding/Understanding";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import Feeling from "../Feeling/Feeling";
import Comments from "../Comments/Comments";
import ThankYou from "../ThankYou/ThankYou";

class App extends Component {
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

export default App;
