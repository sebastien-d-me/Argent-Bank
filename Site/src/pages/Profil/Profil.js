import "./Profil.css";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getLoginFetch, saveUserProfil } from "../../services/API";
import { getFirstName } from "../../features/User/firstName";
import { getLastName } from "../../features/User/lastName";
import { Navigate } from "react-router-dom";
import Account from "../../components/Account/Account";


function Profil() {
    // Use State
    let [newFirstName, setNewFirstName] = useState("");
    let [newLastName, setNewLastName] = useState("");


    // Use Selector / Use Effect
    const dispatch = useDispatch();

    const firstName = useSelector((state) => state.firstName.value);
    const lastName = useSelector((state) => state.lastName.value);
    
    const token = useSelector((state) => state.token.value);

    useEffect(() => {
        const user = getLoginFetch(token);
        user.then(obj => {
            dispatch(getFirstName(obj.firstName));
            dispatch(getLastName(obj.lastName));
        });
    }, []);


    // Edit name
    const handleEdit = () => {
        document.getElementById("fullName").style.display = "none";
        document.getElementById("edit-button").style.display = "none";
        document.getElementById("edit-section").style.display = "block";
    }

    
    // Save Edit
    const handleEditSave = () => {
        document.getElementById("fullName").style.display = "block";
        document.getElementById("edit-button").style.display = "initial";
        document.getElementById("edit-section").style.display = "none";
        dispatch(getFirstName(newFirstName));
        dispatch(getLastName(newLastName));
        const fullName = {"firstName": newFirstName, "lastName": newLastName};
        saveUserProfil(token, fullName);
    }


    // Cancel Edit
    const handleEditCancel = () => {
        document.getElementById("fullName").style.display = "block";
        document.getElementById("edit-button").style.display = "initial";
        document.getElementById("edit-section").style.display = "none";
    }


    // Redirection
    if(token === 0) return <Navigate to="/login" />

    return (
        <main className="bg-dark">
            <div className="header">
                <h1 id="welcome-name">
                    Welcome back<br />
                    <span id="fullName">{firstName} {lastName}</span>
                </h1>
                <button id="edit-button" type="button" onClick={handleEdit}>Edit Name</button>
                <div id="edit-section">
                    <form name="edit">
                        <div className="profil-input-wrapper">
                            <input type="text" placeholder={firstName} onChange={e => setNewFirstName(e.target.value)} required />
                        </div>
                        <div className="profil-input-wrapper">
                            <input type="text" placeholder={lastName} onChange={e => setNewLastName(e.target.value)} required />
                        </div>
                    </form>
                    <div className="btn-form">
                        <button type="submit" className="save-button" onClick={handleEditSave}>Save</button>
                        <button type="button" className="cancel-button" onClick={handleEditCancel}>Cancel</button>
                    </div>
                </div>
            </div>
            <h2 className="sr-only">Accounts</h2>
            <Account titre="Argent Bank Checking (x8349)" montant="$2,082.79" description="Available Balance" />
            <Account titre="Argent Bank Savings (x6712)" montant="$10,928.42" description="Available Balance" />
            <Account titre="Argent Bank Credit Card (x8349)" montant="$184.30" description="Current Balance" />
        </main>
    );
}

export default Profil;