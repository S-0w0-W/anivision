import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
} from "react-router-dom";

import Main from "./pages/index";
import About from "./pages/about";

function App() {
  return (
    <Router>
      <Route exact path="/Home" component={Main} />
      <Route exact path="/About" component={About} />
    </Router>
  );
}

export default App;
