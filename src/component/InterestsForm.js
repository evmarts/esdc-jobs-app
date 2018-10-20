import React from "react";
import descriptors from "../constants/descriptors";

export default class InterestsForm extends React.Component {
  state = {};
  componentDidMount() {}

  onSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
  };

  change = e => {
    const value = e.target.value;
    this.setState({
      [value.split(0, 1)]: value
    });
  };

  render() {
    return (
      <div
        style={Object.assign(
          { backgroundColor: this.props.bgColor },
          this.props.styling
        )}
      >
        <form>
          <label>{descriptors.descriptors.interests.full}</label>
          {Object.keys(descriptors.descriptors.interests.values).map(
            val => {
              return (
                <div>
                  <label>{val}</label>
                  <select name={val} onChange={e => this.change(e)}>
                    <option value="" />
                    {descriptors.descriptors.interests.values[
                      val
                    ].options.map(o => {
                      return <option value={val + o}>{o}</option>;
                    })}
                  </select>
                </div>
              );
            }
          )}
        </form>
        <button
          style={{ position: "absolute", bottom: "0", right: "0" }}
          onClick={e => this.onSubmit(e)}
        >
          Submit
        </button>
      </div>
    );
  }
}
