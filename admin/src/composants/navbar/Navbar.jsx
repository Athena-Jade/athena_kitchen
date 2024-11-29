import "./Navbar.css";
import { useContext } from "react";
import { AdminContext } from "../../context/AdminContext";
import { useNavigate } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";
import WelcomeMessageAdmin from "../welcomeMessageAdmin/WelcomeMessageAdmin";

const Navbar = ({ setShowLogin }) => {
  const { token, setToken } = useContext(AdminContext);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  };

  return (
    <>
      <nav className="navbar">
        <h1>Athena's kitchen</h1>

        {!token ? (
          <button onClick={() => setShowLogin(true)}>Connexion</button>
        ) : (
          <div className="navbar-profile">
            <p>Bienvenu admin, sur votre espace de gestion</p>

            <ul className="nav-profile-liste">
              <li onClick={logout}>Déconnexion</li>
            </ul>
          </div>
        )}
      </nav>
      {token ? <Sidebar /> : ""}

      <span>{!token ? <WelcomeMessageAdmin /> : ""}</span>
    </>
  );
};

export default Navbar;
