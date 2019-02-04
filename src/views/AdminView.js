import React from "react";
import {} from "reactstrap";
import AdminHome from "../components/Admin/AdminHome";
import PrisonFactory from "../components/Admin/PrisonFactory";
import JobFacory from "../components/Admin/JobFactory";
import ProfileFactory from "../components/Admin/ProfileFactory";

class AdminView extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log("AdminView Mounted");
  }

  render() {
    return (
      <>
        {this.props.prisonsarrayadminsvalues.includes(this.props.username) ? (
          <AdminHome username={this.props.username} />
        ) : (
          <PrisonFactory username={this.props.username} />
        )}
      </>
    );
  }
}

export default AdminView;
