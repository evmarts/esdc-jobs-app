import React from "react";

export default class SubnocResult extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  onSubmit = jobs => {
    this.props.onClick(jobs);
  };

  render() {
    return (
      <div>
        <div
          style={
            this.state.bold
              ? { textDecoration: "underline" }
              : { fontWeight: "" }
          }
          onMouseOver={() => {
            this.setState({ bold: true });
          }}
          onMouseLeave={() => {
            this.setState({ bold: false });
          }}
          onClick={() => this.onSubmit(this.props.subNoc)}
        >
          {this.props.subNoc.sub_noc + " " + this.props.subNoc.sub_noc_title}
        </div>
      </div>
    );
  }
}
