import React, { Component } from "react";
import { connect } from "react-redux";
import { getAllUsers, addUser } from "../../redux/users/thunks";
import { removeUser } from "./../../redux/actions";
import moment from "moment";

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = { newUser: "" };
  }

  componentDidMount() {
    this.props.getAllUsers();
  }

  setValue = e => {
    this.setState({ newUser: e.target.value });
  };

  addUser = () => {
    this.props.addUser({ first_name: this.state.newUser });
    this.setState({ newUser: "" });
  };

  render() {
    console.log("this.props :", this.props);
    const { users } = this.props;
    return (
      <div className="userz">
        <h3>Users and Added time</h3>
        <div>
          {users.map(user => (
            <div className="wrapper">
             
              <h3> {user["first_name"]}<ul>
              
              <li><i id="usersTrash"
                className="fa fa-trash"
                onClick={() => this.props.removeUser(user["first_name"])}
                aria-hidden="true"
                style={{ cursor: "pointer"}}
              ></i></li>
              </ul>
               </h3>
              <p className="date">
                {moment(user["first_name"].date).format("Do MMMM  YYYY, h:mm:ss a")}
              </p>
            </div>
          ))}
          <input
            type="text"
            className="input"
            onChange={this.setValue}
            value={this.state.newUser}
          />
          <button
            className="button"
            disabled={this.state.newUser === ""}
            onClick={this.addUser}
          >
            Add User
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users.all
});

const mapDispatchToProps = dispatch => ({
  getAllUsers: () => {
    dispatch(getAllUsers());
  },
  addUser: user => {
    dispatch(addUser(user));
  },
  removeUser: user => {
    dispatch(removeUser(user));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Users);
