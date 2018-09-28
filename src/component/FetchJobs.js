import React from "react";

export default class FetchJobs extends React.Component {
  state = {
    loading: true,
    jobs: null
  };

  async componentDidMount() {
    const url =
      "http://localhost:8000/api/jobs?aptitudes=G3,V3,N4,S4,P4,Q3,K3,F3,M4&physical=V2,C0,H2,B1,L1,S1&environment=L1&interests=S,M,d&dpt=D3,P6,T7&et_value=3";
    const response = await fetch(url,  {mode: 'no-cors'});
    console.log(response);
    const data = await response.json();
    this.setState({
      loading: false,
      jobs: data
    });
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
        {this.state.loading || !this.state.jobs ? (
          <div>loading...</div>
        ) : (
          <div>
            <img src={this.state.jobs} />
          </div>
        )}
        <button onClick={this.handleNext}>next</button>
      </div>
    );
  }
}
