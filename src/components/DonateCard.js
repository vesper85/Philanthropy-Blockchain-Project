import React from 'react'
import coverImg from './sample/cover-image.png'

const DonateCard = (props) => {
    const {title, description} = props.cardInfo;
    return (
        <>
            <div className="col card-content">
                <div className="card h-100">
                <img src={coverImg} className="card-img-top" alt="this is an im"/>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                </div>
                <div className="card-footer">
                    {/* Progress bar */}
                    <div>
                        <div className="progress">
                        <div className="progress-bar w-25" role="progressbar"  aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25</div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}

export default DonateCard
