import React from "react";
import descriptors from "../constants/descriptors";

export default class AptitudesForm extends React.Component {
  state = {
    descriptors: descriptors
  };
  componentDidMount() {
    console.log(this.state)
    console.log(this.props)
  }

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
      <div>
        <form>
          <label>{this.state.descriptors.descriptors.aptitudes.full}</label>
          {Object.keys(this.state.descriptors.descriptors.aptitudes.values).map(
            val => {
              return (
                <div>
                  <label>{val}</label>
                  <select name={val} onChange={e => this.change(e)}>
                    <option value="" />
                    {this.state.descriptors.descriptors.aptitudes.values[
                      val
                    ].options.map(o => {
                      return <option value={val + o}>{o}</option>;
                    })}
                  </select>
                </div>
              );
            }
          )}
          <button onClick={e => this.onSubmit(e)}>Submit</button>
        </form>
      </div>
    );
  }
}
