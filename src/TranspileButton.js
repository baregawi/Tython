import React from "react";
import "./TranspileButton.css";

export default class TranspileButton extends React.Component {
  handleClick = () => {
    this.props.clickHandler();
  };

  render() {
    return (
      <div className="component-transpile-button">
        <button onClick={this.handleClick}>Transpile to python!</button>
      </div>
    );
  }
}