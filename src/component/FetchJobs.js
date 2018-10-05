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
    const params = {
      aptitudesMin: this.props.fields.aptitudesMin.join(),
      aptitudesMax: this.props.fields.aptitudesMax.join(),
      physicalMin: this.props.fields.physicalActivitesMin.join(),
      physicalMax: this.props.fields.physicalActivitesMax.join(),
      environment: this.props.fields.environmentalConditionsMin.join(),
      interests: this.props.fields.interests,
      dptMin: this.props.fields.dptMin.join(),
      dptMax: this.props.fields.dptMax.join(),
      et_value: this.props.fields.employmentRequirementsMin
    };
    console.log({params})
    const reqString = `http://esdc-jobs-api.herokuapp.com/api/jobs?aptitudesMin=${
      params.aptitudesMin.toString()
    }&aptitudesMax=${params.aptitudesMax.toString()}&physicalMin=${
      params.aptitudesMin
    }&physicalMax=${params.physicalMin.toString()}&environment=${
      params.interests}`
    // }&interests=${params.interests}&dptMin=${params.dptMin}&dptMax=${
      // params.dptMax
    // }&et_value=${params.et_value}`;
    console.log(reqString);
    const response = await axios.get(
      "http://esdc-jobs-api.herokuapp.com/api/jobs?aptitudesMin=G3,V3,N4,S4,P4,Q3,K3,F3,M4&aptitudesMax=G3,V3,N4,S4,P4,Q3,K3,F3,M4"
    );

    this.setState({
      loading: false,
      jobs: response.data.result,
      resultCount: response.data.result.length
    });
  }

  handleNext = () => {
    if (this.state.idx < this.state.resultCount - 1) {
      this.setState(
        {
          idx: this.state.idx + 1
        },
        () => {}
      );
    }
  };

  handleBack = () => {
    if (this.state.idx > 0) {
      this.setState(
        {
          idx: this.state.idx - 1
        },
        () => {}
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
