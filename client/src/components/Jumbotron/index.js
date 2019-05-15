import React from "react";
import "./style.css";

// creating a Jumbotron component to display the app's title and description on the Home and Saved pages
function Jumbotron({ children }) {
  return <div className="jumbotron mt-4">{children}</div>;
}

export default Jumbotron;
