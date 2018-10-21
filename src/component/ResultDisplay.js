import React from "react";

export default class ResultDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  parseInput() {}

  getResults() {}

  render() {
    return (
      <div>
        <p>Results go here</p>
        <p>{JSON.stringify(this.props.searchItem)}</p>
      </div>
    );
  }
}
