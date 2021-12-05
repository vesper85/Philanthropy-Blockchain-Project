import React from "react";
import Step from "./Step"

const Process = () => {
    return(
        <div className="process">
            <div className="container">
                <h3 className="step-heading pb-2 border-bottom border-info">Steps</h3>
                <div className="row process-container">
                    <Step number="1" title="Sign up and verify" subtitle="Create an account and complete identity verification" />
                    <Step number="2" title="2nd Step" subtitle="What should be these four steps..... Update this if you get any ideas... Lorem ipsum dolor sit amet, consectetur adipiscing elit."/>
                    <Step number="3" title="3rd Step" subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
                    <Step number="4" title="4th Step" subtitle="What should be these four steps..... Update this if you get any ideas..."/>
                </div>
            </div>
        </div>
    )
}

export default Process