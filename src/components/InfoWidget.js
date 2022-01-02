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
                    <InfoWidgetElement compId={"#steps"} imlink={stepsIcon} title={"What are the steps"} subtitle={"Donate to charities using crypto"} />
                    <InfoWidgetElement compId={"#security"} imlink={lockIcon} title={"Security & Controls"} subtitle={"Keeping your payments safe"} />
                    <InfoWidgetElement compId={"#Supported Cryptocurrencies"} imlink={cryptoIcon} title={"Supported cryptocurrencies"} subtitle={"Variety of payment options"} />
 
                    <InfoWidgetElement compId={"#partner"} imlink={partnersIcon} title={"Our partners"} subtitle={"Partner Organizations"} />
                    <InfoWidgetElement compId={"#"} imlink={teamIcon} title={"Team information"} subtitle={"About the website developers"} />
                    <InfoWidgetElement compId={"#testimonial"} imlink={stepsIcon} title={"What People Think..."} subtitle={"User reviews and ratings"} />
                </div>
            </div>
        </div>
    )
}

export default InfoWidget