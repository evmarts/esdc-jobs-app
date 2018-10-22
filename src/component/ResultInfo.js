import React from "react";
import descriptors from "../constants/descriptors";

export default class ResultInfo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      descriptors: descriptors
    };
  }

  profileSummaryKeys = {
    aptitudes: {
      aptitudes_g: "General Learning Ability",
      aptitudes_v: "Verbal Ability",
      aptitudes_n: "Numerical Ability",
      aptitudes_s: "Spatial Ability",
      aptitudes_p: "Form Perception",
      aptitudes_q: "Clerical Perception",
      aptitudes_k: "Motor Co-ordination",
      aptitudes_f: "Finger Dexterity",
      aptitudes_m: "Manual Dexterity"
    },
    physical: {
      vision_value: "Vision",
      colour_value: "Colour Discrimination",
      hearing_value: "Hearing",
      body_position_value: "Body Position",
      limb_coordination_value: "Limb Co-ordination",
      strength_value: "Strength"
    },
    environment: "Environmental Conditions",
    dpt: {
      data_value: "Data/Information",
      people_value: "People",
      things_value: "Things"
    },
    et_value: "Employment Requirements"
  };

  clientArgs = {
    aptitudesMin: "G1",
    aptitudesMax: "G1",
    aptitudes: { aptitudes_g_min: 1, aptitudes_g_max: 1 },
    physical: {},
    dpt: {}
  };

  render() {
    return (
      <div
        fontSize="70"
        style={Object.assign(
          { backgroundColor: this.props.bgColor },
          this.props.styling
        )}
      >
        <label>
          {this.props.job.sub_noc
            .concat(" ")
            .concat(this.props.job.sub_noc_title)}
        </label>
        <p>{this.props.job.sub_noc_description}</p>
        <hr />
        <label>Examples of Job Titles</label>
        <ul>
          {this.props.job.example_titles.map(title => {
            return <li>{title}</li>;
          })}
        </ul>
        <hr />
        <hr />
        <label>Profile Summary</label>
        <hr />
        <ul>
          <label>APTITUDES:</label>
          <ul>
            {Object.keys(this.props.job.profile_summary.aptitudes).map(key => {
              return (
                <div>
                  <li>
                    {this.profileSummaryKeys.aptitudes[key]
                      .concat(": ")
                      .concat(this.props.job.profile_summary.aptitudes[key])}
                  </li>
                  <div />
                </div>
              );
            })}
          </ul>
          <hr />
          <label>INTERESTS:</label>
          <ol>
            {this.props.job.profile_summary.interests.map(i => {
              return <li>{i}</li>;
            })}
          </ol>
          <hr />
          <label>DATA PEOPLE THINGS (DPT):</label>
          <ul>
            {Object.keys(this.props.job.profile_summary.dpt).map(key => {
              return (
                <div>
                  <li>
                    {this.profileSummaryKeys.dpt[key]
                      .concat(": ")
                      .concat(this.props.job.profile_summary.dpt[key])}
                  </li>
                  <div />
                </div>
              );
            })}
          </ul>
          <hr />
          <label>PHYSICAL ACTIVITIES (PA):</label>
          <ul>
            {Object.keys(this.props.job.profile_summary.physical).map(key => {
              return (
                <div>
                  <li>
                    {this.profileSummaryKeys.physical[key]
                      .concat(": ")
                      .concat(this.props.job.profile_summary.physical[key])}
                  </li>
                  <div />
                </div>
              );
            })}
          </ul>
        </ul>
        <hr />
        <label>ENVIRONMENTAL CONDITIONS (EC):</label>
        <ul>
          <li>
            {this.props.job.physical_activities.environment.value
              .concat(": ")
              .concat(this.props.job.physical_activities.environment.title)}
          </li>
        </ul>
        <hr />
        <label>EDUCATION/TRAINING:</label>
        <ul>
          <li>{this.props.job.employment_requirements.et_value}</li>
        </ul>
        <hr />
        <hr />
        <label>Descriptor Profile:</label>
        <br />
        <label>Main Charactistics</label>
        <p>
          Occupations in this group are characterized by the following
          aptitudes, interests and worker functions as they relate to main
          duties:
        </p>
        <ul>
          {this.props.job.descriptor_profile.main_characteristics.map(mc => {
            return <li>{mc.replace(/(<([^>]+)>)/gi, "")}</li>;
          })}
        </ul>
      </div>
    );
  }
}
