import React, { Component } from "react";
import Form from "./Form";
import FetchRandomUser from "./FetchRandomUser";
import FetchJobs from "./FetchJobs";
import RangeSelect from "./RangeSelect";
import RangeForm from "./RangeForm";

class App extends Component {
  state = {
    response: ""
  };

  onSubmit = fields => {
    this.setState({ fields });
    console.log("App comp got: ", fields);
  };

  render() {
    return (
      <div>
        <Form onSubmit={fields => this.onSubmit(fields)} />
        <FetchJobs />
        <RangeForm />
      </div>
    );
  }
}

export default App;
