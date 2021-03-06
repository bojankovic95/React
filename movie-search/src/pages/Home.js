import React, { useReducer, useEffect } from "react";
import axios from "axios";
import Header from "../components/Header";
import Search from "../components/Search";
import Movie from "../components/Movie";
import Spinner from "../components/Spinner";
import ErrorMessage from "../components/ErrorMessage";
import { initialState, reducer } from "../reducer";
import "../App.css";
const MOVIE_API_URL = "https://www.omdbapi.com/?s=batman&apikey=236e19c1";
const Home = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    axios.get(MOVIE_API_URL).then((jsonResponse) => {
      dispatch({
        type: "SEARCH_MOVIES_SUCCESS",
        payload: jsonResponse.data.Search,
      });
    });
  }, []);
  const search = (searchValue) => {
    dispatch({
      type: "SEARCH_MOVIES_REQUEST",
    });
    axios(`https://www.omdbapi.com/?s=${searchValue}&apikey=4a3b711b`).then(
      (jsonResponse) => {
        if (jsonResponse.data.Response === "True") {
          dispatch({
            type: "SEARCH_MOVIES_SUCCESS",
            payload: jsonResponse.data.Search,
          });
        } else {
          dispatch({
            type: "SEARCH_MOVIES_FAILURE",
            error: jsonResponse.data.Error,
          });
        }
      }
    );
  };
  const { movies, errorMessage, loading } = state;
  return (
    <div className="App">
      <div className="m-container">
        <Header text="Movie App Search" />
        <Search search={search} />
        <div className="movies">
          {loading && !errorMessage ? (
            <Spinner />
          ) : errorMessage ? (
            <ErrorMessage>{errorMessage}</ErrorMessage>
          ) : (
            movies.map((movie, index) => (
              <Movie key={`${index}-${movie.Title}`} movie={movie} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};
export default Home;