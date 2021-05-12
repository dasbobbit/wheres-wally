import React from "react";
import Home from "./pages/Home"
import Game from "./pages/Game"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';

function App() {



  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/">
            <Game />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
