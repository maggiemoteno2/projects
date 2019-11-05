import React, { Component } from 'react'

export default class StopButton extends Component {
    render() {
        return (
          <div style={{ marginRight: 5, marginLeft: 30 }}>
            <button className="btn btn-danger glyphicon glyphicon-step-backward" aria-hidden="true" onClick={this.props.stopCountDown}>Stop</button>
          </div>
        );
      }
    }
    