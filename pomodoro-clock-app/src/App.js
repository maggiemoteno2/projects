import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SessionLength from "./components/SessionLength";
import BreakLegnth  from "./components/BreakLegnth";

export default class App extends Component {
  constructor(props){
    super(props)
    this.state={
      time: 25,
      longBreakTime: 10,
      shortBreakTime: '05',
      seconds: '00',
    }
  }
  tick=()=> {

    var min = Math.floor(this.secondsRemaining / 60);
    var sec = this.secondsRemaining - (min * 60);

    this.setState({
      time: min,
      seconds: sec,
    })

    if (sec < 10) {
      this.setState({
        seconds: "0" + this.state.seconds,
      })

    }

    if (min < 10) {
      this.setState({
        time: "0" + min,
      })

    }

    if (min === 0 & sec === 0) {
      clearInterval(this.intervalHandle);
    }


    this.secondsRemaining--
  }
  startCountDown=()=> {
    this.intervalHandle = setInterval(this.tick, 1000);
    let time = this.state.time;
    this.secondsRemaining = time * 60;
  }

  stopCountDown=()=> {
    clearInterval(this.intervalHandle);
  }

  render() {
    return (
    
        <div class="panel panel-default">
        <div class="panel-body text-center">
        <div class="timer-time timer-container">
        <div class="container"></div>
        <div class="page-header">
          <h1 class="text-center">Pomodoro Timer</h1>
          <div>
            <SessionLength />
            <BreakLegnth startCountDown={()=>this.startCountDown}  />
            </div>
        </div>
      </div>
      </div>
      </div>
    );
  }
}
