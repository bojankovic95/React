import React, { Component } from "react";
import MyForm from "./components/form.js";
import FormSubmit from "./components/myForm.js";
import Inputs from "./components/input.js";
import TextArea from "./components/TextArea.js";
import Select from "./components/select.js";

class App extends Component {
  render() {
    return (
      <div>
        <Select />
      </div>
    );
  }
}

export default App;
