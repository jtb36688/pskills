import React from "react";
import {} from 'reactstrap';

const Authentication = AdminView => Login =>
  class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        loggedIn: false,
        username: '',
        password: ''
      };
    }

    componentDidMount() {
      if (localStorage.getItem("logindata")) {
        this.setState({
          loggedIn: JSON.parse(localStorage.getItem("logindata")).loggedIn,
          username: JSON.parse(localStorage.getItem("logindata")).username
        });
      }
    }

    componentDidUpdate() {
      localStorage.setItem("logindata", JSON.stringify(this.state));
    }

    handleChanges = e => {
      this.setState({ [e.target.name]: e.target.value });
    }

    submitLogin = e => {
      e.preventDefault();
      if (
        (!this.state.username) || (!this.state.password)
      ) {
        this.setState({
          username: '',
          password: ''
        })
        alert("Invalid login, please enter Username and Password")
      }
      else {
        this.setState({
          loggedIn: true,
        })
      }
    }

    handleLogOut = () => {
      this.setState({
        loggedIn: false,
        username: '',
        password: ''
      })
    }


    conditionalRender = () => {
      if (this.state.loggedIn) {
        return <AdminView
        username={this.state.username}
        handleLogOut={this.handleLogOut}/>
      } else {
        return <Login 
        password={this.state.password}
        username={this.state.username}
        handleChanges={this.handleChanges}
        submitLogin={this.submitLogin} />
      }
    };



    render() {
      return (
        this.conditionalRender()
      )
    }


  };

export default Authentication;