import React, { Component } from "react";
import { connect } from "react-redux";
import { addnames } from "../../redux/info/actions";
import { NavLink } from "react-router-dom";
import "font-awesome/css/font-awesome.min.css";

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };
  }
  nameAdd = name => {
    this.props.addnames(name);
    this.setState({
      ...this.state,
      name: ""
    });
  };

  handleChange = event => {
    this.setState({
      name: event.target.value
    });
  };

  render() {
    return (
      <div >
        <header>
        <h1>TCG BROADCAST</h1>
      </header>
        <div className="login-box">
          <div className="text-box">
            <input
              type="text"
              className="placeholder"
              placeholder="Username"
              value={this.name}
              name="name"
              onChange={this.handleChange}
            />
          </div>
          <div className="btn">
          <NavLink className="log-in" to={`Messages`}>
            <a
              disabled={this.state.name === ""}
              onClick={() => this.nameAdd(this.state.name)}
            >
              Log in
            </a>
          </NavLink>
        </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  userName: state.info.userName
});

const mapDispatchToProps = dispatch => {
  return {
    addnames: name => {
      dispatch(addnames(name));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(index);
