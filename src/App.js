import React,{useEffect} from 'react';
import './App.css';
import Home from './pages/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation
} from "react-router-dom";
import CharityZone from './pages/CharityZone';
import Login from './pages/Login';
import UserState from './context/User/UserState';
import { Registration } from './pages/Registration';
import {EditProfile} from './pages/EditProfile'


function App() {
  const useScrollToTop = () => {
    const location = useLocation();
    useEffect(() => {
      window.scrollTo({ top: 0 });
     // scroll to the top of the browser window when changing route
     // the window object is a normal DOM object and is safe to use in React.
    }, [location]);
  };
 
  return (
    <div className="App">
      <UserState>
      <Router >
        <Switch>
          <Route exact  path="/">
            <Home useScrollToTop={useScrollToTop} />
          </Route>
          <Route exact path="/zone">
            <CharityZone useScrollToTop={useScrollToTop} />
          </Route>
          <Route exact path="/login">
            <Login/>
          </Route>
          <Route exact path="/login">
            <Login/>
          </Route>
          <Route exact path="/register">
            <Registration/>
          </Route>
          <Route exact path="/editprofile">
            <EditProfile/>
          </Route>
        </Switch>
      </Router>
      </UserState>
    </div>
  );
}

export default App;

