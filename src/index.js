import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import rootReducer from "./store/reducers";
import AdminView from "./views/AdminView";
import Authentication from "./components/Login/Authentication";
import EmployerView from "./views/EmployerView";
import HelpView from "./views/HelpView";
import Login from "./components/Login/Login";
import MarketingView from "./views/MarketingView";
import Navigation from "./components/Navigation/Navigation";

import AdminHome from "./components/Admin/AdminHome"

const store = createStore(rootReducer(applyMiddleware(thunk, logger)));

const mockarray = [
  {
    id: 0,
    name: "happyjail",
    location: "happy",
    adminusers: [],
    workerscount: 1000
  },
  {
    id: 1,
    name: "sadjail",
    location: "sad",
    adminusers: [],
    workerscount: 1
  },
  {
    id: 2,
    name: "boringjail",
    location: "bored",
    adminusers: [],
    workerscount: 500
  },
  {
    id: 3,
    name: "awkwardjail",
    location: "awkward",
    adminusers: [],
    workerscount: 215
  },
  { 
    id: 4,
    name: "bossjail",
    location: "boss",
    adminusers: [],
    workerscount: 225 
  },
  {
    id: 5,
    name: "canadajail",
    location: "canada",
    adminusers: [],
    workerscount: 235
  },
  {
    id: 6,
    name: "alaskajail",
    location: "alaska",
    adminusers: [],
    workerscount: 245
  }
]

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      prisonsarray: mockarray,
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
          render={props => (
            <EmployerView prisonsarray={this.state.prisonsarray} {...props} />
          )}
        />
        <Route
          path="/admin/"
          render={props => (
            <AdminHome
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

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
