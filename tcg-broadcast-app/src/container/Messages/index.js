import React, { Component } from "react";
import { connect } from "react-redux";
import "font-awesome/css/font-awesome.min.css";
import { NavLink } from "react-router-dom";
import moment from "moment";
import { saveMessage , sendMessage} from "../WebSocket"


class Messages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newMessage: ""
    };
  }
  handleChange = event => {
    this.setState({
      newMessage: event.target.value
    });
  };
  addMessages = () => {
    this.props.saveMessage({
      message: this.state.newMessage,
      name: this.props.name
    });
    this.props.sendMessage({message: this.state.newMessage,
      name: this.props.name});
    this.setState({ newMessage: "" });
  };

  componentWillMount(){
    this.props.saveMessage();
  }

  render() {
    const messages = this.props.messages
    .map(message => ({...message,date:new Date(message.date)}))
    .sort((currentTime,previousTime) =>{
      return previousTime.date.getTime() - currentTime.date.getTime()
    })
    return (
      <div className="userName">
        <header className="header">
          <h1>
          <NavLink className="log-out" to="/">
            <span class="glyphicon glyphicon-arrow-left"></span>
          </NavLink>
          <div className="user-icon">
            <i class="fa fa-user-circle"></i>
          </div>
          <div className="name-div">{this.props.name}</div>
          </h1>
        </header>
        <div className="wrapper">
          <div className="textArea">
          <div class="row">
            <textarea
              placeholder="'Enter Your Post'"
              value={this.state.newMessage}
              type="text"
              onChange={this.handleChange}
              maxLength="150"
              required
              />
            <br />
            </div>
            <button className="button" onClick={() => this.addMessages()}>
              Post
            </button>
          </div>
          <div className="post2text">
              <h1 className="h1">Recent Posts</h1>
            <div className="message">
              {messages.map(message => (
                <div className="messages" key={message["uuid"]}>
                  <div className="post-info">
                    <div className="message-icon">  
                      <i class="fa fa-user-circle"></i>
                    </div>
                    <div id="name">
                      <div className="name-two">{message["name"]}</div>
                      {moment(message.date)
                        .format("MMM Do YYYY")}
                    </div>
                  </div>
                  <h3 id="message">" {message["message"]} "</h3>
                </div>
              ))}
            </div>
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
  sendMessage: (text) => {
    dispatch(sendMessage(text));
  },
  saveMessage: (messages) => {
    dispatch(saveMessage(messages));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Messages);
