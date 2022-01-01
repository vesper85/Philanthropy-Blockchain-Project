import React, { useState,useContext } from 'react'
import './Login.css'
import Navbar from '../components/Navbar'
import { useHistory } from 'react-router'
import userContext from '../context/User/userContext'

 //'auth-token':localStorage.getItem('PBPjwtToken')



const Login = () => {

  const [credentialLogin, setcredentialLogin] = useState({username:"", password:""})
  const [credentialSignUp, setcredentialSignUp] = useState({email:"",username:"", password:"", rpassword:"", address:"", firstname:"", lastname:"", phoneno:"", age:""})
  
  const context = useContext(userContext);
  const { setglobalCredentials,setloggedIn} = context;
  
  const history = useHistory();
  
  
  const handleOnClickSignup = (e)=>{
        const container = document.querySelector('.container_1');
         container.classList.add('sign-up-mode');

        } 
    const handleOnClickSignin = (e)=>{
        const container = document.querySelector('.container_1');
        container.classList.remove('sign-up-mode');
    
    }
    const onChange = (e)=>{
      setcredentialLogin({...credentialLogin,[e.target.name]:e.target.value})
      //console.log([e.target.name],e.target.value)
    }
    
    const onChangeSignUp = (e)=>{
      setcredentialSignUp({...credentialSignUp,[e.target.name]:e.target.value})
      //console.log([e.target.name],e.target.value)
    }



    const handleLogin  = async (e)=>{
      e.preventDefault();
      console.log('submit btn clicked');
      try {
        const url = "http://localhost:5000/api/user/loginuser";
        const response = await fetch(url, {
            method: 'POST', 
            headers: {
              'Content-Type': 'application/json',
              'accept':'application/json',
             
              
            },
            body: JSON.stringify({username:credentialLogin.username, password:credentialLogin.password})
          });
          const json = await response.json();
          if(response.ok)
          {
            localStorage.setItem('PBPjwtToken',json.jwtToken);
            //console.log(json.jwtToken);
            setloggedIn(true);
            history.push('/');
          }
          
          
      } catch (error) {
        setloggedIn(false);
        console.error(error.message)
      }
      
    }

    const handleSignUp = async (e)=>{
      e.preventDefault();
      //console.log('signup btn clicked');

      if(credentialSignUp.password !== credentialSignUp.rpassword)
      {
        return console.log('re-entered password incorrect')
      }
      try {
        //console.log(credentialSignUp);
        setglobalCredentials(credentialSignUp);
        //console.log(globalCredentials);
        history.push("/register")
        
      } catch (error) {
        console.error(error.message)
      }
      


      //const url = "http://localhost:5000/api/user/createuser"
      //const response = await fetch(url,
      //  {
      //    method: 'POST', 
      //    headers: {
      //      'Content-Type': 'application/json',
          
      //    },
      //    body: JSON.stringify({
      //        email:credentialSignUp.email,
      //        username:credentialSignUp.username, 
      //        password:credentialSignUp.password})
      //  });
    }

    //if(!toggleSignup)
    //{
    //  console.log('login page');
    //}




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
                    <label htmlFor="label-email" className="input_label_login mb-1 ">Enter username</label>
                    <input name="username" type="name"  onChange={onChange}  className="form-control rounded-0 disable-highlight" id="label-lemail" aria-describedby="emailHelp"/>
                </div>
                <div className="form-group my-2 col-7 ">
                    <label htmlFor="label-password" className="input_label_login mb-1">Enter Password</label>
                    <input name="password" onChange={onChange} type="password"  className="form-control rounded-0 disable-highlight " id="label-lpassword" aria-describedby="passHelp"/>
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
              <form onSubmit={handleSignUp}   className="sign-up-form">
                <h2 className="title">Sign up</h2>

                {/* inpur fields signup */}
                <div className="form-group my-1 col-7  ">
                    <label htmlFor="label-email" className="input_label_login mb-1 ">Enter email</label>
                    <input name="email" type="email" className="form-control rounded-0 disable-highlight" id="label-semail" onChange={onChangeSignUp} aria-describedby="emailHelp"/>
                </div>

                <div className="form-group my-1 col-7  ">
                    <label htmlFor="label-username" className="input_label_login mb-1 ">username</label>
                    <input name="username" type="name" className="form-control rounded-0 disable-highlight" id="label-susername" onChange={onChangeSignUp} aria-describedby="emailHelp"/>
                </div>

                <div className="form-group my-1 col-7 ">
                    <label htmlFor="label-password" className="input_label_login mb-1">Password</label>
                    <input name="password" type="password" className="form-control rounded-0 disable-highlight " id="label-spassword" onChange={onChangeSignUp} aria-describedby="passHelp"/>
                </div>
                <div className="form-group my-1 col-7 ">
                    <label htmlFor="label-password" className="input_label_login mb-1">Re-enter Password</label>
                    <input name="rpassword" type="password" className="form-control rounded-0 disable-highlight " id="label-spassword" onChange={onChangeSignUp} aria-describedby="passHelp"/>
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
