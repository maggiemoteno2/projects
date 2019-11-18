import React from 'react'
import './App.css';
import Info from './containers/Info'
import Messages from './containers/Messages'
import { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";

export default class App extends Component {
  render() {
    return (
      <div>
        <Info/>
        <Messages/>
      </div>
    )
  }
}

