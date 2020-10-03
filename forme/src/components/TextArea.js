import React, { Component } from "react";

class TextArea extends Component {
  state = {
    description: "Content of textarea...",
  };

  handleChange = (event) => {
    this.setState({ description: event.target.value });
  };
  render() {
    return (
      <form>
        <textarea value={this.state.description} onChange={this.handleChange} />
      </form>
    );
  }
}

export default TextArea;
