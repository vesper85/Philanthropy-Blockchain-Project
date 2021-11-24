import React, { useState } from 'react'
import { useHistory } from 'react-router';
import Navbar from '../components/Navbar';
import './CharityForm.css'

export default function CharityForm(props) {
    const history = useHistory();
    const event = props.location.state.button_name
    const info = props.location.state.info

    const [credentialCharity, setCredentialCharity] = useState({
        charityName:info.title || "", 
        description:info.description || "", 
        previousWork:info.previousWork || "",
        cause:info.cause || "", 
        goal:info.goal || 0, 
        city:info.city || "",
        state:info.state || "", 
        imageURL:info.imageURL || "", 
        externalURL:info.externalURL || ""
    })
    
    const onChangeCharity = (e) => {
        setCredentialCharity({
            ...credentialCharity, [e.target.name]: e.target.value
        })
    }

    const onSubmitCharity = async (e) => {
        e.preventDefault();
        try {
            if(event === "Add New") {
                const url = "http://localhost:5000/api/charity/createcharity"
                const response = await fetch(url,
                    {
                        method: 'POST', 
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            charityName: credentialCharity.charityName,
                            description: credentialCharity.description,
                            previousWork: credentialCharity.previousWork,
                            cause: credentialCharity.cause,
                            goal: credentialCharity.goal,
                            city: credentialCharity.city,
                            state: credentialCharity.state,
                            imageURL: credentialCharity.imageURL,
                            externalURL: credentialCharity.externalURL
                        })
                    }
                );
            }
            else if(event === "update") {
                console.log(credentialCharity)
                const url = "http://localhost:5000/api/charity/updatecharity/" + info.id
                const response = await fetch(url,
                    {
                        method: 'PUT', 
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            charityName: credentialCharity.charityName,
                            description: credentialCharity.description,
                            previousWork: credentialCharity.previousWork,
                            cause: credentialCharity.cause,
                            goal: credentialCharity.goal,
                            city: credentialCharity.city,
                            state: credentialCharity.state,
                            imageURL: credentialCharity.imageURL,
                            externalURL: credentialCharity.externalURL
                        })
                    }
                );
            }
            history.go(-1)
        } catch (error) {
            console.error(error.message)
        }
    }

    return (
    <>
        <Navbar/>
        <div className="cf-container charity-form">
            <div className="cf-container_det">
                <div className="cf-title">Charity Form</div>
                    <div className="cf-content">
                    <form onSubmit={onSubmitCharity} onChange={onChangeCharity}>
                        <div className="user-details">
                            <div className="input-box" style={{width:"100%"}}>
                                <span className="details">Charity Name</span>
                                <input type="text" name="charityName" placeholder="Enter Charity Name" defaultValue={info.title || ""} required />
                            </div>
                            <div className="input-box" style={{width:"100%"}}>
                                <span className="details">Cause</span>
                                <input type="text" name="cause" placeholder="Enter Cause" defaultValue={info.cause || ""} required />
                            </div> 
                            <div className="input-box" style={{width:"100%"}}>
                                <span className="details">Description</span>
                                <textarea  type="text" name="description" rows="3" placeholder="Enter description" defaultValue={info.description || ""} required style={{fontSize:"13px"}}></textarea>
                            </div>
                            <div className="input-box" style={{width:"100%"}}>
                                <span className="details">Notable Work</span>
                                <textarea  type="text" name="previousWork" rows="3" placeholder="Enter Notable Work" defaultValue={info.previousWork || ""} style={{fontSize:"13px"}}></textarea>
                            </div>
                            <div className="input-box">
                                <span className="details">City</span>
                                <input type="text" name="city" placeholder="Enter City" defaultValue={info.city || ""} required />
                            </div>
                            <div className="input-box">
                                <span className="details">State</span>
                                <input type="text" name="state" placeholder="Enter State" defaultValue={info.state || ""} required />
                            </div>
                            <div className="input-box" style={{width:"100%"}}>
                                <span className="details">Goal</span>
                                <input type="number" name="goal" placeholder="Enter goal amount" defaultValue={info.goal || ""} required />
                            </div>
                            <div className="input-box">
                                <span className="details">Image url</span>
                                <input type="url" name="imageURL" placeholder="Enter Image url" defaultValue={info.imageURL || ""}/>
                            </div>
                            <div className="input-box">
                                <span className="details">External url</span>
                                <input type="url" name="externalURL" placeholder="Enter External url" defaultValue={info.externalURL || ""}/>
                            </div>
                            <div className="input-box" style={{width:"100%"}}>
                                <span className="details">Stats</span>
                                <textarea  type="text" name="stats" rows="3" placeholder="Enter Three Stats" defaultValue={info.stats || ""} style={{fontSize:"13px"}}></textarea>
                            </div>
                        </div>
                        <div className="button">
                            <input type="submit" defaultValue={props.button_name}/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </>
    )
}
