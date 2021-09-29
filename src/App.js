import React from 'react';
import './App.css';
import Home from './pages/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navbar from './components/Navbar';
import CharityZone from './pages/CharityZone';

function App() {
  return (
    <div className="App">
      <Router>   
        <Navbar/>
          <Switch>
            <Route exact  path="/">
              <Home />
            </Route>
            <Route exact path="/zone">
              <CharityZone/>
            </Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;

