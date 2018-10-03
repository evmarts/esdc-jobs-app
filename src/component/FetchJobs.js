import React from "react";
import response from "../response";
import axios from "axios";

export default class FetchJobs2 extends React.Component {
  state = {
    loading: true,
    jobs: null,
    idx: 0,
    resultCount: null
  };

  async componentDidMount() {
    const response = await axios.get(
      "http://esdc-jobs-api.herokuapp.com/api/jobs?aptitudesMin=G3,V3,N4,S4,P4,Q3,K3,F3,M4&aptitudesMax=G3,V3,N4,S4,P4,Q3,K3,F3,M4&physicalMin=V2,C0,H2,B1,L1,S1&physicalMax=V2,C0,H2,B1,L1,S1&environment=L1&interests=S,M,d&dptMin=D3,P6,T7&dptMax=D3,P6,T7&et_value=3"
    );
    console.log(response.data);
    this.setState({
      loading: false,
      jobs: response.data.result,
      resultCount: response.data.result.length
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
    console.log(this.state.jobs);
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
