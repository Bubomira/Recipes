import { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'

import { getProfile } from '../../services/userService'

import './UserProfile.css'

export default function UserProfile() {
    let [profile,setProfile] = useState({
        username:'',
        email:''
    })

    useEffect(()=>{
        getProfile().then(profileData=>{
            setProfile(profileData)
        })

    },[])


    
    return (
        <div className="wrapper-profile">
        <div className="profile-container">
            <div className="avatar">
                <img
                    src="https://th.bing.com/th/id/OIP.rUR6aapcObvHL1WCRjhUBQAAAA?pid=ImgDet&w=300&h=300&rs=1"
                    height={150}
                    width={150}
                />
            </div>
            <h3>Username: {profile.username} </h3>
            <h3>Email: {profile.email} </h3>
            <p className="liked-owned-message">
                <Link to={`/likedRecepies/${profile._id}`}>liked recepies</Link>
            </p>
            <p className='liked-owned-message'>
                <Link  to={`/ownedRecipies/${profile._id}`}>owned recepies</Link>
            </p>
        </div>
     </div>

    )
}