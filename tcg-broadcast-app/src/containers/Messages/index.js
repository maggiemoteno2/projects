import React from 'react'
import  {Component } from 'react'
import Axios from 'axios'

export default class index extends Component {
    constructor(props){
        super(props)
        this.state={
            messages:[]
        }
    }

    componentDidMount(){
        Axios.get()
        .then(res => {
            const messages=res.data;
            this.setState({
                messages
            })
        })
    }

    render() {
        return (
            <div>
                { this.state.messages.map(message => <li>{message.messages}</li>)}
            </div>
        )
    }
}
