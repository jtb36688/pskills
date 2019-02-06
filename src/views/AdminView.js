import React from "react";
import axios from "axios";
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
  }

  componentDidMount() {
    this.props.getLinkedWorkers();
    ;
  }

  render() {
    return (
      <>
        <AdminHome
          handleLogOut={this.props.handleLogOut}
          getLinkedWorkers={this.props.getLinkedWorkers}
          addWorker={this.props.addWorker}
        />
        <Workers
        updateWorker={this.props.updateWorker}
          deleteWorker={this.props.deleteWorker}
          linkedworkersStore={this.props.linkedworkersStore}
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