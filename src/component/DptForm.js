import React from "react";
import descriptors from "../constants/descriptors";

export default class DptForm extends React.Component {
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
        [value.substring(0, 1)]: value
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

  render() {
    return (
      <div style={this.props.styling}>
        <form>
          <h3>{descriptors.descriptors.dpt.full}</h3>
          <br />

          <p style={{ display: "inline-block" }}>Filter by range</p>
          <input type="checkbox" onChange={this.handleCheck} />
          {Object.keys(descriptors.descriptors.dpt.values).map(val => {
            if (this.state.meta.isRange) {
              return (
                <div>
                  <label>{val}</label>
                  <select name={val + "min"} onChange={e => this.change(e)}>
                    <option value="" />
                    {descriptors.descriptors.dpt.values[val].options.map(o => {
                      return <option value={val + o + "min"}>{o}</option>;
                    })}
                  </select>
                  -
                  <select name={val + "max"} onChange={e => this.change(e)}>
                    <option value="" />
                    {descriptors.descriptors.dpt.values[val].options.map(o => {
                      return <option value={val + o + "max"}>{o}</option>;
                    })}
                  </select>
                </div>
              );
            } else {
              return (
                <div>
                  <label>{val}</label>
                  <select name={val} onChange={e => this.change(e)}>
                    <option value="" />
                    {descriptors.descriptors.dpt.values[val].options.map(o => {
                      return <option value={val + o}>{o}</option>;
                    })}
                  </select>
                </div>
              );
            }
          })}
        </form>
      </div>
    );
  }
}
