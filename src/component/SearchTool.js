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
      <div style={{ backgroundColor: "#f8f8f8" }}>
        <h3>Search 🔎</h3>
        <p>
          This tool allows one to search for an occupation and gain detailed
          information provided by the ESDC on that occupation.
        </p>
        <h3>How to use ⚙️</h3>
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
  };

  render() {
    if (!this.state.response) {
      return (
        <div>
          <form>
            <div style={{ marginLeft: "5%", marginRight: "5%" }}>
              <this.Information />
              <input
                style={{ width: "400px" }}
                placeholder="Search for occupations..."
                ref={input => (this.search = input)}
                onChange={this.handleInputChange}
              />
            </div>
          </form>
          {this.state.query ? (
            <Frame style={{ marginLeft: "5%", width: "90%", height: "100%" }}>
              <div>
                {this.state.results.map((result, i) => {
                  return (
                    <div>
                    <SearchResult
                      result={result}
                      index={i}
                      onClick={this.handleResultClick}
                    />
                    </div>
                  );
                })}
              </div>
            </Frame>
          ) : (
            <div />
          )}
        </div>
      );
    } else {
      return (
        <div style={{ marginLeft: "5%" }}>
          <this.Information />
          <button onClick={this.handleNewSearch}>new search</button>
          <h3>Occupation:</h3>
          <ResultInfo job={this.state.response.data[0].sub_nocs[0]} />
        </div>
      );
    }
  }
}

export default Search;
