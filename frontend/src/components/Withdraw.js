import React from "react";
import OfficeBookingApi from "../api/OfficeBookingApi";
import OfficeLendingApi from "../api/OfficeLendingApi";

import { withStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField/TextField";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import ManageTable from "./display/ManageTable";
import Display_SmallSquare from "./display/Display_SmallSquare";

import Home from "./Home";

import Link from "@material-ui/core/Link";

class Withdraw extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      staffId: -1,
      // bookings: [],
      // TEST:
      bookings: [],
      error: null,
      showBookingCancelSuccess: false
    };
    this.onCancelBooking = this.onCancelBooking.bind(this);
    this.onSubmitStaffId = this.onSubmitStaffId.bind(this);
  }

  async onSubmitStaffId(event) {
    console.log("onSubmitStaffId");
    event.preventDefault();
    const staffId = 1001;
    const data = await OfficeBookingApi.getBookingsByUserID(staffId);
    console.log(data);
    this.setState({ bookings: data });
    // , (error, data) => {
    //   if (error) {
    //     console.log("Got an error from API call");
    //     this.setState({
    //       error: error,
    //       bookings: []
    //     });
    //     return;
    //   }
    //   if (data) {
    //     console.log(data);
    //     this.setState({
    //       error: null
    //       // bookings: data
    //     });
    //   }
    // });
  }

  onCancelBooking(id) {
    console.log("handle delete");
    this.api.cancelBooking(id, error => {
      if (error) {
        this.setState({
          error: error,
          bookings: []
        });
      } else {
        // 200
        this.setState({
          showBookingCancelSuccess: true
        });
      }
    });
  }

  onAcknowledgeCanceled() {
    this.setState({ showBookingCancelSuccess: false });
  }

  // createTableRowData() {
  //   const bookings = this.state.bookings;
  //   return bookings.map(b => {
  //     return {
  //       bookingId: b.BookingId,
  //       startDate: b.BookingStartDate,
  //       endDate: b.BookingEndDate,
  //       city: b.workspace.floor.city,
  //       workspaceId: b.workspace.workspaceId,
  //       // TODO: Implement confirmation
  //       status: "Confirmed",
  //       officeOwner: b.workspace.staff.firstName + " " + b.workspace.staff.lastName
  //     };
  //   });
  // }

  render() {
    const { classes } = this.props;
    // TODO:
    // Always show the user Id entry field
    // Show error message if this.state.error
    // Show successfully canceled booking if this.state.showBookingCancelSuccess
    // Otherwise, show this.state.bookings in dynamically generated list
    return (
      <div>
        <Link href="/">
          <HomeIcon className={`${classes.shapeFilter}`} />
        </Link>
        <div className={`${classes.lendingHistory}`}>
          <Display_SmallSquare />
        </div>
        <SearchIcon className={`${classes.searchIcon}`} />
        <form onSubmit={this.onSubmitStaffId} className={`${classes.idSearch}`}>
          <TextField
            onKeyPress={e => this.setState({ staffId: e.target.value })}
            type="text"
            label="ID"
            name="staffId"
          />
        </form>
        <div className={`${classes.bookingTable}`}>
          <ManageTable rows={this.state.bookings} />
        </div>
      </div>
    );
  }
}

const withdrawSty = {
  idSearch: {
    position: "absolute",
    top: "33%",
    left: "5%",
    right: "73.61%"
  },
  shapeFilter: {
    position: "absolute",
    left: "2.08%",
    right: "96.53%",
    top: "3.33%",
    bottom: "94.44%",
    color: "#0A65FF"
  },
  searchIcon: {
    position: "absolute",
    left: "3%",
    top: "36%",
    color: "gray"
  },
  searchBar: {
    position: "absolute",
    left: "5.56%",
    right: "73.61%",
    top: "2.22%",
    bottom: "93.33%",
    background: " #DAE1EC",
    borderRadius: "4px"
  },
  bookingTable: {
    position: "absolute",
    top: "40%",
    left: "0%",
    right: "0%"
  },
  lendingHistory: {
    position: "absolute",
    top: "9%"
  }
};

// export default Withdraw;
export default withStyles(withdrawSty)(Withdraw);
