import React from "react";
import "./style.css";

// This Footer component contains a React icon and the message "Powered by React.js."
function Footer() {
  return (
    <footer>
      <p className="pull-right">
        <i className="fab fa-react fa-lg" /> Powered by React.js
      </p>
    </footer>
  );
}

export default Footer;
