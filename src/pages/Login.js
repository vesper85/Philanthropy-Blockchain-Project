import React, { useState, useContext, useEffect} from 'react'
import './Login.css'
import Navbar from '../components/Navbar'
import { useHistory } from 'react-router'
import userContext from '../context/User/userContext'

//'auth-token':localStorage.getItem('PBPjwtToken')



const Login = () => {

  const [credentialLogin, setcredentialLogin] = useState({ username: "", password: "" })
  const [credentialSignUp, setcredentialSignUp] = useState({ email: "", username: "", password: "", rpassword: "", address: "", firstname: "", lastname: "", phoneno: "", age: "" })
  
  const [loginFormErrors, setloginFormErrors] = useState({});
  const [isLoginSubmit, setIsLoginSubmit] = useState(false);
  const [signupFormErrors, setSignupFormErrors] = useState({});
  const [isSignupSubmit, setIsSignupSubmit] = useState(false);

  const context = useContext(userContext);
  const { setglobalCredentials, setloggedIn } = context;

  const history = useHistory();


  const handleOnClickSignup = (e) => {
    const container = document.querySelector('.container_1');
    container.classList.add('sign-up-mode');

  }
  const handleOnClickSignin = (e) => {
    const container = document.querySelector('.container_1');
    container.classList.remove('sign-up-mode');

  }
  const onChange = (e) => {
    setcredentialLogin({ ...credentialLogin, [e.target.name]: e.target.value })
    //console.log([e.target.name],e.target.value)
  }

  const onChangeSignUp = (e) => {
    setcredentialSignUp({ ...credentialSignUp, [e.target.name]: e.target.value })
    //console.log([e.target.name],e.target.value)
  }

  useEffect (() =>{
    console.log(loginFormErrors);
    if (Object.keys(loginFormErrors).length === 0 && isLoginSubmit) {
      console.log(credentialLogin);
    }
  },[loginFormErrors]);

  useEffect (() =>{
    console.log(signupFormErrors);
    if (Object.keys(signupFormErrors).length === 0 && isSignupSubmit) {
      console.log(credentialSignUp);
    }
  },[signupFormErrors]);

  const validate = (values)=> {
    const errors = {};
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const regexUsernameLength = /^.{3,16}$/;
    const isWhitespace = /^(?=.*\s)/;
    const isContainsUppercase = /^(?=.*[A-Z])/;
    const isContainsLowercase = /^(?=.*[a-z])/;
    const isContainsNumber = /^(?=.*[0-9])/;
    const isContainsSymbol = /^(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹])/;
    const isValidLength = /^.{10,16}$/;
    
    // Email validation
    if(!values.email){
      errors.email = "Email is required!";
    }
    else if(!regexEmail.test(values.email)){
      errors.email = "This is not a valid email format!";
    }
    
    // Username Validation
    if(!values.username){
      errors.username = "Username is required!";
    }
    else if(!regexUsernameLength.test(values.username)){
      errors.username = "Username must be 3-16 Characters Long.";
    }

    // Password validation
    if(!values.password){
      errors.password = "Password is required!";
    }
    else if(isWhitespace.test(values.password)){
      errors.password = "Password must not contain Whitespaces.";
    }
    else if(!isContainsUppercase.test(values.password)){
      errors.password = "Password must have at least one Uppercase Character.";
    }
    else if(!isContainsLowercase.test(values.password)){
      errors.password = "Password must have at least one Lowercase Character.";
    }
    else if(!isContainsNumber.test(values.password)){
      errors.password = "Password must contain at least one Digit.";
    }
    else if(!isContainsSymbol.test(values.password)){
      errors.password = "Password must contain at least one Special Symbol.";
    }
    else if(!isValidLength.test(values.password)){
      errors.password = "Password must be 10-16 Characters Long.";
    }

    // Re-password validation
    if(!values.rpassword){
      errors.rpassword = "Password is required!";
    }
    else if(values.password !== values.rpassword){
      errors.rpassword = "Passwords do not match!";
    }

    return errors;
  }



  const handleLogin = async (e) => {
    e.preventDefault();
    // console.log('submit btn clicked');
    setloginFormErrors(validate(credentialLogin));
    setIsLoginSubmit(true);
    try {
      const url = "http://localhost:5000/api/user/loginuser";
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'accept': 'application/json',


        },
        body: JSON.stringify({ username: credentialLogin.username, password: credentialLogin.password })
      });
      const json = await response.json();
      if (response.ok) {
        localStorage.setItem('PBPjwtToken', json.jwtToken);
        //console.log(json.jwtToken);
        setloggedIn(true);
        history.push('/');
      }


    } catch (error) {
      setloggedIn(false);
      console.error(error.message)
    }
  }

  const handleSignUp = async (e) => {
    e.preventDefault();
    setSignupFormErrors(validate(credentialSignUp));
    setIsSignupSubmit(true);
    //console.log('signup btn clicked');

    if (credentialSignUp.password !== credentialSignUp.rpassword) {
      return console.log('re-entered password incorrect')
    }
    try {
      //console.log(credentialSignUp);
      setglobalCredentials(credentialSignUp);
      //console.log(globalCredentials);
      if(isSignupSubmit === true)
        history.push("/register")
      else
        console.log("Invalid Input!");
        

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
      <Navbar />
      <div className="container_1">
        <div className="forms-container">
          <div className="signin-signup">
            <form onSubmit={handleLogin} className="sign-in-form">
              <h2 className="title">Login In</h2>

              {/* login fields */}
              <div className="form-group my-2 col-7  ">
                <label htmlFor="label-email" className="input_label_login mb-1 ">Enter username</label>
                <input name="username" type="name" onChange={onChange} className="form-control rounded-0 disable-highlight" value={credentialLogin.username} id="label-lemail" aria-describedby="emailHelp" />
              </div>
              {loginFormErrors.username && <p className="error-text">{loginFormErrors.username}</p>}

              <div className="form-group my-2 col-7 ">
                <label htmlFor="label-password" className="input_label_login mb-1">Enter Password</label>
                <input name="password" onChange={onChange} type="password" className="form-control rounded-0 disable-highlight" value={credentialLogin.password} id="label-lpassword" aria-describedby="passHelp" />
              </div>
              {loginFormErrors.password && <p className="error-text">{loginFormErrors.password}</p>}

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

            <form onSubmit={handleSignUp} className="sign-up-form">
              <h2 className="title">Sign up</h2>

              {/* inpur fields signup */}
              <div className="form-group my-1 col-7  ">
                <label htmlFor="label-email" className="input_label_login mb-1 ">Enter email</label>
                <input name="email" type="email" className="form-control rounded-0 disable-highlight" id="label-semail" onChange={onChangeSignUp} value={credentialSignUp.email} aria-describedby="emailHelp" />
              </div>
              {signupFormErrors.email && <p className="error-text">{signupFormErrors.email}</p>}

              <div className="form-group my-1 col-7  ">
                <label htmlFor="label-username" className="input_label_login mb-1 ">username</label>
                <input name="username" type="name" className="form-control rounded-0 disable-highlight" id="label-susername" onChange={onChangeSignUp} value={credentialSignUp.username} aria-describedby="emailHelp" />
              </div>
              {signupFormErrors.username && <p className="error-text">{signupFormErrors.username}</p>}

              <div className="form-group my-1 col-7 ">
                <label htmlFor="label-password" className="input_label_login mb-1">Password</label>
                <input name="password" type="password" className="form-control rounded-0 disable-highlight " id="label-spassword" onChange={onChangeSignUp} value={credentialSignUp.password} aria-describedby="passHelp"/>
              </div>
              {signupFormErrors.password && <p className="error-text">{signupFormErrors.password}</p>}

              <div className="form-group my-1 col-7 ">
                <label htmlFor="label-password" className="input_label_login mb-1">Re-enter Password</label>
                <input name="rpassword" type="password" className="form-control rounded-0 disable-highlight " id="label-spassword" onChange={onChangeSignUp} value={credentialSignUp.rpassword} aria-describedby="passHelp" />
              </div>
              {signupFormErrors.rpassword && <p className="error-text">{signupFormErrors.rpassword}</p>}

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
