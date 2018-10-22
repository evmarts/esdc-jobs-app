import React from "react";
import axios from "axios";
import ResultInfo from "./ResultInfo";

export default class ResultDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
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
  render() {
    if (this.state.loading) {
      // return <div>loading...</div>;
      return <ResultInfo />;
    } else {
      return (
        <div>
          {/* <p>{JSON.stringify(this.state.jobs)}</p> */}
          <ResultInfo />;
        </div>
      );
    }
  }
}
