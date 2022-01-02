import React from "react";
import Web3 from 'web3';

const PendingDonationsItem = (props) => {

    const donor = props.donor
    const amount = Web3.utils.fromWei(props.amount, 'ether')

    return (
        <div className="donation-history-entry-container">
            <div className="donation-history-entry-row">
                <span className="mx-3 mt-1 float-start">Donor Public Address: {donor}</span>
            </div>
            <div className="donation-history-entry-row">
                <span className="mx-3 mt-1 float-start">Amount: {amount} ETH</span>
            </div>
            <div className="donation-history-separator"></div>
        </div>
    )
} 

export default PendingDonationsItem