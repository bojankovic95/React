import React from "react";
import NavBar from "./components/NavBar.js";
import BookContextProvider from "./context/BookContext.js";
import BookForm from "./components/BookForm.js";
import BookList from "./components/BookList.js";

function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <NavBar />
        <BookList />
        <BookForm />
      </BookContextProvider>
    </div>
  );
}

export default App;
