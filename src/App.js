import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  HashRouter
} from "react-router-dom";

import Main from "./pages/index";
import About from "./pages/about";
import Three from "./pages/three";
import Landing from "./pages/landing"

function App() {
  return (
    <HashRouter basename='/'>
      <div>
        <Route exact path="/" component={Main} />
        <Route exact path="/home" component={Main} />
        <Route path="/about" component={About} />
        <Route path="/three" component={Three} />
        <Route path="/landing" component={Landing} />
      </div>
    </HashRouter>
  );
}

export default App;
