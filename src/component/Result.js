import React from "react";

export default class Result extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  onSubmit = jobs => {
    this.props.onClick(jobs);
  };

  render() {
    return (
      <div
        style={this.state.bold ? { textDecoration: "underline" } : { fontWeight: "" }}
        onMouseOver={() => {
          this.setState({ bold: true });
        }}
        onClick={() => this.onSubmit(this.props.result)}

        onMouseLeave={() => {
          this.setState({ bold: false });
        }}
      >
        {this.props.result.sub_noc_title}
      </div>
    );
  }
}
