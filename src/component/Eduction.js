import React from "react";
import "../styles/eduction.css";
import { info } from "node-sass";

class Eduction extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="eduction">
        <div className="eductionYear">
          <h2>{this.props.info.year}</h2>
        </div>
        <div className="eductionDetail">
          <h3>{this.props.info.summary}</h3>
          <p>{this.props.info.para}</p>
        </div>
      </div>
    );
  }
}

export default Eduction;
