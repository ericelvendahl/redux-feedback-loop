import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";

// imports for Material-UI
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const styles = (theme) => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto",
    alignItems: "center",
    justifyContent: "center",
  },
  table: {
    minWidth: 700,
  },
});

class ThankYou extends Component {

  classes = this.props.classes;

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
    this.props.dispatch({ type: "CLEAR_THIS_FEEDBACK" });
  };

  render() {
    return (
      <>
        <h3>Thank you! Click finish to submit and return to the beginning</h3>
        <div className="buttonClass">
        <Paper className={this.props.classes.root}>
          <Table className={this.props.classes.table}>
            <TableHead>
              <TableRow>
                <TableCell>Feedback</TableCell>
                <TableCell align="right">Feeling</TableCell>
                <TableCell align="right">Understanding</TableCell>
                <TableCell align="right">Supported</TableCell>
                <TableCell align="right">Comments</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              
                <TableRow key={this.props.reduxState.thisFeedback.id}>
                  <TableCell component="th" scope="row">
                    {this.props.reduxState.thisFeedback.name}
                  </TableCell>
                  <TableCell align="right">{this.props.reduxState.thisFeedback.feeling}</TableCell>
                  <TableCell align="right">{this.props.reduxState.thisFeedback.understanding}</TableCell>
                  <TableCell align="right">{this.props.reduxState.thisFeedback.supported}</TableCell>
                  <TableCell align="right">{this.props.reduxState.thisFeedback.comments}</TableCell>
                </TableRow>
             
            </TableBody>
          </Table>
        </Paper> 
          <button onClick={this.nextClicked}>Finish</button>
        </div>
      </>
    );
  }
}

ThankYou.propTypes = {
  classes: PropTypes.object.isRequired,
};

const putReduxStateOnProps = (reduxState) => ({
  reduxState,
});

// export default connect(putReduxStateOnProps)(ThankYou);

// create a connected copy of component
const ConnectedThankYou = connect(putReduxStateOnProps)(ThankYou);
// attach styles to connected version
export default withStyles(styles)(ConnectedThankYou);
