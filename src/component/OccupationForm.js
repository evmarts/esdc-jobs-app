import React from "react";
import AptitudesForm from "./AptitudesForm";
import DptForm from "./DptForm";
import EmploymentConditionsForm from "./EmploymentConditionsForm";
import EnvironmentalConditionsForm from "./EnvironmentalConditionsForm";
import InterestsFrom from "./InterestsForm";
import PhysicalActvitiesForm from "./PhysicalActiviesForm";
import SearchProfile from "./SearchProfile";
import ResultDisplay from "./ResultDisplay";
import Aptitude from "./Aptitude";

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
    const styling = {
      display: "inline-block",
      width: "14%",
      height: "45vw",
      verticalAlign: "top",
      marginTight: "10px",
      marginTop: "0",
      textAlign: "center",
      position: "relative",
      fontSize: "1.75vw"
    };

    return (
      <div>
        <Aptitude aptitudes={this.state.aptitudes} onSubmit={fields => this.onSubmit(fields, "aptitudes")} />
        {/* <div style={{ marginLeft: "70px" }}>
          <AptitudesForm
            styling={styling}
            onSubmit={fields => this.onSubmit(fields, "aptitudes")}
          />{" "}
          <InterestsFrom
            styling={styling}
            onSubmit={fields => this.onSubmit(fields, "interests")}
          />{" "}
          <DptForm
            styling={styling}
            onSubmit={fields => this.onSubmit(fields, "dpt")}
          />{" "}
          <PhysicalActvitiesForm
            styling={styling}
            onSubmit={fields => this.onSubmit(fields, "physicalActivities")}
          />{" "}
          <EnvironmentalConditionsForm
            styling={styling}
            onSubmit={fields =>
              this.onSubmit(fields, "environmentalConditions")
            }
          />{" "}
          <EmploymentConditionsForm
            styling={styling}
            onSubmit={fields => this.onSubmit(fields, "employmentConditions")}
          />{" "}
        </div>{" "} */}
        <button
          onClick={() => {
            this.setState({
              isSubmitted: true
            });
          }}
        >
          Search{" "}
        </button>{" "}
        {this.state.isSubmitted ? (
          <ResultDisplay searchItem={this.state} display="inline-block" />
        ) : (
          <div />
        )}{" "}
      </div>
    );
  }
}
