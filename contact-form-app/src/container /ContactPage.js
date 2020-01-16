import React, { Component } from 'react'

export default class ContactPage extends Component {
    constructor(props){
        super(props)
        this.state={
            name:"",
            email:"",
            message:"",
            
        }
    }

    submitMessage=()=>{
       console.log(this.state)
    }
    render() {
        return (
            <div>
                full Name:<input type='text' onChange={(e)=> this.setState({
                    name:e.target.value,
                })}/>
                email:<input onChange={(e)=> this.setState({
                    email:e.target.value,
                })} />
                Message<textarea onChange={(e)=> this.setState({
                    message:e.target.value,
                })}/>
                <button onClick={this.submitMessage}>Submit</button>
            </div>
        
        )
    }
}
