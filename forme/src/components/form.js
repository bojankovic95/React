import React, { Component } from "react";

class FormSubmit extends Component {
  state = {
    username: " ",
  };

  handleChange = (event) => {
    this.setState({ username: event.target.value });
  };

  render() {
    return (
      <form>
        <h1>Hello {this.state.username}!</h1>
        <p>Enter your name</p>
        <input type="text" onChange={this.handleChange} />
      </form>
    );
  }
}

export default FormSubmit;
