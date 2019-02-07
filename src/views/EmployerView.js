import React from "react";
import EmployerHome from "../components/Employer/EmployerHome";
import {} from "reactstrap";
import { connect } from "react-redux";
import { getPrisons, getPrisonsWorkers } from "../store/actions";
import { Route } from "react-router-dom";

class EmployerView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      viewingprison: false,
      currentlyviewing: ""
    };
  }

  toggleViewing = id => {
    console.log("toggling view", this.state);
    this.setState(currentState => ({
      viewingprison: !currentState.viewingprison,
      currentlyviewing: id
    }));
  };

  componentDidMount() {
    console.log("EmployerView Mounted");
    this.props.getPrisons();
  }
  render() {
    return (
      <div>
        <Route
          exact
          path="/"
          render={props => (
            <EmployerHome
              currentlyviewing={this.state.currentlyviewing}
              currentprisonSTORE={this.props.currentprisonSTORE}
              getPrisonsWorkers={this.props.getPrisonsWorkers}
              viewingprison={this.state.viewingprison}
              toggleViewing={this.toggleViewing}
              prisonsarraySTORE={this.props.prisonsarraySTORE}
            />
          )}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  prisonsarraySTORE: state.prisonsarray,
  currentprisonSTORE: state.currentprison
});

const connectEmployerview = connect(
  mapStateToProps,
  { getPrisons, getPrisonsWorkers }
)(EmployerView);

export default connectEmployerview;
