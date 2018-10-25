import React from "react";
import descriptors from "../constants/descriptors";

export default class AptitudesForm extends React.Component {
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
    if (this.state.meta.isRange) {
      if (value.indexOf("min") >= 0) {
        this.setState({
          [value.substring(0, 1) + "min"]: value.substring(0, 2)
        });
      }
      if (value.indexOf("max") >= 0) {
        this.setState({
          [value.substring(0, 1) + "max"]: value.substring(0, 2)
        });
      }
    } else {
      this.setState({
        [value.substring(0, 1)]: value
      });
    }
  };

  handleCheck = () => {
    this.setState({
      meta: {isRange: !this.state.meta.isRange}
    });
    Object.keys(this.state).forEach(key => {
      if (key !== "meta") delete this.state[key];
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
          <label>{descriptors.descriptors.aptitudes.full}</label>
          <p style={{ display: "inline-block" }}>Filter by range</p>
          <input type="checkbox" onChange={this.handleCheck} />
          {Object.keys(descriptors.descriptors.aptitudes.values).map(val => {
            if (this.state.meta.isRange) {
              return (
                <div>
                  <label>{val}</label>
                  <select name={val + "min"} onChange={e => this.change(e)}>
                    <option value="" />
                    {descriptors.descriptors.aptitudes.values[val].options.map(
                      o => {
                        return <option value={val + o + "min"}>{o}</option>;
                      }
                    )}
                  </select>
                  -
                  <select name={val + "max"} onChange={e => this.change(e)}>
                    <option value="" />
                    {descriptors.descriptors.aptitudes.values[val].options.map(
                      o => {
                        return <option value={val + o + "max"}>{o}</option>;
                      }
                    )}
                  </select>
                </div>
              );
            } else {
              return (
                <div>
                  <label>{val}</label>
                  <select name={val} onChange={e => this.change(e)}>
                    <option value="" />
                    {descriptors.descriptors.aptitudes.values[val].options.map(
                      o => {
                        return <option value={val + o}>{o}</option>;
                      }
                    )}
                  </select>
                </div>
              );
            }
          })}
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
