import React from "react";
import response from "../response";

export default class FetchJobs extends React.Component {
  state = {
    loading: true,
    jobs: null,
    idx: 0,
    resultCount: null
  };

  async componentDidMount() {
    let data = response.response.result;
    this.setState({
      loading: false,
      jobs: data,
      resultCount: data.length
    });
  }

  handleNext = () => {
    if (this.state.idx < this.state.resultCount - 1) {
      console.log("here");
      this.setState(
        {
          idx: this.state.idx + 1
        },
        () => {
          console.log("idx", this.state.idx);
        }
      );
    }
  };

  handleBack = () => {
    if (this.state.idx > 0) {
      console.log("here");
      this.setState(
        {
          idx: this.state.idx - 1
        },
        () => {
          console.log("idx", this.state.idx);
        }
      );
    }
  };

  render() {
    return (
      <div align="center">
        {this.state.loading || !this.state.jobs ? (
          <div>loading...</div>
        ) : (
          <div>
            <div>
              <h3 style={{ display: "inline-block", textAlign: "left" }}>
                {this.state.jobs[this.state.idx].sub_noc}
              </h3>
              <h3 style={{ display: "inline-block", textAlign: "left" }}>
                {" - "}
              </h3>
              <h3 style={{ display: "inline-block", textAlign: "left" }}>
                {this.state.jobs[this.state.idx].sub_noc_title}
              </h3>
              <div style={{ width: 400, textAlign: "left" }}>
                {this.state.jobs[this.state.idx].sub_noc_description}
              </div>
            </div>
          </div>
        )}
        <div>
          {"Occupation results: " +
            (this.state.idx + 1) +
            "/" +
            this.state.resultCount}
        </div>
        <button onClick={this.handleBack}>back</button>
        <button onClick={this.handleNext}>next</button>
      </div>
    );
  }
}
