import React, {useState} from 'react'
import userContext from './userContext'


const UserState = ({children}) => {
    
    const [globalCredentials, setglobalCredentials] = useState({email:"",username:"", password:"", rpassword:"", address:"", firstname:"", lastname:"", phoneno:"", age:""})

    const [loggedIn, setloggedIn] = useState(localStorage.getItem('PBPjwtToken') ? true :false);

    return (
        <userContext.Provider value={{globalCredentials, setglobalCredentials,loggedIn,setloggedIn}} >
            {children}
        </userContext.Provider>
    )
}

export default UserState
