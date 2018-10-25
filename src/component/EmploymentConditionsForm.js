import React from "react";
import descriptors from "../constants/descriptors";

export default class EmploymentConditions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      meta: {isRange: false}
    };
  }
  componentDidMount() {}

  onSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
  };

  change = e => {
    const value = e.target.value;
    this.setState({
      [value.split(0, 1)]: value.substring(1,2)
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
          <label>{descriptors.descriptors.employmentRequirements.full}</label>
          {Object.keys(descriptors.descriptors.employmentRequirements.values).map(
            val => {
              return (
                <div>
                  <label>{val}</label>
                  <select name={val} onChange={e => this.change(e)}>
                    <option value="" />
                    {descriptors.descriptors.employmentRequirements.values[
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
