import React from "react";
import ReactLoading from 'react-loading';

const Loading = (props) => {
    const progressCoverImage = (props.progressCoverImage).toFixed(2)
    return(
        <>
            <div className="modal loading-modal" id="exampleModalCenter" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header" style={{justifyContent: "flex-start"}}>
                            <span>
                                <h5 className="modal-title" id="exampleModalLongTitle" style={{marginRight: "1em"}}>Saving Information</h5>
                            </span>
                            <ReactLoading type="balls" color="#00ffc3" height={'5%'} width={'15%'} />
                        </div>
                        <div className="modal-body">
                            Uploading charity cover image:
                            <div className="progress my-1">
                                <div className="progress-bar" role="progressbar" aria-valuenow={progressCoverImage} aria-valuemin="0" aria-valuemax="100" style={{width:`${progressCoverImage+'%'}`}}>{progressCoverImage}%</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Loading