import React from "react";
import NavBar from "./components/NavBar.js";
import BookList from "./components/BookList.js";
import ToggleTheme from "./components/ToggleTheme.js";
import ThemeContextProvider from "./context/ThemeContext";

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <NavBar />
        <BookList />
        <ToggleTheme />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
