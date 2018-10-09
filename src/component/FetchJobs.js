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
    const response = await axios.get(
      "http://esdc-jobs-api.herokuapp.com/api/jobs",
      { params }
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
      <div style={{textAlign: 'center'}}>
        {this.state.loading || !this.state.jobs ? (
          <div>loading...</div>
        ) : (
          <div style={{ backgroundColor: "#D8F3FF" , textAlign: "left", marginLeft: 200, marginRight: 200}}>
            <label>Occupation: </label>
            <div style={{ display: "inline-block", textAlign: "left" }}>
              {this.state.jobs[this.state.idx].sub_noc_title} ({this.state.jobs[this.state.idx].sub_noc})
            </div>
            <br />
            <label>Description: </label>
            <div style={{ display: "inline-block", textAlign: "left" }}>
              {this.state.jobs[this.state.idx].sub_noc_description}
            </div>
            <br />
            <label>Example Titles: </label>
            <div style={{ textAlign: "left" }}>
              {this.state.jobs[this.state.idx].example_titles.map(title => {
                return <div>-{title}</div>;
              })}
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
