import React, {useState} from 'react'
import userContext from './userContext'


const UserState = ({children}) => {
    
    const [globalCredentials, setglobalCredentials] = useState({email:"",username:"", password:"", rpassword:"", address:"", firstname:"", lastname:"", phoneno:"", age:""})

    const [loggedIn, setloggedIn] = useState(localStorage.getItem('PBPjwtToken') ? true :false);

    const [userProfile, setuserProfile] = useState({email:"",username:"", address:"", firstname:"", lastname:"", phoneno:"", age:""})
    const getProfileInfo = async() =>{
        try {
            const url = "http://localhost:5000/api/user/fetchuser";
            const response = await fetch(url, {
                method: 'GET', 
                headers: {
                'Content-Type': 'application/json',
                'accept':'application/json',
                'auth-token':localStorage.getItem('PBPjwtToken')
                }
            });
            const json = await response.json();
            setuserProfile(json)
            //console.log(json);
        } catch (error) {
            console.error(error.message);
            console.log('error occured in getprofileinfo');
        }
    }
    return (
        <userContext.Provider value={{globalCredentials, setglobalCredentials,loggedIn,setloggedIn,getProfileInfo, userProfile,setuserProfile}} >
            {children}
        </userContext.Provider>
    )
}

export default UserState
