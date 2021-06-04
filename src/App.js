import React, {useEffect, useState} from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home"
import Game from "./pages/Game"
import './App.css';
import storage from "./storage.json"

function App() {
  const [level, setLevel] = useState(1)
	const [levelsData, setLevelsData] = useState([])

	useEffect(() => {
		setLevelsData(storage)
	}, [])

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/game">
            <Game />
          </Route>
          <Route path="/">
            <Home levelsData={levelsData}/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
