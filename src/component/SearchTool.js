import React, { Component } from "react";
import SearchResult from "./SearchResult";
import axios from "axios";

class Search extends Component {
  state = {
    query: "",
    results: [],
    hasClicked: false,
    clicked: ""
  };

  async componentDidMount() {
    const params = {
      searchItem: this.state.clicked
    };
    const response = await axios.get("http://localhost:3000/api/noc", {
      params
    });
  }

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

  handleResultClick = async (i, result) => {
    // make a call to the DB for this noc (the results should include a sub_noc/noc)
    this.setState({ hasClicked: true });
    console.log("hey", result, i);
  };

  render() {
    if (!this.state.hasClicked) {
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
                    onClick={this.handleResultClick}
                  />
                );
              })}
            </ul>
          </div>
        </form>
      );
    } else {
      return <div>clicked!</div>;
    }
  }
}

export default Search;
