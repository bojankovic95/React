import React, { useContext } from "react";
import { BookContext } from "../context/BookContext.js";
import BookDetails from "./BookDetails.js";

const BookList = () => {
  const { books } = useContext(BookContext);

  return books.length ? (
    <div className="book-list">
      <ul>
        {books.map((book) => {
          return <BookDetails book={book} key={book.id} />;
        })}
      </ul>
    </div>
  ) : (
    <div className="empty">No more books to read</div>
  );
};

export default BookList;
