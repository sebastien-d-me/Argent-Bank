import "./Profil.css";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { getLoginFetch, saveUserProfil } from "../../services/API";
import { Navigate } from "react-router-dom";
import Account from "../../components/Feature/Account/Account";


function Profil() {
    // Use State
    let [firstName, setFirstName] = useState("");
    let [lastName, setLastName] = useState("");
    let [fullName, setFullName] = useState("");

    let [newFirstName, setNewFirstName] = useState("");
    let [newLastName, setNewLastName] = useState("");


    // Use Selector / Use Effect
    const token = useSelector((state) => state.token.value);
    useEffect(() => {
        const user = getLoginFetch(token);
        user.then(obj => {
            setFirstName(obj.firstName);
            setLastName(obj.lastName);
            setFullName(`${obj.firstName} ${obj.lastName}`);
        });
    }, []);


    // Edit name
    const handleEdit = () => {
        document.getElementById("edit-button").style.display = "none";
        document.getElementById("edit-section").style.display = "block";
        setFullName("");
    }

    
    // Save Edit
    const handleEditSave = () => {
        document.getElementById("edit-button").style.display = "initial";
        document.getElementById("edit-section").style.display = "none";
        setFullName(`${newFirstName} ${newLastName}`);
        const fullName = {"firstName": newFirstName, "lastName": newLastName};
        saveUserProfil(token, fullName);
    }


    // Cancel Edit
    const handleEditCancel = () => {
        document.getElementById("edit-button").style.display = "initial";
        document.getElementById("edit-section").style.display = "none";
        setFullName(`${firstName} ${lastName}`);
    }


    // Redirection
    if(token === 0) return <Navigate to="/login" />

    return (
        <main className="bg-dark">
            <div className="header">
                <h1 id="welcome-name">Welcome back<br />{fullName}</h1>
                <button id="edit-button" type="button" onClick={handleEdit}>Edit Name</button>
                <div id="edit-section">
                    <form name="edit">
                        <div class="profil-input-wrapper">
                            <input type="text" placeholder={firstName} onChange={e => setNewFirstName(e.target.value)} required />
                        </div>
                        <div class="profil-input-wrapper">
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