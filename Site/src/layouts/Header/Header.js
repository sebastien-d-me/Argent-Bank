import "./Header.css";
import { NavLink } from "react-router-dom";
import logo from "../../assets/img/argentBankLogo.png";


function Header() {
    return (
        <nav className="main-nav">
            <NavLink to="/" className="main-nav-logo">
                <img className="main-nav-logo-image" src={logo} alt="Argent Bank Logo" />
                <h1 className="sr-only">Argent Bank</h1>
            </NavLink>
            <div>
                {/* Anonyme */}
                <NavLink to="/login" className="main-nav-item">
                    <i className="fa fa-user-circle"></i>
                    Sign In
                </NavLink>
                
                {/* Connecté */}
                <NavLink to="/profil" className="main-nav-item">
                    <i className="fa fa-user-circle"></i>
                    Tony
                </NavLink>
                <NavLink to="/login" className="main-nav-item">
                    <i className="fa fa-sign-out"></i>
                    Sign Out
                </NavLink>
            </div>
        </nav>
    );
}

export default Header;