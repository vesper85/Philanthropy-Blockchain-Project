import React, { useState } from 'react'
import { useHistory } from 'react-router';
import Navbar from '../components/Navbar';
import './CharityForm.css'

export default function CharityForm(props) {
    const history = useHistory();
    const [credentialCharity, setCredentialCharity] = useState({
        charityName:"", 
        description:"", 
        cause:"", 
        goal:0, 
        location:"", 
        imageURL:"", 
        externalURL:""
    })
    const onChangeCharity = (e) => {
        setCredentialCharity({
            ...credentialCharity, [e.target.name]: e.target.value
        })
    }

    const onSubmitCharity = async (e) => {
        e.preventDefault();
        try {
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
                        cause: credentialCharity.cause,
                        goal: credentialCharity.goal,
                        location: credentialCharity.location,
                        imageURL: credentialCharity.imageURL,
                        externalURL: credentialCharity.externalURL
                    })
                }
            );
            history.go(-1);
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
                                <input type="text" name="charityName" placeholder="Enter Charity Name" required />
                            </div> 
                            <div className="input-box" style={{width:"100%"}}>
                                <span className="details">Description</span>
                                <textarea  type="text" name="description" rows="3" placeholder="Enter description" required style={{fontSize:"13px"}}></textarea>
                            </div>
                            <div className="input-box" style={{width:"100%"}}>
                                <span className="details">Cause</span>
                                <input type="text" name="cause" placeholder="Enter Cause" required />
                            </div>
                            <div className="input-box">
                                <span className="details">City</span>
                                <input type="text" name="city" placeholder="Enter City" required />
                            </div>
                            <div className="input-box">
                                <span className="details">State</span>
                                <input type="text" name="state" placeholder="Enter State" required />
                            </div>
                            <div className="input-box" style={{width:"100%"}}>
                                <span className="details">Goal</span>
                                <input type="number" name="goal" placeholder="Enter goal amount" required />
                            </div>
                            <div className="input-box">
                                <span className="details">Image url</span>
                                <input type="url" name="imageURL" placeholder="Enter Image url" required/>
                            </div>
                            <div className="input-box">
                                <span className="details">External url</span>
                                <input type="url" name="externalURL" placeholder="Enter External url" required/>
                            </div>
                            <div className="input-box" style={{width:"100%"}}>
                                <span className="details">Stats</span>
                                <textarea  type="text" name="stats" rows="3" placeholder="Enter Three Stats" required style={{fontSize:"13px"}}></textarea>
                            </div>
                            <div className="input-box" style={{width:"100%"}}>
                                <span className="details">Notable Work</span>
                                <textarea  type="text" name="Notable work" rows="3" placeholder="Enter Notable Work" required style={{fontSize:"13px"}}></textarea>
                            </div>
                        </div>
                        <div className="button">
                            <input type="submit" value={props.button_name}/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </>
    )
}
