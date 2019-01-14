import React, { Component } from "react";
import SearchResult from "./SearchResult";
import axios from "axios";
import ResultInfo from "./ResultInfo";
import Frame from "react-frame-component";

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

  handleNewSearch = async () => {
    this.setState({ response: null });
  };

  Information = () => {
    return (
      <div>
        <h3>How to use:</h3>
        <p>
          Enter the name of an occupation within the National Occupational
          Classification (NOC) system in the search bar below.
        </p>
        <p>
          Results matching the search will show up below the search bar. Click a
          result to view information corresponding to that occupation.
        </p>
      </div>
    );
  };

  handleResultClick = async (result, i) => {
    // make a call to the DB for this noc (the results should include a sub_noc/noc)
    await this.setState({ hasClicked: true, clicked: result.split(" ")[0] });

    const params = {
      searchItem: this.state.clicked
    };
    const response = await axios.get(
      "http://esdc-jobs-api.herokuapp.com/api/noc",
      {
        params
      }
    );
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
          <div style={{ marginLeft: "70px"}}>
            <this.Information />
            <input
              style={{ width: "400px" }}
              placeholder="Search for occupations..."
              ref={input => (this.search = input)}
              onChange={this.handleInputChange}
            />
          </div>
          <Frame
            style={{ marginLeft: "70px", width: "80%", height: "100%" }}
          >
            <div>
                {this.state.results.map((result, i) => {
                  return (
                    <SearchResult
                      result={result}
                      index={i}
                      onClick={this.handleResultClick}
                    />
                  );
                })}
            </div>
          </Frame>
        </form>
      );
    } else {
      return (
        <div style={{ marginLeft: "70px" }}>
          <this.Information />
          <button onClick={this.handleNewSearch}>new search</button>
          <ResultInfo job={this.state.response.data[0].sub_nocs[0]} />
        </div>
      );
    }
  }
}

export default Search;
