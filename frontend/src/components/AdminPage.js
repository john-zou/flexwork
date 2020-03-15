import React from "react";
import { TextField, withStyles } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import OfficeBookingApi from "../api/OfficeBookingApi";

class AdminPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      locations: OfficeBookingApi.getLocations()
    };
  }
  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <div className={`${classes.headerStyle}`}>
          <h1 style={{ color: "white", position: "absolute", left: "2.78%", fontSize: 48 }}>Edit</h1>
        </div>
        <div className={`${classes.searchCellStyle}`}>
          <div className={`${classes.searchBarStyle}`}>
            <TextField style={{ position: "absolute", top: "7px", left: "20%" }} />
            <SearchIcon style={{ fontSize: "34px", position: "absolute", top: "5px", left: "3%" }} />
          </div>
          <div className={`${classes.addLocationStyle}`}>
            <h1 style={{ color: "white", position: "absolute", left: "10%", top: "0%", fontSize: "30px" }}>Location</h1>
            <AddCircleOutlineIcon
              style={{ color: "white", position: "absolute", right: "10%", bottom: "10%", fontSize: "40px" }}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}
const muiStyles = {
  headerStyle: {
    position: "absolute",
    left: "0px",
    right: "0px",
    top: "0px",
    height: "100px",
    backgroundColor: "#002D7D"
  },
  searchCellStyle: {
    position: "absolute",
    left: "0px",
    right: "0px",
    top: "100px",
    height: "70px",
    backgroundColor: "#DAE1EC"
  },
  searchBarStyle: {
    position: "absolute",
    left: "2.78%",
    top: "20px",
    height: "38px",
    right: "82%",
    backgroundColor: "white",
    borderRadius: "10px"
  },
  addLocationStyle: {
    backgroundColor: "#0048A8",
    position: "absolute",
    left: "82%",
    right: "2%",
    height: "55px",
    top: "7px",
    borderRadius: "20px"
  }
};

export default withStyles(muiStyles)(AdminPage);
