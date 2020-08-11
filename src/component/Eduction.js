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
  Eduction.propTypes{
      info: propTypes.object.isRequired,
      info.summary: propTypes.string.isRequired,
      info.para: propTypes.string.isRequired,
      indo.year: propTypes.string.isRequired
  }
}

export default Eduction;
