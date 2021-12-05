import React,{useEffect,useState} from 'react';
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
import CharityForm from './pages/CharityForm';
import CharityDetails from './pages/CharityDetails'
import {Profile} from './pages/Profile'
import Web3 from 'web3';
import Donations from './contracts/Donations.json'
//import truffle from 'truffle'

function App() {
  const useScrollToTop = () => {
    const location = useLocation();
    useEffect(() => {
      window.scrollTo({ top: 0 });
     // scroll to the top of the browser window when changing route
     // the window object is a normal DOM object and is safe to use in React.
    }, [location]);
  };

  const [account, setAccount] = useState("");
  const [contract, setContract] = useState(null);
  const [count, setCount] = useState(0);

  async function loadBlockChain() {
    let web3;
    if(window.ethereum)
    {
      console.log('metamask exists')
      web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
    }
    else if(window.web3)
    {
      web3 = new Web3(Web3.currentProvider || "http://localhost:7545");
    }
    const network = await web3.eth.net.getNetworkType();
    console.log(network);
    
    const networkId = await web3.eth.net.getId()
    const networkData = Donations.networks[networkId]
    console.log(networkId, networkData)
    
    if(networkData) {
      const donations = new web3.eth.Contract(Donations.abi, networkData.address)
      const charityCount = await donations.methods.count().call()
      setContract(donations)
      setCount(charityCount)
      console.log(charityCount)
      
    } else {
      window.alert('Donations contract not deployed to detected network.')
    }
    
    const accounts = await web3.eth.getAccounts();
    setAccount(accounts[0]);
    console.log(accounts);
    //console.log(truffle)
  }

  //const testFunction = ()=>{
  //  const testContract = 
  //}
  
  useEffect(() => {
    loadBlockChain();
  } , []);

  //console.log(account);
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
            <EditProfile useScrollToTop={useScrollToTop} />
          </Route>
          <Route exact path="/charityform" component={CharityForm} />
          <Route exact path="/charitydetails" component={CharityDetails} />
          <Route exact path="/profile">
            <Profile/>
          </Route>
        </Switch>
      </Router>
      </UserState>
    </div>
  );
}

export default App;

