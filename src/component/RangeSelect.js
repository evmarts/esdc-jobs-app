import React from "react";

export default class RangeSelect extends React.Component {
  state = {};
  change = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
  };

  render() {
      console.log('props', Object.keys(this.props.traitObj))
    return (
      <div>
        {/* {this.props.traitObj.map(trait => (
          <div>
            <select name="aptitude_G_min" onChange={e => this.change(e)}>
              <option value="" />
              <option value="G1_lb">1</option>
              <option value="G2_lb">2</option>
              <option value="G3_lb">3</option>
              <option value="G3_lb">4</option>
            </select>
            <label>–</label>
            <select name="aptitude_G_mX" onChange={e => this.change(e)}>
              <option value="" />
              <option value="G1_ub">1</option>
              <option value="G2_ub">2</option>
              <option value="G3_ub">3</option>
              <option value="G3_ub">4</option>
            </select>
          </div>
        ))} */}
      </div>
    );
  }
}
