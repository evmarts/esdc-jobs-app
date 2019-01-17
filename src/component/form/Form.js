import React from "react";
import ResultDisplay from "../result/ResultDisplay";
import Aptitude from "./Aptitude";
import Dpt from "./Dpt";
import Interests from "./Interests";
import PhysicalActivities from "./PhysicalActivities";
import EnvironmentalConditions from "./EnvironmentalConditions";
import EmploymentRequirements from "./EmploymentRequirements";

export default class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isSubmitted: false
    };
  }

  onSubmit = async (fields, char) => {
    await this.setState({
      [char]: fields,
      isSubmitted: false
    });
  };

  HowTo = () => {
    return (
      <div
        style={{
          marginLeft: "5%",
          marginRight: "5%",
          backgroundColor: "#f8f8f8"
        }}
      >
        <h3>Form 📝</h3>
        <p>
          This page allows one to search for occupations by characteristics
          outlined in the National Occupational Classification (NOC) system.
        </p>
        <h3>How to use ⚙️</h3>
        <p>
          Click on the ► beside each characteristic (e.g. Aptitudes) to expand the
          search criteria for that characteristic. To search by a range of
          values, click on the "toggle range" button.
        </p>
        <p>
          You do not need to fill out all the criteria to search for
          occupations. Search criteria with no input will simply search over the
          entire range of that criteria.
        </p>
        <p>
          Clicking on the 'search' button at the bottom of the form
          will load a list of occupations. Click on an occupation to reveal more
          information.
        </p>
      </div>
    );
  };

  render() {
    return (
      <div>
        <this.HowTo />
        <h3 style={{ marginLeft: "5%" }}>Search Criteria</h3>
        <Aptitude
          aptitudes={this.state.aptitudes}
          onSubmit={fields => this.onSubmit(fields, "aptitudes")}
        />
        <Dpt
          dpt={this.state.dpt}
          onSubmit={fields => this.onSubmit(fields, "dpt")}
        />
        <Interests
          interests={this.state.interests}
          onSubmit={fields => this.onSubmit(fields, "interests")}
        />
        <PhysicalActivities
          physicalActivities={this.state.physicalActivities}
          onSubmit={fields => this.onSubmit(fields, "physicalActivities")}
        />
        <EnvironmentalConditions
          environmentalConditions={this.state.environmentalConditions}
          onSubmit={fields => this.onSubmit(fields, "environmentalConditions")}
        />
        <EmploymentRequirements
          employmentRequirements={this.state.employmentRequirements}
          onSubmit={fields => this.onSubmit(fields, "employmentRequirements")}
        />
        <button
          style={{ marginLeft: "5%" }}
          onClick={() => {
            this.setState({
              isSubmitted: true
            });
          }}
        >
          search{" "}
        </button>{" "}
        <br />
        {this.state.isSubmitted ? (
          <ResultDisplay searchItem={this.state} />
        ) : (
          <div />
        )}{" "}
      </div>
    );
  }
}
