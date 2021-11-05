import React from 'react'

export default function EditCharityForm(props) {
    return (
        <div  className="reg">
            {/* className="cont container-text"
            <form className="container my-5" style={{width:"45rem", backgroundColor:"#fff"}}>
                <div className="border-start border-end border-top" >  
                    <h3 style={{textAlign:"center", lineHeight:"10rem", marginBottom:"-2rem"}}> Charity Form </h3>
                </div>
                <div>
                    <div className=" py-2 px-3 border-end border-start border-top" style={{backgroundColor:"#f7f8fa"}}>
                        <span htmlfor="name">Charity Name</span>
                        <input type="text" className="form-control" id="name" style={{fontSize:"13px"}} placeholder="Enter Charity name"/>
                    </div>
                    <div className="pb-2 px-3 border-start border-end" style={{backgroundColor:"#f7f8fa"}}>
                        <label htmlfor="desc" >Description</label>
                        <textarea className="form-control" id="desc" rows="3" placeholder="Enter description" style={{fontSize:"13px"}}></textarea>
                    </div>
                </div>
                <div className="container">
                    <div className="row pb-2 px-1 border-start border-end" style={{backgroundColor:"#f7f8fa"}}>
                        <div className="col-6 ">
                            <label htmlfor="goal">Goal</label>
                            <input type="text" className="form-control" id="goal" placeholder="Enter your Goal" style={{fontSize:"13px"}}/>
                        </div>
                        <div className="col-6">
                            <label htmlfor="loc">Location</label>
                            <input type="text" className="form-control" id="loc" placeholder="Enter your Location" style={{fontSize:"13px"}}/>
                        </div>
                    </div>
                </div>
                <div>
                    <div className=" pb-2 px-3 border-end border-start " style={{backgroundColor:"#f7f8fa"}}>
                        <label htmlfor="cause" >Cause</label>
                        <input type="text" className="form-control" id="cause" placeholder="Enter Cause" style={{fontSize:"13px"}}/>
                    </div>
                    <div className=" pb-2 px-3 border-end border-start" style={{backgroundColor:"#f7f8fa"}}>
                        <label htmlfor="iu" >Image Url</label>
                        <input type="text" className="form-control" id="iu" placeholder="Enter Image url" style={{fontSize:"13px"}}/>
                    </div>
                    <div className=" pb-3 px-3 border-end border-start" style={{backgroundColor:"#f7f8fa"}}>
                        <label htmlfor="eu">External Url</label>
                        <input type="text" className="form-control" id="eu" placeholder="Enter External url" style={{fontSize:"13px"}}/>
                    </div>
                </div>
                <div className="container">
                    <div className="row  pb-3 px-3 border-end border-start border-bottom" style={{backgroundColor:"#f7f8fa"}}> 
                        <div className="d-grid gap-2 button"><button className="btn">Update</button> </div>
                    </div>
                </div>
            </form> */}

            <div className="container_reg">
                <div className="title_reg">Charity Form</div>
                    <div className="content_reg">
                    <form >
                        <div className="user-details_reg">
                            <div className="input-box_reg" style={{width:"100%"}}>
                                <span className="details">Charity Name</span>
                                <input type="text" name="charityName" placeholder="Enter Charity Name" required />
                            </div>
                            <div className="input-box_reg" style={{width:"100%"}}>
                                <span className="details">Description</span>
                                <textarea className="form-control" type="text" rows="3" placeholder="Enter description" required style={{fontSize:"13px"}}></textarea>
                            </div>
                            <div className="input-box_reg" style={{width:"100%"}}>
                                <span className="details">Cause</span>
                                <input type="text" name="cause" placeholder="Enter Cause" required />
                            </div>
                            <div className="input-box_reg">
                                <span className="details">Goal</span>
                                <input type="number" name="goal" placeholder="Enter goal amount" required />
                            </div>
                            <div className="input-box_reg">
                                <span className="details">Location</span>
                                <input type="text" name="location" placeholder="Enter your Location" required />
                            </div>
                            <div className="input-box_reg">
                                <span className="details">Image url</span>
                                <input type="url" name="imageUrl" placeholder="Enter Image url" required />
                            </div>
                            <div className="input-box_reg">
                                <span className="details">External url</span>
                                <input type="url" name="externalUrl" placeholder="Enter External url" required />
                            </div>
                        </div>
                        <div className="button">
                            <input type="submit" value={props.button_name}/>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}
