import React, { Component } from "react";
import { connect } from "react-redux";
import { showMessages, messageAdded } from "./../../redux/messages/thunk";
import "font-awesome/css/font-awesome.min.css";
import { NavLink } from "react-router-dom";
import moment from "moment";

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
    console.log("messages", this.props.name);
    this.props.messageAdded({
      message: this.state.newMessage,
      name: this.props.name
    });
    this.setState({ newMessage: "" });
    this.props.showMessages();
  };

  componentDidMount() {
    this.timer = setInterval(() => {
      console.log("polling");
      this.props.showMessages();
    }, 5000);
  }
  render() {
    console.log("i'm here", this.state.newMessage);
    return (
      <div className="userName">
        <header className="header">
          <NavLink className="log-out" to="/">
            <span class="glyphicon glyphicon-arrow-left"></span>
          </NavLink>
          <div className="user-icon">
            <i class="fa fa-user-circle"></i>
          </div>
          <div className="name-div">{this.props.name}</div>
        </header>
        <div className="wrapper">
          <div className="textArea">
            <textarea
              placeholder="'Enter Your Post'"
              value={this.state.newMessage}
              type="text"
              onChange={this.handleChange}
              maxLength="150"
              required
            />
            <br />
            <button className="button" onClick={this.addMessages}>
              Post
            </button>
          </div>
          <div className="post2text">
            <div className="message">
              {this.props.messages.map(message => (
                <div className="messages" key={message["uuid"]}>
                  <div className="post-info">
                    <div className="message-icon">
                      <i class="fa fa-user-circle"></i>
                    </div>
                    <div id="name">
                      <div className="name-two">{message["name"]}</div>
                      {moment(message.date)
                        .startOf("hour")
                        .fromNow()}
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
  messageAdded: (message, name) => {
    dispatch(messageAdded({ message, name }));
  },
  showMessages: () => {
    dispatch(showMessages());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Messages);
