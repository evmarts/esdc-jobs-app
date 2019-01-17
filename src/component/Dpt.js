import React from "react";
import FormDpt from "./FormDpt";

export default class Dpt extends React.Component {
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
        <h4 style={{ display: "inline-block" }}>
          Data/Information, People, Things 📈🗣🕹
        </h4>
        {this.state.isExpanded ? (
          <FormDpt
            dpt={this.props.dpt}
            onSubmit={fields => {
              this.props.onSubmit(fields, "dpt");
            }}
          />
        ) : (
          <div />
        )}
      </div>
    );
  }
}
