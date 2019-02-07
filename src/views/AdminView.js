import React from "react";
import axios from "axios";
import {} from "reactstrap";
import WorkersMgmt from "../components/Admin/WorkersMgmt";
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
    this.props.getLinkedWorkers(this.props.prisonIdSTORE);
    ;
  }


  render() {
    return (
      <>
        <WorkersMgmt
          handleLogOut={this.props.handleLogOut}
          getLinkedWorkers={this.props.getLinkedWorkers}
          addWorker={this.props.addWorker}
          updateWorker={this.props.updateWorker}
          deleteWorker={this.props.deleteWorker}
          linkedworkersStore={this.props.linkedworkersStore}
          error={this.props.errorStore}
          userobjectSTORE={this.props.userobjectSTORE}
          prisonIdSTORE={this.props.prisonIdSTORE}
          jwtSTORE={this.props.jwtSTORE}
        />
      </>
    );
  }
}

const mapStateToProps = state => ({
  linkedworkersStore: state.linkedworkers,
  errorStore: state.error,
  userobjectSTORE: state.userobject,
  prisonIdSTORE: state.prisonId,
  jwtSTORE: state.jwt
});

export default connect(
  mapStateToProps,
  { getLinkedWorkers, addWorker, updateWorker, deleteWorker }
)(AdminView);