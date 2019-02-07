import React from "react";
import Prison from "./Prison";
import ProfilesList from "./ProfilesList";

class EmployerHome extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="PrisonListWrapper">
        {this.props.viewingprison ? (
          <ProfilesList
            currentlyviewing={this.props.currentlyviewing}
            getPrisonsWorkers={this.props.getPrisonsWorkers}
            prison={this.props.currentprisonSTORE}
          />
        ) : (
          this.props.prisonsarraySTORE.map(
            ({ name, location, workerscount, id }) => (
              <Prison
                viewingprison={this.props.viewingprison}
                toggleViewing={this.props.toggleViewing}
                key={id}
                id={id}
                name={name}
                location={location}
                workerscount={workerscount}
              />
            )
          )
        )}
      </div>
    );
  }
}

export default EmployerHome;
