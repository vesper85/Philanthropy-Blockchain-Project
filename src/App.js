import React from 'react';
import './App.css';
import Home from './pages/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import CharityZone from './pages/CharityZone';
import Login from './pages/Login';
import UserState from './context/User/UserState';


function App() {
  return (
    <div className="App">
      <UserState>
      <Router>
        <Switch>
          <Route exact  path="/">
            <Home />
          </Route>
          <Route exact path="/zone">
            <CharityZone/>
          </Route>
          <Route exact path="/login">
            <Login/>
          </Route>
        </Switch>
      </Router>
      </UserState>
    </div>
  );
}

export default App;

