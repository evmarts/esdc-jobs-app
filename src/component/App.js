import React, { Component } from "react";
import Form from "./Form";
import FetchJobs from "./FetchJobs";
import RangeSelect from "./RangeSelect";
import RangeForm from "./RangeForm";
import SearchTool from "./SearchTool";

class App extends Component {
  state = {
    response: ""
  };

  onSubmit = async fields => {
    await this.setState({ fields });
  };

  DisplayResult = props => {
    const isSubmitted = this.state.fields;
    if (isSubmitted) {
      return <FetchJobs fields={this.state.fields} />;
    }
    return <div />;
  };

  render() {
    // add more information to the displayed results
    return (
      <div>
        {/* <SearchTool /> */}
        <Form onSubmit={fields => this.onSubmit(fields)} />
        <this.DisplayResult />
      </div>
    );
  }
}

export default App;
