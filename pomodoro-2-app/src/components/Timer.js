import React, { Component } from 'react'

export default class Timer extends Component {
    constructor(props) {
        super(props);
      }
    
      render() {
    
        return (
          <div>
            <h1 style={{ fontSize: 100 }}>{this.props.time}:{this.props.seconds}</h1>
    
          </div>
        );
      }
    }
