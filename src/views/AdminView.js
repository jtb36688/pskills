import React from "react";
import {} from "reactstrap";
import AdminHome from "../components/Admin/AdminHome";
import PrisonFactory from "../components/Admin/PrisonFactory";
import {
  getLinkedWorkers,
  addWorker,
  updateWorker,
  deleteWorker
} from "../store/actions";
import { connect } from "react-redux";
import Workers from "../components/Admin/Workers";

class AdminView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      updatingId: ""
    };
  }

  componentDidMount() {
    this.props.getLinkedWorkers();
    console.log("AdminView Mounted");
  }

  initiateUpdate = id => {
    this.setState({
      updatingId: `${id}`
    });
  };

  render() {
    return (
      <>
        <AdminHome
          addWorker={this.props.addWorker}
          updateWorker={this.props.updateWorker}
        />
        <Workers
          deleteWorker={this.props.deleteWorker}
          linkedworkersStore={this.props.linkedworkersStore}
          initiateUpdate={this.initiateUpdate}
          error={this.props.errorStore}
        />
      </>
    );
  }
}

const mapStateToProps = state => ({
  linkedworkersStore: state.linkedworkers,
  errorStore: state.error
});

export default connect(
  mapStateToProps,
  { getLinkedWorkers, addWorker, updateWorker, deleteWorker }
)(AdminView);

// {this.props.prisonsarrayadminsvalues.includes(this.props.username) ? (
//   <AdminHome username={this.props.username} />
// ) : (
//   <PrisonFactory username={this.props.username} />
// )}
