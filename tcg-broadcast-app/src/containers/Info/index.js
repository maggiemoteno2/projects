import React, { Component } from "react";
import { connect } from "react-redux";
import { addName } from "../../redux/info/actions";

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };
  }

  addName = name => {
    const { names } = this.props;
    this.props.addName(name);
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
      <div>
        name:{" "}
        <input
          type="text"
          value={name}
          name="name"
          onChange={this.handleChange}
        />
        <div>
          {" "}
          <button
            disabled={this.state.name === ""}
            onClick={() => this.addName(this.state.name)}
            className="btn btn-primary btn-sm"
          >
            log in
          </button>
        </div>
        {this.props.names.map(peoplename => (
          <div key={peoplename.name}>
            <h3>peoplename.name</h3>
          </div>
        ))}
      </div>
    );
  }
}
const mapStateToProps = state => ({
  names: state.name.names
});
const mapDispatchToProps = dispatch => {
  return {
    addName: name => {
      dispatch(addName(name));
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Index);
