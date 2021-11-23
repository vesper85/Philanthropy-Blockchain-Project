import React, {useState} from 'react'
import userContext from './userContext'
//initialize firebase instances
import { initializeApp } from "firebase/app";
import firebaseConfig from '../../config/firebaseConfig';
import { getStorage, ref, uploadBytes,getDownloadURL } from "firebase/storage";

const firebaseApp = initializeApp(firebaseConfig);
const firebaseStorage = getStorage(firebaseApp);



const UserState = ({children}) => {
    
    //state used for 2 step registration / signup
    const [globalCredentials, setglobalCredentials] = useState({email:"",username:"", password:"", rpassword:"", address:"", firstname:"", lastname:"", phoneno:"", age:""});

    //global login state
    const [loggedIn, setloggedIn] = useState(localStorage.getItem('PBPjwtToken') ? true :false);

    //global state for storing profile info, to display userinfo and edit profile
    const [userProfile, setuserProfile] = useState({email:"",username:"", address:"", firstname:"", lastname:"", phoneno:"", age:""});

    const [profileImg, setprofileImg] = useState("")

    const [allCardsInfo, setallCardsInfo] = useState({})

    //gets userInfo
    const getProfileInfo = async() =>{
        try {
            const url = "http://localhost:5000/api/user/fetchuser";

            //generate fetch request to get user info for the profile
            const response = await fetch(url, {
                method: 'GET', 
                headers: {
                'Content-Type': 'application/json',
                'accept':'application/json',
                'auth-token':localStorage.getItem('PBPjwtToken')
                }
            });

            //converting to json format
            const json = await response.json();

            //setting user profile state
            setuserProfile(json)

            let Purl = await getDownloadURL( ref(firebaseStorage, `profile/${json.username}`))
            setprofileImg(Purl);
            
        } catch (error) {
            console.error(error.message);
            console.log('error occured in getprofileinfo');
        }
    }

    const getAllCharities = async() => {
        try {
            const url = "http://localhost:5000/api/charity/fetchallcharities"
            const response = await fetch(url, {
                method: 'GET', 
                headers: {
                    'Content-Type': 'application/json',
                    'accept':'application/json',
                }
            });
            const data = await response.json();
            setallCardsInfo(data)
            // console.log(typeof(data), data)
            console.log(allCardsInfo)
        } catch(error) {
            console.log(error)
        }
    }


            
    return (
        <userContext.Provider value={{globalCredentials, setglobalCredentials,loggedIn,setloggedIn,getProfileInfo, userProfile,setuserProfile,profileImg,allCardsInfo,getAllCharities}} >
            {children}
        </userContext.Provider>
    )
}

export default UserState
