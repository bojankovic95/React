import React, { Component } from "react";
import API from "../api/api.js";

class PersonsAsync extends Component {
  state = { id: "" };

  handleChange = (event) => {
    this.setState = { id: event.target.value };
  };

  handleSubmit = async (event) => {
    const { id } = this.state;
    event.preventDefault();

    const userID = id;
    const response = await API.delete(`users/${userID}`);

    console.log(response);
    console.log(response.data);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Persons ID:</label>
          <input type="text" name="id" onChange={this.handleChange} />
        </form>
        <button onSubmit={this.handleSubmit} type="submit">
          Delete
        </button>
      </div>
    );
  }
}

export default PersonsAsync;
