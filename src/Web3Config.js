import React, { useState, useEffect } from "react";
import Web3 from "web3";

export default function Web3Config() {
  const [account, setAccount] = useState("");

  async function loadBlockChain() {
    const web3 = new Web3(Web3.givenProvider || "http://localhost:8080");
    console.log(Web3.givenProvider);
    const network = await web3.eth.net.getNetworkType();
    console.log(network); // should give you main if you're connected to the main network via metamask...
    const accounts = await web3.eth.getAccounts();
    setAccount(accounts[0]);
  }

  useEffect(() => 
    loadBlockChain()
  , []);

  return (
    <div>
      <p>Check out the the console....</p>
      <p>Your account: {account}</p>
    </div>
  );
}