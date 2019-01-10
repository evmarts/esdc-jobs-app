import React from "react";
import descriptors from "../constants/descriptors";

export default class EnvironmentalConditionsForm extends React.Component {
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
      [value.substring(0, 1)]: value
    });
    this.props.onSubmit(this.state);
  };

  render() {
    return (
      <div style={this.props.styling}>
        <form>
          <h3>{descriptors.descriptors.environmentalConditions.full}</h3>
          <br />
          {Object.keys(
            descriptors.descriptors.environmentalConditions.values
          ).map(val => {
            return (
              <div>
                <label>{val}</label>
                <select name={val} onChange={e => this.change(e)}>
                  <option value="" />
                  {descriptors.descriptors.environmentalConditions.values[
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
