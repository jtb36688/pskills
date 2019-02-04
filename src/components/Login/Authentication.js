import React from "react";
import {} from "reactstrap";
import Axios from 'axios';

const host = "http://localhost:5000/"

const Authentication = AdminView => Login =>
  class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        loggedIn: false,
        username: "",
        password: ""
      };
    }

    componentDidMount() {
      console.log('Authentication Mounted')
    }

    handleChanges = e => {
      this.setState({ [e.target.name]: e.target.value });
    };

    submitLogin = e => {
      e.preventDefault();
      if (!this.state.username || !this.state.password) {
        this.setState({
          username: "",
          password: ""
        });
        alert("Invalid login, please enter Username and Password");
      } else {
        Axios.post(`${host}/api/login`, this.state)
          .then(
            function(response) {
              Request.headers.append(
                "Authorization",
                `Token ${response.data.key}`
              );
            },
            this.setState({
              username: "",
              password: ""
            })
          )
          .catch(function(error) {
            alert(error.response.data.error);
          });
      }
    };

    handleLogOut = () => {
      this.setState({
        loggedIn: false,
        username: "",
        password: ""
      });
    };

    conditionalRender = () => {
      if (this.state.loggedIn) {
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
