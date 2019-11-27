import React, { Component } from "react";
import { connect } from "react-redux";
import { showMessages, messageAdded } from "./../../redux/messages/thunk";
import 'font-awesome/css/font-awesome.min.css'; 
import {NavLink} from 'react-router-dom'
import moment from 'moment'

class Messages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newMessage: ""    
    
    };
  }
handleChange=(event)=>{
    this.setState({
        newMessage:event.target.value
    })
}
  addMessages = () => {
    console.log("messages",this.props.name)
    this.props.messageAdded({message: this.state.newMessage,
      name:this.props.name
    });
    this.setState({ newMessage: "" });
    this.props.showMessages();
  };
  
  componentDidMount() {
    this.props.showMessages();
  }
  render() {
    console.log("i'm here", this.state.newMessage)
    return (
      
      <div className="userName">
        <header>
        <h3><i class="fa fa-user-circle">{this.props.name}</i></h3>
        </header>
        <div className="textArea">
        <textarea value={this.state.newMessage} type="text" onChange={this.handleChange} />
        <button className="button" onClick={this.addMessages}>
          Post
        </button>
        </div>
          <NavLink className="log-out" to='/'><button>Log out</button></NavLink>
          < div className="post2text">
        <div className="message">
        {this.props.messages.map(message => (
          <div className="messages"key={message["uuid"]}>
            <h3 id="name"><i class="fa fa-user-circle"></i>
        {message["name"]} </h3><h3 id="message">
        {message["message"]}</h3> 
        <p>{moment(message.date).startOf('hour').fromNow()}</p>
           
          </div>
        ))}
        </div>
        </div>
      </div>
      
    );
  }
}

const mapStateToProps = state => ({
  messages: state.messages.listOfMessages,
  name: state.info.userName

});

const mapDispatchToProps = dispatch => ({
  messageAdded: (message,name) => {
    dispatch(messageAdded({message,name}));
  },
  showMessages: () => {
    dispatch(showMessages());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Messages);

