import React, { Component } from 'react'

export default class Output extends Component {
    render() {
        const {userInput,results}=this.props
        return (
            <div>
                <input type="text" className="Output" value={results !=""? results:userInput}/>
            </div>
        )
    }
}
