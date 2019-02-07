import React from "react";
import axios from "axios";
import {} from "reactstrap";
import Loader from "react-loader-spinner"
import WorkersMgmt from "../components/Admin/WorkersMgmt";
import PrisonFactory from "../components/Admin/PrisonFactory";
import {
  getLinkedWorkers,
  addWorker,
  updateWorker,
  deleteWorker,
  addPrison,
  getPrisons,
} from "../store/actions";
import { connect } from "react-redux";
import Workers from "../components/Admin/Workers";

class AdminView extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getLinkedWorkers(this.props.prisonIdSTORE);
  }

  render() {
    return (
      <div>
        {this.props.prisonsarrayStore
          .map(prison => {
            return prison.id;
          })
          .includes(this.props.prisonIdSTORE) ? (
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
        ) : (
          <PrisonFactory
            prisonsarrayStore={this.props.prisonsarrayStore}
            addPrison={this.props.addPrison}
            jwtSTORE={this.props.jwtSTORE}
            prisonIdSTORE={this.props.prisonIdSTORE}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  prisonsarrayStore: state.prisonsarray,
  linkedworkersStore: state.linkedworkers,
  errorStore: state.error,
  userobjectSTORE: state.userobject,
  prisonIdSTORE: state.prisonId,
  jwtSTORE: state.jwt
});

export default connect(
  mapStateToProps,
  { getLinkedWorkers, addWorker, updateWorker, deleteWorker, addPrison, getPrisons }
)(AdminView);
