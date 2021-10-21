import React, {useState} from 'react'
import userContext from './userContext'


const UserState = ({children}) => {
    //const initialCredentials = {
    //    username:"",
    //    password:""
    //}
    //const [userCredentials, setuserCredentials] = useState(initialCredentials)

  const haha =()=>{
      console.log('haha');
  }

    return (
        <userContext.Provider value={haha} >
            {children}
        </userContext.Provider>
    )
}

export default UserState
