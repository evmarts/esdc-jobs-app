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

  sampleNoc = {
    sub_noc: "2112",
    sub_noc_title: "Chemists",
    sub_noc_description:
      "Chemists conduct research and analysis in support of industrial operations, product and process development, quality control, environmental control, medical diagnosis and treatment, biotechnology, nanotechnology and other applications. They also conduct theoretical, experimental and applied research into basic chemical and biochemical processes to create or synthesize new products and processes.",
    example_titles: [
      "agricultural chemist",
      "analytical chemist",
      "biochemist",
      "chemist",
      "clinical chemist",
      "environmental chemist",
      "food chemist",
      "inorganic chemist",
      "oceanographic chemist",
      "organic chemist",
      "pharmacological chemist",
      "physical chemist",
      "polymer chemist",
      "quality control chemist",
      "research chemist",
      "soil chemist",
      "textile chemist",
      "medicinal chemist",
      "electrochemist",
      "nuclear magnetic resonance (NMR) spectroscopist",
      "organic mass spectrometrist",
      "organometallic chemist",
      "theoretical chemist",
      "coatings chemist",
      "bioanalytical chemist"
    ],
    profile_summary: {
      aptitudes: {
        aptitudes_g: 1,
        aptitudes_v: 1,
        aptitudes_n: 1,
        aptitudes_s: 1,
        aptitudes_p: 1,
        aptitudes_q: 1,
        aptitudes_k: 3,
        aptitudes_f: 3,
        aptitudes_m: 3
      },
      physical: {
        vision_value: 2,
        colour_value: 1,
        hearing_value: 1,
        body_position_value: 1,
        limb_coordination_value: 1,
        strength_value: 1
      },
      environment: "L1",
      interests: ["I", "O", "D"],
      dpt: {
        data_value: 0,
        people_value: 2,
        things_value: 1
      },
      et_value: "R"
    },
    descriptor_profile: {
      main_characteristics: [
        "<b>General learning ability</b> to conduct fundamental and applied research into the synthesis and properties of chemical compounds and the mechanisms of chemical reactions",
        "<b>Verbal ability</b> to participate in interdisciplinary research and development projects working with chemical engineers, biologists, microbiologists, agronomists, geologists and other professionals; and to prepare laboratory and research reports",
        "<b>Numerical ability</b> to conduct programs of sample data collection and analysis in order to identify and quantify environmental toxicants",
        "<b>Spatial perception</b> to visualize chemical reactions and changes in properties",
        "<b>Form</b> and <b>clerical perception</b> to observe details in formulas and objects, and to make visual comparisons during analytical studies of physical and chemical properties of organic and inorganic substances",
        "<b>Innovative interest</b> in <b>synthesizing</b> information to conduct research to develop new chemical formulations and processes and to devise new technical applications of industrial chemicals and compounds; and to investigate chemical aspects of the mechanisms of drug action, the diagnosis and treatment of disease, organ function and the assessment of health",
        "<b>Objective interest</b> in <b>precision working</b> with instruments to analyze, synthesize, purify, modify and characterize chemical and biochemical compounds",
        "<b>Directive interest</b> in <b>consulting</b> in a particular field of technical expertise; and in developing and conducting programs of analysis to ensure quality control of raw materials, chemical intermediates and final products; may supervise other chemists and chemical technicians and technologists"
      ]
    },
    physical_activities: {
      physical: {
        vision: {
          name: "Vision",
          value: 2,
          title: "Near vision"
        },
        colour: {
          name: "Colour Discrimination",
          value: 1,
          title: "Relevant"
        },
        hearing: {
          name: "Hearing",
          value: 1,
          title: "Limited"
        },
        body_position: {
          name: "Body Position",
          value: 1,
          title: "Sitting"
        },
        limb_coordination: {
          name: "Limb Co-ordination",
          value: 1,
          title: "Upper limb co-ordination"
        },
        strength: {
          name: "Strength",
          value: 1,
          title: "Limited"
        }
      },
      environment: {
        value: "L1",
        title: "Regulated inside climate"
      }
    },
    employment_requirements: {
      et_value: "R"
    },
    workplace_and_employers: "Manufacturing companies"
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
      <div fontSize = "70"
        style={Object.assign(
          { backgroundColor: this.props.bgColor },
          this.props.styling
        )}
      >
        <h3>
          {this.sampleNoc.sub_noc
            .concat(" ")
            .concat(this.sampleNoc.sub_noc_title)}
        </h3>
        <p>{this.sampleNoc.sub_noc_description}</p>
        <hr />
        <h3>Examples of Job Titles</h3>
        <ul>
          {this.sampleNoc.example_titles.map(title => {
            return <li>{title}</li>;
          })}
        </ul>
        <hr />
        <hr />
        <h3>Profile Summary</h3>
        <hr />
        <ul>
          <h2>APTITUDES:</h2>
          <ul>
            {Object.keys(this.sampleNoc.profile_summary.aptitudes).map(key => {
              return (
                <div>
                  <li>
                    {this.profileSummaryKeys.aptitudes[key]
                      .concat(": ")
                      .concat(this.sampleNoc.profile_summary.aptitudes[key])}
                  </li>
                  <div />
                </div>
              );
            })}
          </ul>
          <hr />
          <h2>INTERESTS:</h2>
          <ol>
            {this.sampleNoc.profile_summary.interests.map(i => {
              return <li>{i}</li>;
            })}
          </ol>
          <hr />
          <h2>DATA PEOPLE THINGS (DPT):</h2>
          <ul>
            {Object.keys(this.sampleNoc.profile_summary.dpt).map(key => {
              return (
                <div>
                  <li>
                    {this.profileSummaryKeys.dpt[key]
                      .concat(": ")
                      .concat(this.sampleNoc.profile_summary.dpt[key])}
                  </li>
                  <div />
                </div>
              );
            })}
          </ul>
          <hr />
          <h2>PHYSICAL ACTIVITIES (PA):</h2>
          <ul>
            {Object.keys(this.sampleNoc.profile_summary.physical).map(key => {
              return (
                <div>
                  <li>
                    {this.profileSummaryKeys.physical[key]
                      .concat(": ")
                      .concat(this.sampleNoc.profile_summary.physical[key])}
                  </li>
                  <div />
                </div>
              );
            })}
          </ul>
        </ul>
        <hr />
        <h2>ENVIRONMENTAL CONDITIONS (EC):</h2>
        <ul>
          <li>
            {this.sampleNoc.physical_activities.environment.value
              .concat(": ")
              .concat(this.sampleNoc.physical_activities.environment.title)}
          </li>
        </ul>
        <hr />
        <h2>EDUCATION/TRAINING:</h2>
        <ul>
          <li>{this.sampleNoc.employment_requirements.et_value}</li>
        </ul>
        <hr />
        <hr />
        <h3>Descriptor Profile:</h3>
        <h2>Main Charactistics</h2>
        <p>
          Occupations in this group are characterized by the following
          aptitudes, interests and worker functions as they relate to main
          duties:
        </p>
        <ul>
          {this.sampleNoc.descriptor_profile.main_characteristics.map(mc => {
            return <li>{mc.replace(/(<([^>]+)>)/gi, "")}</li>;
          })}
        </ul>
      </div>
    );
  }
}
