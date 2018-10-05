import React from "react";

export default class RangeSelect extends React.Component {
  state = {};
  change = e => {
    console.log({e})
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
  };

  render() {
    const apKeys = Object.keys(this.props.traitObj.values);
    return (
      <div>
        <h3>{this.props.traitObj.full}</h3>
        {apKeys.map(apK => (
          <div>
            <label>{apK}</label>
            <select
              name={this.props.trait + { apK } + "_min"}
              onChange={e => this.change(e)}
            >
              <option value="" />
              {this.props.traitObj.values[apK].options.map(op => (
                <option value={apK + op + "_min"}>{op}</option>
              ))}
            </select>
            <label>–</label>
            <select
              name={this.props.trait + { apK } + "_max"}
              onChange={e => this.change(e)}
            >
              <option value="" />
              {this.props.traitObj.values[apK].options.map(op => (
                <option value={apK + op + "_max"}>{op}</option>
              ))}
            </select>
          </div>
        ))}
      </div>
    );
  }
}
