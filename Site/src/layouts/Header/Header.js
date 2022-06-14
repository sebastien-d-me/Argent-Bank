import "./Header.css";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { getLoginFetch } from "../../services/API";
import { NavLink } from "react-router-dom";
import logo from "../../assets/img/argentBankLogo.png";


function Header() {
    // Use State
    let [firstName, setFirstName] = useState("");


    // Use Selector / Use Effect
    const token = useSelector((state) => state.token.value);
    useEffect(() => {
        const user = getLoginFetch(token);
        user.then(obj => {
            setFirstName(obj.firstName);
        });
    });

    return (
        <nav className="main-nav">
            <NavLink to="/" className="main-nav-logo">
                <img className="main-nav-logo-image" src={logo} alt="Argent Bank Logo" />
                <h1 className="sr-only">Argent Bank</h1>
            </NavLink>
            <div>
                {/* Anonyme */}
                { 
                    token === 0 &&
                    <>
                        <NavLink to="/login" className="main-nav-item">
                            <i className="fa fa-user-circle"></i>
                            Sign In
                        </NavLink>
                    </>
                }
                
                {/* Connecté */}
                {
                    token !== 0 &&
                    <>
                        <NavLink to="/profil" className="main-nav-item">
                            <i className="fa fa-user-circle"></i>
                            {firstName}
                        </NavLink>
                        <NavLink to="/logout" className="main-nav-item">
                            <i className="fa fa-sign-out"></i>
                            Sign Out
                        </NavLink>
                    </>
                }
            </div>
        </nav>
    );
}

export default Header;