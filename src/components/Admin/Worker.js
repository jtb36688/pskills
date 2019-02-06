import React from "react";
import {
  Button,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  Table
} from "reactstrap";

class Worker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showasform: false,
      updatedata: null
    };
  }

  toggleUpdate = workerdata => {
    if (this.state.showasform) {
      this.setState({
        updatedata: null
      });
    } else {
      this.setState({
        updatedata: {
          name: this.props.worker.name,
          picture: this.props.worker.picture,
          prisonId: this.props.worker.prisonId,
          availability: this.props.worker.availability,
          skills: this.props.worker.skills
        }
      });
    }
    this.setState(currentState => ({
      showasform: !currentState.showasform
    }));
  };

  submitHandler = (e, updatedata, id) => {
    e.preventDefault();
    this.props.updateWorker(updatedata, id);
    this.toggleUpdate();
  };

  handleChanges = e => {
    this.setState({
      updatedata: {
        ...this.state.updatedata,
        [e.target.name]: e.target.value
      }
    });
  };

  render() {
    return (
      <div>
        {this.state.showasform ? (
          <form
            onSubmit={e =>
              this.submitHandler(e, this.state.updatedata, this.props.worker.id)
            }
          >
            {this.state.updatedata.name.toUpperCase()}
            <InputGroup>
              <InputGroupAddon addonType="prepend">
                Worker Name:
              </InputGroupAddon>
              <Input
                value={this.state.updatedata.name}
                name="name"
                onChange={this.handleChanges}
              />
            </InputGroup>
            <InputGroup>
              <InputGroupAddon addonType="prepend">
                Worker Skills:
              </InputGroupAddon>
              <Input
                name="skills"
                value={this.state.updatedata.skills}
                onChange={this.handleChanges}
              />
              <InputGroupAddon addonType="append">
                <InputGroupText>
                  AVAILABLE FOR WORK LEAVE
                  <Input
                    value={this.state.updatedata.availability}
                    addon
                    type="checkbox"
                    name="availability"
                    onChange={this.handleChanges}
                  />
                </InputGroupText>
              </InputGroupAddon>
            </InputGroup>

            <Button className='Purple' onClick={() => this.toggleUpdate(this.props.worker.id)}>
              {" "}
              Cancel Updating{" "}
            </Button>

            <Button className='Purple' type="submit"> Apply Updating </Button>
          </form>
        ) : (
            <div className="WorkerDetails">
          <Table>
          <tbody>
          <tr className="TableRow">
            <th className="text" scope="row">{this.props.worker.id}</th>
            <td className="text">{this.props.worker.name}</td>
            <td className="text">{this.props.worker.availability}</td>
            <td className="text">{this.props.worker.skills}</td>
          </tr>
            </tbody>
            </Table>
            <div>
              <Button
                size="sm"
                className='Purple'
                onClick={() => this.props.deleteWorker(this.props.worker.id)}
              >
                {" "}
                Delete Worker{" "}
                
              </Button>
              <Button
                size="sm"
                className='Purple'
                onClick={() => this.toggleUpdate(this.props.worker)}
              >
                {" "}
                Update Worker{" "}
              </Button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Worker;

// updatedata: this.props.updatesarray.find(function(prisonerobject) {
//     return prisonerobject.id === this.props.worker.id;
//   }, this)
