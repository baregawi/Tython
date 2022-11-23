import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import "./CodeInput.css";

export default class CodeInput extends PureComponent {
    static propTypes = {
        textChange: PropTypes.func
    };

    handleChange = event => {
        this.props.textChange(event);
    };

    render() {
        return (
        <div className="component-code-input">
            <div>
            <textarea
            onChange={this.handleChange}
            rows={30} cols={120}/>
            </div>
        </div>
        );
    }
}