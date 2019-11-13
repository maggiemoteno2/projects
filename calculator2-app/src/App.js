import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import Keypads from "./Components/Keypads";
import Output from "./Components/Output";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: "",
      userInput:"",
      presentNumber:"",
      precedingNumber:"",
      operator:""
    };
  }
  clear = () => {
    this.setState({
      results: "",
      userInput:""
    });
  };
  KeypadPressed = value => {
    if(value=== "="){
      return this.evaluate()
    }
    this.setState({
      userInput: this.state.userInput + value,
      results:"",
      
    });
  };

  add=()=>{
    this.state.precedingNumber=this.state.userInput;
    this.setState({
      userInput:""})
      this.state.operator="plus"

  };
  evaluate=()=>{
    this.state.presentNumber=this.state.userInput
 ;
if(this.state.operator==="plus"){
  this.setState({
    userInput:parseInt(this.state.precedingNumber)+
    parseInt(this.state.presentNumber),
    
  })
}  }

  calculate = () => {
    try {
      var total = eval(this.state.userInput);
      this.setState({
        results: total,
        userInput:total + ""
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
        <Output userInput={this.state.userInput} results={this.state.results}/>
        <div className="Keypads">
        <Keypads clear={this.clear} keyPressed={this.KeypadPressed} evaluate={this.evaluate} add={this.add}/>
        </div>
        </div>
      </div>
    );
  }
}
