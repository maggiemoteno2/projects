import './App.css';
import React, { Component } from 'react'
import Keypads from "./components/Keypad";
import Output from "./components/Output";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: "",
      userInput:""
    };
  }
  clear = () => {
    this.setState({
      results: "",
      userInput:""
    });
  };
  KeypadPressed = value => {
    if (value === "=") {
      return this.calculate();
    }
  
    this.setState({
      userInput: this.state.userInput + value,
      results:"",
    });
  };

  calculate = () => {
    try {
      var total = eval(this.state.userInput);
      this.setState({
        results: total,
        userInput:""
      });
    } catch (error) {
      this.setState({
        results: "error"
      })
    }
  };
  render() {
    return (
      <div>
        <div className="container">
        <Output userInput={this.state.userInput} results={this.state.results} />
        <div className="Keypad">
        <Keypads clear={this.clear} keyPressed={this.KeypadPressed} />
        </div>
        </div>
      </div>
    )
  }
}

