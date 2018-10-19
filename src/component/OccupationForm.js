import React from "react";
import descriptors from "../constants/descriptors";
import AptitudesForm from "./AptitudesForm";
import DptForm from "./DptForm";
import EmploymentConditionsForm from "./EmploymentConditionsForm";
import EnvironmentalConditionsForm from "./EnvironmentalConditionsForm";
import InterestsFrom from "./InterestsForm";
import PhysicalActvitiesForm from "./PhysicalActiviesForm";

export default class OccupationForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <AptitudesForm />
        <InterestsFrom />
        <DptForm />
        <PhysicalActvitiesForm />
        <EnvironmentalConditionsForm />
        <EmploymentConditionsForm />\
      </div>
    );
  }
}
