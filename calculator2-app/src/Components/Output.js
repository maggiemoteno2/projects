import React, { Component } from 'react'

export default class Output extends Component {
    render() {
        return (
            <div>
                <input type="text" className="Output" value={this.props.results}/>
            </div>
        )
    }
}
