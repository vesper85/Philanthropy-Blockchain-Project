import React,{useEffect, useContext} from "react";
import userContext from "../context/User/userContext";

//import Navbar from "../components/Navbar";
import "./EditProfile.css"

export const EditProfile = () => {

    const loadFile = (e)=> {
      try {
        let image = document.getElementById('output');
        image.src = URL.createObjectURL(e.target.files[0]);
      } catch (error) {
        console.error(error.message)
      }
       
    };
    const context = useContext(userContext);
    const { getProfileInfo,userProfile } = context;
    useEffect(() => {
      getProfileInfo();
    }, [])
  
    const {firstname, lastname,username, address, age, phoneNumber, email} = userProfile;

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
              <img id="output"  src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="profile pic" />
              {/*<input type="file" accept="image/*" name="image" id="file"  onChange={loadFile} />*/}
          </div>

          <label htmlFor="file-upload" className="custom-file-upload mt-3">
              <i className="fa fa-cloud-upload"></i> Custom Upload
          </label>
          <input id="file-upload" accept="image/*" name="image" type="file" onChange={loadFile} />

        </div>

        {/* form */}
          <div className="col-md-6">
            <form  className="container" autoComplete="off" >
              <div className="row">
                <div className="mb-1 col-md-6">
                  <label htmlFor="fname" className="form-label">
                    <div>First Name</div>
                  </label>
                  <input
                    type="text"
                    name="fname"
                    className="form-control disable-highlight"
                    id="fname"
                    value={firstname}
                  />
                </div>
                <div className="mb-1 col-md-6">
                  <label htmlFor="lname" className="form-label">
                    <div>Last Name</div>
                  </label>
                  <input
                    type="text"
                    name="lname"
                    className="form-control disable-highlight"
                    id="lname"
                    value={lastname}
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
                    value={username}
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
                    value={email}
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
                    name="phno"
                    className="form-control disable-highlight"
                    id="phno"
                    value={phoneNumber}
                  />
                </div>
                <div className="mb-1 col-md-12">
                  <label htmlFor="age" className="form-label">
                    <div>Address</div>
                  </label>
                  <input
                    type="text"
                    name="age"
                    className="form-control disable-highlight"
                    id="age"
                    value={address}
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
                    name="gender"
                    className="form-control disable-highlight"
                    id="gender"
                    value={age}
                  />
                </div>

                <div className="mb-1 col-md-12">
                  <label htmlFor="password" className="form-label">
                    <div>Password</div>
                  </label>
                  <input
                    type="password"
                    name="password"
                    className="form-control disable-highlight"
                    id="password"
                  />
                </div>
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


