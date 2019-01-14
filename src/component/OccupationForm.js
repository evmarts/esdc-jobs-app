import React from "react";
import AptitudesForm from "./AptitudesForm";
import DptForm from "./DptForm";
import EmploymentConditionsForm from "./EmploymentConditionsForm";
import EnvironmentalConditionsForm from "./EnvironmentalConditionsForm";
import InterestsFrom from "./InterestsForm";
import SearchProfile from "./SearchProfile";
import ResultDisplay from "./ResultDisplay";
import Aptitude from "./Aptitude";
import Dpt from "./Dpt";
import Interests from "./Interests";
import PhysicalActivities from "./PhysicalActivities";
import EnvironmentalConditions from "./EnvironmentalConditions";
import EmploymentConditions from "./EmploymentConditions";

export default class OccupationForm extends React.Component {
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

  render() {
    console.log("OccupationForm state:", this.state);

    return (
      <div>
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
        <EmploymentConditions
          employmentConditions={this.state.employmentConditions}
          onSubmit={fields => this.onSubmit(fields, "employmentConditions")}
        />
        <button
          style={{ marginLeft: "70px" }}
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
          <ResultDisplay
            searchItem={this.state}
          />
        ) : (
          <div />
        )}{" "}
      </div>
    );
  }
}
