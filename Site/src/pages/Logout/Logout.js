import { useDispatch } from "react-redux";
import { getToken } from "../../features/token/token";
import { Navigate } from "react-router-dom";


function Logout() {
    // Change the token
    const dispatch = useDispatch();
    dispatch(getToken(0));

    return <Navigate to="/login" /> 
}

export default Logout;
