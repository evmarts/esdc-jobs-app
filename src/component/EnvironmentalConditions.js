import React from "react";
import FormEnvironmentalConditions from "./FormEnvironmentalConditions";

export default class EnvironmentalConditions extends React.Component {
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
        <h4 style={{ display: "inline-block" }}>Environmental Conditions 🌳</h4>
        {this.state.isExpanded ? (
          <FormEnvironmentalConditions
            environmentalConditions={this.props.environmentalConditions}
            onSubmit={fields => {
              this.props.onSubmit(fields, "environmentalConditions");
            }}
          />
        ) : (
          <div />
        )}
      </div>
    );
  }
}
