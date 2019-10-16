import React, { Component } from "react";
import { connect } from "react-redux";
import { removeComputer } from "./../../redux/actions";
import { addComputer } from "./../../redux/actions";
import moment from "moment";


class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };
  }

  computerAdd = name => {
    const { computerNames } = this.props;
    for (var i in computerNames) {
      if (computerNames[i].name.toUpperCase().trim() === name.toUpperCase().trim()) {
        return alert("Computer already added");
      }
    }

    this.props.addComputer(name);
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
    const { name } = this.state;
    return (
      <div className="computer">
        <h1>Add computers</h1>
        <input
          type="text"
          value={name}
          name="name"
          onChange={this.handleChange}
        />
        {this.props.computerNames.map(computerNames => (
          <div key={computerNames.name}>
            
            <h3> {computerNames.name}
            <i id="computerIcon"
              className="fa fa-trash"
              onClick={() => this.props.removeComputer(computerNames.id)}
              aria-hidden="true"
              style={{ cursor: "pointer", marginRight: "30px" }}
            ></i>
             </h3>
            <p className="time">
              {moment(computerNames.date).format("Do MMMM  YYYY, h:mm:ss a")}
            </p>
          </div>
        ))}

        <button disabled={this.state.name === ""} onClick={() => this.computerAdd(this.state.name)}>
          Add Computer
        </button>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  computerNames: state.computer.computerNames
});

const mapDispatchToProps = dispatch => {
  return {
    addComputer: name => {
      dispatch({
        type: "ADD_COMPUTER",
        payload: { name }
      });
    },
    removeComputer: id => {
      dispatch(removeComputer( id));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(index);
