import { useEffect,useContext } from "react";
import { useNavigate } from "react-router-dom";

import AuthContext from "../../../contexts/AuthContext";

import { logout } from "../../../services/authService";

export default function Logout(){
    const {logoutUser} =useContext(AuthContext)
    const navigate = useNavigate()
    useEffect(()=>{
       logout().then(()=>{
        logoutUser()
        navigate('/')
       })
    },[])

    return [];
}