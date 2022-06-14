import "./Login.css";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getLogin } from "../../services/API";
import { getToken } from "../../features/token/token";
import { Navigate } from "react-router-dom";


function Login() {
    // Use State
    let [loginStatus, setLoginStatus] = useState(0);

    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");


    // Use Selector / Use Effect
    const token = useSelector((state) => state.token.value);


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
    if(token !== 0 || loginStatus === 200) return <Navigate to="/profil" /> 

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