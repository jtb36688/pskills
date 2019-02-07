import React from "react";
import { InputGroup, InputGroupText, InputGroupAddon, Input } from "reactstrap";

class PrisonFactory extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <form>
          <h2>Add New Prison</h2>
        <InputGroup>
          <InputGroupAddon addonType="prepend">
            <InputGroupText>Prison Name:</InputGroupText>
          </InputGroupAddon>
          <Input />
        </InputGroup>
        <br />
        <InputGroup>
          <InputGroupAddon addonType="prepend">
            <InputGroupText>Prison Location:</InputGroupText>
          </InputGroupAddon>
          <Input />
        </InputGroup>
        <br />
        <InputGroup>
          <InputGroupAddon addonType="prepend">
            <InputGroupText>Phone No:</InputGroupText>
          </InputGroupAddon>
          <Input />
        </InputGroup>
      </form>
    );
  }
}

export default PrisonFactory;
