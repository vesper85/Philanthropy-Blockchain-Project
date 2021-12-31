import React from "react";

const DonationHistoryItem = (props) => {

    const donorName = props.donorName
    const amount = props.amount
    const timestamp = props.time

    const s = new Date(timestamp).toLocaleString(undefined, {timeZone: 'Asia/Kolkata'})
    const date = s.substring(3,5) + '-' + s.substring(0,2) + '-' + s.substring(6,10)
    const time = s.substring(12,)

    return (
        <div className="donation-history-entry-container">
            <div>
                <span className="mx-3 mt-2 float-start">Date: {date}</span>
                <span className="mx-3 mt-2 float-end">Time: {time}</span>
            </div>
            <div>
                <span className="mx-3 mt-1 float-start">Donor Name: {donorName}</span>
                <span className="mx-3 mt-1 float-end">Amount: {amount} ETH</span>
            </div>
            <div className="donation-history-separator"></div>
        </div>
    )
} 

export default DonationHistoryItem