import React from "react";
import descriptors from "../constants/descriptors";

export default class SearchProfile extends React.Component {
  state = {};

  render() {
    if (Object.keys(this.props.profile).length === 0) {
      return <div />;
    } else {
      let profile = this.props.profile;
      return (
        <div>
          <h2>{Object.keys(profile)}</h2>
        </div>
      );
    }
  }
}
