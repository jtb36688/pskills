import React from "react";
import EmployerHome from "../components/Employer/EmployerHome";
import {} from "reactstrap";
import { connect } from "react-redux";
import { getPrisons } from "../store/actions";
import { Route } from "react-router-dom";
import ProfilesList from "../components/Employer/ProfilesList";

class EmployerView extends React.Component {
  constructor(props) {
    super(props);
  }

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
            <EmployerHome prisonsarraySTORE={this.props.prisonsarraySTORE} />
          )}
        />
        <Route
          path={"/prisons/:PrisonId"}
          render={props => <ProfilesList {...props} />}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  prisonsarraySTORE: state.prisonsarray
});

export default connect(
  mapStateToProps,
  { getPrisons }
)(EmployerView);
