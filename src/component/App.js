import React, { Component } from "react";
import Form from "./Form";
import FetchRandomUser from "./FetchRandomUser";
import FetchJobs from "./FetchJobs";

class App extends Component {
  onSubmit = fields => {
    this.setState({ fields });
    console.log("App comp got: ", fields);
  };

  render() {
    return (
      <div>
            <Form onSubmit={fields => this.onSubmit(fields)} />
            <FetchRandomUser />
      </div>
    );
  }
}

export default App;
