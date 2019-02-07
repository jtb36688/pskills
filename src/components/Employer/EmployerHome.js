import React from "react";
import Prison from "./Prison";

class EmployerHome extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="PrisonListWrapper">
        {this.props.prisonsarraySTORE.map(({ name, location, workerscount, id }) => (
          <Prison
            key={id}
            id={id}
            name={name}
            location={location}
            workerscount={workerscount}
          />
        ))}
      </div>
    );
  }
}

export default EmployerHome;
