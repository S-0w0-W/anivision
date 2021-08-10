import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

import Main from "./pages/index";
import About from "./pages/about";
import Three from "./pages/three";

function App() {
  return (
    <Router>
      <div>
        <h1>BRUH</h1>
        <Main/>
        <Switch>
          <Route path="anivision/home" component={Main} />
          <Route path="anivision/about" component={About} />
          <Route path="anivision/three" component={Three} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
