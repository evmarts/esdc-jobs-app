import React from "react";
import RangeSelect from "./RangeSelect";
import { traits } from "../constants/traits";

export default class RangeForm extends React.Component {
  state = {
    first: "",
    second: "",
    third: ""
  };

  change = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({
      first: "",
      second: "",
      third: ""
    });
  };

  render() {
    return (
      <form>
        <RangeSelect
          trait={"aptitude"}
          traitObj={traits.aptitudes}
        />
      </form>
    );
  }
}
