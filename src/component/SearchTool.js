import React, { Component } from "react";
import axios from "axios";

class Search extends Component {
  state = {
    query: "",
    results: []
  };

  handleInputChange = async () => {
    await this.setState({
      query: this.search.value
    });
    const params = { searchItem: this.state.query };
    const response = await axios.get("http://localhost:3000/api/search", {
      params
    });
    const responseArray = response.data.map(r => r.noc + " " + r.noc_title);
    this.setState({
      results: responseArray
    });
  };

  handleResultClick = async (i, result) => {
    // make a call to the DB for this noc (the results should include a sub_noc/noc)
  }

  render() {
    return (
      <form>
        <input
          placeholder="Search for..."
          ref={input => (this.search = input)}
          onChange={this.handleInputChange}
        />
        <div>
          <ul>
          {this.state.results.map((result, i) => {
            return (
              <div
                className={"row"}
                key={i}
                onClick={() => {
                  this.handleResultClick(i, result);
                }}
              >
                {result}
              </div>
            );
          })}
          </ul>
        </div>
      </form>
    );
  }
}

export default Search;
