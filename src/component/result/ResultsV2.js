import React from "react";
import NocResult from "./NocResult";

export default class ResultsV2 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    this.setState({ results: this.props.results });
  }

  render() {
    return (
      <div style={this.props.styling}>
        {this.state.results ? (
          this.state.results.map(noc => {
            return <NocResult noc={noc} onClick={this.props.onClick} />;
          })
        ) : (
          <div>loading...</div>
        )}
      </div>
    );
  }
}
