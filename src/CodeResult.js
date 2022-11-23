import React from "react";
import PropTypes from "prop-types";

import "./CodeResult.css";

export default class CodeResult extends React.Component {
  static propTypes = {
    pythonCode: PropTypes.string,
  };

  render() {
    return (
      <div className="component-code-result">
        <div>{this.props.pythonCode}</div>
      </div>
    );
  }
}