import { useContext, useState } from "react";
import "./RecipeItem.css";
import { RecipeContext } from "../../context/RecipeContext";

const RecipeItem = ({
  id,
  name,
  image,
  description1,
  description2,
  description3,
  description4,
  description5,
  description6,
  description7,

  category,
  nombre,
  preparation,
  cuisson,
  // thermostat,
  ingredient1,
  ingredient2,
  ingredient3,
  ingredient4,
  ingredient5,
  ingredient6,
  ingredient7,
}) => {
  const { url } = useContext(RecipeContext);
  const [click, setClick] = useState(true);
  const handleClick = () => {
    setClick(!click);
  };
  return (
    <>
      <section className="recipe-item">
        <div className="recipe-item-container">
          <div className="recipe-item-gauche">
            <img src={url + "/images/" + image} alt="" />
            <span>{name}</span>
            <button onClick={handleClick}>Voir la recette</button>
          </div>

          <div
            className={click ? "recipe-item-droite" : ""}
            style={{            
              padding: "1rem",
              marginTop: "0rem",                        
            }}
          >
            <h4 style={{ textAlign: "center" }}>
              Vous avez sélectionné <br />
              <b style={{ color: "rgb(172, 47, 69)", padding: "1.25rem" }}>              
                {name}
              </b>
            </h4>

            <div className="infos">
              <p>
                Nombre personne: <b> {nombre}</b>
              </p>
              <p>Temps de préparation: {preparation} minutes</p>
              <p>Temps de cuisson: {cuisson} minutes</p>           
            </div>

            <ul className="liste-ingredients">
              <h4>Ingrédients</h4>
              <li>{ingredient1}</li>
               <li>{ingredient2}</li>
              <li>{ingredient3}</li>
              <li>{ingredient4}</li>
              <li>{ingredient5}</li>
              <li>{ingredient6}</li>
              <li>{ingredient7}</li> 
            </ul>

            <ul className="liste-description">
              <li>{description1}</li><br />
               <li>{description2}</li>
              <br />
              <li>{description3}</li><br />
              <li>{description4}</li>
              <br />
              <li>{description5}</li>
              <br />
              <li>{description6}</li>
              <br />
              <li>{description7}</li> 
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default RecipeItem;
