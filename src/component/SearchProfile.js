import React from "react";
import descriptors from "../constants/descriptors";

export default class SearchProfile extends React.Component {
  state = { fields: this.props.profile };

  render() {
    if (Object.keys(this.state.fields).length === 0) {
      return <div>nothing to show</div>;
    } else {
      let profile = this.state.fields;
      console.log("profile", JSON.stringify(profile));
      return (
        <div>
          <h3>Profile:</h3>
          {Object.keys(profile).map(char => {
            if (char !== "isProfileViewerShown") {
              return (
                <div>
                  <h4>{char}</h4>
                  <div>
                    {Object.keys(profile[char]).map(val => {
                      if (val !== "meta") {
                        return (
                          <div>
                            <div>{val + ": " + profile[char][val]}</div>
                          </div>
                        );
                      }
                    })}
                  </div>
                </div>
              );
            }
          })}
        </div>
      );
    }
  }
}
