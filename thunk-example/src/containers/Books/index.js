import React, { Component } from "react";
import { connect } from "react-redux";
import { addBook } from "./../../redux/actions";
import { editTitle, saveEditedValue } from "./../../redux/actions";
import { removeBook } from "./../../redux/actions";
import moment from "moment";

class Books extends Component {
  constructor(prop) {
    super(prop);
    this.state = {
      idEdited: "",
      titleEdited: "",
      name: "",
      author: ""
    };
  }
  bookAdd = (name, author) => {
    const { availableBooks } = this.props;
    for (var i in availableBooks) {
      if (availableBooks[i].name.toUpperCase().trim() === name.toUpperCase().trim()) {
        return alert("book already added");
      } else if (availableBooks[i].author === name) {
        return this.state.idEdited;
      }
  console.log('this.state :', this.state);
    }

    this.props.addBook(name, author);
    this.setState({
      ...this.state,
      name: "",
      author: ""
    });
  };
  editBook=(name,id)=>{
    this.props.editTitle(name,id)
  }

  setEditedAuthor = (name, id) => {

    this.setState({
      titleEdited: name,
      idEdited: id
    });

  };
  render() {
    const { titleEdited, author, name, idEdited } = this.state;
    return (
      <div>
        <h1>Books</h1>
        {this.props.availableBooks.map(book => (
          <div key={book.name}>
            
            <h3 className="h3"> Name: {book.name} 
            <i id="icon"
              className="fa fa-trash"
              onClick={() =>
                this.props.removeBook(book.name, book.author, book.id)
              } 
              aria-hidden="true"
              style={{ cursor: "pointer"}}
            ></i>
            <i id="icon"
              class="fa fa-edit"
              onClick={() => this.setEditedAuthor(book.name, book.id)}
              aria-hidden="true"
              style={{ cursor: "pointer" }}
            ></i>
             </h3>
            <h3 className="h3"> Aurthor: {book.author} </h3>
            <p>{moment(book.date).format("Do MMMM  YYYY, h:mm:ss a")}</p>
          </div>
        ))}
        <input
          type="text"
          placeholder="Title"
          value={name}
          name="name"
          onChange={e => this.setState({ name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Author"
          value={author}
          name="author"
          onChange={e => this.setState({ author: e.target.value })}
        />
        <button disabled={this.state.author === ""} onClick={() => this.bookAdd(name, author)}>Add</button>
        <div>
          <h3>Edit Book</h3>
          <input
            type="text"
            placeholder="Title"
            value={titleEdited}
            name="titleEdited"
            onChange={e => this.setState({ titleEdited: e.target.value })}
          />
          <button disabled={this.state.idEdited === ""}
            onClick={() => this.editBook(titleEdited, idEdited,)}
          >
            save
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  availableBooks: state.books.availableBooks,
  editedValue: state.books.editedValue
});

const mapDispatchToProps = dispatch => {
  return {
    addBook: (name, author) => {
      dispatch(addBook(name, author));
    },
    removeBook: (name, author) => {
      dispatch(removeBook(name, author));
    },
    editTitle:(name,id)=>{
      dispatch(editTitle(name,id))
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Books);
