import React from "react";
import Step from "./Step"

const Process = () => {
    return(
        <div className="process">
            <div className="container">
                <h3 className="step-heading">Steps</h3>
                <div className="row">
                    <Step number="1" title="Sign up and verify" subtitle="Create an account and complete identity verification" />
                    <Step number="2" title="2nd Step" subtitle="What should be these four steps..... Update this if you get any ideas... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
                    <Step number="3" title="3rd Step" subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."/>
                    <Step number="4" title="4th Step" subtitle="What should be these four steps..... Update this if you get any ideas..."/>
                </div>
            </div>
        </div>
    )
}

export default Process