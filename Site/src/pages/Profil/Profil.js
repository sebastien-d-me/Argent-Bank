import "./Profil.css";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { getLoginFetch } from "../../services/API";
import { Navigate } from "react-router-dom";
import Account from "../../components/Feature/Account/Account";


function Profil() {
    // Use State
    let [fullName, setFullName] = useState("");


    // Use Selector / Use Effect
    const token = useSelector((state) => state.token.value);
    useEffect(() => {
        const user = getLoginFetch(token);
        user.then(obj => {
            setFullName(`${obj.firstName} ${obj.lastName}`);
        });
    });

    // Redirection
    if(token === 0) return <Navigate to="/login" />

    return (
        <main className="bg-dark">
            <div className="header">
                <h1>Welcome back<br />{fullName}</h1>
                <button className="edit-button">Edit Name</button>
            </div>
            <h2 className="sr-only">Accounts</h2>
            <Account titre="Argent Bank Checking (x8349)" montant="$2,082.79" description="Available Balance" />
            <Account titre="Argent Bank Savings (x6712)" montant="$10,928.42" description="Available Balance" />
            <Account titre="Argent Bank Credit Card (x8349)" montant="$184.30" description="Current Balance" />
        </main>
    );
}

export default Profil;