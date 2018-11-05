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
    // aptitudes
    let apMinVals = [],
      apMaxVals = [];
    if (this.props.searchItem.aptitudes) {
      const isApRange = this.props.searchItem.aptitudes.meta.isRange;
      const apKeysToSearch = Object.keys(
        this.props.searchItem.aptitudes
      ).filter(e => {
        return e !== "meta";
      });
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
    }
    // interests
    let inVals = [];
    if (this.props.searchItem.interests) {
      const inKeysToSearch = Object.keys(
        this.props.searchItem.interests
      ).filter(e => {
        return e !== "meta";
      });
      inKeysToSearch.forEach(e => {
        inVals.push(this.props.searchItem.interests[e]);
      });
    }
    // dpt
    let dptMinVals = [],
      dptMaxVals = [];
    if (this.props.searchItem.dpt) {
      const isApRange = this.props.searchItem.dpt.meta.isRange;
      const dptKeysToSearch = Object.keys(this.props.searchItem.dpt).filter(
        e => {
          return e !== "meta";
        }
      );
      if (isApRange) {
        dptKeysToSearch.forEach(e => {
          if (e.includes("min")) {
            dptMinVals.push(this.props.searchItem.dpt[e]);
          }
          if (e.includes("max")) {
            dptMaxVals.push(this.props.searchItem.dpt[e]);
          }
        });
      } else {
        dptKeysToSearch.forEach(e => {
          dptMinVals.push(this.props.searchItem.dpt[e]);
          dptMaxVals.push(this.props.searchItem.dpt[e]);
        });
      }
    }
    // physical acitivites
    let physicalActivitiesMinVals = [],
      physicalActivitiesMaxVals = [];
    if (this.props.searchItem.physicalActivities) {
      const isApRange = this.props.searchItem.physicalActivities.meta.isRange;
      const physicalActivitiesKeysToSearch = Object.keys(
        this.props.searchItem.physicalActivities
      ).filter(e => {
        return e !== "meta";
      });
      if (isApRange) {
        physicalActivitiesKeysToSearch.forEach(e => {
          if (e.includes("min")) {
            physicalActivitiesMinVals.push(
              this.props.searchItem.physicalActivities[e]
            );
          }
          if (e.includes("max")) {
            physicalActivitiesMaxVals.push(
              this.props.searchItem.physicalActivities[e]
            );
          }
        });
      } else {
        physicalActivitiesKeysToSearch.forEach(e => {
          physicalActivitiesMinVals.push(
            this.props.searchItem.physicalActivities[e]
          );
          physicalActivitiesMaxVals.push(
            this.props.searchItem.physicalActivities[e]
          );
        });
      }
    }

    let locVal = "";
    let hazVal = "";
    let disVal = "";
    if (this.props.searchItem.environmentalConditions) {
      if (this.props.searchItem.environmentalConditions.L) {
        locVal = this.props.searchItem.environmentalConditions.L;
      }
      if (this.props.searchItem.environmentalConditions.L) {
        hazVal = this.props.searchItem.environmentalConditions.H;
      }
      if (this.props.searchItem.environmentalConditions.L) {
        disVal = this.props.searchItem.environmentalConditions.D;
      }
    }

    let empReq = "";
    if (this.props.searchItem.employmentConditions) {
      empReq = this.props.searchItem.employmentConditions.E;
    }

    const params = {
      aptitudesMin: apMinVals ? apMinVals.toString() : undefined,
      aptitudesMax: apMaxVals ? apMaxVals.toString() : undefined,
      interests: inVals ? inVals.toString() : "",
      dptMin: dptMinVals ? dptMinVals.toString() : undefined,
      dptMax: dptMaxVals ? dptMaxVals.toString() : undefined,
      physicalMin: physicalActivitiesMinVals
        ? physicalActivitiesMinVals.toString()
        : undefined,
      physicalMax: physicalActivitiesMaxVals
        ? physicalActivitiesMaxVals.toString()
        : undefined,
      location: locVal,
      hazards: hazVal,
      discomforts: disVal,
      employment_requirements: empReq
    };
    const response = await axios.get(
      "http://esdc-jobs-api.herokuapp.com/api/jobs",
      { params }
      // "http://localhost:3000/api/jobs",
      // { params }
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
      if (this.state.jobs.length <= 0) {
        return <label>No results matched that search!</label>;
      }
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
