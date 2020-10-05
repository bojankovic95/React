import React, { Component } from "react";
import "../App.css";

class ToDo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userInput: "",
      list: [],
    };
  }

  changeUserInput(input) {
    this.setState({ userInput: input });
  }

  addToList(input) {
    let arr = this.state.list;
    if (input !== "") {
      arr.push(input);
      this.setState({ list: arr, userInput: "" });
    }
  }

  handleChange = (e) => {
    e.preventDefault();
    this.changeUserInput(e.target.value);
  };

  deleteTask = (e) => {
    e.target.parentElement.remove();
  };

  btnClick = (e) => {
    e.preventDefault();
    this.addToList(this.state.userInput);
  };

  render() {
    return (
      <div className="container">
        <h1>To Do List</h1>
        <form onSubmit={this.btnClick}>
          <ul className="ToDos">
            {this.state.list.map((val, index) => (
              <li className="ListItem" key={index}>
                {val}
                <p onClick={this.deleteTask}>X</p>
              </li>
            ))}
          </ul>

          <input
            onChange={this.handleChange}
            value={this.state.userInput}
            type="text"
            name="task"
            placeholder="Add new task..."
            className="input"
          />
          <input type="submit" value="Add" className="inputBtn" />
        </form>
      </div>
    );
  }
}

export default ToDo;
