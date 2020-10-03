import React, { Component } from "react";

class Header2 extends Component {
  state = {
    favColor: "yellow",
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ favColor: "red" });
    }, 1000);
  }
}
