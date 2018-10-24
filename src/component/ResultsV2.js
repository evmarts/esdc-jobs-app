import React from "react";
import NocResult from "./NocResult";

export default class ResultsV2 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  results = [
    {
      noc: 1414,
      sub_nocs: [
        { sub_noc: 1414.1 },
        { sub_noc: 1414.2 },
        { sub_noc: 1414.3 },
        { sub_noc: 1414.4 }
      ]
    },
    {
      noc: 505,
      sub_nocs: [
        { sub_noc: 505.1 },
        { sub_noc: 505.5 },
        { sub_noc: 505.9 },
        { sub_noc: 505.11 }
      ]
    },
    {
      noc: 604,
      sub_nocs: [
        { sub_noc: 604.1 },
        { sub_noc: 604.5 },
        { sub_noc: 604.9 },
        { sub_noc: 604.11 }
      ]
    }
  ];

  render() {
    return (
      <div>
        {this.results.map(noc => {
          return <NocResult noc={noc} />;
        })}
      </div>
    );
  }
}
