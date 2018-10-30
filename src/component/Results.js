import React from "react";
import Result from "./Result";

export default class Results extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.setState({ results: this.props.results });
  }

  render() {
    // console.log(this.state)
    return (
      <div style={this.props.styling}>
        {this.state.results ? (
          <div>
            <label>Results:</label>
            {this.state.results.map(r => {
              return <Result result={r} onClick={this.props.onClick} />;
            })}
          </div>
        ) : (
          <div>loading...</div>
        )}
      </div>
    );
  }
}
