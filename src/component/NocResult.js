import React from "react";
import SubnocResult from "./SubnocResult";

export default class NocResult extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        {this.props.noc.noc}
        <ul>
          {this.props.noc.sub_nocs.map(sub => {
            return <SubnocResult subNoc={sub} />;
          })}
        </ul>
      </div>
    );
  }
}
