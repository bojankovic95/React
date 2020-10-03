import React, { Component } from "react";

class MyForm extends Component {
  state = {
    username: "",
  };

  handleChange = (event) => {
    this.setState({ username: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    alert("You are submiting " + this.state.username);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Hello {this.state.username}</h1>
        <p>Enter your name</p>
        <input type="text" onChange={this.handleChange} />
        <input type="submit" />
      </form>
    );
  }
}

export default MyForm;
