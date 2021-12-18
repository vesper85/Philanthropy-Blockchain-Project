import React from "react";
import { HashLink } from 'react-router-hash-link';

const InfoWidgetElement = ({compId, imlink, title, subtitle}) => {
    return (
        <div className="col-lg-4 col-sm-6 col-xs-12 infowidget-row-space">
            <div className="row">
                <div className="col-sm-2">
                    <HashLink to={compId}><img alt="Info" className="rounded mx-auto d-block" src={imlink}></img></HashLink>
                </div>
                <div className="col-sm-10">
                    <HashLink to={compId} className="infowidget-card infowidget-title">{title}</HashLink>
                    <p className="infowidget-card infowidget-content">{subtitle}</p>
                </div>
            </div>
        </div>
    )
} 

export default InfoWidgetElement