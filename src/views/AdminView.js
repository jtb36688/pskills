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

const loginobject = {
  username: "jtb",
  password: "bryan"
};

class AdminView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      updatingId: ""
    };
  }

  componentDidMount() {
    this.retrieveAuth();
    this.props.getLinkedWorkers();
    ;
  }

  retrieveAuth = () => {
    console.log("authrequest")
    axios
      .post(
        `https://prisoner-skills-backend.herokuapp.com/api/users/login`,
        loginobject
      )
      .then(function(response) {
        Request.headers.append("Authorization", `${response.data.token}`);
        console.log("Headers Log", Request.headers);
      })
      .catch(function(error) {
        alert(error.response.data.error);
        console.log(error);
      });
  };

  initiateUpdate = id => {
    this.setState({
      updatingId: `${id}`
    });
  };

  // initiateUpdate and updatingId will probably be removed/replaced, i'm not updating from forms

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
