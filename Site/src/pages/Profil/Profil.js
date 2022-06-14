import "./Profil.css";
import { useSelector } from "react-redux";
import Account from "../../components/Feature/Account/Account";


function Profil() {
    const token = useSelector((state) => state.token.value);
    console.log(token)

    return (
        <main className="bg-dark">
            <div className="header">
                <h1>Welcome back<br />Tony Jarvis!</h1>
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