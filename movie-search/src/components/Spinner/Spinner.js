import React from "react";
import "./Styled.css";
import SpinnerGif from "../../images/200.gif";
const Spinner = () => (
  <img className="spinner" src={SpinnerGif} alt="Loading spinner" />
);
export default Spinner;
