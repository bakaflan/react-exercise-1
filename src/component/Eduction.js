import React from "react";
import "../styles/eduction.css";
import PropTypes from 'prop-types';

class Eduction extends React.Component {
  render() {
    const {info} = this.props;
    return (
      <div className="eduction">
        <div className="eductionYear">
          <h2>{info.year}</h2>
        </div>
        <div className="eductionDetail">
          <h3>{info.summary}</h3>
          <p>{info.para}</p>
        </div>
      </div>
    );
  }
}

export default Eduction;

Eduction.propTypes = {
  eductionInfo: PropTypes.object,
};