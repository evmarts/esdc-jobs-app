import React, { Component } from "react";
import Form from "./Form";
import FetchJobs from "./FetchJobs";
import SearchTool from "./SearchTool";
import OccupationForm from "./OccupationForm";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import AptitudesForm from "./AptitudesForm";
import ResultsV2 from "./ResultsV2";
import FooterPage from "./FooterPage";
import Frame from "react-frame-component";

// TODO
// added clickable results to search tab
// move submit button on form tab
// fix form so that we don't need to refresh page to do a new search
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
          <h2>Welcome to the ESDC Occupation Search</h2>
          <p>
            This searchable database allows objective matching of an
            individual’s abilities with the occupational characteristics
            detailed in the 2016 Career Handbook. Used for vocational
            counselling, this serves as an important step in career exploration
            and confirmation. Searchable by aptitudes, interests, involvement
            with data/people/things, physical activities, environmental
            conditions, education/training, career progression and work
            settings.
          </p>
          <p>
            The Career Handbook is the counselling component of the National
            Occupational Classification (NOC) system. The Career Handbook 2016
            represents the transposition of content from the Career Handbook
            2003 to the structure of NOC 2016.
          </p>
          <p>
            The Career Handbook provides global ratings assigned to occupations
            to further define worker characteristics and other indicators
            related to occupations that are important for career exploration and
            informed career decision-making. It includes information on
            aptitudes, interests, involvement with data/people/things, physical
            activities, environmental conditions, education/training indicators,
            career progression and work settings. This counselling resource is
            used by a wide range of professionals for many applications, and by
            individuals engaged in self-directed career planning.
          </p>
          <p>
            This edition of the Career Handbook includes 930 occupational
            profiles that provide updated information in the following sections:
            Lead Statement, Examples of Job Titles, Workplaces/Employers,
            Employment Requirements, Exclusions, Occupational Options and
            Remarks. No updates have been made in the Career Handbook-specific
            content. This means that the profiles maintain the original
            descriptor scales and ratings for aptitudes, interests, involvement
            with data/people/things, physical activities and environmental
            conditions, as developed in the CH 2003. The presentation format has
            changed to allow users to easily access and understand information.
          </p>
        </div>
        <FooterPage />
      </div>
    );
  }
}

export default App;
