import React, { Component } from "react";
import { connect } from "react-redux";
import { addnames } from "../../redux/info/actions";
import {NavLink} from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css'; 

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",

    };
  }
  nameAdd = name => {
    this.props.addnames(name);
    this.setState({
      ...this.state,
      name: "",
    });
  };

  handleChange = event => {
    this.setState({
      name: event.target.value
    });
  };

  render() {
    // console.log(" userName", this.props.userName);
    return (
      <div className="login-box">
        <h1>TCG BROADCAST</h1>
        <i class="fa fa-user"></i>
        <div>
          <div className="text-box">
            name: {""}
            <input
              type="text"
              value={this.name}
              name="name"
              onChange={this.handleChange}
            />



                </div>
          </div>
          <div className="btn" >
            <NavLink className="log-in" to={`Messages`}> 
              <button disabled={this.state.name === ""}
                onClick={() => this.nameAdd(this.state.name)}
                >
                Log in
              </button>
              </NavLink>
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
