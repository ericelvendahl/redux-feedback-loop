import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";

// imports for material-ui number Select
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

const styles = (theme) => ({
  root: {
    display: "flex",
  },
  formControl: {
    margin: theme.spacing.unit * 3,
  },
  group: {
    margin: `${theme.spacing.unit}px 0`,
  },
});

class Understanding extends Component {
  state = {
    understandingValue: 123,
  };
  nextClicked = () => {
    console.log(`button clicked`);
    this.props.history.push("/supported")
  };

  handleChange = (event) => {
    console.log(
      "handleChange called. event.target.value is ",
      event.target.value
    );
    console.log("state is", this.state);
    this.setState({
      understandingValue: event.target.value,
    });
    this.props.dispatch({ type: "UPDATE_UNDERSTANDING", payload: event.target.value });
  };

  render() {
    const { classes } = this.props;
    return (
      <>
        <h2>This the Understanding component.</h2>
        <div className={classes.root}>
          <FormControl component="fieldset" className={classes.formControl}>
            <FormLabel component="legend">
              On a scale of 1 to 5, rate your feeling for today
            </FormLabel>
            <RadioGroup
              aria-label="Gender"
              name="understanding1"
              className={classes.group}
              value={this.state.feelingValue}
              onChange={this.handleChange}
            >
              <FormControlLabel
                value="1"
                control={<Radio />}
                label="1 - very bad"
              />
              <FormControlLabel value="2" control={<Radio />} label="2" />
              <FormControlLabel value="3" control={<Radio />} label="3" />
              <FormControlLabel value="4" control={<Radio />} label="4" />
              <FormControlLabel
                value="5"
                control={<Radio />}
                label="5 - very good"
              />
            </RadioGroup>
          </FormControl>
        </div>
        this.state.feelingValue is {this.state.understandingValue}

        <div className="buttonClass">
          <button onClick={this.nextClicked}>Next</button>
        </div>
      </>
    );
  }
}

Understanding.propTypes = {
  classes: PropTypes.object.isRequired,
};

const putReduxStateOnProps = (reduxState) => ({
  reduxState,
});

// create a connected copy of component
const ConnectedUnderstanding = connect(putReduxStateOnProps)(Understanding);
// attach styles to connected version
export default withStyles(styles)(ConnectedUnderstanding);
