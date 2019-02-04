import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { Route, withRouter } from "react-router-dom";
import AdminView from "./views/AdminView";
import Authentication from "./components/Login/Authentication";
import EmployerView from "./views/EmployerView";
import HelpView from "./views/HelpView";
import Login from "./components/Login/Login";
import MarketingView from "./views/MarketingView";
import Navigation from "./components/Navigation/Navigation";

import "./App.css";



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      prisonsarray: [],
      workersarray: [],
      username: ""
    };
  }

  render() {
    return (
      <div className="AppContainer">
        <Navigation />
        <Route exact path="/" render={props => <MarketingView {...props} />} />
        <Route
          path="/employers/"
          render={props => <EmployerView prisonsarray={this.state.prisonsarray} {...props} />}
        />
        <Route
          path="/admin/"
          render={props => (
            <ConditionalView
              {...props}
              username={this.props.username}
              handleLogOut={this.props.handleLogOut}
            />
          )}
        />
        <Route path="/help/" render={props => <HelpView {...props} />} />
      </div>
    );
  }
}

const ConditionalView = Authentication(AdminView)(Login);

export default App;
