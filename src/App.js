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
      <Route exact path="anivision/Home" component={Main} />
      <Route exact path="anivision/About" component={About} />
      <Route exact path="anivision/Three" component={Three} />
    </Router>
  );
}

export default App;
