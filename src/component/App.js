import React, { Component } from "react";
import Form from "./Form";
import FetchJobs from "./FetchJobs";
import SearchTool from "./SearchTool";
import OccupationForm from "./OccupationForm";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import AptitudesForm from "./AptitudesForm";
import ResultsV2 from "./ResultsV2"

class App extends Component {
  state = {
    response: "",
    isFormVisible: false,
    isSearchVisible: false,
    fields: ""
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
        </Nav>
      </Navbar>
    );
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
          <OccupationForm display="inline-block"/>
        </div>
      );
    }
    if (this.state.isSearchVisible) {
      return (
        <div>
          <this.TopNav />
          <SearchTool />
        </div>
      );
    }

    return (
      <div>
        <this.TopNav />
        {/* <SearchTool /> */}
        {/* <Form onSubmit={fields => this.onSubmit(fields)} /> */}
        {/* <this.DisplayResult /> */}
        <ResultsV2/>
      </div>
    );
  }
}

export default App;
