import React, { useContext, useState } from "react";
import { BookContext } from "../context/BookContext.js";

const NavBar = () => {
  const { books } = useState(BookContext);

  return (
    <div className="navbar">
      <h1>Reading List</h1>
      {/* <p>Currently you have {books.length} books</p> */}
    </div>
  );
};

export default NavBar;
