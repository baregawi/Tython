import './App.css'

import TranspileButton from "./TranspileButton";
import React, { PureComponent } from "react";
import { addPrefetchExcludes } from 'react-static'
import Header from "./Header";
import CodeInput from "./CodeInput";
import CodeResult from "./CodeResult";
import transpileCode from "./transpileCode";


// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(['dynamic'])

export default class App extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            tythonCode: "Write code here",
            transpiledCode: null
        };
    }

    handleTextChange = event => {
      this.setState({
        tythonCode: event.target.value
      });
    };

    handleTranspile = event => {
      this.setState({
        transpiledCode: transpileCode(this.state.tythonCode)
      });
    };

    render() {
        return (
            <div>
                <Header />
                <CodeInput textChange={this.handleTextChange} />
                <TranspileButton clickHandler={this.handleTranspile} />
                <CodeResult pythonCode={this.state.transpiledCode || "Python code output will be here."} />
            </div>
        );
    }
}