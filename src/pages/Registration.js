import React, { useState, useContext } from 'react'
import Navbar from '../components/Navbar'
import "./Registration.css"
import userContext from '../context/User/userContext'
import { useHistory } from 'react-router'

// importing firebaseconfig
import { initializeApp } from "firebase/app";
import firebaseConfig from "../config/firebaseConfig";
import { getStorage, ref, uploadBytes } from "firebase/storage";
//initialize firebase instances
const firebaseApp = initializeApp(firebaseConfig);
const firebaseStorage = getStorage(firebaseApp);




export const Registration = () => {
  const history = useHistory();

  const context = useContext(userContext);
  const {globalCredentials} = context;

  const [credentialSignUp, setcredentialSignUp] = useState({email:globalCredentials.email,username:globalCredentials.username, password:globalCredentials.password, rpassword:globalCredentials.rpassword, address:"", firstname:"", lastname:"", phoneNumber:"", age:"",userWallet:""});
  const onChangeSignUp = (e)=>{
    setcredentialSignUp({...credentialSignUp,[e.target.name]:e.target.value})
    //console.log([e.target.name],e.target.value)
  }
  const handleReg = async (e) =>{
    e.preventDefault();
    try {
      const url = "http://localhost:5000/api/user/createuser"
      /*eslint no-unused-vars:*/
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
              age:credentialSignUp.age,
              userWallet:credentialSignUp.userWallet
            })
        });
        let imgRef = ref(firebaseStorage, `profile/${credentialSignUp.username}`);
        uploadBytes(imgRef, profileImageReg).then(() => {
        console.log('image Uploaded!');
      });
        history.go(-2);
    } catch (error) {
      console.error(error.message)
    }
  }
  const [profileImageReg, setprofileImageReg] = useState("https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png")
  const loadFile = (e) => {
    setprofileImageReg(e.target.files[0]);
    //console.log('image set');
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
              <div className="input-box_reg">
                <span className="details">Public key</span>
                <input type="text" name="userWallet" placeholder="Enter your wallet's Public key " required />
              </div>
              <div className="input-box_reg"  style={{display:"flex", justifyContent:"start", alignItems:"center"}} >
                <label htmlFor="file-upload" className="custom-file-upload mt-3" style={{height:"min-content"}}>
                   <i className="fa fa-cloud-upload"></i>  Upload Profile Image
               </label>
                    <input className='d-none' id="file-upload" accept="image/*" name="image" type="file" onChange={loadFile} />
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
