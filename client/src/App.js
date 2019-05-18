import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Saved from "./pages/Saved";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import "./style.css";

// Here is the layout of the app.
function App() {
  return (
    // using React Router to handle navigation through the site
    <Router>
      <div>
        {/* The Nav bar is present on every page. */}
        <Nav />
        {/* The Switch tag is used for conditional page rendering based on the specified path. */}
        <Switch>
          {/* The "/" path renders the Home page where the user can search for books. */}
          <Route exact path="/" component={Home} />
          {/* The "/saved" path renders the Saved page where the user can view all books saved in the database. */}
          <Route exact path="/saved" component={Saved} />
          {/* Any path that matches none of the above renders the NoMatch page, which displays a 404 error message. */}
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
