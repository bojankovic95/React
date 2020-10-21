import React from "react";
import "./styled.css";
const ErrorMessage = ({ errorMessage }) => (
  <div className="errorMessage">{errorMessage}Error</div>
);
export default ErrorMessage;