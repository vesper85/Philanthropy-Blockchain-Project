import React from "react";
import ReactLoading from 'react-loading';

const Loading = (props) => {

    let uploadingCoverImage = props.uploadingCoverImage
    let uploadingCharityImages = props.uploadingCharityImages
    let progressCoverImage = (props.progressCoverImage).toFixed(2)
    let progressCharityImages = (props.progressCharityImages).toFixed(2)
    
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
                        {
                            uploadingCoverImage && 
                            <div className="modal-body">
                                Uploading charity cover image:
                                <div className="progress my-1">
                                    <div className="progress-bar" role="progressbar" aria-valuenow={progressCoverImage} aria-valuemin="0" aria-valuemax="100" style={{width:`${progressCoverImage+'%'}`}}>{progressCoverImage}%</div>
                                </div>
                            </div>
                        }
                        {
                            uploadingCharityImages &&
                            <div className="modal-body">
                                <span style={{marginRight: "1em"}}>
                                    Uploading charity images
                                </span>
                                <ReactLoading type="spin" color="#00ffc3" height={'5%'} width={'10%'} />
                            </div>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Loading