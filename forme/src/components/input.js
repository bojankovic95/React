import React, { Component } from "react";

class Inputs extends Component {
  state = {
    username: "",
    age: null,
    errormessage: "",
  };

  handleChange = (event) => {
    let name = event.target.name;
    let val = event.target.value;
    let error = "";
    if (name === "age") {
      if (val !== "" && !Number(val)) {
        error = <strong>Your age must be a number!</strong>;
      }
    }
    this.setState({ [name]: val });
    this.setState({ errormessage: error });
  };

  /*handleSubmit = (event) => {
    event.preventDefault();
    let age = this.state.age;
    if (!Number(age)) {
      alert("Your age must be a number!");
    }
  };*/

  render() {
    return (
      <form /*onSubmit={this.handleSubmit}*/>
        <h1>
          Hello {this.state.username} {this.state.age}
        </h1>
        <p>Enter your name</p>
        <input type="text" name="username" onChange={this.handleChange} />
        <p>Enter your age</p>
        <input type="text" name="age" onChange={this.handleChange} />
        <br />
        {this.state.errormessage}
      </form>
    );
  }
}

export default Inputs;
