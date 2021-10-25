import React from 'react'
import "./Registration.css"

export const Registration = () => {
    return (
    <div className="reg">
<div className="container_reg">
    <div className="title_reg">Registration</div>
    <div className="content_reg">
      <form>
        <div className="user-details_reg">
          <div className="input-box_reg">
            <span className="details_reg">First Name</span>
            <input type="text" placeholder="Enter your First name" required />
          </div>
          <div className="input-box_reg">
            <span className="details_reg">Last name</span>
            <input type="text" placeholder="Enter your Last name" required />
          </div>
          <div className="input-box_reg">
            <span className="details">Username</span>
            <input type="text" placeholder="Enter your Username" required />
          </div>
          <div className="input-box_reg">
            <span className="details">Email</span>
            <input type="text" placeholder="Enter your Email" required />
          </div>
          <div className="input-box_reg">
            <span className="details">Phone Number</span>
            <input type="text" placeholder="Enter your Phone Number" required />
          </div>
          <div className="input-box_reg">
            <span className="details_reg">Age</span>
            <input type="number" placeholder="Enter your age in number" required />
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
