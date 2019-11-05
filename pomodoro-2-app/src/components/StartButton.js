import React, { Component } from 'react'

export default class StartButton extends Component {
        constructor(props) {
          super(props);
        }
      
        render() {
          return (
            <div style={{ marginRight: 5 }}>
              <button className="btn btn-success" onClick={this.props.startCountDown}>Start</button>
            </div>
          );
        }
      }