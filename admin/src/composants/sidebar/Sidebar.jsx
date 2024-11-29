import { assets } from "../../assets/assets";
import "./Sidebar.css";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        <div className="sidebar-options">
          <NavLink to="/add" className="sidebar-option">
            <img src={assets.add_icon} alt="" />
            <p>Ajouter votre recette</p>
          </NavLink>

          <NavLink to="/list" className="sidebar-option">
            <img src={assets.order_icon} alt="" />
            <p>Voir votre liste</p>
          </NavLink>
        </div>       
      </div>
    </>
  );
};
export default Sidebar;
