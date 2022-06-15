import "./404.css";
import { NavLink } from "react-router-dom";


function Erreur404() {
    return(
        <main className="bg-dark">
            <section className="erreur-404">
                <h1>Error 404</h1>
                <NavLink to="/" className="link-btn-404">
                    <button className="btn-404">Back to the homepage</button>
                </NavLink>
            </section>
        </main>
    );
}

export default Erreur404;