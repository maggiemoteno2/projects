import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Buttons from "./Buttons";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentWorkingValues: [],
      currentTotal: 0,
      screenValue: "",
      name: "",
      surname: ""
    };

    this.addToScreenValue = this.addToScreenValue.bind(this);
  }

  appendOperator(e) {
    const operator = e.target.name;
    var newState = this.state;

    newState.currentWorkingValues.push(operator);

    this.setState({ ...newState, screenValue: "" });
  }

  equals() {
    // debugger;
    const workingValues = this.state.currentWorkingValues;

    var calcResult = Number(workingValues[0]); 

    //[1, "+", 2, "+" , 4]
    for (var i = 1; i < workingValues.length; i++) {
      switch (workingValues[i]) {
        case "+":
          if (workingValues[i + 2] === "*") {
            calcResult =  Number(workingValues[i + 1]) * Number(workingValues[i + 3]);
            calcResult = calcResult + Number(workingValues[i - 1]);
          } else {
            calcResult = calcResult + Number(workingValues[i + 1]);
          }
          break;
        case "-":
          calcResult = calcResult - Number(workingValues[i + 1]);
          break;
        case "/":
          calcResult = calcResult / Number(workingValues[i + 1]);
          break;

        default:
          break;
      }
    }

    //const calcResult = eval(workingValuesToCalc);

    this.setState({
      screenValue: calcResult,
      currentCalc: workingValues.join("")
    });
  }

  addToScreenValue(event) {
    event.preventDefault();

    var newState = this.state;
    var valueToAdd = event.target.name;

    newState.currentWorkingValues.push(valueToAdd);

    newState.screenValue += valueToAdd;
    this.setState(newState);
  }

  clear() {
    var currentScreenValue = this.state.screenValue;

    var workingValuesToCalc = this.state.currentWorkingValues;

    var newWorkingValuesToCalc = workingValuesToCalc.slice(
      0,
      workingValuesToCalc.length - currentScreenValue.length
    );

    this.setState({
      screenValue: "",
      currentWorkingValues: newWorkingValuesToCalc
    });
  }

  render() {
    var evalOfCurrentWorkingValues = "";
    try {
      if (
        this.state.screenValue.length < this.state.currentWorkingValues.length
      ) {
        evalOfCurrentWorkingValues = eval(
          this.state.currentWorkingValues.join("")
        );
      }
    } catch (e) {}

    var currentCalc = this.state.currentWorkingValues.join("");

    if (evalOfCurrentWorkingValues)
      currentCalc = currentCalc + " = " + evalOfCurrentWorkingValues;

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">
            Welcome to our Calculator. Happy Calculating
          </h1>
        </header>
        <Buttons
          clear={() => this.clear()}
          currentCalc={currentCalc}
          addToScreenValue={this.addToScreenValue}
          screenValue={this.state.screenValue}
          appendOperator={e => this.appendOperator(e)}
          equals={() => this.equals()}
        />
      </div>
    );
  }
}

export default App;
