//import { Link } from "react-router-dom";
import { RecipeContext } from "../../context/RecipeContext";
import "./ExploreMenu.css";
import { useContext } from "react";

//c'est exploreMenu
const ExploreMenu = ({ category, setCategory }) => {
  const { menu_list } = useContext(RecipeContext);
  return (
    <section className="container-explore-menu">
      <h1>Faites votre sélection</h1>
      <h2>
        Vous avez sélectionné recettes :
        <span style={{ color: "rgb(224, 6, 43)" }}> {category}</span>{" "}
      </h2>
      <div className="explore-menu">
        {menu_list.map((item, index) => {
          return (
            <div
              className="explore-menu-list-item"
              key={index}
              onClick={() =>
                setCategory((prev) =>
                  prev === item.menu_name ? "All" : item.menu_name
                )
              }
            >
              <img 
                className={category === item.menu_name ? "active" : ""}
                src={item.image}
                alt="menu"
              />
              <h3>Recettes {item.menu_name}</h3>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ExploreMenu;
