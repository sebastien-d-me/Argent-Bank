import "./Login.css";
import { getLogin, getLoginFetch } from "../../services/API";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getToken } from "../../features/token/token";
import { Navigate } from "react-router-dom";



function Login() {
    // Use State
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    let [loginStatus, setLoginStatus] = useState(0);

    let [userConnected, setUserConnected] = useState(0);


    // Use Selector / Use Effect
    const token = useSelector((state) => state.token.value);
    useEffect(() => {
        console.log(token)
        const user = getLoginFetch(token);
        user.then(obj => {
            setUserConnected(obj.status);
        });
    });


    // Handle Submit
    const handleSubmit = (event) => {
        event.preventDefault();
        const login = getLogin({"email": "tony@stark.com", "password": "password123"});
        /*const loginStatus = getLogin({"email": email, "password": password});*/
        login.then(obj => {
            setLoginStatus(obj.status);
            ajoutToken(obj.token);
        });
    }


    // Add the token
    const dispatch = useDispatch();
    const ajoutToken = (token) => {
        dispatch(getToken(token));
    }


    // Redirection
    if(loginStatus === 200) return <Navigate to="/profil" /> 
    if(userConnected === 200) return <Navigate to="/profil" />

    return (
        <main className="bg-dark">
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                <form onSubmit={handleSubmit}>
                    <div className="input-wrapper">
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" onChange={e => setEmail(e.target.value)} />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={e => setPassword(e.target.value)} />
                    </div>
                    <div className="input-remember">
                        <input type="checkbox" id="remember-me" />
                        <label htmlFor="remember-me">Remember me</label>
                    </div>
                    <button className="sign-in-button">Sign In</button>
                </form>
            </section>
        </main>
    );
}

export default Login;