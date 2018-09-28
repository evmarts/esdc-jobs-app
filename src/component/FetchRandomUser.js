import React from "react";

export default class FetchRandomUser extends React.Component {
  state = {
    loading: true,
    people: null,
    idx: 0,
    resultCount: null
  };

  async componentDidMount() {
    const url = "https://api.randomuser.me/?results=5";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({
      people: data.results,
      loading: false,
      resultCount: data.results.length
    });
    console.log(data.results.length);
  }

  handleNext = () => {
    if (this.state.idx < this.state.resultCount - 1) {
      this.setState(
        {
          idx: this.state.idx + 1
        },
        () => {
          console.log("idx", this.state.idx);
        }
      );
    }
  };

  handleBack = () => {
    if (this.state.idx > 0) {
      this.setState(
        {
          idx: this.state.idx - 1
        },
        () => {
          console.log("idx", this.state.idx);
        }
      );
    }
  };

  render() {
    return (
      <div align="center">
        <button onClick={this.handleBack}>back</button>
        {this.state.loading || !this.state.people ? (
          <div>loading...</div>
        ) : (
          <div>
            <img src={this.state.people[this.state.idx].picture.large} />
          </div>
        )}
        <button onClick={this.handleNext}>next</button>
      </div>
    );
  }
}
