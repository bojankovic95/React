import React, { Component } from "react";
import axios from "axios";
import "./App.css";

class PersonsGet extends Component {
  state = {
    persons: [],
  };

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      const persons = res.data;
      this.setState({ persons: persons });
    });
  }

  render() {
    return (
      <div className="App">
        <ul>
          {this.state.persons.map((person) => (
            <li>{person.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default PersonsGet;
