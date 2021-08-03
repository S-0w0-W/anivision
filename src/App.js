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
        {/* <nav>
          <ul>
            <li>

            </li>

            <li>

            </li>

            <li>

            </li>
          </ul>

        </nav> */}

        <Switch>
          <Route path="/home" component={Main} />
          <Route path="/about" component={About} />
          <Route path="/three" component={Three} />
        </Switch>
      </div>
      {/* <Route exact path="anivision/Home" component={Main} />
      <Route exact path="anivision/About" component={About} />
      <Route exact path="anivision/Three" component={Three} /> */}
    </Router>
  );
}

export default App;
