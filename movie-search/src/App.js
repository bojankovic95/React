import React from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import Spinner from "./components/Spinner/Spinner.js"
import ErrorMessage from "./components/ErrorMessage/ErrorMessage"
import Movie from "./components/Movie/Movie.js"
import Home from "./pages/Home.js"

function App() {
  return (
    <div>
      {/* <Header />
      <Search />
      <Spinner />
      <Movie />
      <ErrorMessage /> */}
      <Home />
    </div>
  );
}

export default App;
