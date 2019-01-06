import React, { Component } from "react";
import SearchResult from "./SearchResult";
import axios from "axios";
import ResultInfo from "./ResultInfo";

class Search extends Component {
  state = {
    query: "",
    results: [],
    hasClicked: false,
    clicked: ""
  };

  handleInputChange = async () => {
    await this.setState({
      query: this.search.value
    });
    const params = { searchItem: this.state.query };
    // const response = await axios.get("http://localhost/api/search", {
    const response = await axios.get(
      "http://esdc-jobs-api.herokuapp.com/api/search",
      {
        params
      }
    );
    const responseArray = response.data.map(r => r.sub_noc + " " + r.ch_title);
    this.setState({
      results: responseArray
    });
  };

  handleResultClick = async (result, i) => {
    // make a call to the DB for this noc (the results should include a sub_noc/noc)
    console.log("index", i);
    console.log("result", result);
    await this.setState({ hasClicked: true, clicked: result.split(" ")[0] });

    console.log("clicked", this.state.clicked);
    const params = {
      searchItem: this.state.clicked
    };
    const response = await axios.get("http://localhost:3000/api/noc", {
      params
    });
    await this.setState({ response: response });
    console.log("heeree", this.state.response);
  };

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
    if (!this.state.response) {
      return (
        <form>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <input
              style={{ width: "400px" }}
              placeholder="Search for occupations..."
              ref={input => (this.search = input)}
              onChange={this.handleInputChange}
            />
          </div>
          <div>
            <ul>
              {this.state.results.map((result, i) => {
                return (
                  <SearchResult
                    result={result}
                    index={i}
                    onClick={this.handleResultClick}
                  />
                );
              })}
            </ul>
          </div>
        </form>
      );
    } else {
      return (
        <div>
          <ResultInfo styling={styling} job={this.state.response.data[0].sub_nocs[0]} />
        </div>
      );
    }
  }
}

export default Search;
