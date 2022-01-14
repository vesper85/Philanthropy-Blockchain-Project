import React from "react";

const DonationHistoryItem = (props) => {

    const name = props.name
    const amount = props.amount
    const timestamp = props.time
    const status = props.status
    let color

    if(status === 'Success') {
        color = '#deffee'
    } else if (status === 'Pending') {
        color = 'lightgoldenrodyellow'
    } else if(status === 'Reverted') {
        color = '#ffdede'
    }

    const s = new Date(timestamp).toLocaleString(undefined, {timeZone: 'Asia/Kolkata'})
    console.log(s);
    let date, time;

    if(s[2] === '/') {
        date = s.substring(3,5) + '-' + s.substring(0,2) + '-' + s.substring(6,10)
        time = s.substring(12,)
    } else if(s[1] === '/' && s[4] === '/') {
        date = s.substring(2,4) + '-' + '0' + s.substring(0,1) + '-' + s.substring(5,9)
        time = s.substring(10,)
    } else if(s[2] === '/' && s[4] === '/') {
        date = '0' + s.substring(3,4) + '-' + s.substring(0,2) + '-' + s.substring(5,9)
        time = s.substring(10,)
    } else if(s[1] === '/' && s[3] == '/') {
        date = '0' + s.substring(2,3) + '-' + '0' + s.substring(0,1) + '-' + s.substring(4,8)
        time = s.substring(10,)
    }

    return (
        <div className="donation-history-entry-container" style={{background: `${color}`}}>
            <div className="donation-history-entry-row">
                <span className="mx-3 mt-1 float-start">Date: {date}</span>
                <span className="mx-3 mt-1 float-end">Time: {time}</span>
            </div>
            <div className="donation-history-entry-row mb-1">
                <span className="mx-3 mt-1 float-start donation-history-entry-row-name">Name: {name}</span>
                <span className="mx-3 mt-1 float-end donation-history-entry-row-amount">Amount: {amount} ETH</span>
            </div>
            <div className="donation-history-separator"></div>
        </div>
    )
} 

export default DonationHistoryItem