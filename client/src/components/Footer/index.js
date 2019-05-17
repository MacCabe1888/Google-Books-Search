import React from "react";

// This Footer component contains a React icon and the message "Powered by React.js."
function Footer() {
  return (
    <footer>
      <hr style={{ borderTop: "2px solid #79b6f2", background: "transparent" }} />
      <p className="pull-right" style={{ color: "#79b6f2" }}>
        <i className="fab fa-react fa-lg" /> Powered by React.js
      </p>
    </footer>
  );
}

export default Footer;
