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
    const responseArray = response.data.map(r => r.noc_title);
    this.setState({
      results: responseArray
    });
  };

  render() {
    return (
      <form>
        <input
          placeholder="Search for..."
          ref={input => (this.search = input)}
          onChange={this.handleInputChange}
        />
        <p>
          {this.state.results.map(result => {
            return <div>{result}</div>;
          })}
        </p>
      </form>
    );
  }
}

export default Search;
