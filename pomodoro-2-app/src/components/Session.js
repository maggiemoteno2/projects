import React, { Component } from 'react'

export default class Session extends Component {
    constructor(props) {
        super(props);
      }
      render() {
        return (
          <div class="col-md-4">
            <p class="text center lead">Session</p>
            <button type="button" class="btn btn-primary btn-lg" onClick={this.props.session}>25 minutes</button>
          </div>
        );
      }
    }