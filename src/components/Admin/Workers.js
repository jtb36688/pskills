import React from "react";
import Worker from "./Worker";



class Workers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      updatesarray: []
    };
  }

  fillUpdateForms = workerdata => {
    this.setState({
      updatesarray: [
        ...this.state.updatesarray,
        {
          id: workerdata.id,
          name: workerdata.name,
          picture: workerdata.picture,
          prisonId: workerdata.prisonId,
          availability: workerdata.availability,
          skills: workerdata.skills
        }
      ]
    })
  }

  render() {
    return (
      <div>
        <div className="WorkersTableHeader">
          
        </div>
        {this.props.linkedworkersStore.map(worker => (
          <Worker updateWorker={this.props.updateWorker}  deleteWorker={this.props.deleteWorker} worker={worker} key={worker.id} />
        ))}
      </div>
    );
  }
}

export default Workers;
