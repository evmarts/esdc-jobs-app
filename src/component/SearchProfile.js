import React from "react";
import descriptors from "../constants/descriptors";

export default class SearchProfile extends React.Component {
  state = {};

  render() {
    if (Object.keys(this.props.profile).length === 0) {
      return <div />;
    } else {
      let profile = this.props.profile;
      console.log("profile", JSON.stringify(profile));
      return (
        <div>
          <h2>Current Profile</h2>
          {Object.keys(profile).map(char => {
            return Object.keys(profile[char]).map(val => {
              return <div>{val + ": " + profile[char][val]}</div>;
            });
          })}
        </div>
      );
    }
  }
}
