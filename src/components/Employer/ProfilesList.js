import React from "react";
import {} from "reactstrap";
import Prison from "./Prison";
import { Jumbotron, Container, Table, Button } from "reactstrap";
import PrisonerProfile from "./PrisonerProfile"

// this.props.prison.prisoners.map(({ id, name, picture, skills, availability }) => () )

class ProfilesList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getPrisonsWorkers(this.props.currentlyviewing);
    console.log('prisoners', this.props.prison.name)
  }

  viewprisoner = (id) => {
      this.setState({ viewingprisoner: id })
  }

  render() {
    return (
      <div className="PrisonDetailsWrapper">
        <Jumbotron fluid>
          <Container fluid>
            <h2>{this.props.prison.name}</h2>
            <p>Location: {this.props.prison.location}</p>
            <p>Phone Number: {this.props.prison.phoneNumber}</p>
          </Container>
        </Jumbotron>
        {this.props.prison ? (
          ""
        ) : (
          <Table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Skills</th>
                <th>Available for Leave</th>
                <th>View Details</th>
              </tr>
            </thead>
            <tbody>
              {this.props.prison.prisoners.map(
                ({ id, name, picture, skills, availability }) => (
                  <tr>
                    <th scope="row">{name}</th>
                    <td>{skills}</td>
                    <td>{availability}</td>
                    <td><Button onClick={() => this.viewprisoner(id)}></Button></td>
                  </tr>
                )
              )}
            </tbody>
          </Table>
        )}
      </div>
    );
  }
}

export default ProfilesList;
