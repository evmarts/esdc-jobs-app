import React from "react";
import descriptors from "../constants/descriptors";

export default class EmploymentConditions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      meta: { isRange: false }
    };
  }
  componentDidMount() {}

  onSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
  };

  change = async e => {
    const value = e.target.value;
    await this.setState({
      [value.slice(0, 1)]: value.substring(1, 2)
    });
    this.props.onSubmit(this.state);
  };

  render() {
    return (
      <div style={this.props.styling}>
        <form>
          <h3>{descriptors.descriptors.employmentRequirements.full}</h3>
          <br />
          {Object.keys(
            descriptors.descriptors.employmentRequirements.values
          ).map(val => {
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
          })}
        </form>
      </div>
    );
  }
}
