import { useDispatch } from "react-redux";
import { getToken } from "../../features/Token/token";
import { Navigate } from "react-router-dom";
import { getFirstName } from "../../features/User/firstName";
import { getLastName } from "../../features/User/lastName";
import { useEffect } from "react";


function Logout() {
    // Change the token
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getToken(0));
        dispatch(getFirstName(""));
        dispatch(getLastName(""));
    });
    
    
    // Redirection
    return <Navigate to="/" /> 
}

export default Logout;
