import React from "react";
import ReactLoading from 'react-loading';

const Loading = () => {
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
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Loading