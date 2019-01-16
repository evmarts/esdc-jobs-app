import React from "react";
import FormAptitude from "./FormAptitude";

export default class Aptitude extends React.Component {
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
    const divStyle = { marginLeft: "70px", marginRight: "70px" };
    return (
      <div style={divStyle}>
        <h4 style={{ display: "inline-block" }} onClick={this.handleCick}>
          {this.state.isExpanded ? <p>▼</p> : <p>►</p>}
        </h4>
        <h4 style={{ display: "inline-block" }}>Aptitudes 📊</h4>
        {this.state.isExpanded ? (
          <FormAptitude
            aptitudes={this.props.aptitudes}
            onSubmit={fields => {
              this.props.onSubmit(fields, "aptitudes");
            }}
          />
        ) : (
          <div />
        )}
      </div>
    );
  }
}
