import React from "react";
import Worker from "./Worker";

const blankobject = {
  id: "",
  updatedata: {
    id: "",
    name: "",
    picture: "",
    prisonId: "",
    availability: "",
    skills: ""
  }
};

class Workers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      updatingarray: [blankobject]
    };
  }
  render() {
    return (
      <div>
        {this.props.linkedworkersStore.map((worker, index) => (
          <Worker worker={worker} index={index} key={index} />
        ))}
      </div>
    );
  }
}

export default Workers;
