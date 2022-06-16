import { useDispatch } from "react-redux";
import { getToken } from "../../features/Token/token";
import { Navigate } from "react-router-dom";


function Logout() {
    // Change the token
    const dispatch = useDispatch();
    dispatch(getToken(0));


    // Redirection
    return <Navigate to="/" /> 
}

export default Logout;
