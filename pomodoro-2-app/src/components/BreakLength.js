import React, { Component } from 'react'

export default class BreakLength extends Component {
    
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class="col-md-4">
        <p class="text center lead">Break</p>
        <button type="button" class="btn btn-primary btn-lg" onClick={this.props.shortBreak}>5 minutes</button>
      </div>
    );
  }

}