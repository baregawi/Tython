import React, { PureComponent } from "react";
import "./Header.css";

export default class Header extends PureComponent {
  render() {
    return (
      <header className="component-header">
        <img
          src="https://i.imgur.com/LhSnqZg.jpg"
          width="32"
          height="32"
          alt=""
        />
        Please Code Here
        <img
          src="https://i.imgur.com/LhSnqZg.jpg"
          width="32"
          height="32"
          alt=""
        />
      </header>
    );
  }
}