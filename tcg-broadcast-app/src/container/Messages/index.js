import React, { Component } from "react";
import { connect } from "react-redux";
import { showMessages, messageAdded } from "./../../redux/messages/thunk";

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
    this.props.messageAdded({newMessage: this.state.newMessage});
    this.setState({ newMessage: "" });
  };

  componentDidMount() {
      this.props.showMessages();
}
render() {
    return (
      <div>
        <textarea value={this.state.newMessage} type="text" onChange={this.handleChange} />
        <button className="button" onClick={this.addMessages}>
          Post
        </button>
        {this.props.messages.map(message => (
          <div key={message["message"]}>
            <h3>
              {message["uuid"]},Name:{message["name"]},message:
              {message["message"]}, {message["date"]}
            </h3>
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  messages: state.messages.listOfMessages
});

const mapDispatchToProps = dispatch => ({
  messageAdded: (message,name) => {
    dispatch(messageAdded(message,name));
  },
  showMessages: () => {
    dispatch(showMessages());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Messages);
