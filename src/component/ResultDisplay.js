import React from "react";
import axios from "axios";
import ResultInfo from "./ResultInfo";
import Results from "./Results";

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
    console.log(this.state.selected);
  }

  async componentDidMount() {
    const apKeysToSearch = Object.keys(this.props.searchItem.aptitudes).filter(
      e => {
        return e !== "meta";
      }
    );

    let apVals = [];
    apKeysToSearch.forEach(e => {
      apVals.push(this.props.searchItem.aptitudes[e]);
    });
    const aptitudesMin = apVals.toString();
    const aptitudesMax = apVals.toString();
    const params = {
      aptitudesMin: aptitudesMin,
      aptitudesMax: aptitudesMax
    };
    // const response = await axios.get(
    //   "http://esdc-jobs-api.herokuapp.com/api/jobs",
    //   { params }
    // );
    this.setState({
      loading: false
      // jobs: response.data.result,
      // resultCount: response.data.result.length
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
      return <div>no results yet</div>;
    }
    if (!this.state.loading && this.state.selected === "") {
      return (
        <Results styling={styling} onClick={this.onClick} />
      );
    }
    if (!this.state.loading && this.state.selected) {
      return (
        <div>
          <Results styling={styling} onClick={this.onClick} />
          <ResultInfo styling={styling} />
        </div>
      );
    }
  }
}
