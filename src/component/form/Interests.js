import React from "react";
import FormInterests from "./input/FormInterests";

export default class Interests extends React.Component {
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
        <h4 style={{ display: "inline-block" }}>Interests 🦋</h4>
        {this.state.isExpanded ? (
          <FormInterests
            interests={this.props.interests}
            onSubmit={fields => {
              this.props.onSubmit(fields, "interests");
            }}
          />
        ) : (
          <div />
        )}
      </div>
    );
  }
}
