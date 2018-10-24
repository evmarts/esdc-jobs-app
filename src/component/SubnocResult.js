import React from "react";

export default class SubnocResult extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <div>{this.props.subNoc.sub_noc}</div>
      </div>
    );
  }
}
