import React,{useEffect, useContext, useState} from "react";
import { useHistory } from "react-router";
import userContext from "../context/User/userContext";
// importing firebaseconfig
import { initializeApp } from "firebase/app";
import firebaseConfig from "../config/firebaseConfig";
import { getStorage, ref, uploadBytes } from "firebase/storage";
import "./EditProfile.css"
//initialize firebase instances

const firebaseApp = initializeApp(firebaseConfig);
const firebaseStorage = getStorage(firebaseApp);


// component starts here
export const EditProfile = (props) => {
  // scroll to top on component render
  props.useScrollToTop();
  
  //hook declaration
  const history = useHistory();
  const context = useContext(userContext);
  const { getProfileInfo,userProfile, setuserProfile,profileImg } = context;
  const {firstname, lastname,username, address, age, phoneNumber, email} = userProfile;
  const [profileImglocal, setprofileImglocal] = useState("https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png");
  

    //use Effect hook used as component didmount
    useEffect(() => {
      getProfileInfo();
      
    }, [])

      //loades image file onchange
      const loadFile = (e)=> {
        try {
          let image = document.getElementById('output');
          let file = e.target.files[0];
          //console.log(file.name);
          setprofileImglocal(file);
          image.src = URL.createObjectURL(e.target.files[0]);
        } catch (error) {
          console.error(error.message)
        } 
      };


  
  
    // input field onchange handler 
    const onChange = (e)=>{
      setuserProfile({...userProfile,[e.target.name]:e.target.value})
    }

    // userInfo update handler
    const handleUpdate = async(e) =>{
      e.preventDefault();
      try {
            const url = "http://localhost:5000/api/user/updateuser";
            const response = await fetch(url, {
                method: 'PUT', 
                headers: {
                'Content-Type': 'application/json',
                'accept':'application/json',
                'auth-token':localStorage.getItem('PBPjwtToken')
                },body: JSON.stringify({
                  email:userProfile.email,
                  username:userProfile.username, 
                  password:userProfile.password,
                  address:userProfile.address,
                  firstname:userProfile.firstname,
                  lastname:userProfile.lastname,
                  phoneNumber:userProfile.phoneNumber,
                  age:userProfile.age,
        
                })
                
            });
            const json = await response.json();
            setuserProfile(json);
       
            let imgRef = ref(firebaseStorage, `profile/${username}`);
              uploadBytes(imgRef, profileImglocal).then(() => {
              console.log('image Uploaded!');
            });

            history.push('/');
      } catch (error) {
            console.error(error.message);
            console.log('error occured while updating profile');
      }
    }

  return (
    <>
    {/*<Navbar/>*/}
    <div className="editProfileContainer  d-flex justify-content-center align-items-center">
      <div className="innerContainer col-md-8">
      {/*<h3 className="mt-4">EDIT PROFILE</h3>*/}
      {/*<hr className="container" style={{ height: "3px", color: "black" }} />*/}
      <div className="container">
        <div className="row">
          
        <div className="col-md-6 text-center">
          <div className="container d-flex align-items-center justify-content-center" id="profileImage" >
              <img id="output"  src={profileImg || profileImglocal} alt="profile pic" />
              {/*https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png*/}
          </div>

          <label htmlFor="file-upload" className="custom-file-upload mt-3">
              <i className="fa fa-cloud-upload"></i> Custom Upload
          </label>
          <input id="file-upload" accept="image/*" name="image" type="file" onChange={loadFile} />

        </div>

        {/* form */}
          <div className="col-md-6">
            <form  className="container" onChange={onChange} onSubmit={handleUpdate} autoComplete="off" >
              <div className="row">
                <div className="mb-1 col-md-6">
                  <label htmlFor="fname" className="form-label">
                    <div>First Name</div>
                  </label>
                  <input
                    type="text"
                    name="firstname"
                    className="form-control disable-highlight"
                    id="fname"
                    defaultValue={firstname || ""}
                  />
                </div>
                <div className="mb-1 col-md-6">
                  <label htmlFor="lname" className="form-label">
                    <div>Last Name</div>
                  </label>
                  <input
                    type="text"
                    name="lastname"
                    className="form-control disable-highlight"
                    id="lname"
                    defaultValue={lastname || ""}
                  />
                </div>
              </div>

              <div className="row">
                <div className="mb-1 col-md-12">
                  <label htmlFor="username" className="form-label">
                    <div>Username</div>
                  </label>
                  <input
                    type="text"
                    name="username"
                    className="form-control disable-highlight"
                    id="username"
                    defaultValue={username || ""}
                  />
                </div>
                <div className="mb-1 col-md-12">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    <div>Email</div>
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="form-control disable-highlight"
                    id="email"
                    aria-describedby="emailHelp"
                    defaultValue={email || ""}
                  />
                </div>
              </div>

              <div className="row">
                <div className="mb-1 col-md-12">
                  <label htmlFor="phno" className="form-label">
                    <div>Phone Number</div>
                  </label>
                  <input
                    type="text"
                    name="phoneNumber"
                    className="form-control disable-highlight"
                    id="phno"
                    defaultValue={phoneNumber || ""}
                  />
                </div>
                <div className="mb-1 col-md-12">
                  <label htmlFor="age" className="form-label">
                    <div>Address</div>
                  </label>
                  <input
                    type="text"
                    name="address"
                    className="form-control disable-highlight"
                    id="age"
                    defaultValue={address || ""}
                  />
                </div>
              </div>

              <div className="row">
                <div className="mb-1 col-md-6">
                  <label htmlFor="gender" className="form-label">
                    <div>Age</div>
                  </label>
                  <input
                    type="gender"
                    name="age"
                    className="form-control disable-highlight"
                    id="gender"
                    defaultValue={age || ""}
                  />
                </div>

                {/*<div className="mb-1 col-md-12">
                  <label htmlFor="password" className="form-label">
                    <div>Password</div>
                  </label>
                  <input
                    type="password"
                    name="password"
                    className="form-control disable-highlight"
                    id="password"
                    defaultValue={""}
                  />
                </div>*/}
              </div>

              {/*<div className="row">
                <div className="mb-1 col-md-12">
                  <label htmlFor="file" className="form-label" >
                    <div>Profile Picture</div>
                  </label>
                  <br />
                  <input type="file" accept="image/*" name="image" id="file"  onChange={loadFile} />
                </div>
              </div>*/}

              <div className="container text-center my-3" id="updateBtn">
                <button type="submit" className="btn btn-outline-info" >
                  <div>Update</div>
                </button>
              </div>
            </form>
          </div>
          
        {/*<div className="col-md-6 text-center">
        <div className="container d-flex align-items-center justify-content-center" id="profileImage" >
    <img id="output"  src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="profile pic" />
        </div>
        </div>*/}
      </div>
      </div>
      </div>
    </div>
    </>
  );
};


