import React from "react";
import DonateCard from "./DonateCard";

const CardsArray = (props) => {
    // const data = Array.from(props.info)
    const info = props.info
    const Card = info.map((charity) => {
        return <DonateCard cardInfo={charity}/>
    })
    
    return(
        {Card}
    )
}

export default CardsArray