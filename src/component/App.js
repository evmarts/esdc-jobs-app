import React, { Component } from "react";
import Form from "./Form";
import FetchJobs from "./FetchJobs";
import RangeSelect from "./RangeSelect";
import RangeForm from "./RangeForm";
import SearchTool from "./SearchTool";
import { Navbar, Nav, NavItem, MenuItem, NavDropdown } from "react-bootstrap";

class App extends Component {
  state = {
    response: "",
    isFormVisible: false,
    isSearchVisible: false
  };

  handleFormSelect = () => {
    this.setState({
      isFormVisible: true,
      isSearchVisible: false
    });
  };

  handleSearchSelect = () => {
    this.setState({
      isSearchVisible: true,
      isFormVisible: false
    });
  };

  TopNav = () => {
    return (
      <Navbar collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand
            onClick={() => {
              this.setState({ isFormVisible: false, isSearchVisible: false });
            }}
          >
            ESDC Occupation Search
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem eventKey={1} onClick={this.handleFormSelect}>
            Form
          </NavItem>
          <NavItem eventKey={2} onClick={this.handleSearchSelect}>
            Search
          </NavItem>
          {/* <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
            <MenuItem eventKey={3.1}>Action</MenuItem>
            <MenuItem eventKey={3.2}>Another action</MenuItem>
            <MenuItem eventKey={3.3}>Something else here</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={3.4}>Separated link</MenuItem>
          </NavDropdown> */}
        </Nav>
      </Navbar>
    );
  };

  onSubmit = async fields => {
    await this.setState({ fields });
  };

  DisplayResult = props => {
    const isSubmitted = this.state.fields;
    if (isSubmitted) {
      return <FetchJobs fields={this.state.fields} />;
    }
    return <div />;
  };

  render() {
    // add more information to the displayed results
    if (this.state.isFormVisible) {
      return (
        <div>
          <this.TopNav />
          <div>Form here</div>
        </div>
      );
    }
    if (this.state.isSearchVisible) {
      return (
        <div>
          <this.TopNav />
          <div>Search here</div>
        </div>
      );
    }

    return (
      <div>
        <this.TopNav />
        {/* <SearchTool /> */}
        {/* <Form onSubmit={fields => this.onSubmit(fields)} /> */}
        {/* <this.DisplayResult /> */}
      </div>
    );
  }
}

export default App;
