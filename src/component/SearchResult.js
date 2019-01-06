import React from "react";

export default class SearchResult extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      result: this.props.result,
      index: this.props.index,
      bold: false
    };
  }

  handleClick = (result, index) => {
    this.props.onClick(result, index);
  };

  render() {
    return (
      <div
        style={
          this.state.bold ? { textDecoration: "underline" } : { fontWeight: "" }
        }
        onMouseOver={() => {
          this.setState({ bold: true });
        }}
        onMouseLeave={() => {
          this.setState({ bold: false });
        }}
        onClick={() => {
          this.handleClick(this.state.result, this.state.index);
        }}
      >
        <div>{this.props.result}</div>
      </div>
    );
  }
}
