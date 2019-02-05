import React from "react";
import {
  InputGroupButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  InputGroup,
  InputGroupText,
  InputGroupAddon,
  Input
} from "reactstrap";

class AdminHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newworker: {
        name: "",
        workleave: false,
        skills: ""
      },
      dropdownOpen: false,
      dropdownSelected: ""
    };
  }

  componentDidUpdate() {
      console.log(this.state.newworker)
  }

  toggleDropDown = () =>
    this.setState(currentState => ({
      dropdownOpen: !currentState.dropdownOpen
    }));

  toggleWlOn = () => {
    this.setState({
      newworker: {
        ...this.state.newworker,
        workleave: true
      }
    });
  };

  toggleWlOff = () => {
    this.setState({
      newworker: {
        ...this.state.newworker,
        workleave: false
      }
    });
  };

  handleChanges = event => {
    this.setState({
      newworker: {
        ...this.state.newworker,
        [event.target.name]: event.target.value
      }
    });
  };

  render() {
    return (
      <form className='WorkerFormWrapper'>
        <InputGroup size="lg">
          <InputGroupAddon addonType="prepend">
            <InputGroupText>New Worker Name:</InputGroupText>
          </InputGroupAddon>
          <Input
            value={this.state.newworker.name}
            type="text"
            name="name"
            onChange={this.handleChanges}
          />
          <InputGroupButtonDropdown
            addonType="append"
            isOpen={this.state.dropdownOpen}
            toggle={this.toggleDropDown}
          >
            <DropdownToggle caret>
              {this.state.newworker.workleave
                ? `Available for Work Leave`
                : `Not Available for Work Leave`}
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem onClick={this.toggleWlOn}>
                Available for Work Leave
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem onClick={this.toggleWlOff}>
                Not Available for Work Leave
              </DropdownItem>
            </DropdownMenu>
          </InputGroupButtonDropdown>
        </InputGroup>
        <InputGroup size="lg">
          <InputGroupAddon addonType="prepend">
            <InputGroupText>New Worker Skills (Seperate /w Commas):</InputGroupText>
          </InputGroupAddon>
          <Input
            value={this.state.newworker.skills}
            type="text"
            name="skills"
            onChange={this.handleChanges}
          />
        </InputGroup>
      </form>
    );
  }
}

export default AdminHome;
