import React from "react";
import {} from "reactstrap";
import axios from "axios";

const loginEndpoint = "http://localhost:5000/";

const Authentication = AdminView => Login =>
  class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        loggedin: false,
        login: {
          username: "",
          password: ""
        }
      };
    }

    componentDidMount() {
      console.log("Authentication Mounted");
    }

    handleChanges = e => {
      this.setState({ [e.target.name]: e.target.value });
    };

    retrieveAuth = () => {
      console.log("authrequest");
      axios
        .post(`${loginEndpoint}`, this.state.login)
        .then(function(response) {
          console.log(`${response.data.token}`);
          localStorage.setItem("jwt", `${response.data.token}`);
        })
        .catch(function(error) {
          alert(error.response.data.error);
        });
    };

    submitLogin = e => {
      e.preventDefault();
      if (!this.state.username || !this.state.password) {
        this.setState({
          login: {
            username: "",
            password: ""
          }
        });
        alert("Invalid login, please enter Username and Password");
      } else {
        this.retrieveAuth();
        this.setState({ loggedin: true });
      }
    };

    handleLogOut = () => {
      this.setState({
        loggedin: false,
        login: {
          username: "",
          password: ""
        }
      });
    };

    conditionalRender = () => {
      if (this.state.loggedin) {
        return (
          <AdminView
            username={this.state.username}
            handleLogOut={this.handleLogOut}
          />
        );
      } else {
        return (
          <Login
            password={this.state.password}
            username={this.state.username}
            handleChanges={this.handleChanges}
            submitLogin={this.submitLogin}
          />
        );
      }
    };

    render() {
      return this.conditionalRender();
    }
  };

export default Authentication;
