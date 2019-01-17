import React from "react";
import FormEmploymentConditions from "./input/FormEmploymentRequirements";

export default class employmentRequirements extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpanded: false
    };
  }

  handleCick = () => {
    this.setState({
      isExpanded: !this.state.isExpanded
    });
  };
  render() {
    const divStyle = { marginLeft: "5%", marginRight: "5%" };
    return (
      <div style={divStyle}>
        <h4 style={{ display: "inline-block" }} onClick={this.handleCick}>
          {this.state.isExpanded ? <p>▼</p> : <p>►</p>}
        </h4>
        <h4 style={{ display: "inline-block" }}>Employment Requirements 📶</h4>
        {this.state.isExpanded ? (
          <FormEmploymentConditions
            employmentRequirements={this.props.employmentRequirements}
            onSubmit={fields => {
              this.props.onSubmit(fields, "employmentRequirements");
            }}
          />
        ) : (
          <div />
        )}
      </div>
    );
  }
}
