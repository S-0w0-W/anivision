import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";

import Main from "./pages/index";
import About from "./pages/about";
import Three from "./pages/three";

function App() {
  return (
    <Router>
      <Route exact path="/Home" component={Main} />
      <Route exact path="/About" component={About} />
      <Route exact path="/Three" component={Three} />
    </Router>
  );
}

export default App;
