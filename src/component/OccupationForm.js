import React from "react";
import AptitudesForm from "./AptitudesForm";
import DptForm from "./DptForm";
import EmploymentConditionsForm from "./EmploymentConditionsForm";
import EnvironmentalConditionsForm from "./EnvironmentalConditionsForm";
import InterestsFrom from "./InterestsForm";
import PhysicalActvitiesForm from "./PhysicalActiviesForm";
import SearchProfile from "./SearchProfile";
import ResultDisplay from "./ResultDisplay";

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
    return ( <
        div > For now you need to refresh the page to do a new search <
          div >
          <
          AptitudesForm
        bgColor = "#f9eaad"
        styling = {
          styling
        }
        onSubmit = {
          fields => this.onSubmit(fields, "aptitudes")
        }
        /> <
        InterestsFrom bgColor = "#d4e4b7"
        styling = {
          styling
        }
        onSubmit = {
          fields => this.onSubmit(fields, "interests")
        }
        /> <
        DptForm bgColor = "#b7e4d1"
        styling = {
          styling
        }
        onSubmit = {
          fields => this.onSubmit(fields, "dpt")
        }
        /> <
        PhysicalActvitiesForm bgColor = "#b7cee4"
        styling = {
          styling
        }
        onSubmit = {
          fields => this.onSubmit(fields, "physicalActivities")
        }
        /> <
        EnvironmentalConditionsForm bgColor = "#e4b6c5"
        styling = {
          styling
        }
        onSubmit = {
          fields =>
          this.onSubmit(fields, "environmentalConditions")
        }
        /> <
        EmploymentConditionsForm bgColor = "#f0c8c1"
        styling = {
          styling
        }
        onSubmit = {
          fields => this.onSubmit(fields, "employmentConditions")
        }
        /> < /
        div > <
        button onClick = {
          () => {
            this.setState({
              isSubmitted: true
            });
          }
        } >
        Search <
        /button> {
        this.state.isSubmitted ? ( <
          ResultDisplay searchItem = {
            this.state
          }
          display = "inline-block" / >
        ) : ( <
          div / >
        )
      } <
      /div>
  );
}
}