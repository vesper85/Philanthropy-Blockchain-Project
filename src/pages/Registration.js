import React, { useState, useContext } from 'react'
import Navbar from '../components/Navbar'
import "./Registration.css"
import userContext from '../context/User/userContext'
import { useHistory } from 'react-router'


export const Registration = () => {
  const history = useHistory();

  const context = useContext(userContext);
  const {globalCredentials, setglobalCredentials} = context;

  const [credentialSignUp, setcredentialSignUp] = useState({email:globalCredentials.email,username:globalCredentials.username, password:globalCredentials.password, rpassword:globalCredentials.rpassword, address:"", firstname:"", lastname:"", phoneNumber:"", age:""});
  const onChangeSignUp = (e)=>{
    setcredentialSignUp({...credentialSignUp,[e.target.name]:e.target.value})
    //console.log([e.target.name],e.target.value)
  }
  const handleReg = async (e) =>{
    e.preventDefault();
    try {
      const url = "http://localhost:5000/api/user/createuser"
      const response = await fetch(url,
        {
          method: 'POST', 
          headers: {
            'Content-Type': 'application/json',
          
          },
          body: JSON.stringify({
              email:credentialSignUp.email,
              username:credentialSignUp.username, 
              password:credentialSignUp.password,
              address:credentialSignUp.address,
              firstname:credentialSignUp.firstname,
              lastname:credentialSignUp.lastname,
              phoneNumber:credentialSignUp.phoneNumber,
              age:credentialSignUp.age
            })
        });
        history.go(-2);
    } catch (error) {
      console.error(error.message)
    }
  }

  return (
    <div className="reg">
      <Navbar/>
      <div className="container_reg">
        <div className="title_reg">Registration</div>
        <div className="content_reg">
          <form onSubmit={handleReg} onChange ={onChangeSignUp}>
            <div className="user-details_reg">
              <div className="input-box_reg">
                <span className="details_reg">First Name</span>
                <input type="text" name="firstname" placeholder="Enter your First name" required />
              </div>
              <div className="input-box_reg">
                <span className="details_reg">Last name</span>
                <input type="text" name="lastname" placeholder="Enter your Last name" required />
              </div>
              <div className="input-box_reg">
                <span className="details">Age</span>
                <input type="number" name="age" placeholder="Enter your age" required />
              </div>
              <div className="input-box_reg">
                <span className="details">Address</span>
                <input type="text" name="address" placeholder="Enter your Address" required />
              </div>
              <div className="input-box_reg">
                <span className="details">Phone Number</span>
                <input type="text" name="phoneNumber" placeholder="Enter your Phone Number" required />
              </div>
              <div className="input-box_reg">
                <span className="details">Company</span>
                <input type="text" name="company" placeholder="Enter your company name" required />
              </div>
            </div>
            <div className="gender-details_reg">
              <input type="radio" name="gender" id="dot-1" />
              <input type="radio" name="gender" id="dot-2"/>
              <input type="radio" name="gender" id="dot-3"/>
              <span className="gender-title_reg">Gender</span>
              <div className="category_reg">
                <label htmlFor="dot-1">
                  <span className="dot one_reg"></span>
                  <span className="gender_reg">Male</span>
                </label>
                <label htmlFor="dot-2">
                  <span className="dot two_reg"></span>
                  <span className="gender_reg">Female</span>
                </label>
                <label htmlFor="dot-3">
                  <span className="dot three_reg"></span>
                  <span className="gender_reg">Prefer not to say</span>
                </label>
              </div>
            </div>
            <div className="button">
              <input type="submit" value="Register"/>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
