import React from "react";
import Step from "./Step"

const Process = () => {
    return(
        <div className="process" id="steps">
            <div className="container">
                <h3 className="step-heading pb-2 border-bottom border-info">Steps</h3>
                <div className="row process-container">
                    <Step number="1" title="Sign up and verify" subtitle="Create an account and complete identity verification to start donating money." />
                    <Step number="2" title="Select Charity" subtitle="Click on the region in the map to see charities in different regions and click on charity to see more information about the cause and organisation."/>
                    <Step number="3" title="Donate Money" subtitle="Click on Donate button to donate money to your selected charity using Metamask Wallet"/>
                    <Step number="4" title="Track your Money" subtitle="You can confirm your transaction using generated reciept and can also track how your money is spent."/>
                </div>
            </div>
        </div>
    )
}

export default Process