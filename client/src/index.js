import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

// rendering the App component imported from "App.js"
ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
