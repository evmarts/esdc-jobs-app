import React from "react";
import descriptors from "../../../constants/descriptors";

export default class FormInterests extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      meta: { isRange: false, isAnyInterestCombination: false }
    };
    if (this.props.interests) {
      for (let entry of Object.entries(this.props.interests)) {
        if (entry[0] !== "meta") {
          Object.assign(this.state, { [entry[0]]: entry[1] });
        }
      }
    }
  }

  onSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
  };

  change = async e => {
    const value = e.target.value;
    if (this.state.meta.isRange) {
      if (value.indexOf("min") >= 0) {
        await this.setState({
          [value.substring(0, 1) + "min"]: value.substring(0, 2)
        });
      }
      if (value.indexOf("max") >= 0) {
        await this.setState({
          [value.substring(0, 1) + "max"]: value.substring(0, 2)
        });
      }
    } else {
      await this.setState({
        [value.substring(0, 1)]: value.substring(1, 2)
      });
    }
    this.props.onSubmit(this.state);
  };

  handleCheck = () => {
    this.setState({
      meta: { isRange: !this.state.meta.isRange }
    });
    Object.keys(this.state).forEach(key => {
      if (key !== "meta") delete this.state[key];
    });
  };

  handleAnyCombination = () => {
    console.log(this.state);
    this.setState({
      meta: {
        isAnyInterestCombination: !this.state.meta.isAnyInterestCombination
      }
    });
    Object.keys(this.state).forEach(key => {
      if (key !== "meta") delete this.state[key];
    });
  };

  render() {
    console.log(this.state);
    if (this.state.meta.isRange) {
      return (
        <div>
          {Object.keys(descriptors.descriptors.interests.values).map(
            (val, i) => {
              return (
                <div>
                  <div>
                    <p>
                      {descriptors.descriptors.interests.values[val].full +
                        " (" +
                        val +
                        ")"}{" "}
                    </p>
                    <select name={val + "min"} onChange={e => this.change(e)}>
                      <option value="" />
                      {descriptors.descriptors.interests.values[
                        val
                      ].options.map(o => {
                        return <option value={val + o + "min"}>{o}</option>;
                      })}
                    </select>
                    -
                    <select name={val + "max"} onChange={e => this.change(e)}>
                      <option value="" />
                      {descriptors.descriptors.interests.values[
                        val
                      ].options.map(o => {
                        return <option value={val + o + "max"}>{o}</option>;
                      })}
                    </select>
                  </div>
                </div>
              );
            }
          )}
          <br />
          <button onClick={this.handleCheck}>toggle range</button>
          <button onClick={this.handleAnyCombination}>
            toggle any combination
          </button>
          {this.state.meta.isAnyInterestCombination && (
            <div>your search will contain any combination of the above</div>
          )}
        </div>
      );
    } else {
      return (
        <div>
          {Object.keys(descriptors.descriptors.interests.values).map(
            (val, i) => {
              let selected = this.state[val.toString()] || "";
              return (
                <div key={i}>
                  <p>
                    {descriptors.descriptors.interests.values[val].full +
                      " (" +
                      val +
                      ")"}{" "}
                  </p>
                  <select name={val} onChange={e => this.change(e)}>
                    <option>{selected.substring(1, 2)}</option>
                    {descriptors.descriptors.interests.values[val].options.map(
                      o => {
                        return <option value={val + o}>{o}</option>;
                      }
                    )}
                  </select>
                </div>
              );
            }
          )}
          <br />
          <button onClick={this.handleCheck}>toggle range</button>
          <button onClick={this.handleAnyCombination}>
            toggle any combination
          </button>
          {this.state.meta.isAnyInterestCombination && (
            <div>your search will contain any combination of the above</div>
          )}
        </div>
      );
    }
  }
}
