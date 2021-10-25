import React, {useState} from 'react'
import userContext from './userContext'


const UserState = ({children}) => {
    //const initialCredentials = {
    //    username:"",
    //    password:""
    //}
    //const [userCredentials, setuserCredentials] = useState(initialCredentials)
    const [globalCredentials, setglobalCredentials] = useState({email:"",username:"", password:"", rpassword:"", address:"", firstname:"", lastname:"", phoneno:"", age:""})

    //const handleToggleSignup = () =>{
    //    settoggleSignup(true)
    //}


    return (
        <userContext.Provider value={{globalCredentials, setglobalCredentials}} >
            {children}
        </userContext.Provider>
    )
}

export default UserState
