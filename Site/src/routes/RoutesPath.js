import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "../layouts/Layout";
import Accueil from "../pages/Accueil/Accueil";
import Login from "../pages/Login/Login";
import Profil from "../pages/Profil/Profil";
import Logout from "../pages/Logout/Logout";
import Erreur404 from "../pages/404/404";


function RoutesPath() {
    return(
        <HashRouter>
            <Layout>
                <Routes>
                    <Route element={<Navigate replace to="/home" />} path="/" />
                    <Route path="/home" element={<Accueil />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/profil" element={<Profil />} />
                    <Route path="/logout" element={<Logout />} />
                    <Route path="*" element={<Erreur404 />} />
                </Routes>
            </Layout>
        </HashRouter>
    );
}

export default RoutesPath;