import React from "react";

const DonationHistoryItem = (props) => {

    const donorName = props.donorName
    const amount = props.amount
    const time = props.time

    return (
        <div>
            <div>Donor Name: {donorName} Amount: {amount} ETH Time: {time} GMT</div>
        </div>
    )
} 

export default DonationHistoryItem