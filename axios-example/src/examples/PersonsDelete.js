import React, { Component } from "react";
import API from "../api/api.js";

class PersonsDelete extends Component {
  state = { id: "" };

  handleChange = (event) => {
    this.setState = { id: event.target.value };
  };

  handleSubmit = (event) => {
    const { id } = this.state;
    event.preventDefault();
    const userID = this.state.id;
    API.delete(`users/${userID}`).then((res) => {
      console.log(res);
      console.log(res.data);
    });
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

export default PersonsDelete;
