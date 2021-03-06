import React, { Component } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { AuthContext } from "../context/AuthContext";

class NavBar extends Component {
  //   static contextType = ThemeContext;
  render() {
    // console.log(this.context);
    // const { isLightTheme, light, dark } = this.context;
    // const theme = isLightTheme ? light : dark;
    return (
      <ThemeContext.Consumer>
        {(context) => {
          const { isLightTheme, light, dark } = context;
          const theme = isLightTheme ? light : dark;
          return (
            <nav style={{ background: theme.ui, color: theme.syntax }}>
              <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
              </ul>
            </nav>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}

export default NavBar;
