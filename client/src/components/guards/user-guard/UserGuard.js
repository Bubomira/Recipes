import { useContext } from "react";

import { Navigate,Outlet } from "react-router-dom";

import { AuthContext } from "../../../contexts/AuthContext";

export default function UserGuard(){
    const {user} = useContext(AuthContext);

    if(!user.token){
        return <Navigate to="/login" replace/>
    }

    return <Outlet/>

}