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

class Admin extends Component {
  state = {
    dataReady: false,
    allFeedback: {
      response: {
        data: [{
          id:500,
          feeling:200,
          understanding:300,
          support:400,
          comments:"THIS IS DUMMY DATA",
          flagged:false,
          date:"2020-07-19T05:00:00.000Z"
        }]
      },
    },
  };
  componentDidMount() {
    axios
      .get("/feedback")
      .then((response) => {
        console.log(
          "in App. GET call to /feedback worked. Back with: ",
          response
        );
        this.setState({
          allFeedback: { ...this.state.allfeedback, response },
        });
        console.log(
          "this.state.allFeedback.response.data is",
          this.state.allFeedback.response.data
        );
        this.props.dispatch({ type: "LOG_A_SMILEY" });
      })
      .catch((err) => {
        console.log("this.allFeedback.data is", this.state.allFeedback.data);
        console.log("Error in /feedback GET. Error is", err);
      });
  }

  classes = this.props.classes;

  nextClicked = () => {
    console.log(`button clicked`);
    this.props.history.push("/");
  };

  render() {
    return (
      <>
        <h3>Feedback history:</h3>

        <Paper className={this.props.classes.root}>
          <Table className={this.props.classes.table}>
            <TableHead>
              <TableRow>
                <TableCell>Feedback</TableCell>
                <TableCell align="right">Feeling</TableCell>
                <TableCell align="right">Understanding</TableCell>
                <TableCell align="right">Support</TableCell>
                <TableCell align="right">Comments</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.allFeedback.response.data.map((row) => (
                <TableRow key={row.id}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.feeling}</TableCell>
                  <TableCell align="right">{row.understanding}</TableCell>
                  <TableCell align="right">{row.support}</TableCell>
                  <TableCell align="right">{row.comments}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper> 

        {/* {JSON.stringify(this.state.allFeedback.response.data)} */}
        {/* {this.state.allFeedback.response.data.map((x) => x.comments)} */}
        <div className="buttonClass">
          <button onClick={this.nextClicked}>Next</button>
        </div>
      </>
    );
  }
}

const putReduxStateOnProps = (reduxState) => ({
  reduxState,
});

Admin.propTypes = {
  classes: PropTypes.object.isRequired,
};

// create a connected copy of component
const ConnectedAdmin = connect(putReduxStateOnProps)(Admin);
// attach styles to connected version
export default withStyles(styles)(ConnectedAdmin);
