import React from "react";

const InfoWidgetElement = ({imlink, title, subtitle}) => {
    return (
        <div className="col-lg-4 col-sm-6 col-xs-12 row-space">
            <div className="row">
                <div className="col-sm-2">
                    <a href="/"><img className="rounded mx-auto d-block" src={imlink}></img></a>
                </div>
                <div className="col-sm-10">
                    <a href="/" className="infowidget-card infowidget-title">{title}</a>
                    <p className="infowidget-card infowidget-content">{subtitle}</p>
                </div>
            </div>
        </div>
    )
} 

export default InfoWidgetElement