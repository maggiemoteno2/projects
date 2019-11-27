import './App.css';
import React, { Component } from 'react'
import Infomation from './container/Infomation/index'
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css";
import Messages from './container/Messages';

// import Messages from './container/Messages'


class App extends Component {

  render() {
    return (
      <Router>
        <Switch>
      <div>
        <Route exact path="/" component={Infomation}/>
        <Route path="/Messages" component={Messages}/>
      </div>
      </Switch>
      </Router>
    )
  }
}


export default App;
