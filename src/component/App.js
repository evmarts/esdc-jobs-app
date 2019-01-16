import React, { Component } from "react";
import SearchTool from "./SearchTool";
import OccupationForm from "./OccupationForm";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import FooterPage from "./FooterPage";

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
            2016 Career Handbook Search
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

  render() {
    // add more information to the displayed results
    if (this.state.isFormVisible) {
      return (
        <div>
          <this.TopNav />
          <OccupationForm display="inline-block" />
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

    const divStyle = { marginLeft: "70px", marginRight: "70px" };

    return (
      <div>
        <this.TopNav />
        <div style={divStyle}>
          <h2>Welcome to the Career Handbook Occupation Search</h2>
          <h3>The 2016 Career Handbook 📖</h3>
          <p>
            The Career Handbook is the counselling component of the National
            Occupational Classification (NOC), the authoritative national
            resource of occupational information in Canada, developed by
            Employment and Social Development Canada (ESDC) and Statistics
            Canada.
          </p>
          <h3>The National Occupational Classification 📊</h3>
          <p>
            The National Occupational Classification (NOC) contains over 30 000
            occupational titles, grouped into 500 Unit Groups, and organized
            according to skill level and type. The 2016 Career Handbook further
            defines these occupational titles by assigning work characteristics
            and descriptor scale ratings to the NOC occupational titles. It
            includes information on aptitudes, interests, involvement with
            data/people/things, physical activities, environmental conditions,
            education/training indicators, career progression and work settings.
          </p>
          <h3>The Form and Search Tool 🔎</h3>
          <p>
            This program searches the 2016 Career Handbook and allows for
            objective matching of an individual’s abilities (obtained through
            formal testing, vocational history and records review) with the
            occupational characteristics detailed in the 2016 Career Handbook.
            The resulting occupational matches serve as an important step in
            career exploration and confirmation and is a valuable resource for
            career counsellors and vocational rehabilitation consultants. The
            database can be searched by any or all of the work characteristics
            and descriptor scale ratings in the 2016 Career Handbook. Searches
            can also be done using a single rating search, or by using a range
            of values.
          </p>
          <p>
            Occupational titles can also be searched using a keyword search, to
            obtain detailed information about that occupation from the 2016
            Career Handbook.
          </p>
        </div>
        <FooterPage />
      </div>
    );
  }
}

export default App;
