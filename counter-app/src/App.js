import React, { Component } from "react";
import Button from "./components/button.js";
import "./App.scss";

class App extends Component {
  state = {
    count: 0,
    array: [],
  };

  // handleIncerement = () => {  //DUZA VERZIJA
  //   this.setState({
  //     count: this.state.count + 1,
  //     array: [...this.state.array, this.state.count],
  //   });
  // };

  // handleDecrement = () => {
  //   this.setState({
  //     count: this.state.count - 1,
  //     array: [...this.state.array, this.state.count],
  //   });
  // };

  countHandler(change = 0) {
    const { array, count } = this.state;
    let countChanged = count + change;

    this.setState({ count: countChanged, array: [...array, countChanged] });
  }

  handleIncerement = () => {
    this.countHandler(1);
  };
  handleDecrement = () => {
    this.countHandler(-1);
  };

  handleRestore = () => {
    this.setState({ count: 0, array: [] });
  };

  getList() {
    const { array } = this.state;
    return array.map((item, index) => <li key={index}>{item}</li>);
  }

  render() {
    // const myStyle = {
    //   color: "red",
    //   fontSize: "25px",
    //   textAlign: "center",
    //   backgroundColor: "yellow",
    // };
    return (
      <div /*style={myStyle}*/>
        <h1 className="css">{this.state.count}</h1>
        <Button onClick={this.handleRestore} title="reset" />
        <Button onClick={this.handleIncerement} title="+" />
        <Button onClick={this.handleDecrement} title="-" />
        <ul>{this.getList()}</ul>
      </div>
    );
  }
}

export default App;
