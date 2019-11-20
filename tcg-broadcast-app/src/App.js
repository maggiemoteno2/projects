import './App.css';
import React, { Component } from 'react'
import Infomation from './container/Infomation/index'
import "bootstrap/dist/css/bootstrap.min.css";

// import Messages from './container/Messages'


class App extends Component {

  render() {
    return (
      <div>
        <Infomation/>
        {/* <Messages/> */}
      </div>
    )
  }
}


export default App;
