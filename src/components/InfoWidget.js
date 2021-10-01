import React from "react";
import stepsIcon from "./icons/steps.png"
import lockIcon from "./icons/lock.png"
import cryptoIcon from "./icons/ethereum.png"
import partnersIcon from "./icons/partners.png"
import teamIcon from "./icons/team.png"
import InfoWidgetElement from "./InfowidgetElement";

const InfoWidget = () => {
    return (
        <div className="infowidget">
            <div className="container">
                <div className="row infowidget-row">
                    <InfoWidgetElement imlink={stepsIcon} title={"What are the steps"} subtitle={"Donate to charities using crypto"} />
                    <InfoWidgetElement imlink={lockIcon} title={"Security & Controls"} subtitle={"Keeping your payments safe"} />
                    <InfoWidgetElement imlink={cryptoIcon} title={"Supported cryptocurrencies"} subtitle={"Variety of payment options"} />
                    
                    <InfoWidgetElement imlink={partnersIcon} title={"Our partners"} subtitle={"Partner Organizations"} />
                    <InfoWidgetElement imlink={teamIcon} title={"Team information"} subtitle={"About the website developers"} />
                    <InfoWidgetElement imlink={stepsIcon} title={"Thinking..."} subtitle={"Guys let me know what to add here"} />
                </div>
            </div>
        </div>
    )
}

export default InfoWidget