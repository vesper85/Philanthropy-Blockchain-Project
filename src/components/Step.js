import React from "react";

const Step = ({number, title, subtitle}) => {
    return(
        <div className="col-sm-6 col-xs-12 steps-row-space">
            <div className="row">
                <div className="col-sm-1">
                    {/* Have to use h2 else in case of div, p there is vertical spacing problem */}
                    <h2 className="step-number align-top">{number}</h2>
                </div>
                <div className="col-sm-11">
                    <p className="step-element step-title">{title}</p>
                    <p className="step-element step-subtitle">{subtitle}</p>
                </div>
            </div>
        </div>
    )
}

export default Step