import { createContext } from 'react'
import { Link } from 'react-router-dom'

import './UserProfile.css'

export default function UserProfile() {
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
            <h3>Username: Mariya </h3>
            <h3>Email: mariya@abv.bg </h3>
            <p>
                
                <Link to={'/likedRecepies/userId'}>liked recepies</Link>
            </p>
            <p>
                <Link to={'/ownedRecipies/userId'}>owned recepies</Link>
            </p>
        </div>
     </div>

    )
}