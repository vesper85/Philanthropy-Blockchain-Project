import React, { useState,useContext } from 'react'
import './Login.css'
import Navbar from '../components/Navbar'
import userContext from '../context/User/userContext'

const Login = () => {

  const [credential, setcredential] = useState({username:"", password:""})


    const handleOnClickSignup = (e)=>{
        const container = document.querySelector('.container_1');
         container.classList.add('sign-up-mode');

        } 
    const handleOnClickSignin = (e)=>{
        const container = document.querySelector('.container_1');
        container.classList.remove('sign-up-mode');
    
    }
    const onChange = (e)=>{
      setcredential({...credential,[e.target.name]:e.target.value})
    }
    const handleLogin  = async (e)=>{
      e.preventDefault();
      console.log('submit btn clicked');
      //const url = "http://localhost:5000/api/user/loginuser";
      //  const response = await fetch(url, {
      //      method: 'POST', 
      //      headers: {
      //        'Content-Type': 'application/json'
      //      },
      //      body: JSON.stringify({username:credential.username, password:credential.password})
      //    });

      //    const json = await response.json()
      //    console.log(json)
    }
    




    return (
      <div>
        <Navbar/>
        <div className="container_1">
          <div className="forms-container">
            <div className="signin-signup">
              <form onSubmit={handleLogin} className="sign-in-form">
                <h2 className="title">Login In</h2>
                
                {/* login fields */}
                <div className="form-group my-2 col-7  ">
                    <label htmlFor="label-email" className="input_label_login mb-1 ">Enter email</label>
                    <input type="name"  onChange={onChange}  className="form-control rounded-0 disable-highlight" id="label-lemail" aria-describedby="emailHelp"/>
                </div>
                <div className="form-group my-2 col-7 ">
                    <label htmlFor="label-password" className="input_label_login mb-1">Enter Password</label>
                    <input type="password"  className="form-control rounded-0 disable-highlight " id="label-lpassword" aria-describedby="passHelp"/>
                </div>

                <input
                  className="btn_login solid"
                  type="submit"
                  value="Login"
                  
                />
                <p className="social-text">Or Sign in with social platforms</p>
                <div className="social-media">
                  <a href="/" className="social-icon">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="/" className="social-icon">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="/" className="social-icon">
                    <i className="fab fa-google"></i>
                  </a>
                  <a href="/" className="social-icon">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </form>
              <form  className="sign-up-form">
                <h2 className="title">Sign up</h2>

                {/* inpur fields signup */}
                <div className="form-group my-1 col-7  ">
                    <label htmlFor="label-email" className="input_label_login mb-1 ">Enter email</label>
                    <input type="email" className="form-control rounded-0 disable-highlight" id="label-semail" aria-describedby="emailHelp"/>
                </div>

                <div className="form-group my-1 col-7  ">
                    <label htmlFor="label-username" className="input_label_login mb-1 ">username</label>
                    <input type="name" className="form-control rounded-0 disable-highlight" id="label-susername" aria-describedby="emailHelp"/>
                </div>

                <div className="form-group my-1 col-7 ">
                    <label htmlFor="label-password" className="input_label_login mb-1">Password</label>
                    <input type="password" className="form-control rounded-0 disable-highlight " id="label-spassword" aria-describedby="passHelp"/>
                </div>
                <div className="form-group my-1 col-7 ">
                    <label htmlFor="label-password" className="input_label_login mb-1">Re-enter Password</label>
                    <input type="password" className="form-control rounded-0 disable-highlight " id="label-spassword" aria-describedby="passHelp"/>
                </div>

                <input type="submit" className="btn_login" value="Sign up" />
                
              </form>
            </div>
          </div>

          <div className="panels-container">
            <div className="panel left-panel">
              <div className="content">
                <h3>New here ?</h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Debitis, ex ratione. Aliquid!
                </p>

                <button
                  className="btn_login transparent"
                  id="sign-up-btn"
                  onClick={handleOnClickSignup}
                >
                  Sign up
                </button>
              </div>
              <img src="img/log.svg" className="image" alt="" />
            </div>
            <div className="panel right-panel">
              <div className="content">
                <h3>One of us ?</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nostrum laboriosam ad deleniti.
                </p>
                <button
                  className="btn_login transparent"
                  id="sign-in-btn"
                  onClick={handleOnClickSignin}
                >
                  Login in
                </button>
              </div>
              <img src="img/register.svg" className="image" alt="" />
            </div>
          </div>
        </div>
      </div>
    );
}

export default Login
