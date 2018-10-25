import React from "react";
import axios from "axios";
import ResultInfo from "./ResultInfo";
import Results from "./ResultsV2";

export default class ResultDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      selected: ""
    };
    this.onClick = this.onClick.bind(this);
  }

  async onClick(job) {
    await this.setState({ selected: job });
  }

  async componentDidMount() {
    const isApRange = this.props.searchItem.aptitudes.meta.isRange;
    const apKeysToSearch = Object.keys(this.props.searchItem.aptitudes).filter(
      e => {
        return e !== "meta";
      }
    );

    let apMinVals = [];
    let apMaxVals = [];
    if (isApRange) {
      apKeysToSearch.forEach(e => {
        if (e.includes("min")) {
          apMinVals.push(this.props.searchItem.aptitudes[e]);
        }
        if (e.includes("max")) {
          apMaxVals.push(this.props.searchItem.aptitudes[e]);
        }
      });
    } else {
      apKeysToSearch.forEach(e => {
        apMinVals.push(this.props.searchItem.aptitudes[e]);
        apMaxVals.push(this.props.searchItem.aptitudes[e]);
      });
    }
    const params = {
      aptitudesMin: apMinVals.toString(),
      aptitudesMax: apMaxVals.toString()
    };
    const response = await axios.get(
      // "http://esdc-jobs-api.herokuapp.com/api/jobs",
      // { params }
      "http://localhost:3000/api/jobs",
      { params }
    );
    this.setState({
      loading: false,
      jobs: response.data.result,
      resultCount: response.data.result.length
    });
  }
  render() {
    const styling = {
      display: "inline-block",
      width: "50%",
      verticalAlign: "top",
      marginTight: "10px",
      marginTop: "0",
      position: "relative",
      fontSize: "1.75vw"
    };
    if (this.state.loading) {
      return <div />;
    }
    if (!this.state.loading && this.state.selected === "") {
      return (
        <Results
          styling={styling}
          onClick={this.onClick}
          results={this.state.jobs}
        />
      );
    }
    if (!this.state.loading && this.state.selected) {
      return (
        <div>
          <Results
            styling={styling}
            onClick={this.onClick}
            results={this.state.jobs}
          />
          <ResultInfo styling={styling} job={this.state.selected} />
        </div>
      );
    }
  }
}
