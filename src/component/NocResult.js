import React from "react";
import SubnocResult from "./SubnocResult";

export default class NocResult extends React.Component {
  constructor(props) {
    super(props);

    this.state = { subsVisible: false };
  }

  handleClick = () => {
    this.setState({ subsVisible: !this.state.subsVisible });
  };

  SubList = (isVisible, subNocs) => {
    if (isVisible) {
      return (
        <ul>
          {subNocs.map(sub => {
            return <SubnocResult subNoc={sub} onClick={this.props.onClick}/>;
          })}
        </ul>
      );
    } else return <div />;
  };

  render() {
    return (
      <div>
        <div
          onClick={this.handleClick}
          style={
            this.state.bold
              ? { textDecoration: "underline" }
              : { fontWeight: "" }
          }
          onMouseOver={() => {
            this.setState({ bold: true });
          }}
          onMouseLeave={() => {
            this.setState({ bold: false });
          }}
        >
          {this.props.noc.noc + " " + this.props.noc.noc_title}
        </div>
        <div>
          {this.SubList(this.state.subsVisible, this.props.noc.sub_nocs)}
        </div>
      </div>
    );
  }
}
