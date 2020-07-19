import React, { Component } from "react";
import { connect } from "react-redux";

// imports for material-ui number Select
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";

const styles = (theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
});

const currencies = [
  {
    value: "USD",
    label: "$",
  },
  {
    value: "EUR",
    label: "€",
  },
  {
    value: "BTC",
    label: "฿",
  },
  {
    value: "JPY",
    label: "¥",
  },
];

class Comments extends Component {
  state = {
    name: "Cat in the Hat",
    age: "",
    multiline: "Controlled",
    currency: "EUR",
  };

  nextClicked = () => {
    console.log(`button clicked`);
    this.props.history.push("/thankyou");
  };

  handleChange = (name) => (event) => {
    console.log(
      "handleChange called. event.target.value is ",
      event.target.value
    );
    console.log("state is", this.state);

    this.setState({ [name]: event.target.value });

    this.props.dispatch({
      type: "UPDATE_COMMENTS",
      payload: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <>
        <h2>This the Comments component.</h2>
        <div className={classes.root}>
          <form className={classes.container} noValidate autoComplete="off">
            <TextField
              id="standard-multiline-flexible"
              label="Multiline"
              multiline
              rowsMax="4"
              value={this.state.multiline}
              onChange={this.handleChange("multiline")}
              className={classes.textField}
              margin="normal"
            />
          </form>
        </div>
        this.state.CommentsValue is {this.state.CommentsValue}
        <div className="buttonClass">
          <button onClick={this.nextClicked}>Next</button>
        </div>
      </>
    );
  }
}

Comments.propTypes = {
  classes: PropTypes.object.isRequired,
};

const putReduxStateOnProps = (reduxState) => ({
  reduxState,
});

// create a connected copy of component
const ConnectedComments = connect(putReduxStateOnProps)(Comments);
// attach styles to connected version
export default withStyles(styles)(ConnectedComments);
