import React from "react";
import "./loadingSpinner.css";

const LoadingSpinner = (symbol = "|") => {
  return <span id="spinner">{symbol}</span>;
};

export default LoadingSpinner;
