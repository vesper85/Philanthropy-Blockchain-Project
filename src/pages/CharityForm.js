import React from 'react'
import { useHistory } from 'react-router';

export default function CharityForm(props) {
    const history = useHistory();

    const addNewCharity = async (e) => {
        e.preventDefault();
        try {
            const url = "http://localhost:5000/api/charity/createcharity"
            const response = await fetch(url,
                {
                    method: 'POST', 
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    // body: JSON.stringify({
                    //     email:credentialSignUp.email,
                    //     username:credentialSignUp.username, 
                    //     password:credentialSignUp.password,
                    //     address:credentialSignUp.address,
                    //     firstname:credentialSignUp.firstname,
                    //     lastname:credentialSignUp.lastname,
                    //     phoneNumber:credentialSignUp.phoneNumber,
                    //     age:credentialSignUp.age
                    // })
                }
            );
            history.go(-1);
        } catch (error) {
            console.error(error.message)
        }
    }

    return (
        <div  className="reg">
            <div className="container_reg">
                <div className="title_reg">Charity Form</div>
                    <div className="content_reg">
                    <form onSubmit={addNewCharity}>
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
